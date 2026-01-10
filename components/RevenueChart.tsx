import React from 'react';
import { MoreHorizontal, TrendingUp, DollarSign } from 'lucide-react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

// Generate "student growth" data curve
const data = [
  { date: '1. Jan', value: 0 },
  { date: '3. Jan', value: 45 },
  { date: '5. Jan', value: 120 },
  { date: '7. Jan', value: 85 },
  { date: '9. Jan', value: 240 },
  { date: '11. Jan', value: 180 },
  { date: '13. Jan', value: 350 },
  { date: '15. Jan', value: 420 },
  { date: '17. Jan', value: 380 },
  { date: '19. Jan', value: 550 },
  { date: '21. Jan', value: 680 },
  { date: '23. Jan', value: 890 },
  { date: '25. Jan', value: 1100 },
  { date: '27. Jan', value: 1050 },
  { date: '29. Jan', value: 1450 },
  { date: '31. Jan', value: 1850 },
];

export const RevenueChart: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto relative group">
       {/* Glow effect */}
       <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-green-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

       {/* Card Container */}
       <div className="bg-[#0a0a0a] border border-white/10 rounded-[1.8rem] p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl z-10">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
              <div>
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     Total Revenue
                  </h3>
                  <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white tracking-tight">€15,240.50</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                      <span className="flex items-center text-green-500 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                          <TrendingUp size={10} className="mr-1" /> +124%
                      </span>
                      <span className="text-gray-500 text-xs font-medium">vs prejšnjih 30 dni</span>
                  </div>
              </div>
              <div className="bg-white/5 p-2 rounded-full border border-white/5 group-hover:bg-white/10 transition-colors">
                 <DollarSign className="text-brand-gold w-5 h-5" />
              </div>
          </div>

          {/* Chart Section */}
          <div className="relative h-40 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B67A" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#00B67A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', borderColor: '#222', borderRadius: '12px', fontSize: '12px', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)' }}
                    itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                    labelStyle={{ color: '#888', marginBottom: '4px' }}
                    cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }}
                    formatter={(value: number) => [`€${value}`, 'Earnings']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00B67A" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
          </div>
          
          {/* Timeframe selector mock */}
          <div className="flex justify-between bg-white/5 rounded-xl p-1 border border-white/5">
              {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((tf, i) => (
                  <button key={tf} className={`px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all ${i === 2 ? 'bg-white/15 text-white shadow-sm' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                      {tf}
                  </button>
              ))}
          </div>

       </div>
    </div>
  );
};