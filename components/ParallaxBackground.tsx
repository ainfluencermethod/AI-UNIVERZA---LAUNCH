import React, { useEffect, useState } from 'react';

export const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        requestAnimationFrame(() => {
            setScrollY(window.scrollY);
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Gradient Base - Static */}
      <div className="absolute inset-0 bg-[#000000]"></div>

      {/* Floating Orbs - Layer 1 (Slow) - White Mist */}
      <div 
        className="absolute top-[-10%] left-[10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] mix-blend-screen transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>

       {/* Floating Orbs - Layer 2 (Medium) - Gold Glow */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-brand-gold/5 rounded-full blur-[80px] mix-blend-screen transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      ></div>

      {/* Grid Texture - Layer 3 (Very Slow) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      ></div>
      
      {/* Accent Light - Layer 4 (Fast) - Bottom Gold/White */}
       <div 
        className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-brand-gold/5 rounded-full blur-[120px] mix-blend-screen transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      ></div>
    </div>
  );
};