import React, { useState } from 'react';
import { ShieldCheck, Award, Star, ExternalLink, MessageSquare, CheckCircle } from 'lucide-react';
import { DoctifyCarousel } from './DoctifyCarousel';
import { IwgcWidget } from './IwgcWidget';

interface CombinedReviewHubProps {
  className?: string;
  onNavigateToReviewsPage?: () => void;
  showFullPageLink?: boolean;
}

export const CombinedReviewHub: React.FC<CombinedReviewHubProps> = ({
  className = '',
  onNavigateToReviewsPage,
  showFullPageLink = true
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'doctify' | 'iwgc'>('both');

  return (
    <div className={`w-full ${className}`}>
      {/* Top Combined Trust Bar */}
      <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#1B4965] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
              <ShieldCheck size={26} className="text-[#E8A24C]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                  Dual-Source Verified Patient Feedback
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                  <CheckCircle size={12} /> 100% Independent
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Authentic, unedited patient reviews collected across both <strong className="text-[#1B4965]">Doctify</strong> and <strong className="text-emerald-800">iWantGreatCare</strong>.
              </p>
            </div>
          </div>

          {/* Quick External Profile Links */}
          <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200">
            <a
              href="https://www.doctify.com/en-gb/specialist/shivakumar-shankar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#1B4965] hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <ShieldCheck size={14} className="text-[#1B4965]" />
              <span>Doctify Profile</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-emerald-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <Award size={14} className="text-emerald-600" />
              <span>iWantGreatCare Profile</span>
              <ExternalLink size={12} />
            </a>

            {showFullPageLink && onNavigateToReviewsPage && (
              <button
                onClick={onNavigateToReviewsPage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E8A24C] hover:bg-[#D99136] text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <MessageSquare size={13} />
                <span>Full Review Hub</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter View Selector */}
        <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Filter Widget View:</span>
            <div className="inline-flex p-0.5 bg-slate-200/70 rounded-lg">
              <button
                onClick={() => setActiveTab('both')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'both' 
                    ? 'bg-white text-slate-900 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Combined (Both)
              </button>
              <button
                onClick={() => setActiveTab('doctify')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'doctify' 
                    ? 'bg-white text-[#1B4965] shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Doctify
              </button>
              <button
                onClick={() => setActiveTab('iwgc')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                  activeTab === 'iwgc' 
                    ? 'bg-white text-emerald-800 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                iWantGreatCare
              </button>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              Live widget sync
            </span>
            <span>GMC: 6038414</span>
          </div>
        </div>
      </div>

      {/* Widgets Display Area */}
      {activeTab === 'both' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Doctify Carousel Widget (Spans 7 or 8 cols on large screen) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <DoctifyCarousel />
          </div>

          {/* iWantGreatCare Widget (Spans 4 or 5 cols on large screen) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col items-center">
            <IwgcWidget />
            
            <div className="w-full mt-4 pt-3 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Read authentic feedback from patients treated at Spire Hartswood, Nuffield Health Brentwood, and Queen's Hospital.
              </p>
              <a
                href="https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar/reviews/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg text-xs font-bold bg-[#EAF1F6] text-[#1B4965] hover:bg-[#1B4965] hover:text-white transition-colors border border-slate-200"
              >
                <span>Write a Review on iWantGreatCare</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'doctify' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <DoctifyCarousel />
        </div>
      )}

      {activeTab === 'iwgc' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-xl mx-auto flex flex-col items-center">
          <IwgcWidget />
          <div className="w-full mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              iWantGreatCare is the UK's leading independent healthcare feedback platform, providing unmoderated and transparent patient reviews.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#1B4965] text-white hover:bg-[#13364B] transition-colors shadow-xs"
              >
                <span>View All iWantGreatCare Reviews</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar/reviews/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span>Leave a Review</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedReviewHub;
