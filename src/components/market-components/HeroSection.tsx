import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [darkMode, setDarkMode] = useState(true);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Save preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles: any[] = [];
    const particleCount = 100;

    // Create particles with color based on dark mode
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: darkMode
          ? `rgba(${Math.floor(Math.random() * 100 + 155)}, 
              ${Math.floor(Math.random() * 50)}, 
              ${Math.floor(Math.random() * 50)}, 
              ${Math.random() * 0.3 + 0.1})`
          : `rgba(${Math.floor(Math.random() * 100)}, 
              ${Math.floor(Math.random() * 100 + 100)}, 
              ${Math.floor(Math.random() * 100 + 155)}, 
              ${Math.random() * 0.3 + 0.1})`,
      });
    }

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;

      // Clear canvas with fade effect based on theme
      ctx.fillStyle = darkMode
        ? "rgba(15, 23, 42, 0.1)"
        : "rgba(249, 250, 251, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`relative min-h-screen flex items-center overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent ${
          darkMode ? "via-gray-900/80 to-gray-900" : "via-gray-50/80 to-gray-50"
        }`}
      />

      <div className="container relative z-10 mx-auto px-4 py-24 text-center">
        <button
          onClick={toggleMode}
          className={`absolute top-6 right-6 p-2 rounded-full ${
            darkMode
              ? "bg-gray-700 text-amber-300 hover:bg-gray-600"
              : "bg-gray-200 text-amber-700 hover:bg-gray-300"
          } transition-colors duration-300 z-20`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Powering the Future with Transformative Energy Solutions
        </h1>
        <p
          className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
            darkMode ? "text-gray-200" : "text-gray-600"
          }`}
        >
          Advanced transformers and solar technologies for a sustainable grid
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${
              darkMode
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            Explore Transformers
          </button>
          <button
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Discover Solar Solutions
          </button>
        </div>

        <div
          className={`aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border ${
            darkMode
              ? "bg-black/20 border-white/10"
              : "bg-white/80 border-gray-300"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
