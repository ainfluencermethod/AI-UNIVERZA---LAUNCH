import React, { useState, useEffect } from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

interface NotificationData {
  name: string;
  location: string;
  time: string;
}

const mockPurchases: NotificationData[] = [
  { name: 'Marko', location: 'Ljubljana', time: 'pred 5 minutami' },
  { name: 'Ana', location: 'Maribor', time: 'pred 14 minutami' },
  { name: 'Luka', location: 'Koper', time: 'pred 22 minutami' },
  { name: 'Maja', location: 'Celje', time: 'pred 38 minutami' },
  { name: 'Jan', location: 'Kranj', time: 'pred 1 uro' },
  { name: 'Klara', location: 'Novo mesto', time: 'pred 45 minutami' },
  { name: 'Rok', location: 'Domžale', time: 'pred 3 urami' },
  { name: 'Nina', location: 'Velenje', time: 'pred 12 minutami' },
  { name: 'Tine', location: 'Izola', time: 'pred 52 minutami' },
  { name: 'Petra', location: 'Postojna', time: 'pred 2 urama' }
];

export const SocialProofNotification: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before first notification
    const startTimeout = setTimeout(() => {
      showNextNotification();
    }, 4000);

    return () => clearTimeout(startTimeout);
  }, []);

  const showNextNotification = () => {
    setIsVisible(true);
    
    // Hide after 6 seconds
    setTimeout(() => {
      setIsVisible(false);
      // Wait another 12 seconds before showing the next one
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % mockPurchases.length);
        showNextNotification();
      }, 12000);
    }, 6000);
  };

  const current = mockPurchases[currentIdx];

  return (
    <div 
      className={`fixed bottom-28 md:bottom-8 left-4 md:left-8 z-[150] transition-all duration-700 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-100 p-1.5 pr-6 flex items-center gap-3 md:gap-4 max-w-[280px] md:max-w-sm">
        {/* Map/Avatar Placeholder */}
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-gray-100">
          <div className="bg-[#f0f0f0] w-full h-full flex items-center justify-center">
            <MapPin size={18} className="text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          <p className="text-black font-bold text-[11px] md:text-sm truncate">
            {current.name} iz kraja {current.location}
          </p>
          <p className="text-gray-500 text-[10px] md:text-xs leading-tight truncate">
            Je ravnokar kupil <span className="text-gray-700 font-semibold">AI Universa</span>
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
             <span className="text-[9px] md:text-[10px] text-gray-400 font-medium italic">{current.time}</span>
             <div className="flex items-center gap-0.5 text-[#24a0ed] font-bold text-[9px] md:text-[10px]">
                <CheckCircle2 size={10} fill="currentColor" className="text-white" />
                <span>verified by Proof</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
