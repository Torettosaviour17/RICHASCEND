// src/components/OurWorkSection.tsx
import { motion } from "framer-motion";
import { FaCogs, FaChartLine } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const OurWorkSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  
  // Animated Counter Component
  const AnimatedCounter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    const [displayValue, setDisplayValue] = useState("0");
    // const controls = useRef(motion.div);
    
    // Extract numeric value and suffix (like % or +)
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    
    useEffect(() => {
      if (!statsInView) return;
      
      let start = 0;
      const increment = numericValue / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplayValue(`${numericValue}${suffix}`);
          clearInterval(timer);
        } else {
          setDisplayValue(`${Math.floor(start)}${suffix}`);
        }
      }, 1000 / 60); // 60fps
      
      return () => clearInterval(timer);
    }, [statsInView, numericValue, suffix, duration]);

    return (
      <motion.div 
        className="text-3xl font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3, delay: duration }}
      >
        {displayValue}
      </motion.div>
    );
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Engineering excellence brought to life through innovative projects
            that shape the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                  <FaCogs className="text-red-600 dark:text-red-400 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-gray-800 dark:text-white">
                  Industrial Complex
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                State-of-the-art manufacturing facility designed for efficiency
                and sustainability. Our team implemented cutting-edge automation
                systems reducing energy consumption by 40%.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Structural",
                  "Automation",
                  "Sustainability",
                  "Logistics",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Visualization with Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
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
                <source src="/project-visualization.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
              <h3 className="text-2xl font-bold text-white">
                Sustainable Energy Plant
              </h3>
              <p className="text-gray-200">
                Renewable energy solution for urban environments
              </p>
            </div>
          </motion.div>

          {/* Stats Panel with Animated Counters */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => setStatsInView(true)}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Engineering Excellence Metrics
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Our projects consistently exceed industry standards for
                efficiency, safety, and sustainability.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "98%", label: "Project Success" },
                  { value: "40%", label: "Energy Savings" },
                  { value: "150+", label: "Projects Completed" },
                  { value: "99.7%", label: "Safety Record" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-xl">
                    {statsInView ? (
                      <AnimatedCounter value={stat.value} duration={2} />
                    ) : (
                      <div className="text-3xl font-bold">0</div>
                    )}
                    <div className="mt-2 text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;