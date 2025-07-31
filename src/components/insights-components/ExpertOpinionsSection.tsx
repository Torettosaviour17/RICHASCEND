"use client";

import { motion } from "framer-motion";

export default function ExpertOpinionsSection() {
  return (
    <section className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
        <h2 className="text-3xl font-bold mx-4 text-center">
          Expert <span className="text-red-500">Opinions</span>
        </h2>
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-700 mr-4 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-bold">Dr. Michael Chen</h3>
              <p className="text-red-400">Chief Structural Engineer</p>
            </div>
          </div>

          <blockquote className="text-lg italic border-l-4 border-red-500 pl-6 py-2 mb-6">
            "AI in structural analysis is fundamentally changing how we approach
            engineering problems."
          </blockquote>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-gray-400 hover:text-red-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Interview
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-gray-400 hover:text-red-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Read Article
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-8">
            <h3 className="text-xl font-bold mb-4">Engineering Digest</h3>
            <p className="text-gray-400 mb-6">
              Monthly insights from Richascend's engineering experts.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-red-500"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 text-sm text-gray-400"
                >
                  I agree to receive communications
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe Now
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
