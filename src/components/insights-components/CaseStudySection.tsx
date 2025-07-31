"use client";

import { motion } from "framer-motion";

export default function CaseStudySection() {
  return (
    <section className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
        <h2 className="text-3xl font-bold mx-4 text-center">
          Project <span className="text-red-500">Case Studies</span>
        </h2>
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="inline-block bg-red-900 text-red-400 text-sm px-3 py-1 rounded-full mb-4">
              Featured Project
            </span>
            <h3 className="text-3xl font-bold mb-4">
              SkyBridge Infrastructure
            </h3>
            <p className="text-gray-300 mb-6">
              Engineered the longest suspension bridge in the region, reducing
              project timeline by 18%.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: "18%", label: "Time Reduction" },
                { value: "$4.2M", label: "Cost Savings" },
                { value: "32%", label: "Material Efficiency" },
                { value: "0", label: "Safety Incidents" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="text-2xl font-bold text-red-500">
                    {item.value}
                  </div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
            >
              Read Full Case Study
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </div>

          <div className="bg-gray-700 min-h-[300px] relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"
            ></motion.div>
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <div className="text-sm text-gray-300">
                Infrastructure • Suspension Bridge • 2023
              </div>
            </div>
            <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gray-800 mb-2">
                  Richascend
                </div>
                <div className="text-gray-700">Project Visualization</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
