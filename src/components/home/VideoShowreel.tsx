import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';
import { Button } from '../ui/Button';

export function VideoShowreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log('Video play interrupted:', e);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleMaximize = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Cursor tracker
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Autoplay attempt on mount (always start muted)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Normal if browsers block un-interacted autoplay
          setIsPlaying(false);
        });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full h-screen bg-brand-charcoal overflow-hidden flex items-center justify-center cursor-none"
      id="video-showreel-section"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://assets.mixkit.co/videos/preview/mixkit-entrance-of-a-modern-luxury-house-4413-large.mp4"
        className="absolute inset-0 w-full h-full object-cover brightness-75 scale-[1.01]"
        loop
        muted={isMuted}
        playsInline
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Dark tint overlay with rich textures */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_0)] bg-[size:20px_20px]" />

      {/* Overlay content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center h-full pointer-events-none select-none">
        <div className="animate-fade-in space-y-4">
          <div className="flex items-center justify-center space-x-2 text-brand-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
            <Film size={10} />
            <span>Cinematic Walkthrough</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] font-bold">
            EcoNest Sanctuary
          </h1>
          
          <p className="font-sans text-xs sm:text-sm md:text-base text-brand-sand/90 tracking-widest uppercase font-light max-w-2xl mx-auto pt-3">
            Step Into a Realm Where Nature Merges with Architecture
          </p>
        </div>
      </div>

      {/* Interactive Custom Follower Cursor */}
      <div
        className="hidden md:block absolute pointer-events-none z-30 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute w-20 h-20 rounded-full border border-brand-gold/40 animate-[spin_10s_linear_infinite]" />
          
          {/* Inner glass orb */}
          <div className="w-16 h-16 rounded-full bg-brand-cream/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
            {isPlaying ? (
              <Pause size={18} className="text-brand-gold animate-pulse" />
            ) : (
              <Play size={18} className="text-brand-gold fill-brand-gold ml-0.5 animate-pulse" />
            )}
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="absolute bottom-8 left-0 w-full z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={togglePlay}
              className="p-3 bg-brand-cream/10 hover:bg-brand-cream/20 backdrop-blur-sm text-white rounded-none border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-white" />}
            </button>
            
            <button
              onClick={toggleMute}
              className="p-3 bg-brand-cream/10 hover:bg-brand-cream/20 backdrop-blur-sm text-white rounded-none border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-widest text-brand-sand/65">
              Press anywhere to {isPlaying ? 'Pause' : 'Play'}
            </span>
            <button
              onClick={handleMaximize}
              className="p-3 bg-brand-cream/10 hover:bg-brand-cream/20 backdrop-blur-sm text-white rounded-none border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Fullscreen"
            >
              <Maximize size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Giant Click Handler Area (captures simple click to play/pause) */}
      <div
        className="absolute inset-0 z-0 cursor-none"
        onClick={togglePlay}
      />
    </section>
  );
}
