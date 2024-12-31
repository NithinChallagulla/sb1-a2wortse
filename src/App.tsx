import React from 'react';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveMessage } from './components/LoveMessage';
import { Timer } from './components/Timer';
import { Heart } from 'lucide-react';

function App() {
  return (
    <>
      <Timer />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
        <header className="py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
            <h1 className="text-4xl font-serif text-gray-800">Our Love Story</h1>
            <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
          </div>
          <p className="text-gray-600 italic">A journey of love and happiness</p>
        </header>

        <main className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <LoveMessage />
            <PhotoGallery />
          </div>
        </main>

        <footer className="text-center py-6 text-gray-600 bg-white/50">
          <p>Made with ❤️ for my beloved wife</p>
        </footer>
      </div>
    </>
  );
}

export default App;