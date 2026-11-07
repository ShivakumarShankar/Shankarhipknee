import React from 'react';
import { SURGEON_NAME, SURGEON_ROLE } from '../constants';

const CANONICAL_PORTRAIT_SRC = '/profile.jpg';
const CANONICAL_PORTRAIT_ALT = 'Mr Shivakumar Shankar, Consultant Orthopaedic Hip and Knee Surgeon in London and Essex';

interface SurgeonPortraitProps {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const SurgeonPortrait: React.FC<SurgeonPortraitProps> = ({
  className = 'w-full h-auto object-cover object-top',
  alt = CANONICAL_PORTRAIT_ALT,
  width = 600,
  height = 605,
}) => {
  return (
    <img
      src={CANONICAL_PORTRAIT_SRC}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
};

export interface SurgeonPortraitCardProps {
  className?: string;
  imageMaxHeight?: string;
  alt?: string;
}

export const SurgeonPortraitCard: React.FC<SurgeonPortraitCardProps> = ({
  className = 'w-full max-w-md',
  imageMaxHeight = 'max-h-[520px]',
  alt = CANONICAL_PORTRAIT_ALT,
}) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white ${className}`}>
      <SurgeonPortrait 
        alt={alt} 
        width={600}
        height={605}
        className={`w-full h-auto object-cover object-top ${imageMaxHeight}`}
      />
      
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <p className="text-base font-bold text-slate-900 leading-snug">
          {SURGEON_NAME}
        </p>
        <p className="text-xs text-[#1B4965] font-semibold mt-0.5">
          {SURGEON_ROLE}
        </p>
      </div>
    </div>
  );
};

export default SurgeonPortrait;
