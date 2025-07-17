// src/components/SmartSolutionsSection.tsx
import { motion } from "framer-motion";
import { FaLeaf, FaLightbulb, FaCogs } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const SmartSolutionsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Smart Solutions for a Warming World
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative engineering approaches to combat climate change and build
            resilient infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sustainable Technology Visualization with Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden h-[500px] shadow-xl"
          >
            <div className="absolute inset-0">
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
                <source src="/sustainable-tech.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-2xl font-bold text-white">
                Sustainable Technology in Action
              </h3>
            </div>
          </motion.div>

          {/* Solutions List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {[
              {
                icon: <FaLeaf className="text-2xl text-green-500" />,
                title: "Carbon-Neutral Design",
                description:
                  "Our buildings generate more energy than they consume through integrated solar and geothermal systems.",
              },
              {
                icon: <FaLightbulb className="text-2xl text-yellow-500" />,
                title: "Smart Grid Integration",
                description:
                  "Intelligent energy distribution systems that optimize renewable resources and reduce waste.",
              },
              {
                icon: <FaCogs className="text-2xl text-blue-500" />,
                title: "Climate-Resilient Infrastructure",
                description:
                  "Engineering solutions designed to withstand extreme weather events and rising sea levels.",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="flex"
              >
                <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                  {solution.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 mr-4">
            Explore Our Solutions
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600/10 font-medium rounded-lg transition-all duration-300">
            Download Sustainability Report
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartSolutionsSection;
