import React from 'react';
import { 
  Building, MapPin, Phone, Mail, Calendar, 
  ExternalLink, CheckCircle2, ShieldCheck, ChevronRight, Clock
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

export type LocationPageMode = 
  | 'overview' 
  | 'london' 
  | 'essex' 
  | 'spire' 
  | 'nuffield' 
  | 'queens' 
  | 'king-george';

interface LocationsHubProps {
  mode: LocationPageMode;
  onBook: (hospital?: string) => void;
  onNavigate: (href: string) => void;
}

export const LocationsHub: React.FC<LocationsHubProps> = ({
  mode,
  onBook,
  onNavigate
}) => {
  const getPageInfo = () => {
    switch (mode) {
      case 'london':
        return {
          badge: 'London Practice',
          h1: 'Hip and Knee Surgeon in London & North East London',
          lead: 'Consultant orthopaedic care for London and North East London patients. Mr Shivakumar Shankar provides substantive NHS consultant care at Queen\'s Hospital and King George Hospital (BHRUT) alongside private consultations at leading Brentwood hospitals easily accessible from London.',
          isPrivate: false,
          isNHS: true
        };
      case 'essex':
        return {
          badge: 'Essex Practice',
          h1: 'Hip and Knee Surgeon in Essex',
          lead: 'Specialist hip and knee arthroplasty, robotic surgery, and sports joint care for Essex patients. Private consultations and surgery at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital, with NHS services across BHRUT.',
          isPrivate: true,
          isNHS: false
        };
      case 'spire':
        return {
          badge: 'Private Hospital Location',
          h1: 'Spire Hartswood Hospital — Brentwood, Essex',
          lead: 'Premier private hospital location for Mr Shivakumar Shankar\'s private hip and knee practice. Offering modern laminar flow operating theatres, advanced on-site MRI/CT diagnostics, and private en-suite inpatient rooms in Brentwood, Essex.',
          isPrivate: true,
          isNHS: false
        };
      case 'nuffield':
        return {
          badge: 'Private Hospital Location',
          h1: 'Nuffield Health Brentwood Hospital — Brentwood, Essex',
          lead: 'Private practice location for Mr Shivakumar Shankar, featuring advanced surgical suites, rapid on-site diagnostic imaging, dedicated physiotherapy gymnasium, and fixed-price self-funding packages.',
          isPrivate: true,
          isNHS: false
        };
      case 'queens':
        return {
          badge: 'NHS Hospital Location',
          h1: 'Queen\'s Hospital, Romford — BHRUT NHS Trust',
          lead: 'Substantive NHS Consultant base for Mr Shivakumar Shankar at Barking, Havering and Redbridge University Hospitals NHS Trust. Regional acute trauma and joint reconstruction centre in Romford, Greater London / Essex.',
          isPrivate: false,
          isNHS: true
        };
      case 'king-george':
        return {
          badge: 'NHS Hospital Location',
          h1: 'King George Hospital, Goodmayes — BHRUT NHS Trust',
          lead: 'Elective orthopaedic surgery centre for Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Dedicated clean-air orthopaedic surgical theatres and day surgery facility in Goodmayes, Ilford.',
          isPrivate: false,
          isNHS: true
        };
      default:
        return {
          badge: 'Hospital Affiliations',
          h1: 'Hospitals & Practice Locations in London & Essex',
          lead: 'Clear overview of Mr Shivakumar Shankar\'s NHS and private hospital locations across London and Essex. Mr Shankar holds a substantive NHS consultant appointment at BHRUT and conducts private practice at Spire Hartswood and Nuffield Brentwood Hospitals.',
          isPrivate: true,
          isNHS: true
        };
    }
  };

  const info = getPageInfo();

  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <a href="/hospitals-locations/" onClick={(e) => { e.preventDefault(); onNavigate('/hospitals-locations/'); }} className="hover:text-[#1B4965]">Hospitals &amp; Locations</a>
            {mode !== 'overview' && (
              <>
                <span>/</span>
                <span className="text-[#1B4965] font-bold">{info.badge}</span>
              </>
            )}
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            {info.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {info.h1}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            {info.lead}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={() => onBook()}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} /> Book Private Consultation
            </button>
            <a
              href="/contact/"
              onClick={(e) => { e.preventDefault(); onNavigate('/contact/'); }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Contact Medical Secretary
            </a>
          </div>
        </div>
      </section>

      {/* 2. LOCATIONS CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Clear Distinction Banner */}
          <div className="mb-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                Clinical Practice Structure
              </span>
              <h2 className="text-xl font-black text-slate-900">
                Distinct NHS and Private Hospital Services
              </h2>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Patients can consult Mr Shankar privately at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital in Brentwood, Essex. NHS patients are treated within Barking, Havering and Redbridge University Hospitals NHS Trust at Queen's and King George Hospitals via GP referral.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                Private Practice: Brentwood
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                NHS Trust: BHRUT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* PRIVATE HOSPITALS COLUMN */}
            <div className="space-y-6">
              <div className="border-b-2 border-[#1B4965] pb-2 flex items-center justify-between">
                <h3 className="text-xl font-black text-slate-900">
                  Private Practice Locations
                </h3>
                <span className="text-xs uppercase font-bold text-[#1B4965] bg-[#EAF1F6] px-2.5 py-0.5 rounded">
                  Insured &amp; Self-Paying
                </span>
              </div>

              {/* Spire Hartswood */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-[#1B4965] transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-black text-slate-900">
                      Spire Hartswood Hospital
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                      <MapPin size={13} className="text-[#1B4965]" /> Brentwood, Essex &bull; CM13 3LE
                    </p>
                  </div>
                  <a
                    href="/spire-hartswood-hospital/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital/'); }}
                    className="text-xs font-bold text-[#1B4965] hover:underline"
                  >
                    View Details →
                  </a>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. State-of-the-art laminar airflow theatres, on-site MRI/CT diagnostics, dedicated inpatient physiotherapy, and en-suite private rooms. 5 minutes from Brentwood Station (Elizabeth Line).
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <a
                    href={SPIRE_HARTSWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1B4965] hover:bg-[#13364B] text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Spire Online Portal</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => onBook('Spire Hartswood Hospital')}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>

              {/* Nuffield Brentwood */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-[#1B4965] transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-black text-slate-900">
                      Nuffield Health Brentwood Hospital
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                      <MapPin size={13} className="text-[#1B4965]" /> Brentwood, Essex &bull; CM15 8EH
                    </p>
                  </div>
                  <a
                    href="/nuffield-brentwood-hospital/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital/'); }}
                    className="text-xs font-bold text-[#1B4965] hover:underline"
                  >
                    View Details →
                  </a>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Shenfield Road, Brentwood, Essex CM15 8EH. Comprehensive joint replacement surgical suites, advanced diagnostic imaging, rehabilitation gym, and fixed-price packages for self-funding patients. Easily accessible from Shenfield Station.
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <a
                    href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Nuffield Online Portal</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => onBook('Nuffield Health Brentwood Hospital')}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* NHS HOSPITALS COLUMN */}
            <div className="space-y-6">
              <div className="border-b-2 border-sky-600 pb-2 flex items-center justify-between">
                <h3 className="text-xl font-black text-slate-900">
                  NHS Hospital Locations (BHRUT)
                </h3>
                <span className="text-xs uppercase font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded">
                  NHS Trust Practice
                </span>
              </div>

              {/* Queen's Hospital Romford */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-sky-500 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-black text-slate-900">
                      Queen's Hospital, Romford
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                      <MapPin size={13} className="text-sky-600" /> Romford, Greater London &bull; RM7 0AG
                    </p>
                  </div>
                  <a
                    href="/queens-hospital-romford/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/queens-hospital-romford/'); }}
                    className="text-xs font-bold text-sky-600 hover:underline"
                  >
                    View Details →
                  </a>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Barking, Havering and Redbridge University Hospitals NHS Trust. Major acute regional hospital and trauma centre where Mr Shankar was appointed Consultant Orthopaedic Surgeon in 2017 and has served in senior clinical leadership roles.
                </p>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <p><strong>NHS Access:</strong> Referrals must be made via your NHS GP through the NHS e-Referral Service (e-RS) addressed to the Orthopaedic Department at Queen's Hospital.</p>
                </div>
              </div>

              {/* King George Hospital Goodmayes */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-sky-500 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-black text-slate-900">
                      King George Hospital, Goodmayes
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                      <MapPin size={13} className="text-sky-600" /> Goodmayes, Ilford, Greater London &bull; IG3 8YB
                    </p>
                  </div>
                  <a
                    href="/king-george-hospital-goodmayes/"
                    onClick={(e) => { e.preventDefault(); onNavigate('/king-george-hospital-goodmayes/'); }}
                    className="text-xs font-bold text-sky-600 hover:underline"
                  >
                    View Details →
                  </a>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Barley Lane, Goodmayes, Ilford IG3 8YB. Part of Barking, Havering and Redbridge University Hospitals NHS Trust, serving as the high-volume elective orthopaedic surgery hub with clean-air theatre suites and day-case surgery units.
                </p>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <p><strong>NHS Access:</strong> Elective surgical procedures and routine orthopaedic clinics scheduled through BHRUT NHS booking coordination.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Regional Hub Navigation Links */}
          <div className="mt-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-lg font-black text-slate-900 mb-4">
              Explore Regional Services &amp; Hospital Profiles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <a
                href="/london-hip-knee-surgeon/"
                onClick={(e) => { e.preventDefault(); onNavigate('/london-hip-knee-surgeon/'); }}
                className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
              >
                📍 London Hip &amp; Knee Surgeon
              </a>
              <a
                href="/essex-hip-knee-surgeon/"
                onClick={(e) => { e.preventDefault(); onNavigate('/essex-hip-knee-surgeon/'); }}
                className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
              >
                📍 Essex Hip &amp; Knee Surgeon
              </a>
              <a
                href="/spire-hartswood-hospital/"
                onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital/'); }}
                className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
              >
                🏥 Spire Hartswood Hospital
              </a>
              <a
                href="/nuffield-brentwood-hospital/"
                onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital/'); }}
                className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
              >
                🏥 Nuffield Health Brentwood
              </a>
            </div>
          </div>

        </div>
      </section>
    </article>
  );
};
