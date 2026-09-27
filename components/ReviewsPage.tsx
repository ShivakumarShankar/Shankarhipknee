import React, { useState } from 'react';
import { 
  Star, ShieldCheck, Award, ExternalLink, MessageSquare, CheckCircle, 
  Calendar, Phone, ArrowLeft, Filter, HeartHandshake, Check, ChevronRight
} from 'lucide-react';
import { 
  SURGEON_NAME, 
  SURGEON_TITLE, 
  SURGEON_ROLE, 
  TESTIMONIALS, 
  MOBILE_PHONE, 
  LANDLINE_PHONE, 
  SECRETARY_NAME 
} from '../constants';
import { Testimonial } from '../types';
import { CombinedReviewHub } from './CombinedReviewHub';

interface ReviewsPageProps {
  onBook: () => void;
  onNavigateHome: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  onBook,
  onNavigateHome
}) => {
  const [selectedProcedure, setSelectedProcedure] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<'all' | 'Doctify' | 'iWantGreatCare'>('all');

  const procedures = [
    { id: 'all', label: 'All Procedures' },
    { id: 'hip', label: 'Hip Replacements' },
    { id: 'knee', label: 'Knee Replacements' },
    { id: 'arthroscopy', label: 'Keyhole & Arthroscopy' }
  ];

  const filteredTestimonials = TESTIMONIALS.filter(t => {
    // Filter by procedure
    if (selectedProcedure === 'hip' && !t.procedure.toLowerCase().includes('hip')) return false;
    if (selectedProcedure === 'knee' && !t.procedure.toLowerCase().includes('knee')) return false;
    if (selectedProcedure === 'arthroscopy' && !t.procedure.toLowerCase().includes('arthroscopy') && !t.procedure.toLowerCase().includes('repair')) return false;

    // Filter by source
    if (selectedSource !== 'all' && t.source !== selectedSource) return false;

    return true;
  });

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#F8FAFC]">
      {/* Breadcrumb & Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <button 
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4965] hover:text-[#13364B] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="cursor-pointer hover:underline" onClick={onNavigateHome}>Home</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Combined Reviews</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F6] border border-slate-200 text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <ShieldCheck size={15} />
            Dual-Platform Patient Reviews
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Combined Patient Reviews
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Verified, unedited patient ratings gathered from both <strong className="text-[#1B4965]">Doctify</strong> and <strong className="text-emerald-800">iWantGreatCare</strong> for {SURGEON_TITLE} {SURGEON_NAME}.
          </p>

          {/* Key Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs text-center">
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#E8A24C] text-[#E8A24C]" />
                ))}
              </div>
              <p className="text-xs font-extrabold text-slate-900">5.0 Star Average</p>
              <p className="text-[11px] text-slate-500">Dual platform rating</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs text-center">
              <ShieldCheck size={18} className="text-[#1B4965] mx-auto mb-1" />
              <p className="text-xs font-extrabold text-slate-900">Doctify Verified</p>
              <p className="text-[11px] text-slate-500">Independent moderation</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs text-center">
              <Award size={18} className="text-emerald-700 mx-auto mb-1" />
              <p className="text-xs font-extrabold text-slate-900">iWantGreatCare</p>
              <p className="text-[11px] text-slate-500">Trusted NHS & Private</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs text-center">
              <CheckCircle size={18} className="text-blue-600 mx-auto mb-1" />
              <p className="text-xs font-extrabold text-slate-900">GMC Specialist</p>
              <p className="text-[11px] text-slate-500">Reg: 6062754</p>
            </div>
          </div>
        </div>
      </div>

      {/* LIVE DUAL-SOURCE WIDGET SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <CombinedReviewHub 
          showFullPageLink={false} 
        />
      </div>

      {/* DETAILED TESTIMONIALS & CASE HISTORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1B4965]">
                Patient Experiences
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Verified Surgical Outcomes & Feedback
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Read what patients have to say about their recovery, pain relief, and surgical care.
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Source Filter */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-bold">
                <button
                  onClick={() => setSelectedSource('all')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    selectedSource === 'all' 
                      ? 'bg-white text-slate-900 shadow-2xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Sources
                </button>
                <button
                  onClick={() => setSelectedSource('Doctify')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    selectedSource === 'Doctify' 
                      ? 'bg-white text-[#1B4965] shadow-2xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Doctify
                </button>
                <button
                  onClick={() => setSelectedSource('iWantGreatCare')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    selectedSource === 'iWantGreatCare' 
                      ? 'bg-white text-emerald-800 shadow-2xs' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  iWantGreatCare
                </button>
              </div>

              {/* Procedure Filter */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-bold">
                {procedures.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProcedure(p.id)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      selectedProcedure === p.id 
                        ? 'bg-white text-slate-900 shadow-2xs' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredTestimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAFC] rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs hover:border-[#1B4965] transition-all"
              >
                <div>
                  {/* Card Header: Source Badge & Rating */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <Star key={i} size={13} className="fill-[#E8A24C] text-[#E8A24C]" />
                      ))}
                    </div>

                    {t.source === 'Doctify' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#1B4965] border border-blue-200">
                        <ShieldCheck size={11} /> Doctify
                      </span>
                    ) : t.source === 'iWantGreatCare' ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Award size={11} /> iWantGreatCare
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                        <CheckCircle size={11} /> Verified
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed mb-6">
                    “{t.text}”
                  </p>
                </div>

                {/* Footer Details */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">{t.author}</p>
                      <p className="text-xs font-semibold text-[#1B4965]">{t.procedure}</p>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium text-right">
                      {t.hospital}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No reviews found matching the selected filter criteria.</p>
              <button
                onClick={() => { setSelectedProcedure('all'); setSelectedSource('all'); }}
                className="mt-3 text-xs font-bold text-[#1B4965] hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* WHY BOTH PLATFORMS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-[#1B4965] to-[#13364B] rounded-2xl text-white p-8 sm:p-12 shadow-md">
          <div className="max-w-3xl">
            <span className="text-[#E8A24C] font-bold uppercase tracking-wider text-xs">
              Commitment to Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
              Why We Provide Reviews From Both Doctify & iWantGreatCare
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
              Choosing an orthopaedic surgeon is an important personal decision. Mr Shankar believes in complete transparency, providing patients with access to reviews from both major independent medical review portals in the United Kingdom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-xl p-5 border border-white/15 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8A24C] text-slate-900 flex items-center justify-center font-bold mb-3">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-bold text-sm text-white mb-1">Independent Moderation</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Neither platform can be edited, altered, or deleted by clinicians, ensuring genuine patient viewpoints.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-5 border border-white/15 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8A24C] text-slate-900 flex items-center justify-center font-bold mb-3">
                  <Award size={18} />
                </div>
                <h3 className="font-bold text-sm text-white mb-1">Dual Verification</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Doctify verifies private surgical outcomes, while iWantGreatCare covers both NHS and independent hospital feedback.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-5 border border-white/15 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8A24C] text-slate-900 flex items-center justify-center font-bold mb-3">
                  <HeartHandshake size={18} />
                </div>
                <h3 className="font-bold text-sm text-white mb-1">Informed Choice</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Patients can read experiences of specific procedures including robotic arthroplasty, recovery times, and bedside manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW GUIDE FOR EXISTING PATIENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">
              For Existing Patients
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Share Your Feedback
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              If you have recently had surgery or a consultation with Mr Shankar, your review helps future patients make informed decisions about their joint care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Review on Doctify Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#1B4965] transition-colors">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B4965] text-white flex items-center justify-center font-bold">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Review on Doctify</h3>
                    <p className="text-[11px] text-slate-500">Quick 2-minute verified review</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Doctify enables patients who have undergone outpatient consultations or surgery at Spire Hartswood or Nuffield Health Brentwood to rate their experience.
                </p>
              </div>

              <a
                href="https://www.doctify.com/en-gb/specialist/shivakumar-shankar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#1B4965] text-white text-xs font-bold hover:bg-[#13364B] transition-colors shadow-xs"
              >
                <span>Leave Review on Doctify</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Review on iWantGreatCare Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-600 transition-colors">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Review on iWantGreatCare</h3>
                    <p className="text-[11px] text-slate-500">UK's primary independent healthcare review</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  iWantGreatCare welcomes reviews from private patients at Spire and Nuffield, as well as NHS patients from Queen's Hospital Romford.
                </p>
              </div>

              <a
                href="https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar/reviews/new"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors shadow-xs"
              >
                <span>Leave Review on iWantGreatCare</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAF1F6] border border-slate-200 rounded-2xl p-8 sm:p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Book an Initial Consultation With Mr Shankar
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 mb-6">
            Discuss your hip or knee symptoms directly with an experienced fellowship-trained consultant in Brentwood, Essex.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBook}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Calendar size={15} />
              Book Private Consultation
            </button>
            <a
              href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`}
              className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center gap-2"
            >
              <Phone size={15} className="text-[#1B4965]" />
              Call Secretary: {MOBILE_PHONE}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ReviewsPage;
