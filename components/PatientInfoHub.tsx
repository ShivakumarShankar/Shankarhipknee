import React, { useState } from 'react';
import { 
  FileText, Download, Calendar, CheckCircle2, AlertCircle, 
  HelpCircle, Search, Clock, ShieldAlert, HeartPulse, ChevronRight, Phone
} from 'lucide-react';
import { 
  FAQS, 
  PROTOCOLS, 
  SURGEON_NAME, 
  SURGEON_ROLE, 
  MOBILE_PHONE, 
  LANDLINE_PHONE, 
  EMAIL, 
  SECRETARY_NAME 
} from '../constants';

export type PatientInfoMode = 
  | 'overview' 
  | 'hip-recovery' 
  | 'knee-recovery' 
  | 'preparing' 
  | 'faqs' 
  | 'protocols';

interface PatientInfoHubProps {
  mode: PatientInfoMode;
  onBook: () => void;
  onNavigate: (href: string) => void;
}

export const PatientInfoHub: React.FC<PatientInfoHubProps> = ({
  mode,
  onBook,
  onNavigate
}) => {
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');
  const [generatingPdf, setGeneratingPdf] = useState<string | null>(null);

  const handleDownloadProtocol = async (proto: any) => {
    try {
      setGeneratingPdf(proto.title);
      const { generateProtocolPdf } = await import('../pdfGenerator');
      await generateProtocolPdf(proto);
    } catch (e) {
      console.error("PDF generation failed:", e);
    } finally {
      setGeneratingPdf(null);
    }
  };

  const getHeaderInfo = () => {
    switch (mode) {
      case 'hip-recovery':
        return {
          badge: 'Recovery Pathway',
          h1: 'Hip Replacement Recovery Guide',
          lead: 'Comprehensive recovery milestones, wound care guidance, walking progress, returning to driving, returning to work, and warning signs following hip replacement surgery.'
        };
      case 'knee-recovery':
        return {
          badge: 'Recovery Pathway',
          h1: 'Knee Replacement Recovery Guide',
          lead: 'Detailed post-operative guidance on knee extension, flexion milestones, swelling control, icing protocols, stair negotiation, and physical rehabilitation following knee arthroplasty.'
        };
      case 'preparing':
        return {
          badge: 'Pre-Operative Preparation',
          h1: 'Preparing for Joint Replacement Surgery',
          lead: 'Everything you need to know before coming to hospital: pre-assessment medical checks, medication management, home environment preparation, hospital packing list, and smoking cessation.'
        };
      case 'faqs':
        return {
          badge: 'Patient Questions',
          h1: 'Frequently Asked Questions (FAQs)',
          lead: 'Clear, expert answers to common questions regarding private consultations, fees, health insurance, surgical planning, hospital stays, and aftercare under Mr Shivakumar Shankar.'
        };
      case 'protocols':
        return {
          badge: 'Physiotherapy & Rehabilitation',
          h1: 'Physiotherapy Protocols & Rehabilitation Guides',
          lead: 'Structured clinical physiotherapy pathways and downloadable patient PDF protocols for hip replacement, total knee replacement, partial knee replacement, and knee arthroscopy.'
        };
      default:
        return {
          badge: 'Patient Information Hub',
          h1: 'Patient Information & Surgical Education Guides',
          lead: 'Clear, factual guidance for patients undergoing hip or knee surgery under the care of Mr Shivakumar Shankar in London and Essex.'
        };
    }
  };

  const header = getHeaderInfo();

  const filteredFaqs = FAQS.filter(f => {
    const matchesSearch = f.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
                          f.answer.toLowerCase().includes(faqSearch.toLowerCase());
    const matchesCategory = selectedFaqCategory === 'all' || f.category.toLowerCase() === selectedFaqCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <a href="/patient-information/" onClick={(e) => { e.preventDefault(); onNavigate('/patient-information/'); }} className="hover:text-[#1B4965]">Patient Information</a>
            {mode !== 'overview' && (
              <>
                <span>/</span>
                <span className="text-[#1B4965] font-bold">{header.badge}</span>
              </>
            )}
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            {header.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {header.h1}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            {header.lead}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={onBook}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} /> Book Private Consultation
            </button>
            <a
              href="/contact/"
              onClick={(e) => { e.preventDefault(); onNavigate('/contact/'); }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Contact Practice Secretary
            </a>
          </div>
        </div>
      </section>

      {/* 2. RECOVERY WARNING / DISCLAIMER */}
      <section className="py-6 bg-[#FFFBEB] border-b border-[#FDE68A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <ShieldAlert size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Important Clinical Notice:</strong> Recovery rates vary from person to person depending on general health, bone quality, muscular strength, and surgical approach. Always follow the explicit instructions and post-operative guidance given by your treating clinical and surgical team.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED SECTIONS BASED ON MODE */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Hub Navigation Cards */}
          <div className="mb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { title: 'Hip Recovery', href: '/hip-replacement-recovery/', modeKey: 'hip-recovery' },
              { title: 'Knee Recovery', href: '/knee-replacement-recovery/', modeKey: 'knee-recovery' },
              { title: 'Preparing for Surgery', href: '/preparing-for-surgery/', modeKey: 'preparing' },
              { title: 'Patient FAQs', href: '/frequently-asked-questions/', modeKey: 'faqs' },
              { title: 'Physio Protocols', href: '/physio-protocols/', modeKey: 'protocols' },
            ].map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                onClick={(e) => { e.preventDefault(); onNavigate(btn.href); }}
                className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                  mode === btn.modeKey 
                    ? 'bg-[#1B4965] text-white border-[#1B4965] shadow-xs' 
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                {btn.title}
              </a>
            ))}
          </div>

          {/* HIP RECOVERY MODE */}
          {(mode === 'hip-recovery' || mode === 'overview') && (
            <div className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Hip Replacement Recovery Milestones &amp; Practical Advice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Day 0 to Week 2</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Same-day mobilisation with crutches under physio supervision.</li>
                    <li>• Stair climbing practice before hospital discharge.</li>
                    <li>• Keep waterproof dressings clean and dry; shower only as advised.</li>
                    <li>• Regular pain medication and anti-coagulation injections/tablets.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Weeks 2 to 6</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Transition from two crutches to a single walking stick.</li>
                    <li>• Gradual increase in flat walking distance outdoors.</li>
                    <li>• Wound check by nursing team (typically around day 10–14).</li>
                    <li>• Sleeping comfortably on back or non-operated side with a pillow.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Weeks 6 to 12+</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Return to driving once off strong opioids and able to emergency brake.</li>
                    <li>• Return to sedentary desk work (4–6 weeks) or manual work (8–12 weeks).</li>
                    <li>• Resumption of low-impact recreation: swimming, walking, static cycling.</li>
                    <li>• Long-term joint consolidation and restoration of endurance.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* KNEE RECOVERY MODE */}
          {(mode === 'knee-recovery' || mode === 'overview') && (
            <div className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Knee Replacement Recovery &amp; Mobility Focus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Restoring Extension (0°)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Straightening the knee completely is the critical early objective. Practise pressing the back of the knee firmly down into the mattress to reactivate the quadriceps.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Swelling &amp; Ice Management</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Post-operative swelling and warm sensation around the knee are normal for several months. Regular cryotherapy (ice packs wrapped in towels) and limb elevation help control oedema.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Achieving Flexion (90°+)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Aim for 90 degrees of knee bend by weeks 2 to 4. Active heel slides and sitting knee bends allow safe progress without straining the healing wound.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* PREPARING FOR SURGERY MODE */}
          {(mode === 'preparing' || mode === 'overview') && (
            <div className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Preparing for Joint Replacement: Checklist &amp; Advice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#1B4965]" /> What to Prepare at Home
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Remove loose rugs, cables, and trip hazards from main walkways.</li>
                    <li>• Arrange non-slip mats in the bathroom and consider a stable shower stool.</li>
                    <li>• Stock up on easy-to-prepare meals and store essentials at waist height.</li>
                    <li>• Ensure a stable chair with arms and firm cushion is available.</li>
                  </ul>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#1B4965]" /> What to Bring to Hospital
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• All current medications in their original labelled pharmacy boxes.</li>
                    <li>• Supportive, flat walking shoes or slippers with firm non-slip rubber soles.</li>
                    <li>• Loose, comfortable day clothes that easily accommodate joint dressings.</li>
                    <li>• Personal toiletries, phone, and long charging lead.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* WARNING SIGNS SECTION */}
          <div className="mb-14 bg-rose-50/70 p-6 sm:p-8 rounded-2xl border border-rose-200 shadow-xs space-y-4">
            <h3 className="text-lg font-black text-rose-950 flex items-center gap-2">
              <AlertCircle size={20} className="text-rose-700" /> When to Contact the Clinical Team Immediately
            </h3>
            <p className="text-xs text-rose-900 leading-relaxed">
              While serious complications are uncommon, you must contact the hospital ward, Mr Shankar's secretary, or emergency services immediately if you experience:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-rose-900">
              <li>• Sudden, severe pain or swelling in the calf of either leg (potential DVT).</li>
              <li>• Sudden breathlessness, shortness of breath, or sharp chest pain (potential PE).</li>
              <li>• Spreading redness, heat, worsening wound leakage, foul discharge, or high fever (&gt;38°C).</li>
              <li>• Sudden inability to bear weight through the operated leg or acute joint dislocation.</li>
            </ul>
          </div>

          {/* PROTOCOLS MODE */}
          {(mode === 'protocols' || mode === 'overview') && (
            <div className="mb-14 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-slate-900">
                  Downloadable Clinical Rehabilitation Protocols
                </h2>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  PDF format &bull; Clinically approved
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROTOCOLS.map((proto, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] uppercase font-bold text-[#1B4965] bg-[#EAF1F6] px-2.5 py-0.5 rounded">
                          {proto.joint} Joint
                        </span>
                        <span className="text-xs text-slate-400 font-semibold">{proto.timeline}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">{proto.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{proto.description}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => handleDownloadProtocol(proto)}
                        disabled={generatingPdf === proto.title}
                        className="bg-[#1B4965] hover:bg-[#13364B] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors disabled:opacity-50"
                      >
                        <Download size={13} />
                        <span>{generatingPdf === proto.title ? 'Generating...' : 'Download PDF Protocol'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQS MODE */}
          {(mode === 'faqs' || mode === 'overview') && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <HelpCircle size={22} className="text-[#1B4965]" /> Patient FAQs
                </h2>
                <div className="relative w-full sm:w-72">
                  <Search size={15} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#1B4965]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredFaqs.slice(0, mode === 'overview' ? 6 : 20).map((faq, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm">{faq.question}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </article>
  );
};
