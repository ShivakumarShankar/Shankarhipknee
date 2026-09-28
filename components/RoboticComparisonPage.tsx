import React from 'react';
import { 
  Cpu, Compass, CheckCircle2, AlertCircle, ShieldAlert, 
  Calendar, ChevronRight, Activity, Bone, BookOpen, Layers
} from 'lucide-react';
import { 
  SURGEON_NAME, 
  SURGEON_ROLE, 
  EMAIL, 
  MOBILE_PHONE, 
  LANDLINE_PHONE, 
  SECRETARY_NAME 
} from '../constants';

interface RoboticComparisonPageProps {
  mode: 'overview' | 'comparison';
  onBook: () => void;
  onNavigate: (href: string) => void;
}

export const RoboticComparisonPage: React.FC<RoboticComparisonPageProps> = ({
  mode,
  onBook,
  onNavigate
}) => {
  const isComparison = mode === 'comparison';

  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <span className="text-slate-400">Technology &amp; Innovation</span>
            <span>/</span>
            <span className="text-[#1B4965] font-bold">
              {isComparison ? 'Conventional vs Navigated vs Robotic' : 'Robotic & Computer-Assisted Surgery'}
            </span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            {isComparison ? 'Evidence-Based Arthroplasty Comparison' : 'Pioneering Surgical Technology'}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {isComparison
              ? 'Conventional vs Computer-Assisted vs Robotic Arthroplasty'
              : 'Robotic & Computer-Assisted Joint Replacement'}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            {isComparison
              ? 'An educational comparison evaluating the differences in surgical planning, component alignment, intra-operative navigation, surgeon control, and clinical evidence across manual, computer-navigated, and robotic joint replacement.'
              : 'Detailed patient guide to computer-assisted navigation and Mako robotic-assisted technology for total hip, total knee, and partial knee replacement in London and Essex.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={onBook}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} /> Book Surgical Consultation
            </button>
            <button
              onClick={() => onNavigate(isComparison ? '/robotic-computer-assisted-surgery/' : '/conventional-vs-computer-assisted-vs-robotic-surgery/')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              {isComparison ? 'View Robotic Overview' : 'View Comparison Table'}
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT BODY */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-10">
              
              {/* Regional Pioneer Note */}
              <div className="p-6 bg-[#EAF1F6] rounded-2xl border border-[#C5DCE8] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] block">
                  Regional Pioneering Experience
                </span>
                <p className="text-sm text-slate-800 leading-relaxed">
                  Mr Shivakumar Shankar has <strong className="font-bold text-slate-900">personally completed more than 100 robotic hip and knee replacement surgeries</strong>, and was the first surgeon to perform computer-assisted and robotic total hip replacement in Essex and North East London. He has performed manual, computer-assisted, and robotic joint replacement surgery for over 9 years, incorporating advanced MAKO robotic-assisted precision into his high-volume arthroplasty practice.
                </p>
              </div>

              {/* Core Definitions */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h2 className="text-2xl font-black text-slate-900">
                  Understanding Surgical Navigation and Robotics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 text-[#1B4965]">
                      <Compass size={18} /> Computer-Assisted Navigation
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Uses optical sensors and spatial tracking arrays fixed to patient bones. It provides the surgeon with real-time numeric data on resection angles, limb length, and mechanical axis alignment without using a physical robotic arm.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base flex items-center gap-2 text-[#1B4965]">
                      <Cpu size={18} /> Robotic-Assisted Surgery (Mako)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Combines pre-operative 3D CT modeling with a surgeon-controlled robotic arm. The robotic guidance system enforces haptic boundaries to guide bone preparation strictly within the pre-planned zone, preventing deviation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comprehensive Comparison Table */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5 overflow-x-auto">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Layers size={22} className="text-[#1B4965]" /> Modality Comparison Matrix
                </h2>
                <table className="w-full text-left text-xs text-slate-700 border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-[#1B4965] text-white uppercase text-[11px] font-extrabold tracking-wider">
                    <tr>
                      <th className="p-3.5">Feature</th>
                      <th className="p-3.5">Conventional (Manual)</th>
                      <th className="p-3.5">Computer-Assisted Navigation</th>
                      <th className="p-3.5">Robotic-Assisted (Mako)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Pre-Op Planning</td>
                      <td className="p-3.5">2D X-rays and standard sizing templates</td>
                      <td className="p-3.5">2D X-rays with intra-operative optical mapping</td>
                      <td className="p-3.5">High-resolution 3D CT scan reconstruction</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Component Positioning</td>
                      <td className="p-3.5">Mechanical alignment jigs &amp; surgeon visual assessment</td>
                      <td className="p-3.5">Digital real-time angular feedback on screen</td>
                      <td className="p-3.5">Sub-millimeter tactile robotic arm boundaries</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Surgeon Control</td>
                      <td className="p-3.5">Surgeon holds all cutting guides and tools manually</td>
                      <td className="p-3.5">Surgeon operates tools with live navigation confirmation</td>
                      <td className="p-3.5">Surgeon actively guides robotic arm; robot never acts autonomously</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Ligament &amp; Soft Tissue Balance</td>
                      <td className="p-3.5">Assessed with manual feel and spacer blocks</td>
                      <td className="p-3.5">Numerical joint gap quantification across full arc of motion</td>
                      <td className="p-3.5">Dynamic virtual pre-cut joint tension mapping</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Potential Advantages</td>
                      <td className="p-3.5">Longest global track record, no CT radiation, shorter surgical setup</td>
                      <td className="p-3.5">Reduced outlier placement, dynamic verification, no CT needed</td>
                      <td className="p-3.5">Highest component accuracy, bone preservation, haptic protection</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Limitations</td>
                      <td className="p-3.5">Susceptible to anatomical variation and landmark visual error</td>
                      <td className="p-3.5">Requires tracking pin placement in bone; slight time increase</td>
                      <td className="p-3.5">Pre-op CT scan required; additional capital equipment; pin placement</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* What the Evidence Says */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <BookOpen size={22} className="text-[#1B4965]" /> Current Clinical Evidence &amp; Realistic Expectations
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Published orthopaedic literature confirms that robotic and computer navigation significantly reduce implant alignment outliers compared with purely manual instrumentation. In partial knee replacement and complex hip anatomy, precise sizing and positioning play an important biological role.
                </p>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2 text-xs text-slate-700">
                  <strong className="text-amber-900 font-bold block">
                    Important Medical Clarification:
                  </strong>
                  <p className="leading-relaxed">
                    Robotic assistance does <strong>not</strong> guarantee better clinical outcomes, longer implant survivorship, faster healing, or complete elimination of surgical complications for every patient. High-quality conventional manual joint replacement remains an exceptionally successful, proven procedure worldwide. Mr Shankar selects the most appropriate method based on each individual patient's bone anatomy, disease severity, and personal health circumstances.
                  </p>
                </div>
              </div>

              {/* Medical Disclaimer */}
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong>Educational Disclaimer:</strong> This comparison is intended to inform patients about surgical options and does not represent an endorsement of one technique over another for every patient. Treatment decisions must be made after an individualized clinical consultation and radiological evaluation with Mr Shivakumar Shankar.
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-4 space-y-6">
              {/* Consultant Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-slate-900 text-base">{SURGEON_NAME}</h3>
                <p className="text-xs text-slate-500">{SURGEON_ROLE}</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-volume, minimally invasive, robotic and computer-assisted hip and knee surgery in London and Essex.
                </p>
                <button
                  onClick={onBook}
                  className="w-full bg-[#1B4965] hover:bg-[#13364B] text-white py-3 rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={14} /> Book Surgical Consultation
                </button>
              </div>

              {/* Procedure Links */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Related Surgical Pages
                </h4>
                <div className="space-y-2 text-xs">
                  <a
                    href="/hip-replacement/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement/'); }}
                    className="block p-2.5 rounded-lg bg-slate-50 hover:bg-[#EAF1F6] font-bold text-slate-800 hover:text-[#1B4965] transition-colors"
                  >
                    → Hip Replacement Surgery
                  </a>
                  <a
                    href="/robotic-hip-replacement/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/robotic-hip-replacement/'); }}
                    className="block p-2.5 rounded-lg bg-slate-50 hover:bg-[#EAF1F6] font-bold text-slate-800 hover:text-[#1B4965] transition-colors"
                  >
                    → Robotic Hip Replacement
                  </a>
                  <a
                    href="/knee-replacement/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement/'); }}
                    className="block p-2.5 rounded-lg bg-slate-50 hover:bg-[#EAF1F6] font-bold text-slate-800 hover:text-[#1B4965] transition-colors"
                  >
                    → Knee Replacement &amp; Arthroplasty
                  </a>
                  <a
                    href="/robotic-knee-replacement/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/robotic-knee-replacement/'); }}
                    className="block p-2.5 rounded-lg bg-slate-50 hover:bg-[#EAF1F6] font-bold text-slate-800 hover:text-[#1B4965] transition-colors"
                  >
                    → Robotic Knee Replacement
                  </a>
                  <a
                    href="/partial-knee-replacement/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/partial-knee-replacement/'); }}
                    className="block p-2.5 rounded-lg bg-slate-50 hover:bg-[#EAF1F6] font-bold text-slate-800 hover:text-[#1B4965] transition-colors"
                  >
                    → Partial Knee Replacement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
