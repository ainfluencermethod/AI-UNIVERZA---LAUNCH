import React from 'react';
import { Star, Heart, MessageCircle } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    type: 'review',
    author: 'Jocelynn',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jocelynn',
    rating: 5,
    content: '10/10',
    subtext: 'Napisano 31. decembra 2025, 5 dni po nakupu.'
  },
  {
    id: 2,
    type: 'review',
    author: 'Brentney Parks',
    initials: 'BP',
    rating: 5,
    content: 'Brez dvoma neverjetna priložnost za učenje od dveh velikanov! Če to berete in še niste naredili koraka naprej z osebnim dostopom, kaj še čakate?',
    subtext: 'Napisano 18. decembra 2025, 1 mesec po nakupu.'
  },
  {
    id: 3,
    type: 'message',
    author: 'Cash chaser',
    time: '6:26 AM',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Cash',
    content: 'mimogrede, hvala za ta tečaj, v 4 dneh sem lahko zaslužil 8,5 tisoč',
    reaction: '1'
  },
  {
    id: 4,
    type: 'message',
    author: 'Multi Sturm',
    time: 'Saturday 2:14 PM',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Multi',
    content: 'Hej Max, pridružil sem se tvojemu programu 25. decembra. Od takrat sem ustvaril 1,7 tisoč prihodkov na Fanvue. Brez predhodnega znanja ali česarkoli. Si odprt za sodelovanje?'
  }
];

const ReviewCard: React.FC<{ data: any }> = ({ data }) => {
  if (data.type === 'review') {
    return (
      <div className="w-[280px] md:w-[350px] bg-[#18181b] p-6 rounded-2xl border border-white/10 shrink-0 flex flex-col justify-between h-auto min-h-[200px]">
        <div>
            <div className="flex items-center gap-3 mb-4">
            {data.initials ? (
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm">
                {data.initials}
                </div>
            ) : (
                <img src={data.avatar} alt={data.author} className="w-10 h-10 rounded-full bg-gray-800" />
            )}
            <div>
                <div className="text-white font-bold text-sm">{data.author}</div>
                <div className="flex text-yellow-500 gap-0.5 mt-0.5">
                {[...Array(data.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                ))}
                </div>
            </div>
            </div>
            <div className="text-gray-300 text-sm mb-4 leading-relaxed font-medium">
            {data.content}
            </div>
        </div>
        <div className="text-gray-500 text-[10px] mt-2 border-t border-white/5 pt-3">
          {data.subtext}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[280px] md:w-[350px] bg-[#18181b] p-6 rounded-2xl border border-white/10 shrink-0 h-auto">
      <div className="flex items-center gap-2 mb-3">
        <img src={data.avatar} alt={data.author} className="w-6 h-6 rounded-full bg-gray-800" />
        <span className="text-gray-500 text-xs font-bold">{data.author}</span>
        <span className="text-gray-600 text-[10px]">• {data.time}</span>
      </div>
      
      <div className="bg-[#27272a] p-3 rounded-2xl rounded-tl-none text-gray-200 text-sm mb-2 inline-block shadow-sm">
        {data.content}
      </div>
      
      {data.reaction && (
         <div className="flex mb-2">
            <div className="bg-[#27272a] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center gap-1 border border-white/5">
                <Heart size={10} className="fill-red-500 text-red-500" /> {data.reaction}
            </div>
         </div>
      )}

      {data.image && (
        <div className="rounded-xl overflow-hidden border border-white/5 mt-2 bg-black">
          <img src={data.image} alt="Proof" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      )}
    </div>
  );
};

export const Reviews: React.FC = () => {
  return (
    <div className="pb-16 pt-12 overflow-hidden relative bg-dark-bg">
       
       {/* Trust Header */}
       <div className="text-center mb-12 relative z-30 px-4">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-md">
                <div className="flex -space-x-1">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="bg-green-500 rounded-full p-1">
                            <Star size={12} className="text-black fill-black" />
                        </div>
                    ))}
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <span className="text-white font-bold">4.9/5</span>
                <span className="text-gray-400 text-sm">Povprečna ocena</span>
            </div>
            <h2 className="text-3xl font-serif font-black text-white mt-6">Kaj pravijo člani?</h2>
       </div>

       {/* Fade edges */}
       <div className="absolute left-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-r from-dark-bg to-transparent z-20 pointer-events-none"></div>
       <div className="absolute right-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-l from-dark-bg to-transparent z-20 pointer-events-none"></div>

       <div className="flex gap-4 md:gap-6 overflow-hidden">
          {/* First loop */}
          <div className="flex gap-4 md:gap-6 animate-scroll shrink-0 items-start">
            {reviewsData.map((item, i) => (
                <ReviewCard key={`r1-${i}`} data={item} />
            ))}
          </div>
          {/* Second loop */}
          <div className="flex gap-4 md:gap-6 animate-scroll shrink-0 items-start">
             {reviewsData.map((item, i) => (
                <ReviewCard key={`r2-${i}`} data={item} />
            ))}
          </div>
           {/* Third loop for smoothness */}
           <div className="flex gap-4 md:gap-6 animate-scroll shrink-0 items-start">
             {reviewsData.map((item, i) => (
                <ReviewCard key={`r3-${i}`} data={item} />
            ))}
          </div>
       </div>
    </div>
  );
};