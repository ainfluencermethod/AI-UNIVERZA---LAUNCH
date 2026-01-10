import React from 'react';
import { Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">
                Matematika je <span className="text-[#FFD700] italic">Jasna</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl mx-auto">
                V življenju imaš vedno 3 izbire. Poglejmo si ceno vsake izmed njih.
            </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Do Nothing - Visually dimmed/grey to represent stagnation */}
            <div className="bg-[#0C0C0C] rounded-lg p-8 border border-white/5 flex flex-col group hover:border-white/10 transition-colors">
                <h3 className="text-[#444] font-black text-2xl uppercase tracking-wider mb-2 group-hover:text-gray-500 transition-colors">NIČ NE NAREDIŠ</h3>
                <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-black text-[#444] group-hover:text-gray-500 transition-colors">0€</span>
                    <span className="text-[#444] font-bold text-sm">vložka</span>
                </div>
                
                <div className="space-y-8 flex-1">
                    <div>
                        <p className="text-[10px] text-[#444] font-bold uppercase tracking-widest mb-2">REZULTAT</p>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Ostaneš točno tam, kjer si. Ista služba, isti šef, isti problemi.
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#444] font-bold uppercase tracking-widest mb-2">CENA NEUKREPANJA</p>
                        <p className="text-[#D36060] font-bold leading-relaxed">
                            Finančna stagnacija in inflacija ti požreta prihranke.
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#444] font-bold uppercase tracking-widest mb-2">ČAS DO USPEHA</p>
                        <p className="text-gray-500 font-medium">Nikoli</p>
                    </div>
                </div>
            </div>

            {/* Card 2: Traditional Business */}
            <div className="bg-[#0C0C0C] rounded-lg p-8 border border-white/5 flex flex-col group hover:border-white/10 transition-colors">
                <h3 className="text-[#666] font-black text-2xl uppercase tracking-wider mb-2 group-hover:text-gray-400 transition-colors">KLASIČEN BIZNIS</h3>
                <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-black text-white">10.000€+</span>
                    <span className="text-[#666] font-bold text-sm">vložka</span>
                </div>
                
                <div className="space-y-8 flex-1">
                    <div>
                        <p className="text-[10px] text-[#555] font-bold uppercase tracking-widest mb-2">REZULTAT</p>
                        <p className="text-gray-300 font-medium leading-relaxed">
                            Verjetno propadeš v prvem letu (statistika). Veliko stresa in birokracije.
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#555] font-bold uppercase tracking-widest mb-2">TVEGANJE</p>
                        <p className="text-[#F59E0B] font-bold leading-relaxed">
                            Visoko. Lahko izgubiš prihranke.
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-[#555] font-bold uppercase tracking-widest mb-2">ČAS DO USPEHA</p>
                        <p className="text-gray-300 font-medium">3 - 5 let</p>
                    </div>
                </div>
            </div>

            {/* Card 3: AI Univerza - Highlighted & Premium */}
            <div className="bg-[#111] rounded-lg p-8 border-2 border-[#FFD700] flex flex-col relative shadow-[0_0_60px_-20px_rgba(255,215,0,0.2)] md:-mt-6 md:-mb-6 z-10 transform md:scale-105">
                {/* Top Gold Tab */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#FFD700] rounded-b-lg shadow-[0_0_15px_#FFD700]"></div>

                <h3 className="text-[#FFD700] font-black text-2xl uppercase tracking-wider mb-2">AI UNIVERZA</h3>
                <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-6xl font-black text-white">497€</span>
                    <span className="text-gray-500 font-bold text-sm">vložka</span>
                </div>
                
                <div className="space-y-8 flex-1">
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">REZULTAT</p>
                        <p className="text-white font-bold text-lg leading-relaxed">
                            Nov vir prihodka brez velikih tveganj. Znanje prihodnosti.
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">TVEGANJE</p>
                        <p className="text-[#4ADE80] font-bold leading-relaxed">
                            Ničelno. (14-dnevna garancija).
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">ČAS DO USPEHA</p>
                        <p className="text-white font-bold text-xl">30 - 60 dni</p>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#FFD700] flex items-center justify-center">
                         <Check className="text-[#FFD700]" size={28} strokeWidth={4} />
                    </div>
                </div>
            </div>

        </div>

        {/* Visual Scrollbar Element from Design */}
        <div className="mt-20 h-2 bg-[#222] rounded-full w-full max-w-[90%] mx-auto overflow-hidden hidden md:block opacity-50">
             <div className="h-full w-full max-w-[40%] bg-[#333] rounded-full ml-auto"></div>
        </div>

      </div>
    </div>
  );
};