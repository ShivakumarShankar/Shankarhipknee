import React, { useState } from 'react';
import { SURGEON_NAME, SURGEON_ROLE } from '../constants';

interface SurgeonPortraitProps {
  className?: string;
  alt?: string;
}

// Ordered list of candidate image sources to check
const CANDIDATE_SOURCES = [
  './Shankar%20Profile%20picture%20Final.jpg',
  './Shankar Profile picture Final.jpg',
  './Shankar%20Profile%20picture%20Final.jpeg',
  './Shankar Profile picture Final.jpeg',
  './ShankarProfilepictureFinal.jpg',
  './shankar_profile_picture_final.jpg',
  './profile.jpg',
  './profile.png',
  './profile.jpeg',
  './shankar_profile.png',
  './hero_image.png',
  './hero_image.jpg',
];

export const SurgeonPortrait: React.FC<SurgeonPortraitProps> = ({
  className = 'w-full h-auto object-cover object-top',
  alt = `${SURGEON_NAME} - Consultant Orthopaedic Hip & Knee Surgeon`,
}) => {
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleError = () => {
    if (sourceIndex < CANDIDATE_SOURCES.length - 1) {
      setSourceIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={CANDIDATE_SOURCES[sourceIndex]}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={handleError}
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
  alt = `${SURGEON_NAME} - Consultant Orthopaedic Surgeon`,
}) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white ${className}`}>
      <SurgeonPortrait 
        alt={alt} 
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
