import React, { useEffect, useState } from 'react';
import { Building2, ShieldCheck, Timer } from 'lucide-react';

export const CheckoutForm: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    // Check if script is already present to prevent duplicates
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.body.appendChild(script);
    }

    const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 relative">
        {/* Header matching the screenshot design */}
        <div className="text-center mb-6 relative z-10">
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">
                Zaključi Naročilo
            </h3>
            
            {/* Holding Spot Timer */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full animate-pulse">
                <Timer size={12} className="text-red-500" />
                <span className="text-red-400 text-xs font-bold uppercase tracking-wide">
                    Tvoje mesto držimo še: {formatTime(timeLeft)}
                </span>
            </div>
        </div>

        {/* The White Card UI */}
        <div className="bg-white rounded-[1.5rem] p-5 md:p-6 w-full max-w-[92%] md:max-w-[340px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative z-10 flex flex-col items-center text-center animate-fade-in-up overflow-hidden">
             
             {/* Logo Placeholder */}
             <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center mb-4 p-3">
                 <Building2 className="text-red-500 w-full h-full" strokeWidth={1.5} />
             </div>

             <h4 className="text-gray-500 font-medium uppercase text-xs tracking-widest mb-2">AI Univerza</h4>
             
             <div className="flex items-baseline justify-center gap-1 mb-1 text-gray-900">
                 <span className="font-medium text-lg self-start mt-1">€</span>
                 <span className="font-bold text-5xl tracking-tighter">41.42</span>
                 <div className="flex flex-col items-start leading-none ml-1">
                     <span className="text-[10px] text-gray-500 font-medium uppercase">per</span>
                     <span className="text-[10px] text-gray-500 font-medium uppercase">month</span>
                 </div>
             </div>
             
             <p className="text-gray-400 text-xs font-medium mb-6">€497 billed annually</p>

             {/* Stripe Button Embed */}
             <div className="w-full mb-4">
                 {React.createElement('stripe-buy-button', {
                    'buy-button-id': "buy_btn_1SnQMfKa629ollckYB8EvdwD",
                    'publishable-key': "pk_live_51SmzQ5Ka629ollckyPHN4dsoZlkXWdeWOgt9dHOJtGfVax4a0AG2SIGkCfU3LFGqIz5NpVlbF2mKAv3ePQLzzVbE005rdo0y6s",
                 })}
             </div>

             {/* Guarantee Badge INSIDE the card */}
             <div className="flex items-center justify-center gap-2 mb-4 bg-gray-50 py-2 px-3 rounded-lg w-full">
                <ShieldCheck size={14} className="text-green-600" />
                <span className="text-[10px] font-bold text-gray-600 uppercase">14-Day Money Back Guarantee</span>
             </div>

             <div className="w-full">
                 <p className="text-[10px] text-gray-400 mb-3 font-medium">Supported payment methods:</p>
                 <div className="flex justify-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-3" alt="Stripe" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-3" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Amex_logo.svg" className="h-3" alt="Amex" />
                </div>
             </div>

        </div>
        
        {/* Footer Security Badge */}
        <div className="mt-8 text-center">
             <div className="flex items-center justify-center gap-2 text-[9px] text-gray-600 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                256-Bit SSL Encrypted Payment
             </div>
        </div>
    </div>
  );
};