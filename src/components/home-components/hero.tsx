// src/components/Hero/HeroSection.tsx
  import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background with dark/light mode overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/engineering-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 dark:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div
          className={`max-w-3xl space-y-6 transition-all duration-700 ease-out ${
            isVideoLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            <span className="block">Engineering</span>
            <span className="block mt-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              The Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl dark:text-gray-300">
            Pioneering innovative solutions that bridge imagination with
            reality. Where precision meets passion to build a better tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Our Projects
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
