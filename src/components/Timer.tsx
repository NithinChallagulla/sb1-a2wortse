import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { RevealAnimation } from './RevealAnimation';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Opening time: 12:17 AM IST, 1 October 2025
const TARGET_DATE = new Date("2025-10-01T00:17:00+05:30").getTime();

export const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isReady, setIsReady] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setIsReady(true);
        setShowReveal(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center p-8 rounded-lg">
          <Clock className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-serif text-white mb-6">Our Love Story Unveils In</h2>
          <div className="grid grid-cols-4 gap-4 text-center mb-4">
            <div>
              <div className="text-3xl font-mono text-red-500 font-bold">{timeLeft.days}</div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-red-500 font-bold">{timeLeft.hours}</div>
              <div className="text-sm text-gray-400">Hours</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-red-500 font-bold">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div>
              <div className="text-3xl font-mono text-red-500 font-bold">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-400">Seconds</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Until 12:17 AM IST, 1 October 2025</p>
        </div>
      </div>
    );
  }

  return showReveal ? <RevealAnimation /> : null;
};
