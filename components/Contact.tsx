import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  UserCheck, 
  ShieldCheck, 
  Calendar, 
  Copy, 
  Check, 
  PhoneCall,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { 
  SURGEON_NAME, 
  SURGEON_ROLE,
  EMAIL, 
  MOBILE_PHONE, 
  LANDLINE_PHONE, 
  SECRETARY_NAME, 
  SECRETARY_ROLE,
  BUPA_PROFILE_URL,
  LINKEDIN_URL,
  X_URL,
  X_HANDLE,
  SPIRE_HARTSWOOD_BOOKING_URL,
  NUFFIELD_BRENTWOOD_BOOKING_URL
} from '../constants';
import { SurgeonPortrait } from './SurgeonPortrait';

interface ContactProps {
  onBook?: (hospital?: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onBook }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    hospital: 'Spire Hartswood Hospital',
    enquiryType: 'Private Consultation Booking',
    fundingMethod: 'Private Medical Insurance',
    message: ''
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      name: contactForm.name,
      email: contactForm.email,
      phone: contactForm.phone,
      hospital: contactForm.hospital,
      treatmentArea: contactForm.enquiryType,
      fundingType: contactForm.fundingMethod,
      message: contactForm.message,
      source: 'Contact Page'
    };

    // 1. Save to local storage
    try {
      const stored = localStorage.getItem('shankar_patient_consultations');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift({
        id: `contact-${Date.now()}`,
        timestamp: new Date().toISOString(),
        ...submissionData
      });
      localStorage.setItem('shankar_patient_consultations', JSON.stringify(list));
    } catch {
      // ignore
    }

    // 2. Post to server endpoint
    try {
      await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });
    } catch {
      // ignore
    }

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4965]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8A24C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider border border-slate-200 shadow-2xs mb-3">
            <PhoneCall size={14} className="text-[#1B4965]" />
            <span>Secretary & Practice Enquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            Get in touch with Mr Shivakumar Shankar's private medical practice. Our dedicated secretary is on hand to arrange appointments, discuss surgical options, and guide insurance authorisations.
          </p>
        </div>

        {/* Lead Clinician Surgeon Card with Profile Picture */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white flex-shrink-0">
              <SurgeonPortrait 
                alt={`${SURGEON_NAME} - Consultant Orthopaedic Surgeon`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] border border-slate-200 px-2.5 py-0.5 rounded">
                  Consultant Orthopaedic Surgeon
                </span>
                <span className="text-[10px] text-slate-500 hidden md:inline">• Substantive NHS & Private Practice</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                {SURGEON_NAME}
              </h3>
              <p className="text-xs text-[#1B4965] font-semibold">
                {SURGEON_ROLE}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Specialist Hip & Knee Arthroplasty • Spire Hartswood, Nuffield Brentwood & Queens Hospital Romford
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#1B4965] bg-[#EAF1F6] px-3 py-1.5 rounded-lg border border-slate-200 whitespace-nowrap shadow-2xs">
              Secretary Office: Remya Rexlin
            </span>
          </div>
        </div>

        {/* Secretary Highlight Card - Prominent Top Focus */}
        <div className="bg-white border-2 border-[#1B4965]/20 rounded-3xl p-6 sm:p-10 shadow-md mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#1B4965] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-xs">
            Direct Secretary Office
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Secretary Bio & Role */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#EAF1F6] border border-slate-200 text-[#1B4965] flex items-center justify-center shadow-xs">
                  <UserCheck size={30} className="text-[#1B4965]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] block">
                    Medical Secretary
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {SECRETARY_NAME}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {SECRETARY_ROLE}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed pt-1">
                Remya oversees all patient bookings, clinic schedules, theatre dates, and administrative enquiries for private consultations at both <strong>Spire Hartswood Hospital</strong> and <strong>Nuffield Health Brentwood Hospital</strong>.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <Clock size={13} className="text-[#1B4965]" /> Mon – Fri: 9:00 AM – 5:30 PM
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                  <ShieldCheck size={13} className="text-emerald-600" /> GMC Patient Confidentiality
                </span>
                <span className="flex items-center gap-1.5 bg-[#FFFBEB] text-[#92400E] px-3 py-1.5 rounded-lg border border-[#FDE68A] shadow-2xs font-semibold">
                  Self-Pay: First £250 • Follow-up £200
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Direct Contact Actions */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Mobile Phone Card */}
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 hover:border-[#1B4965] transition-all flex flex-col justify-between group shadow-2xs hover:shadow-md">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F6] text-[#1B4965] border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Smartphone size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold bg-[#E8A24C]/15 text-[#C26B08] border border-[#E8A24C]/30 px-2 py-0.5 rounded">
                      Direct Mobile
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                    Mobile Number
                  </p>
                  <p className="text-lg font-black text-slate-900 tracking-wide break-words">
                    {MOBILE_PHONE}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Fastest way to reach secretary for urgent slots
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200 flex items-center gap-2">
                  <a 
                    href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`}
                    className="flex-1 bg-[#1B4965] hover:bg-[#13364B] text-white text-xs font-bold py-2 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    id="contact-call-mobile-btn"
                  >
                    <Phone size={13} /> Call Mobile
                  </a>
                  <button 
                    onClick={() => handleCopy(MOBILE_PHONE, 'mobile')}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-lg transition-colors border border-slate-200"
                    title="Copy mobile number"
                    aria-label="Copy mobile number"
                  >
                    {copiedField === 'mobile' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Landline Phone Card */}
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 hover:border-[#1B4965] transition-all flex flex-col justify-between group shadow-2xs hover:shadow-md">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F6] text-[#1B4965] border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold bg-[#EAF1F6] text-[#1B4965] border border-slate-200 px-2 py-0.5 rounded">
                      Practice Line
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                    Landline Number
                  </p>
                  <p className="text-lg font-black text-slate-900 tracking-wide break-words">
                    {LANDLINE_PHONE}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Secretary office direct telephone desk
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200 flex items-center gap-2">
                  <a 
                    href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
                    className="flex-1 bg-white hover:bg-[#1B4965] hover:text-white text-[#1B4965] text-xs font-bold py-2 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 border border-slate-200 shadow-2xs"
                    id="contact-call-landline-btn"
                  >
                    <Phone size={13} /> Call Landline
                  </a>
                  <button 
                    onClick={() => handleCopy(LANDLINE_PHONE, 'landline')}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-lg transition-colors border border-slate-200"
                    title="Copy landline number"
                    aria-label="Copy landline number"
                  >
                    {copiedField === 'landline' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 hover:border-[#1B4965] transition-all flex flex-col justify-between group shadow-2xs hover:shadow-md">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F6] text-[#1B4965] border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold bg-[#EAF1F6] text-[#1B4965] border border-slate-200 px-2 py-0.5 rounded">
                      Email Desk
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                    Secretary Email
                  </p>
                  <p className="text-xs font-bold text-slate-900 tracking-tight break-all">
                    {EMAIL}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                    For referrals, pre-authorisations & enquiries
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200 flex items-center gap-2">
                  <a 
                    href={`mailto:${EMAIL}`}
                    className="flex-1 bg-[#1B4965] hover:bg-[#13364B] text-white text-xs font-bold py-2 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    id="contact-send-email-btn"
                  >
                    <Mail size={13} /> Email Us
                  </a>
                  <button 
                    onClick={() => handleCopy(EMAIL, 'email')}
                    className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-lg transition-colors border border-slate-200"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Two-Column Grid: Form & Hospital Practice Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Message / Callback Request Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <Send size={20} className="text-[#1B4965]" /> Send a Message to Remya Rexlin
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the form below and our medical secretary will contact you promptly to address your query or book your consultation.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-300 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Message Sent Successfully</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{contactForm.name}</strong>. Your message has been routed directly to <strong>{SECRETARY_NAME}</strong>.
                </p>
                <div className="p-4 bg-[#F8FAFC] rounded-xl text-xs text-slate-700 text-left border border-slate-200 max-w-md mx-auto space-y-1">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 text-xs text-[#1B4965]">
                    <ShieldCheck size={14} /> Logged with Medical Secretary ({SECRETARY_NAME})
                  </p>
                  <p>Remya will review your enquiry regarding <strong>{contactForm.enquiryType}</strong> ({contactForm.hospital}) and reply to <strong>{contactForm.phone || contactForm.email}</strong> during working hours.</p>
                  <p className="text-slate-500 pt-1">For urgent consultation enquiries, you can also connect directly:</p>
                </div>

                {/* Direct Action Options */}
                <div className="max-w-md mx-auto space-y-2 pt-1">
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`[Website Enquiry] ${contactForm.name} - ${contactForm.enquiryType}`)}&body=${encodeURIComponent(
`Dear Mr Shankar and Remya Rexlin,

I have submitted an enquiry via your practice website:

PATIENT ENQUIRY:
• Name: ${contactForm.name}
• Email: ${contactForm.email}
• Phone: ${contactForm.phone}
• Preferred Hospital: ${contactForm.hospital}
• Enquiry Type: ${contactForm.enquiryType}
• Funding: ${contactForm.fundingMethod}

MESSAGE:
${contactForm.message || 'None provided.'}

Kind regards,
${contactForm.name}`
                    )}`}
                    className="w-full bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Mail size={14} />
                    <span>Open Email to Medical Secretary ({EMAIL})</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`}
                      className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-3 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Phone size={13} className="text-[#1B4965]" />
                      <span>Call Mobile ({MOBILE_PHONE})</span>
                    </a>
                    <a
                      href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
                      className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-3 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Phone size={13} className="text-[#1B4965]" />
                      <span>Office ({LANDLINE_PHONE})</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-slate-500 hover:text-slate-800 text-xs font-semibold py-1 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Sarah Jenkins"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#1B4965] focus:ring-1 focus:ring-[#1B4965]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Contact Phone / Mobile *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. 07xxx xxxxxx"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#1B4965] focus:ring-1 focus:ring-[#1B4965]"
                    />
                  </div>
                </div>

                {/* Email & Preferred Hospital */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#1B4965] focus:ring-1 focus:ring-[#1B4965]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Preferred Clinic Hospital
                    </label>
                    <select
                      value={contactForm.hospital}
                      onChange={(e) => setContactForm({ ...contactForm, hospital: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1B4965]"
                    >
                      <option value="Spire Hartswood Hospital">Spire Hartswood Hospital (Brentwood) — Live Diary Available</option>
                      <option value="Nuffield Brentwood Hospital">Nuffield Health Brentwood Hospital (Brentwood) — Live Booking Available</option>
                      <option value="Either / First Available">Either / First Available Clinic Slot</option>
                    </select>

                    {contactForm.hospital === 'Spire Hartswood Hospital' && (
                      <div className="mt-2 p-2.5 bg-sky-50 rounded-lg border border-sky-100 flex items-center justify-between text-xs text-slate-700">
                        <span className="text-[11px] text-slate-600">
                          ⚡ Prefer live timeslots? <strong>Book directly via Spire:</strong>
                        </span>
                        <a
                          href={SPIRE_HARTSWOOD_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#1B4965] hover:underline flex items-center gap-1 text-[11px] shrink-0"
                        >
                          <span>Spire Portal</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    )}

                    {contactForm.hospital === 'Nuffield Brentwood Hospital' && (
                      <div className="mt-2 p-2.5 bg-emerald-50 rounded-lg border border-emerald-100 flex items-center justify-between text-xs text-slate-700">
                        <span className="text-[11px] text-slate-600">
                          ⚡ Prefer live timeslots? <strong>Book directly via Nuffield Health:</strong>
                        </span>
                        <a
                          href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-emerald-800 hover:underline flex items-center gap-1 text-[11px] shrink-0"
                        >
                          <span>Nuffield Portal</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enquiry Type & Funding */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Nature of Enquiry
                    </label>
                    <select
                      value={contactForm.enquiryType}
                      onChange={(e) => setContactForm({ ...contactForm, enquiryType: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1B4965]"
                    >
                      <option value="Private Consultation Booking">Book Private Consultation</option>
                      <option value="Hip Replacement / Arthritis Query">Hip Replacement / Arthritis</option>
                      <option value="Knee Replacement / Arthroscopy Query">Knee Replacement / Arthroscopy</option>
                      <option value="Robotic & Navigation Surgery">Robotic Surgery Enquiry</option>
                      <option value="Second Opinion / Revision Consultation">Second Opinion</option>
                      <option value="GP / Physiotherapist Referral">GP / Physiotherapy Referral</option>
                      <option value="Insurance / Billing Query">Insurance Pre-Authorisation / Billing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Funding Status
                    </label>
                    <select
                      value={contactForm.fundingMethod}
                      onChange={(e) => setContactForm({ ...contactForm, fundingMethod: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#1B4965]"
                    >
                      <option value="Private Medical Insurance">Insured (Bupa, AXA, Aviva, Vitality, etc.)</option>
                      <option value="Self-Paying">Self-Paying Patient</option>
                      <option value="GP / Medical Professional">Healthcare Professional / GP</option>
                    </select>
                  </div>
                </div>

                {/* Self-Funding Outpatient Fee Notice */}
                {contactForm.fundingMethod === "Self-Paying" && (
                  <div className="p-3.5 bg-[#FFFBF5] border border-[#FDE68A] rounded-xl text-xs text-slate-800 animate-fade-in shadow-2xs">
                    <div className="flex items-center justify-between font-bold text-[#92400E] mb-1">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-[#E8A24C]" />
                        Self-Funding Consultation Fees:
                      </span>
                      <span className="text-[10px] uppercase font-bold bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 rounded border border-[#FDE68A]">
                        Fixed Price
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#FDE68A]/60">
                      <div className="bg-white/80 p-2 rounded-lg border border-[#FDE68A]/80">
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">First Appointment</span>
                        <span className="text-base font-black text-slate-900">£250</span>
                        <span className="text-[10px] text-slate-500 block">Comprehensive initial assessment</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-[#FDE68A]/80">
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Follow-Up Appointment</span>
                        <span className="text-base font-black text-slate-900">£200</span>
                        <span className="text-[10px] text-slate-500 block">Review of scans & progress</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Message / Clinical Details (Optional)
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Provide any details about your joint symptoms, mobility limitations, recent X-rays or MRI scans..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#1B4965]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#E8A24C] hover:bg-[#D99136] text-white font-bold py-3.5 rounded-xl transition-all shadow-md text-sm tracking-wider uppercase flex items-center justify-center gap-2"
                    id="contact-submit-enquiry-btn"
                  >
                    <Send size={16} /> Send Enquiry to Secretary
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2.5">
                    Your medical enquiry is handled with strict confidentiality adhering to GMC guidelines.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Hospital Locations & Patient Guides */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spire Hartswood Hospital Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] uppercase font-bold text-[#1B4965] bg-[#EAF1F6] px-2.5 py-1 rounded border border-slate-200">
                  Private Hospital
                </span>
                <span className="text-xs text-slate-500">Brentwood, Essex</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Spire Hartswood Hospital</h4>
              <p className="text-xs text-slate-600 flex items-start gap-1.5 mb-3">
                <MapPin size={14} className="text-[#1B4965] flex-shrink-0 mt-0.5" />
                Eagle Way, Great Warley, Brentwood, Essex CM13 3LE
              </p>
              <div className="p-3 bg-[#F8FAFC] rounded-xl text-xs space-y-1.5 border border-slate-200 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Main Hospital Line:</span>
                  <a href="tel:01277695695" className="text-slate-800 hover:text-[#1B4965] font-semibold">01277 695 695</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Secretary Mobile:</span>
                  <a href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`} className="text-[#1B4965] hover:underline font-bold">{MOBILE_PHONE}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Secretary Landline:</span>
                  <a href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} className="text-slate-800 hover:text-[#1B4965] font-semibold">{LANDLINE_PHONE}</a>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={SPIRE_HARTSWOOD_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1B4965] hover:bg-[#13364B] text-white text-xs font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md"
                >
                  <Calendar size={13} />
                  <span>Book Online at Spire (Live Timeslots)</span>
                  <ExternalLink size={12} />
                </a>
                {onBook && (
                  <button
                    onClick={() => onBook('Spire Hartswood Hospital')}
                    className="w-full bg-[#EAF1F6] hover:bg-[#dbe7f0] text-[#1B4965] text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    Request via Medical Secretary
                  </button>
                )}
              </div>
            </div>

            {/* Nuffield Health Brentwood Hospital Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] uppercase font-bold text-[#1B4965] bg-[#EAF1F6] px-2.5 py-1 rounded border border-slate-200">
                  Private Hospital
                </span>
                <span className="text-xs text-slate-500">Brentwood, Essex</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Nuffield Health Brentwood Hospital</h4>
              <p className="text-xs text-slate-600 flex items-start gap-1.5 mb-3">
                <MapPin size={14} className="text-[#1B4965] flex-shrink-0 mt-0.5" />
                Shenfield Road, Brentwood, Essex CM15 8EH
              </p>
              <div className="p-3 bg-[#F8FAFC] rounded-xl text-xs space-y-1.5 border border-slate-200 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Main Hospital Line:</span>
                  <a href="tel:01277263263" className="text-slate-800 hover:text-[#1B4965] font-semibold">01277 263 263</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Secretary Mobile:</span>
                  <a href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`} className="text-[#1B4965] hover:underline font-bold">{MOBILE_PHONE}</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Secretary Landline:</span>
                  <a href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} className="text-slate-800 hover:text-[#1B4965] font-semibold">{LANDLINE_PHONE}</a>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#00703C] hover:bg-[#005a30] text-white text-xs font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md"
                >
                  <Calendar size={13} />
                  <span>Book Online at Nuffield (Live Slots)</span>
                  <ExternalLink size={12} />
                </a>
                {onBook && (
                  <button
                    onClick={() => onBook('Nuffield Brentwood Hospital')}
                    className="w-full bg-[#EAF1F6] hover:bg-[#dbe7f0] text-[#1B4965] text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    Request via Medical Secretary
                  </button>
                )}
              </div>
            </div>

            {/* Insurance & Self-Pay Notice */}
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 text-xs text-slate-800 space-y-3 shadow-2xs">
              <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#1B4965]" /> Private Medical Insurance & Referrals
              </h5>
              <p className="leading-relaxed">
                Mr Shankar is fee-assured and recognised by all major insurers including <strong>Bupa, AXA Health, Aviva, Vitality, WPA, Cigna, and Allianz</strong>. Direct billing arrangements are in place.
              </p>
              <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-2">
                <a
                  href={BUPA_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0079C8] hover:bg-[#005a96] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <img src="./profile.jpg" alt="Mr Shivakumar Shankar Bupa Consultant Profile" className="w-4 h-4 rounded-full object-cover object-top border border-white/50 shrink-0" />
                  <ShieldCheck size={12} />
                  <span>Verified Bupa Finder Profile</span>
                  <ExternalLink size={10} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <img src="./profile.jpg" alt="Mr Shivakumar Shankar LinkedIn Profile" className="w-4 h-4 rounded-full object-cover object-top border border-white/50 shrink-0" />
                  <span>LinkedIn Network</span>
                  <ExternalLink size={10} />
                </a>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <img src="./profile.jpg" alt="Mr Shivakumar Shankar X Profile" className="w-4 h-4 rounded-full object-cover object-top border border-white/50 shrink-0" />
                  <span>X ({X_HANDLE})</span>
                  <ExternalLink size={10} />
                </a>
              </div>
              <p className="text-slate-500 leading-relaxed pt-1">
                GP and physiotherapist referrals can be emailed directly to <a href={`mailto:${EMAIL}`} className="text-[#1B4965] hover:underline font-semibold">{EMAIL}</a>. Patients may also self-refer for a private consultation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
