import React from 'react';
import { ShieldCheck, ExternalLink, Award } from 'lucide-react';

interface IwgcWidgetProps {
  className?: string;
  showCardHeader?: boolean;
}

export const IwgcWidget: React.FC<IwgcWidgetProps> = ({ 
  className = '',
  showCardHeader = true 
}) => {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {showCardHeader && (
        <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Award size={18} className="text-emerald-700" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  iWantGreatCare Reviews
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Verified
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                UK's leading independent healthcare review platform
              </p>
            </div>
          </div>

          <a
            href="https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4965] hover:text-[#13364B] bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-slate-50 transition-colors"
            title="View full iWantGreatCare profile for Mr Shivakumar Shankar"
          >
            <span>View IWGC Profile</span>
            <ExternalLink size={12} />
          </a>
        </div>
      )}

      {/* Embed Container with the exact requested iframe */}
      <div className="w-full flex justify-center items-center py-2">
        <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-xs flex justify-center items-center overflow-hidden">
          <iframe 
            height="260" 
            width="320" 
            src="https://widgets.iwgc.info/reviewables/674dbdc5d0cd83598a3bc1e4?view=compact" 
            frameBorder="0"
            title="iWantGreatCare Review Widget for Mr Shivakumar Shankar"
            style={{ border: 0, maxWidth: '100%' }}
          >
            Browser doesn't support frames
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default IwgcWidget;
