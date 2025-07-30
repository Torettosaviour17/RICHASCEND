import { motion } from "framer-motion";
import { useState } from "react";

export const ServiceDetailedSolutions = () => {
  const [activeService, setActiveService] = useState("transformer");

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialized Solutions
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Industry-leading expertise in critical energy infrastructure
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {[
              { id: "transformer", name: "Transformer Services" },
              { id: "solar", name: "Solar Solutions" },
              { id: "grid", name: "Grid Modernization" },
              { id: "storage", name: "Energy Storage" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                className={`px-6 py-4 font-medium text-lg ${
                  activeService === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
                onClick={() => setActiveService(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={tabVariants}
              >
                {tab.name}
              </motion.button>
            ))}
          </div>

          <motion.div
            className="p-8"
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {activeService === "transformer" && (
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={contentVariants}>
                  <h3 className="text-2xl font-bold mb-4">
                    Transformer Services
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Comprehensive solutions for power transformers of all types
                    and capacities. Our services extend the lifespan of your
                    critical assets while improving efficiency.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Installation & Commissioning",
                      "Preventive Maintenance Programs",
                      "Diagnostic Testing & Analysis",
                      "Repair & Refurbishment",
                      "Oil Analysis & Filtration",
                      "Emergency Response Services",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        variants={listItem}
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Service Quote
                  </motion.button>
                </motion.div>
                <motion.div
                  className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
                    <div className="text-white text-xl font-bold">
                      Transformer Visualization
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Other services with similar animation patterns */}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
