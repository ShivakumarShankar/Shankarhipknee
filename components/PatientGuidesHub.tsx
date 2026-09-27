import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  AlertTriangle, 
  Search, 
  Eye, 
  CheckCircle, 
  ShieldAlert, 
  X, 
  PhoneCall, 
  Clock, 
  Sparkles,
  ChevronRight,
  Building
} from 'lucide-react';
import { 
  PROCEDURE_RISK_DATA, 
  COMPLICATION_LEAFLETS, 
  ProcedureRiskInfo, 
  ComplicationGuide 
} from '../patientInfoData';
import { PROTOCOLS, SURGEON_NAME, SURGEON_ROLE } from '../constants';
import { Protocol } from '../types';
import { 
  generateProcedureRiskPdf, 
  generateComplicationLeafletPdf, 
  generateProtocolPdf 
} from '../pdfGenerator';

type TabType = 'all' | 'procedures' | 'complications' | 'protocols';

interface PatientGuidesHubProps {
  onOpenBooking: () => void;
}

export const PatientGuidesHub: React.FC<PatientGuidesHubProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingProcedure, setViewingProcedure] = useState<ProcedureRiskInfo | null>(null);
  const [viewingComplication, setViewingComplication] = useState<ComplicationGuide | null>(null);
  const [viewingProtocol, setViewingProtocol] = useState<Protocol | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownloadProcedure = (item: ProcedureRiskInfo) => {
    setDownloadingId(item.id);
    try {
      generateProcedureRiskPdf(item);
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setDownloadingId(null), 800);
    }
  };

  const handleDownloadComplication = (item: ComplicationGuide) => {
    setDownloadingId(item.id);
    try {
      generateComplicationLeafletPdf(item);
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setDownloadingId(null), 800);
    }
  };

  const handleDownloadProtocol = (item: Protocol) => {
    setDownloadingId(item.title);
    try {
      generateProtocolPdf(item);
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setDownloadingId(null), 800);
    }
  };

  // Filter items
  const q = searchQuery.toLowerCase().trim();

  const filteredProcedures = PROCEDURE_RISK_DATA.filter(p => 
    !q || p.procedureTitle.toLowerCase().includes(q) || 
    p.shortSummary.toLowerCase().includes(q) || 
    p.surgicalRisks.some(r => r.title.toLowerCase().includes(r.title) || r.description.toLowerCase().includes(q))
  );

  const filteredComplications = COMPLICATION_LEAFLETS.filter(c => 
    !q || c.title.toLowerCase().includes(q) || 
    c.whatIsThisProblem.toLowerCase().includes(q) || 
    c.category.toLowerCase().includes(q) ||
    c.symptomsToLookFor.some(s => s.toLowerCase().includes(q))
  );

  const filteredProtocols = PROTOCOLS.filter(p => 
    !q || p.title.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q) ||
    p.keyMilestones.some(m => m.toLowerCase().includes(q))
  );

  const totalCount = 
    (activeTab === 'all' || activeTab === 'procedures' ? filteredProcedures.length : 0) +
    (activeTab === 'all' || activeTab === 'complications' ? filteredComplications.length : 0) +
    (activeTab === 'all' || activeTab === 'protocols' ? filteredProtocols.length : 0);

  return (
    <section id="patient-guides" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-[#1B4965] shadow-2xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E8A24C]"></span>
            <span>Clinical Governance & Transparent Patient Consent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Surgical Risks & Patient Information Guides
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Every procedure performed by {SURGEON_NAME} ({SURGEON_ROLE}) is grounded in thorough discussion of non-operative options, surgical indications, and explicit risk disclosure. All guides are available to read online or download as branded clinical PDFs.
          </p>
        </div>

        {/* Self-Funding Patient Fee Transparency Banner */}
        <div className="mb-10 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] flex items-center justify-center flex-shrink-0">
              <Building size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-extrabold text-slate-900 text-base">Self-Funding Patient Information & Consultation Fees</h3>
                <span className="text-[10px] uppercase font-bold bg-[#EAF1F6] text-[#1B4965] px-2 py-0.5 rounded">Transparent Pricing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                Patients who do not have private medical insurance can book directly without a GP referral. Consultations are fixed at capped rates, and hospital surgical treatments are offered under fixed-price packages.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex-1 md:flex-initial bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-center min-w-[120px]">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">First Appointment</span>
              <span className="text-lg font-black text-slate-900">£250</span>
              <span className="text-[10px] text-slate-500 block">Initial consultation</span>
            </div>
            <div className="flex-1 md:flex-initial bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2.5 text-center min-w-[120px]">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Follow-Up Visit</span>
              <span className="text-lg font-black text-slate-900">£200</span>
              <span className="text-[10px] text-slate-500 block">Review & progress</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs flex-shrink-0 hidden sm:block"
            >
              Book Visit
            </button>
          </div>
        </div>

        {/* Search and Tabs Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tab Filters */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: `All Guides (${PROCEDURE_RISK_DATA.length + COMPLICATION_LEAFLETS.length + PROTOCOLS.length})` },
              { id: 'procedures', label: `Procedures & Risks (${PROCEDURE_RISK_DATA.length})` },
              { id: 'complications', label: `Complication Leaflets (${COMPLICATION_LEAFLETS.length})` },
              { id: 'protocols', label: `Rehab Protocols (${PROTOCOLS.length})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1B4965] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search risks, symptoms, procedures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-[#1B4965] focus:ring-1 focus:ring-[#1B4965] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Section 1: Procedure & Surgical Risks Guides */}
        {(activeTab === 'all' || activeTab === 'procedures') && filteredProcedures.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1B4965]"></span>
                <h3 className="text-xl font-bold text-slate-900">
                  Surgical Procedures, Non-Operative Options & Risks
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-semibold">
                Official Clinical Consent Documents
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProcedures.map(proc => (
                <div 
                  key={proc.id} 
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#1B4965] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#EAF1F6] text-[#1B4965] px-2.5 py-0.5 rounded border border-slate-200">
                        {proc.joint} Surgery
                      </span>
                      <span className="text-[10px] font-bold text-[#E8A24C] bg-[#FFF7ED] px-2 py-0.5 rounded border border-[#FDBA74]">
                        Full Risk Disclosure
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#1B4965] transition-colors leading-snug">
                      {proc.procedureTitle}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {proc.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {proc.shortSummary}
                    </p>

                    {/* Key Risk Badges */}
                    <div className="space-y-1.5 mb-5 bg-[#F8FAFC] p-3 rounded-lg border border-slate-100">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Risks Explained:</p>
                      <div className="flex flex-wrap gap-1">
                        {proc.surgicalRisks.slice(0, 4).map((r, ri) => (
                          <span key={ri} className="text-[10px] bg-white border border-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                            {r.title.split('(')[0].trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setViewingProcedure(proc)}
                      className="text-xs font-bold text-slate-700 hover:text-[#1B4965] flex items-center gap-1 transition-colors"
                    >
                      <Eye size={14} /> Read Guide
                    </button>
                    <button
                      onClick={() => handleDownloadProcedure(proc)}
                      disabled={downloadingId === proc.id}
                      className="bg-[#1B4965] hover:bg-[#13364B] disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Download size={13} />
                      {downloadingId === proc.id ? 'Generating...' : 'Download PDF'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Post-Operative Complications Leaflets */}
        {(activeTab === 'all' || activeTab === 'complications') && filteredComplications.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8A24C]"></span>
                <h3 className="text-xl font-bold text-slate-900">
                  Specific Post-Operative Complication Leaflets
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-semibold">
                Symptoms, Clinical Assessment & Management
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComplications.map(guide => (
                <div 
                  key={guide.id}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#1B4965] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                        {guide.joint}
                      </span>
                      <span className="text-[10px] font-bold text-[#B91C1C] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                        {guide.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#1B4965] transition-colors leading-snug">
                      {guide.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {guide.whatIsThisProblem}
                    </p>

                    <div className="bg-[#FEF2F2] border border-red-100 rounded-lg p-3 mb-5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#B91C1C] mb-1 flex items-center gap-1">
                        <AlertTriangle size={12} /> Symptoms to Look For:
                      </p>
                      <ul className="space-y-0.5 text-[11px] text-slate-700">
                        {guide.symptomsToLookFor.slice(0, 2).map((s, si) => (
                          <li key={si} className="truncate">• {s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setViewingComplication(guide)}
                      className="text-xs font-bold text-slate-700 hover:text-[#1B4965] flex items-center gap-1 transition-colors"
                    >
                      <Eye size={14} /> Full Leaflet
                    </button>
                    <button
                      onClick={() => handleDownloadComplication(guide)}
                      disabled={downloadingId === guide.id}
                      className="bg-[#1B4965] hover:bg-[#13364B] disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Download size={13} />
                      {downloadingId === guide.id ? 'Generating...' : 'Download PDF'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Rehabilitation Protocols */}
        {(activeTab === 'all' || activeTab === 'protocols') && filteredProtocols.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <h3 className="text-xl font-bold text-slate-900">
                  Enhanced Recovery & Rehabilitation Protocols
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-semibold">
                Milestone-Based Recovery Timelines
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProtocols.map((proto, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#1B4965] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#EAF1F6] text-[#1B4965] px-2 py-0.5 rounded border border-slate-200">
                        {proto.joint} Rehab
                      </span>
                      <span className="text-[10px] font-semibold text-[#C26B08] bg-[#FFF7ED] px-2 py-0.5 rounded border border-[#FDBA74]">
                        {proto.timeline}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#1B4965] transition-colors leading-snug">
                      {proto.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {proto.description}
                    </p>

                    <div className="space-y-1 mb-5">
                      {proto.keyMilestones.slice(0, 2).map((ms, midx) => (
                        <div key={midx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                          <span className="text-[#1B4965] font-bold">•</span>
                          <span className="line-clamp-1">{ms}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setViewingProtocol(proto)}
                      className="text-xs font-bold text-slate-700 hover:text-[#1B4965] flex items-center gap-1 transition-colors"
                    >
                      <Eye size={14} /> View
                    </button>
                    <button
                      onClick={() => handleDownloadProtocol(proto)}
                      disabled={downloadingId === proto.title}
                      className="bg-[#1B4965] hover:bg-[#13364B] disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Download size={13} />
                      {downloadingId === proto.title ? '...' : 'PDF'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {totalCount === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Search size={32} className="mx-auto text-slate-300 mb-3" />
            <p className="text-base font-bold text-slate-700">No guides matching "{searchQuery}"</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search or switching filter categories.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-4 px-4 py-2 bg-[#1B4965] text-white rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Clinical Disclaimer Banner */}
        <div className="mt-12 bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 shadow-2xs">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="London Essex Hip and Knee" className="h-8 w-auto object-contain flex-shrink-0" />
            <div>
              <p className="font-extrabold text-slate-900">{SURGEON_NAME} &bull; {SURGEON_ROLE}</p>
              <p className="text-slate-500">Official patient education and clinical consent documentation.</p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
          >
            Book Surgical Consultation
          </button>
        </div>

      </div>

      {/* ======================================================== */}
      {/* MODAL 1: FULL PROCEDURE & SURGICAL RISKS GUIDE VIEWER */}
      {/* ======================================================== */}
      {viewingProcedure && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setViewingProcedure(null)}
          ></div>

          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-100">
            <button 
              onClick={() => setViewingProcedure(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Branded Clinical Header */}
            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
              <img src="/logo.png" alt="London Essex Hip and Knee" className="h-11 w-auto object-contain" />
              <div className="border-l border-slate-200 pl-3">
                <p className="text-xs font-extrabold text-slate-900">{SURGEON_NAME}</p>
                <p className="text-[11px] text-[#1B4965] font-bold">{SURGEON_ROLE}</p>
                <p className="text-[10px] text-slate-500">Spire Hartswood &bull; Nuffield Brentwood &bull; Queen's Hospital</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase bg-[#EAF1F6] text-[#1B4965] px-2.5 py-0.5 rounded mb-2">
              <FileText size={14} /> Clinical Procedure Guide & Risk Disclosure
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              {viewingProcedure.procedureTitle}
            </h3>
            <p className="text-xs font-bold text-[#E8A24C] uppercase tracking-wider mb-5">
              {viewingProcedure.subtitle}
            </p>

            {/* Emergency Alert Box */}
            <div className="p-4 bg-[#FEF2F2] border border-red-200 rounded-xl mb-6">
              <div className="flex items-center gap-2 text-red-800 font-bold text-xs uppercase mb-1">
                <AlertTriangle size={15} /> Important Clinical Notice
              </div>
              <p className="text-xs text-red-950 leading-relaxed">
                If you experience severe breathlessness, chest pain, collapse, severe bleeding, or a major medical emergency, dial 999 or attend A&E immediately. For fever, spreading redness, or new calf swelling, contact Mr Shankar's clinical team.
              </p>
            </div>

            {/* 1. Non-operative options */}
            <div className="mb-6 bg-[#F8FAFC] p-5 rounded-xl border border-slate-200">
              <h4 className="font-bold text-sm text-[#1B4965] uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle size={16} /> 1. Non-Operative Treatment Options Discussed
              </h4>
              <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                <p><strong>Analgesia & Medical Therapy:</strong> {viewingProcedure.nonOperativeOptions.analgesia}</p>
                <p><strong>Activity Modification:</strong> {viewingProcedure.nonOperativeOptions.activityModification}</p>
                
                <div className="pt-2">
                  <p className="font-bold text-slate-800 mb-1">Low-Impact Exercises Discussed:</p>
                  <ul className="space-y-1 pl-3">
                    {viewingProcedure.nonOperativeOptions.exercises.map((ex, i) => (
                      <li key={i} className="list-disc">{ex}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="font-bold text-slate-800 mb-1">Supplements Discussed (Useful in Some Patients):</p>
                  <ul className="space-y-1 pl-3">
                    {viewingProcedure.nonOperativeOptions.supplements.map((sup, i) => (
                      <li key={i} className="list-disc">{sup}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Operative Surgical Plan */}
            <div className="mb-6 bg-white p-5 rounded-xl border border-slate-200">
              <h4 className="font-bold text-sm text-[#1B4965] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles size={16} /> 2. Operative Plan & Modern Approaches
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                {viewingProcedure.operativePlan.summary}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {viewingProcedure.operativePlan.approachesAndTechnology.map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#1B4965] font-bold">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Surgical Risks and Complications */}
            <div className="mb-6">
              <h4 className="font-bold text-sm text-[#1B4965] uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldAlert size={16} /> 3. Surgical Risks & Complications Explained
              </h4>
              <div className="space-y-3">
                {viewingProcedure.surgicalRisks.map((risk, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="font-bold text-xs text-slate-900">
                        {idx + 1}. {risk.title}
                      </p>
                      {risk.incidence && (
                        <span className="text-[10px] font-semibold text-[#E8A24C] bg-[#FFF7ED] px-2 py-0.5 rounded border border-[#FDBA74] whitespace-nowrap">
                          {risk.incidence}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      {risk.description}
                    </p>

                    {risk.warningSigns && (
                      <div className="mb-2 pl-3 py-1.5 bg-red-50/50 rounded border-l-2 border-red-400 text-[11px] text-red-950">
                        <span className="font-bold">Symptoms to report: </span>
                        {risk.warningSigns.join('; ')}
                      </div>
                    )}

                    <p className="text-[11px] text-slate-500">
                      <strong>Assessment & Management:</strong> {risk.managementOrAssessment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Red Flag Checklist */}
            <div className="p-4 bg-[#FEF2F2] rounded-xl border border-red-200 mb-6">
              <h4 className="font-bold text-xs uppercase tracking-wider text-red-800 mb-2">
                Emergency 999 Symptoms:
              </h4>
              <ul className="space-y-1 text-xs text-red-900">
                {viewingProcedure.postoperativeSymptomsToReport.emergency999.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Action Bar */}
            <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Document: <span className="font-mono">{viewingProcedure.filename}</span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleDownloadProcedure(viewingProcedure)}
                  className="w-full sm:w-auto bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Download size={14} /> Download Official PDF Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: COMPLICATION PATIENT INFORMATION LEAFLET VIEWER */}
      {/* ======================================================== */}
      {viewingComplication && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setViewingComplication(null)}
          ></div>

          <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-100">
            <button 
              onClick={() => setViewingComplication(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Practice Brand Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <img src="/logo.png" alt="London Essex Hip and Knee" className="h-10 w-auto object-contain" />
              <div className="border-l border-slate-200 pl-3">
                <p className="text-xs font-extrabold text-slate-900">{SURGEON_NAME}</p>
                <p className="text-[11px] text-[#1B4965] font-bold">{SURGEON_ROLE}</p>
                <p className="text-[10px] text-slate-500">London & Essex Hip & Knee Surgery</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded mb-2">
              <AlertTriangle size={14} /> Patient Information Guide
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {viewingComplication.title}
            </h3>
            <p className="text-xs text-slate-500 font-semibold mb-4">
              Category: {viewingComplication.category} &bull; Joint: {viewingComplication.joint}
            </p>

            <div className="p-3.5 bg-[#FEF2F2] border border-red-200 rounded-xl mb-5 text-xs text-red-950 leading-relaxed">
              <strong>Important Notice: </strong>{viewingComplication.emergencyNotice}
            </div>

            <div className="space-y-4 mb-6 text-xs text-slate-700 leading-relaxed">
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-1">What is this problem?</h4>
                <p>{viewingComplication.whatIsThisProblem}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-2">What symptoms should I look for?</h4>
                <ul className="space-y-1">
                  {viewingComplication.symptomsToLookFor.map((sym, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B91C1C] font-bold">•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-2">How is it assessed?</h4>
                <ul className="space-y-1">
                  {viewingComplication.howIsItAssessed.map((ass, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1B4965] font-bold">•</span>
                      <span>{ass}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-2">How is it treated?</h4>
                <ul className="space-y-1">
                  {viewingComplication.howIsItTreated.map((tr, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1B4965] font-bold">•</span>
                      <span>{tr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {viewingComplication.faqs && viewingComplication.faqs.length > 0 && (
                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-sm text-slate-900 mb-2">Frequently Asked Questions</h4>
                  <div className="space-y-3">
                    {viewingComplication.faqs.map((faq, i) => (
                      <div key={i}>
                        <p className="font-bold text-slate-900">Q: {faq.question}</p>
                        <p className="text-slate-600 mt-0.5">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                {viewingComplication.filename}
              </span>
              <button
                onClick={() => handleDownloadComplication(viewingComplication)}
                className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors shadow-md"
              >
                <Download size={14} /> Download Official Leaflet (PDF)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: PROTOCOL GUIDE VIEWER */}
      {/* ======================================================== */}
      {viewingProtocol && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setViewingProtocol(null)}
          ></div>

          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-100">
            <button 
              onClick={() => setViewingProtocol(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Practice Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <img src="/logo.png" alt="London Essex Hip and Knee" className="h-10 w-auto object-contain" />
              <div className="border-l border-slate-200 pl-3">
                <p className="text-xs font-extrabold text-slate-900">{SURGEON_NAME}</p>
                <p className="text-[11px] text-[#1B4965] font-bold">{SURGEON_ROLE}</p>
                <p className="text-[10px] text-slate-500">London Essex Hip & Knee Surgery</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#1B4965] uppercase mb-2">
              <FileText size={16} /> Rehabilitation Protocol
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {viewingProtocol.title}
            </h3>
            <p className="text-xs font-semibold text-slate-500 mb-4">
              Timeline: {viewingProtocol.timeline}
            </p>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {viewingProtocol.description}
            </p>

            <div className="space-y-3 mb-6 bg-[#F8FAFC] p-5 rounded-xl border border-slate-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Key Recovery Milestones:</h4>
              <ul className="space-y-2">
                {viewingProtocol.keyMilestones.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold flex-shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="mt-0.5">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                {viewingProtocol.filename}
              </span>
              <button
                onClick={() => handleDownloadProtocol(viewingProtocol)}
                className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors shadow-md"
              >
                <Download size={14} /> Download Protocol PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
