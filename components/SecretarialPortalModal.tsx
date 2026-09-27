import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Trash2, 
  RefreshCw, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  User, 
  FileSpreadsheet, 
  Inbox,
  Lock
} from 'lucide-react';
import { EMAIL, MOBILE_PHONE, LANDLINE_PHONE, SECRETARY_NAME } from '../constants';

export interface ConsultationRecord {
  id: string;
  timestamp: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone: string;
  hospital: string;
  treatmentArea?: string;
  fundingType?: string;
  notes?: string;
  message?: string;
  source?: string;
}

interface SecretarialPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretarialPortalModal: React.FC<SecretarialPortalModalProps> = ({ isOpen, onClose }) => {
  const [records, setRecords] = useState<ConsultationRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const loadRecords = async () => {
    setIsLoading(true);
    let allRecords: ConsultationRecord[] = [];

    // 1. Fetch from server API
    try {
      const res = await fetch('/api/consultations');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          allRecords = data;
        }
      }
    } catch {
      // server fetch error
    }

    // 2. Fetch from local storage fallback and merge unique IDs
    try {
      const stored = localStorage.getItem('shankar_patient_consultations');
      if (stored) {
        const localData = JSON.parse(stored);
        if (Array.isArray(localData)) {
          const existingIds = new Set(allRecords.map(r => r.id));
          localData.forEach((item: ConsultationRecord) => {
            if (!existingIds.has(item.id)) {
              allRecords.push(item);
            }
          });
        }
      }
    } catch {
      // ignore
    }

    // Sort newest first
    allRecords.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    setRecords(allRecords);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      loadRecords();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredRecords = records.filter(r => {
    const query = searchTerm.toLowerCase();
    const fullName = `${r.firstName || ''} ${r.lastName || ''} ${r.name || ''}`.toLowerCase();
    const email = (r.email || '').toLowerCase();
    const phone = (r.phone || '').toLowerCase();
    const hospital = (r.hospital || '').toLowerCase();
    return fullName.includes(query) || email.includes(query) || phone.includes(query) || hospital.includes(query);
  });

  const exportCsv = () => {
    if (records.length === 0) return;
    const headers = ["ID", "Date/Time", "Patient Name", "Email", "Phone", "Hospital", "Joint / Condition", "Funding Type", "Notes", "Source"];
    const rows = records.map(r => [
      `"${r.id}"`,
      `"${new Date(r.timestamp).toLocaleString('en-GB')}"`,
      `"${(r.firstName ? `${r.firstName} ${r.lastName || ''}` : r.name || '').trim()}"`,
      `"${r.email || ''}"`,
      `"${r.phone || ''}"`,
      `"${r.hospital || ''}"`,
      `"${r.treatmentArea || ''}"`,
      `"${r.fundingType || ''}"`,
      `"${(r.notes || r.message || '').replace(/"/g, '""')}"`,
      `"${r.source || 'Website'}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `shankar_consultation_enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear the locally cached consultation inquiries?")) {
      localStorage.removeItem('shankar_patient_consultations');
      setRecords([]);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#1B4965] to-[#13364B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Inbox size={22} className="text-[#E8A24C]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">Secretarial Practice Inquiries Log</h3>
                <span className="text-[10px] uppercase font-bold bg-[#E8A24C] text-slate-950 px-2 py-0.5 rounded">
                  {records.length} Total
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Patient consultation requests and messages submitted via the website
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadRecords}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Refresh inquiries list"
            >
              <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Action & Filter Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <input
            type="text"
            placeholder="Search by patient name, phone, email, or hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-80 px-3.5 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#1B4965]"
          />

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={exportCsv}
              disabled={records.length === 0}
              className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <FileSpreadsheet size={14} />
              <span>Export CSV</span>
            </button>
            <button
              onClick={clearAll}
              disabled={records.length === 0}
              className="text-xs font-bold text-slate-600 hover:text-red-600 bg-white border border-slate-300 hover:border-red-300 px-3 py-2 rounded-lg flex items-center gap-1 transition-colors"
              title="Clear locally cached records"
            >
              <Trash2 size={13} />
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {records.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <Inbox size={40} className="mx-auto text-slate-400 mb-2" />
              <p className="font-bold text-slate-700">No consultation requests recorded yet</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Any patient filling out "Book Consultation" or the "Contact Remya Rexlin" form will appear here instantly.
              </p>
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              No inquiries match "{searchTerm}".
            </div>
          ) : (
            filteredRecords.map((item) => {
              const fullName = (item.firstName ? `${item.firstName} ${item.lastName || ''}` : item.name || 'Patient').trim();
              const dateStr = new Date(item.timestamp).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div key={item.id} className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-[#1B4965] shadow-xs space-y-3 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold text-xs">
                        <User size={15} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{fullName}</h4>
                        <span className="text-[11px] text-slate-400 font-mono">{dateStr}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {item.hospital}
                      </span>
                      {item.treatmentArea && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#EAF1F6] text-[#1B4965]">
                          {item.treatmentArea}
                        </span>
                      )}
                      {item.fundingType && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                          {item.fundingType}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Phone size={13} className="text-[#1B4965] shrink-0" />
                      <a href={`tel:${item.phone}`} className="font-bold text-[#1B4965] hover:underline">
                        {item.phone || 'No phone provided'}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Mail size={13} className="text-[#1B4965] shrink-0" />
                      <a href={`mailto:${item.email}`} className="font-medium text-slate-800 hover:text-[#1B4965] hover:underline break-all">
                        {item.email || 'No email provided'}
                      </a>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  {(item.notes || item.message) && (
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 block mb-0.5">Clinical Notes / Message:</span>
                      <p className="whitespace-pre-line leading-relaxed">{item.notes || item.message}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-[10px] text-slate-400">
                      Source: {item.source || 'Website Booking'}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${item.phone}`}
                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-md border border-emerald-200 flex items-center gap-1 transition-colors"
                      >
                        <Phone size={11} /> Call Patient
                      </a>
                      <a
                        href={`mailto:${item.email}?subject=Consultation Appointment with Mr Shivakumar Shankar&body=Dear ${fullName},%0D%0A%0D%0AThank you for contacting Mr Shivakumar Shankar's practice regarding your consultation at ${item.hospital}.%0D%0A%0D%0AKind regards,%0D%0A${SECRETARY_NAME}%0D%0AMedical Secretary to Mr Shivakumar Shankar%0D%0A${MOBILE_PHONE}`}
                        className="bg-[#1B4965] hover:bg-[#13364B] text-white font-bold px-3 py-1 rounded-md flex items-center gap-1 transition-colors"
                      >
                        <Mail size={11} /> Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>Inquiries are securely captured into <code>consultations.json</code> on the server and cached in browser storage.</span>
          <span>Secretary Contact: <strong>{SECRETARY_NAME}</strong> ({EMAIL})</span>
        </div>

      </div>
    </div>
  );
};
