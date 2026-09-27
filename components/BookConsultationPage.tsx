import React, { useState } from 'react';
import { 
  Calendar, Phone, Mail, Clock, ShieldCheck, 
  CheckCircle2, AlertCircle, ExternalLink, UserCheck, HelpCircle
} from 'lucide-react';
import { 
  SURGEON_NAME, 
  SURGEON_ROLE, 
  EMAIL, 
  MOBILE_PHONE, 
  LANDLINE_PHONE, 
  SECRETARY_NAME, 
  SPIRE_HARTSWOOD_BOOKING_URL, 
  NUFFIELD_BRENTWOOD_BOOKING_URL 
} from '../constants';

interface BookConsultationPageProps {
  onNavigate: (href: string) => void;
}

export const BookConsultationPage: React.FC<BookConsultationPageProps> = ({
  onNavigate
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospital: 'Spire Hartswood Hospital',
    joint: 'Hip Replacement',
    funding: 'Private Medical Insurance',
    notes: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'server-confirmed' | 'prepared'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setErrorMessage(null);

    const submissionPayload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'Book Consultation Page'
    };

    // Store in localStorage for the user's reference
    try {
      const stored = localStorage.getItem('shankar_patient_consultations');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift({ id: `booking-${Date.now()}`, ...submissionPayload });
      localStorage.setItem('shankar_patient_consultations', JSON.stringify(list));
    } catch {
      // local storage error ignored
    }

    // Try posting to backend endpoint
    try {
      const res = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload)
      });

      if (res.ok) {
        setSubmissionStatus('server-confirmed');
        return;
      } else {
        // Backend returned non-200
        setSubmissionStatus('prepared');
      }
    } catch {
      // Network error or static deployment without backend
      setSubmissionStatus('prepared');
    }
  };

  const emailSubject = encodeURIComponent(`[Consultation Booking] ${formData.firstName} ${formData.lastName} - ${formData.hospital}`);
  const emailBody = encodeURIComponent(`Dear Mr Shankar and Remya Rexlin,

I would like to request an outpatient consultation appointment.

PATIENT DETAILS:
• Full Name: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Preferred Hospital: ${formData.hospital}
• Joint / Procedure: ${formData.joint}
• Funding: ${formData.funding}

ADDITIONAL CLINICAL NOTES:
${formData.notes || 'None provided.'}

Kind regards,
${formData.firstName} ${formData.lastName}`);

  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <span className="text-[#1B4965] font-bold">Book Consultation</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Appointments &amp; Enquiries
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Book a Private Consultation
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Arrange an outpatient consultation with Mr Shivakumar Shankar at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital in Brentwood, Essex.
          </p>
        </div>
      </section>

      {/* 2. MAIN BOOKING SECTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                
                {submissionStatus === 'server-confirmed' ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900">
                      Enquiry Successfully Received
                    </h2>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.firstName}. Your consultation enquiry for <strong>{formData.hospital}</strong> has been logged. Secretary Remya Rexlin will contact you on <strong>{formData.phone || formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmissionStatus('idle')}
                      className="text-xs text-[#1B4965] font-bold hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : submissionStatus === 'prepared' ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
                      <Mail size={30} />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900">
                      Your Details Are Prepared
                    </h2>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      To ensure your request is delivered directly to our medical secretary without electronic transmission delay, please click below to send your pre-filled email, or call our office directly:
                    </p>
                    <div className="pt-2 space-y-3 max-w-sm mx-auto">
                      <a
                        href={`mailto:${EMAIL}?subject=${emailSubject}&body=${emailBody}`}
                        className="w-full bg-[#1B4965] hover:bg-[#13364B] text-white py-3 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                      >
                        <Mail size={15} />
                        <span>Send Pre-Filled Email to Remya Rexlin</span>
                      </a>
                      <a
                        href={`tel:${MOBILE_PHONE}`}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone size={15} className="text-[#1B4965]" />
                        <span>Call Secretary on {MOBILE_PHONE}</span>
                      </a>
                    </div>
                    <button
                      onClick={() => setSubmissionStatus('idle')}
                      className="text-xs text-slate-500 hover:text-slate-800 underline pt-2"
                    >
                      Edit enquiry details
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h2 className="text-xl font-black text-slate-900">
                        Consultation Request Form
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fill in your details below to arrange an appointment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. John"
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Smith"
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          Telephone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="07xxx xxxxxx"
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          Preferred Hospital
                        </label>
                        <select
                          value={formData.hospital}
                          onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                        >
                          <option value="Spire Hartswood Hospital">Spire Hartswood Hospital (Brentwood)</option>
                          <option value="Nuffield Health Brentwood Hospital">Nuffield Health Brentwood Hospital (Brentwood)</option>
                          <option value="Either Hospital / First Available">Either / First Available Slot</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          Joint / Procedure
                        </label>
                        <select
                          value={formData.joint}
                          onChange={(e) => setFormData({ ...formData, joint: e.target.value })}
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                        >
                          <option value="Hip Replacement">Hip Replacement Surgery</option>
                          <option value="Robotic Hip Replacement">Robotic Hip Replacement</option>
                          <option value="Minimally Invasive Hip">Minimally Invasive Hip (Rottinger/Anterior)</option>
                          <option value="Knee Replacement">Total Knee Replacement</option>
                          <option value="Robotic Knee Replacement">Robotic Knee Replacement</option>
                          <option value="Partial Knee Replacement">Partial Knee Replacement</option>
                          <option value="Knee Arthroscopy">Knee Arthroscopy &amp; Meniscal Repair</option>
                          <option value="General Consultation">General Joint Assessment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Funding Method
                      </label>
                      <select
                        value={formData.funding}
                        onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                      >
                        <option value="Private Medical Insurance">Private Medical Insurance (Bupa, AXA, Aviva, Vitality, etc.)</option>
                        <option value="Self-Funding (Self-Pay)">Self-Funding (Fixed-Price Outpatient / Surgical Packages)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Brief Symptoms / Clinical Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Right hip pain for 12 months, limiting walking..."
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#1B4965]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submissionStatus === 'submitting'}
                      className="w-full bg-[#1B4965] hover:bg-[#13364B] text-white py-3.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                    >
                      <Calendar size={16} />
                      <span>{submissionStatus === 'submitting' ? 'Preparing Details...' : 'Submit Consultation Request'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Live Diary Portals */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <span className="text-[10px] uppercase font-extrabold text-[#E8A24C] tracking-wider block">
                  Direct Live Hospital Diaries
                </span>
                <h3 className="text-base font-black text-slate-900">
                  Prefer Real-Time Online Booking?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Both private hospital partners offer secure online portals where you can choose your exact outpatient timeslot directly in Mr Shankar's hospital schedule:
                </p>
                <div className="space-y-2.5 pt-1">
                  <a
                    href={SPIRE_HARTSWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl flex items-center justify-between text-xs font-bold text-[#1B4965] transition-colors"
                  >
                    <span>Spire Hartswood Live Timeslots</span>
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-between text-xs font-bold text-emerald-800 transition-colors"
                  >
                    <span>Nuffield Brentwood Live Timeslots</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Transparent Fees Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Self-Funding Consultation Fees
                </h4>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <div className="flex justify-between font-semibold">
                    <span>Initial Full Consultation:</span>
                    <span className="text-[#1B4965] font-bold">£250</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Follow-Up Review Consultation:</span>
                    <span className="text-[#1B4965] font-bold">£200</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Fee-assured for all major UK private medical insurance companies (Bupa, AXA Health, Aviva, Vitality, WPA, Cigna).
                </p>
              </div>

              {/* Secretary Contact Box */}
              <div className="bg-[#EAF1F6] p-6 rounded-2xl border border-[#C5DCE8] space-y-3 text-xs text-slate-800">
                <span className="text-[10px] font-extrabold uppercase text-[#1B4965] tracking-wider block">
                  Direct Secretary Contact
                </span>
                <p className="text-sm font-black text-slate-900">{SECRETARY_NAME}</p>
                <p className="text-slate-600">Medical Secretary to Mr Shivakumar Shankar</p>
                <div className="pt-2 space-y-1.5">
                  <p><strong>Mobile:</strong> <a href={`tel:${MOBILE_PHONE}`} className="text-[#1B4965] font-bold hover:underline">{MOBILE_PHONE}</a></p>
                  <p><strong>Landline:</strong> <a href={`tel:${LANDLINE_PHONE}`} className="text-[#1B4965] hover:underline">{LANDLINE_PHONE}</a></p>
                  <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-[#1B4965] hover:underline break-all">{EMAIL}</a></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
