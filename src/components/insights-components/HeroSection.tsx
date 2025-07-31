"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Engineering <span className="text-red-500">Insights</span> That Drive
          Innovation
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Discover cutting-edge perspectives from Richascend's engineering
          leaders
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Explore Insights
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-900 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Our Experts
          </motion.button>
        </div>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all"
          >
            <div className="w-12 h-12 bg-red-900 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Innovation Spotlight #{item}
            </h3>
            <p className="text-gray-400">
              Discover the latest engineering breakthroughs
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
