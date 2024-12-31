import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { TIMER_CONFIG } from '../config/timing';

export const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(5);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateTimer = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, Math.ceil((TIMER_CONFIG.REVEAL_DELAY - elapsed) / 1000));
      
      if (remaining === 0) {
        setIsReady(true);
        return;
      }
      
      setTimeLeft(remaining);
    };

    const timer = setInterval(updateTimer, 100);
    updateTimer();

    return () => clearInterval(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
        <div className="text-center p-8 rounded-lg">
          <Clock className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-serif text-white mb-4">Our Love Story Unveils In</h2>
          <div className="text-4xl font-mono text-red-500 font-bold">{timeLeft}s</div>
        </div>
      </div>
    );
  }

  return null;
};