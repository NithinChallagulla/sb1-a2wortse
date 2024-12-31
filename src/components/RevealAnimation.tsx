import React from 'react';

export const RevealAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black animate-[fadeOut_2s_ease-in-out_forwards]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-6xl font-serif animate-[scaleUp_1.5s_ease-out_forwards]">
          Happy New Year!
        </div>
      </div>
    </div>
  );
};
