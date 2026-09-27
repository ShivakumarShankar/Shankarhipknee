import React, { useEffect } from 'react';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';

interface DoctifyCarouselProps {
  className?: string;
}

export const DoctifyCarousel: React.FC<DoctifyCarouselProps> = ({ className = '' }) => {
  useEffect(() => {
    const scriptId = 'doctify-autoresize-script-0485624v';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.src = 'https://www.doctify.com/wv2/doctify-widget-autoresize-plugin.js?tenantId=athena-uk&widgetName=average-carousel-rating-widget&containerId=0485624v';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) {
        s.remove();
      }
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {/* Trust Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold">
            <ShieldCheck size={18} className="text-[#1B4965]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1B4965]">
                Verified Doctify Reviews
              </span>
              <span className="inline-flex items-center gap-0.5 text-[#E8A24C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#E8A24C] text-[#E8A24C]" />
                ))}
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Independent, verified patient ratings collected via Doctify
            </p>
          </div>
        </div>

        <a
          href="https://www.doctify.com/en-gb/specialist/shivakumar-shankar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4965] hover:text-[#13364B] bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-slate-50 transition-colors"
          title="View full Doctify profile for Mr Shivakumar Shankar"
        >
          <span>View Doctify Profile</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Embed Container */}
      <div className="w-full bg-white rounded-2xl border border-slate-200 p-2 sm:p-4 shadow-xs overflow-hidden">
        <iframe 
          id="0485624v" 
          className="doctify-widget w-full transition-all"
          src="https://www.doctify.com/wv2/average-carousel-rating-widget?containerId=0485624v&widgetName=average-carousel-rating-widget&tenantId=athena-uk&language=en&profileType=specialist&theme=darkNavy&slugs=shivakumar-shankar&dotsArrowsColor=4C5870" 
          width="100%" 
          height="320"
          frameBorder="0" 
          scrolling="no" 
          name="average-carousel-rating-widget"
          title="Mr Shivakumar Shankar - Doctify Reviews Carousel"
          style={{ minHeight: '300px', border: 0 }}
        >
          Browser doesn't support frames
        </iframe>
      </div>
    </div>
  );
};

export default DoctifyCarousel;
