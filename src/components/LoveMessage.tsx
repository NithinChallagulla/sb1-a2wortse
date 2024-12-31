import React from 'react';
import { Heart } from 'lucide-react';
import { photos } from '../constants/photos';

export const LoveMessage: React.FC = () => {
  return (
    <div className="relative p-8 my-12 mx-auto max-w-2xl text-center">
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url(${photos[0].url})`,
          backgroundSize: '200px',
          filter: 'grayscale(100%)'
        }}
      />
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <Heart
          className="w-8 h-8 text-red-500 animate-pulse"
          fill="currentColor"
        />
      </div>
      <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-serif mb-6 text-gray-800">My Dearest</h2>
        <p className="text-lg text-gray-700 leading-relaxed italic">
          [Your message will go here]
        </p>
        <div className="mt-6 text-sm text-gray-500">With all my love ❤️</div>
      </div>
    </div>
  );
};