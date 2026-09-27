import React from 'react';
import { 
  Shield, CheckCircle2, AlertCircle, Clock, Calendar, 
  ChevronRight, ArrowRight, Activity, Bone, FileText, 
  HelpCircle, UserCheck, PhoneCall, ExternalLink, ShieldAlert
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

export interface ProcedurePageData {
  slug: string;
  badge: string;
  h1: string;
  leadParagraph: string;
  overview: string[];
  whoMayBenefit: string[];
  symptomsTreated: string[];
  procedureExplanation: {
    title: string;
    description: string;
    steps: string[];
  };
  technologyComparison?: {
    title: string;
    description: string;
    points: { label: string; detail: string }[];
  };
  benefitsAndLimitations: {
    benefits: string[];
    limitations: string[];
  };
  risksAndComplications: string[];
  recoveryTimeline: { phase: string; description: string }[];
  rehabilitationMilestones: string[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { title: string; href: string; description: string }[];
}

interface ClinicalProcedurePageProps {
  data: ProcedurePageData;
  onBook: () => void;
  onNavigate: (href: string) => void;
}

export const ClinicalProcedurePage: React.FC<ClinicalProcedurePageProps> = ({
  data,
  onBook,
  onNavigate
}) => {
  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO BREADCRUMB & HEADER */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <span className="text-slate-400">Procedures</span>
            <span>/</span>
            <span className="text-[#1B4965] font-bold">{data.badge}</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            {data.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {data.h1}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            {data.leadParagraph}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={onBook}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} /> Book Surgical Consultation
            </button>
            <a
              href="#procedure-details"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Procedure Details
            </a>
            <a
              href="#recovery-rehab"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Recovery &amp; Risks
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & WHO MAY BENEFIT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              {/* Clinical Overview */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                  <Activity size={22} className="text-[#1B4965]" /> Clinical Overview
                </h2>
                {data.overview.map((para, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Who May Benefit & Symptoms Treated */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 text-[#1B4965]">
                    <CheckCircle2 size={18} /> Who May Benefit
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {data.whoMayBenefit.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#1B4965] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 text-[#1B4965]">
                    <Bone size={18} /> Symptoms Commonly Treated
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {data.symptomsTreated.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E8A24C] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. EXPLANATION OF THE PROCEDURE */}
              <div id="procedure-details" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h2 className="text-2xl font-black text-slate-900">
                  {data.procedureExplanation.title}
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  {data.procedureExplanation.description}
                </p>
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                    Key Surgical Stages:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {data.procedureExplanation.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B4965] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Comparison (if present) */}
              {data.technologyComparison && (
                <div className="bg-[#F0F5F9] p-6 sm:p-8 rounded-2xl border border-[#D0E2EC] shadow-xs space-y-4">
                  <h2 className="text-2xl font-black text-slate-900">
                    {data.technologyComparison.title}
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {data.technologyComparison.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {data.technologyComparison.points.map((pt, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200">
                        <strong className="text-xs uppercase font-bold text-[#1B4965] block mb-1">
                          {pt.label}
                        </strong>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {pt.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. BENEFITS AND LIMITATIONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200 shadow-xs">
                  <h3 className="text-lg font-black text-emerald-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-700" /> Potential Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {data.benefitsAndLimitations.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200 shadow-xs">
                  <h3 className="text-lg font-black text-amber-900 mb-3 flex items-center gap-2">
                    <AlertCircle size={18} className="text-amber-700" /> Limitations &amp; Considerations
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {data.benefitsAndLimitations.limitations.map((lim, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 5. RISKS AND COMPLICATIONS */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-amber-700 font-extrabold uppercase text-xs tracking-wider">
                  <ShieldAlert size={16} /> Informed Surgical Consent
                </div>
                <h2 className="text-2xl font-black text-slate-900">
                  Potential Risks &amp; Complications
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All surgical interventions involve potential risks. Mr Shankar conducts thorough pre-operative assessments and discusses every aspect openly with patients to support balanced, informed decision-making:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {data.risksAndComplications.map((risk, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold text-xs mt-0.5">!</span>
                      <span className="text-xs text-slate-700 leading-relaxed">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. RECOVERY & REHABILITATION */}
              <div id="recovery-rehab" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Clock size={20} className="text-[#1B4965]" /> Recovery Timeline &amp; Rehabilitation
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Individual recovery rates vary depending on general fitness, age, and joint condition. Early mobilisation under hospital physiotherapy supervision is fundamental to achieving an optimal outcome.
                </p>

                <div className="space-y-4">
                  {data.recoveryTimeline.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="sm:w-32 flex-shrink-0 text-xs font-extrabold text-[#1B4965] uppercase">
                        {item.phase}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-3">
                    Rehabilitation Milestones:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {data.rehabilitationMilestones.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#1B4965] flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 7. FREQUENTLY ASKED QUESTIONS */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <HelpCircle size={22} className="text-[#1B4965]" /> Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {data.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <h3 className="text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8. MEDICAL DISCLAIMER */}
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong>Medical Information Disclaimer:</strong> The information provided on this page is for general educational purposes and does not substitute for a formal clinical consultation. Recovery timelines, implant choices, and outcomes vary for each individual patient. Please consult Mr Shivakumar Shankar or your treating orthopaedic team for personalised medical advice.
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-4 space-y-6">
              {/* Consultant Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold text-lg">
                    SS
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{SURGEON_NAME}</h3>
                    <p className="text-xs text-slate-500">{SURGEON_ROLE}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-volume, minimally invasive, robotic and computer-assisted hip and knee surgery in London and Essex.
                </p>
                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <p><strong>NHS Practice:</strong> Queen's Hospital Romford &amp; King George Hospital Goodmayes (BHRUT)</p>
                  <p><strong>Private Practice:</strong> Spire Hartswood Hospital &amp; Nuffield Health Brentwood Hospital</p>
                </div>
                <button
                  onClick={onBook}
                  className="w-full bg-[#1B4965] hover:bg-[#13364B] text-white py-3 rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={14} /> Book Private Consultation
                </button>
              </div>

              {/* Secretary Contact Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs text-slate-700">
                <span className="text-[10px] font-extrabold uppercase text-[#1B4965] tracking-wider block">
                  Private Practice Enquiries
                </span>
                <p className="font-bold text-slate-900 text-sm">{SECRETARY_NAME}</p>
                <p className="text-slate-500">Medical Secretary to Mr Shankar</p>
                <div className="pt-2 space-y-1.5">
                  <p><strong>Mobile:</strong> <a href={`tel:${MOBILE_PHONE}`} className="text-[#1B4965] hover:underline font-bold">{MOBILE_PHONE}</a></p>
                  <p><strong>Office:</strong> <a href={`tel:${LANDLINE_PHONE}`} className="text-[#1B4965] hover:underline">{LANDLINE_PHONE}</a></p>
                  <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-[#1B4965] hover:underline break-all">{EMAIL}</a></p>
                </div>
              </div>

              {/* Related Internal Links */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Related Clinical Pages
                </h4>
                <div className="space-y-3">
                  {data.relatedLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(link.href);
                      }}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                    >
                      <strong className="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                        <span>{link.title}</span>
                        <ChevronRight size={13} className="text-slate-400 group-hover:text-[#1B4965]" />
                      </strong>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                        {link.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
