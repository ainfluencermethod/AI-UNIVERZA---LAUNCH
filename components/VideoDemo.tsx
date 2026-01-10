import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

export const VideoDemo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [isHovering, setIsHovering] = useState(false);

  // Sample video URL
  const videoSrc = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force autoplay safely
    const playVideo = async () => {
        try {
            await video.play();
        } catch (err) {
            console.log("Autoplay prevented by browser (user interaction needed)", err);
        }
    };
    playVideo();

    const handleTimeUpdate = () => {
      const current = video.currentTime;
      const total = video.duration || 1;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    };

    const handleLoadedMetadata = () => {
       setDuration(formatTime(video.duration));
    };
    
    // Loop manually if needed safely
    const handleEnded = () => {
        video.play().catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleUnmute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
        // Only allow unmute, do not allow mute again via main click
        if (isMuted) {
            videoRef.current.muted = false;
            setIsMuted(false);
        }
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const toggleFullscreen = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (videoRef.current) {
          // @ts-ignore - Vendor prefixes might be needed in some envs
          if (videoRef.current.requestFullscreen) {
              videoRef.current.requestFullscreen();
          } else if ((videoRef.current as any).webkitRequestFullscreen) {
              (videoRef.current as any).webkitRequestFullscreen();
          }
      }
  };

  return (
    <div 
        ref={containerRef}
        className="relative w-full aspect-video rounded-3xl overflow-hidden group select-none bg-black cursor-pointer shadow-2xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleUnmute}
    >
      <video 
          ref={videoRef}
          src={videoSrc}
          poster="https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/695ed3f335d7545cb1dc8068.webp"
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          muted
          loop
      />

      {/* Overlay - Visible only when muted */}
      <div 
        className={`absolute inset-0 flex items-center justify-center z-20 bg-black/30 backdrop-blur-[1px] transition-all duration-500 ${!isMuted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
         <div className="flex flex-col items-center gap-6 animate-pulse">
             {/* Text Instruction */}
             <div className="bg-black/90 backdrop-blur-xl border border-brand-gold/50 px-8 py-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-sm md:text-lg uppercase tracking-widest flex items-center gap-3">
                    <VolumeX size={24} className="text-brand-gold" />
                    Klikni video in vključi zvok
                </span>
             </div>
         </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${isMuted ? 'opacity-0' : 'opacity-100'}`}>
         <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto">
            
            {/* Unskippable Progress Bar */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden relative">
               <div 
                   className="h-full bg-brand-gold shadow-[0_0_10px_rgba(255,215,0,0.6)]"
                   style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
               ></div>
            </div>

            <div className="flex justify-between items-center text-white px-1">
                <div className="flex items-center gap-4">
                    {/* Mute Toggle */}
                    <button 
                        onClick={toggleMute}
                        className="hover:text-brand-gold transition-colors p-1"
                    >
                         {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>

                    <span className="text-xs font-mono font-medium text-gray-400">{currentTime} / {duration}</span>
                </div>
                
                <div className="flex items-center gap-3">
                   <button onClick={toggleFullscreen} className="hover:text-brand-gold transition-colors p-1">
                       <Maximize2 size={18} />
                   </button>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};