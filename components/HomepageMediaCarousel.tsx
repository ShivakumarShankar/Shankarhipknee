import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  X, 
  ExternalLink,
  Sparkles,
  Calendar,
  Tag
} from 'lucide-react';
import { DEFAULT_MEDIA, MediaItem } from './MediaGalleryHub';
import { SOCIAL_LINKS, SURGEON_NAME } from '../constants';

interface HomepageMediaCarouselProps {
  onViewAllMedia: () => void;
}

// Exactly 6 latest items in chronological order (newest first), strictly maintaining milestone distinctions
const HOMEPAGE_MEDIA_IDS = [
  'post-nuffield-brentwood-mako-2026',  // 29 September 2026 — Nuffield Health Brentwood MAKO milestone
  'post-bhrut-personal-100-mako-2026',  // 24 September 2026 — Personal 100 MAKO milestone at BHRUT
  'bhrut-100th-robotic',                // 18 January 2023 — BHRUT Departmental 100th Robotic Milestone
  'bhrut-bones-r-us',                   // 16 August 2021 — BHR Hospitals Bones R Us elective sprint
  'bhrut-super-clinics',                // 13 July 2021 — BHR Hospitals Super Clinics tackle waiting lists
  'bhrut-attend-anywhere'               // 30 July 2020 — BHR Hospitals Attend Anywhere virtual clinics
];

export const HomepageMediaCarousel: React.FC<HomepageMediaCarouselProps> = ({ onViewAllMedia }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Retrieve existing items from DEFAULT_MEDIA, keeping exact data
  const carouselItems: MediaItem[] = HOMEPAGE_MEDIA_IDS
    .map(id => DEFAULT_MEDIA.find(item => item.id === id))
    .filter((item): item is MediaItem => Boolean(item));

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Scroll by card width approx
      const card = container.querySelector('[data-carousel-card]') as HTMLElement;
      const step = card ? card.offsetWidth + 16 : 340;
      container.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="media" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-[#1B4965] shadow-2xs mb-3">
              <Sparkles size={13} className="text-[#E8A24C]" />
              <span>Professional News &amp; Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest News &amp; Professional Updates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Follow Mr Shivakumar Shankar for professional updates, patient education and information about developments in hip and knee surgery.
            </p>
          </div>

          {/* Discreet navigation arrows for desktop */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous update"
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-[#1B4965] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs transition-all cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next update"
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-[#1B4965] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-2xs transition-all cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div 
          ref={scrollRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Latest News & Professional Updates"
          className="flex gap-5 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory focus:outline-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {carouselItems.map((item, index) => {
            const cardImg = item.src || item.thumbnail || './profile.jpg';
            return (
              <article
                key={item.id}
                data-carousel-card
                className="w-[84%] sm:w-[58%] md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)] shrink-0 snap-start flex flex-col bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm transition-all duration-200 overflow-hidden"
              >
                {/* 1. Existing Image with fixed aspect-ratio */}
                <div className="relative aspect-16/10 w-full bg-slate-900 overflow-hidden shrink-0">
                  <img
                    src={cardImg}
                    alt={item.altText || item.title}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {item.duration && (
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Card Content (Equal heights ensured via flex-1 flex flex-col justify-between) */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* 2 & 3. Category label & Event Date */}
                    <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2 py-0.5 rounded shrink-0">
                        {item.category}
                      </span>
                      {item.date && (
                        <span className="text-[11px] font-medium text-slate-500 truncate" title={item.date}>
                          {item.date}
                        </span>
                      )}
                    </div>

                    {/* 4. Existing headline */}
                    <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
                      {item.title}
                    </h3>

                    {/* 5. Max ~2 lines of description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mt-2">
                      {item.description || item.caption || ''}
                    </p>
                  </div>

                  {/* 6. Small Read more action */}
                  <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-xs font-bold text-[#1B4965] hover:text-[#13364B] inline-flex items-center gap-1.5 group cursor-pointer transition-colors"
                      aria-label={`Read more about ${item.title}`}
                    >
                      <span>Read more</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform text-[#E8A24C]" />
                    </button>

                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-medium text-slate-400 hover:text-slate-600 inline-flex items-center gap-1 transition-colors"
                        title="View original publication"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* VIEW ALL: Navigates to /media-social */}
        <div className="mt-8 text-center">
          <a
            href="/media-social"
            onClick={(e) => {
              e.preventDefault();
              onViewAllMedia();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-[#1B4965] text-[#1B4965] hover:text-[#13364B] text-xs font-bold uppercase tracking-wider transition-all shadow-2xs group cursor-pointer"
          >
            <span>View all Media &amp; Social</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* SOCIAL LINKS: Restrained presentation below View all */}
        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Follow {SURGEON_NAME}
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <a
              href="https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ShankarHipKnee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors"
            >
              X (@ShankarHipKnee)
            </a>
            <a
              href="https://www.youtube.com/@ShankarHipKnee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/ShankarHipKnee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@ShankarHipKnee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors"
            >
              Bupa Profile
            </a>
          </div>
        </div>

      </div>

      {/* Accessible Detail Modal for "Read more →" */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2.5 py-0.5 rounded">
                  {selectedItem.category}
                </span>
                {selectedItem.date && (
                  <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                    <Calendar size={12} /> {selectedItem.date}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>

            {selectedItem.src && (
              <div className="rounded-xl overflow-hidden aspect-video bg-slate-900 mb-5 border border-slate-200">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.altText || selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h3 id="modal-title" className="text-xl font-bold text-slate-900 leading-snug mb-3">
              {selectedItem.title}
            </h3>

            {selectedItem.quote && (
              <blockquote className="bg-[#F8FAFC] border-l-4 border-[#1B4965] p-4 rounded-r-lg my-4 text-xs sm:text-sm text-slate-700 italic">
                {selectedItem.quote}
              </blockquote>
            )}

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
              {selectedItem.description}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                {selectedItem.externalUrl && (
                  <a
                    href={selectedItem.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1B4965] hover:bg-[#13364B] text-white text-xs font-bold transition-colors"
                  >
                    <span>View Original Source</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <a
                  href="/media-social"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedItem(null);
                    onViewAllMedia();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Open Full Archive</span>
                  <ArrowRight size={13} />
                </a>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
