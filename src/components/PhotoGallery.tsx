import React from 'react';
import { photos } from '../constants/photos';

export const PhotoGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 aspect-[4/3]"
        >
          <img
            src={photo.url}
            alt={photo.caption}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
            <p className="text-white text-xl font-serif mb-2">
              {photo.caption}
            </p>
            <p className="text-white/80 text-sm italic">
              {photo.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};