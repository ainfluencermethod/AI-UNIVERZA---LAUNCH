
import React, { useEffect } from 'react';

export const VideoDemo: React.FC = () => {
  useEffect(() => {
    // Helper to inject scripts only once
    const injectScript = (src: string, isModule: boolean = false) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (isModule) script.type = 'module';
        document.body.appendChild(script);
      }
    };

    injectScript("https://fast.wistia.com/player.js");
    injectScript("https://fast.wistia.com/embed/td0bu2np6o.js", true);
  }, []);

  // Use a PascalCase constant cast to 'any' to avoid JSX intrinsic element errors for custom tags
  const WistiaPlayer = 'wistia-player' as any;

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden group">
      <style>{`
        wistia-player[media-id='td0bu2np6o']:not(:defined) {
          background: center / cover no-repeat url('https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/696182c0f8a93b5ecc52aa2d.webp');
          display: block;
          padding-top: 56.25%;
        }
      `}</style>

      {/* 
        The Player with Autoplay enabled. 
        Note: muted="true" is required for most browsers to allow autoplay without user interaction.
      */}
      {/* Fix: Using the WistiaPlayer constant to bypass intrinsic element TypeScript errors */}
      <WistiaPlayer 
        media-id="td0bu2np6o" 
        aspect="1.7777777777777777" 
        playbar="false" 
        play-button="false"
        auto-play="true"
        muted="true"
        settings-control="false"
        fullscreen-button="false"
      ></WistiaPlayer>

      {/* 
        Transparent Overlay: 
        This blocks all mouse events from reaching the iframe/player, 
        effectively making it "unpausable" via clicking the video area.
      */}
      <div className="absolute inset-0 z-30 bg-transparent cursor-default"></div>

      {/* Visual cue for muted autoplay if desired - usually VSLs have this */}
      <div className="absolute top-4 right-4 z-40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">V ŽIVO</span>
        </div>
      </div>
    </div>
  );
};