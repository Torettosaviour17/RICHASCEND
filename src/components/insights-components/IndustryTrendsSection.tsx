"use client";

import { motion } from "framer-motion";

export default function IndustryTrendsSection() {
  const trends = [
    { title: "AI in Structural Analysis", tag: "Trending" },
    { title: "Advanced Materials Innovation", tag: "Research" },
    { title: "Digital Twin Technology", tag: "Case Study" },
    { title: "Robotics in Construction", tag: "Analysis" },
  ];

  return (
    <section className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
        <h2 className="text-3xl font-bold mx-4 text-center">
          Industry <span className="text-red-500">Trends</span>
        </h2>
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold">
              Sustainable Engineering Practices
            </h3>
            <span className="bg-red-900 text-red-400 text-sm px-3 py-1 rounded-full">
              New
            </span>
          </div>
          <p className="text-gray-300 mb-6">
            How sustainable engineering is reshaping infrastructure projects
            globally.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>8 min read</span>
            <span className="mx-2">•</span>
            <span>Dr. Elena Rodriguez</span>
          </div>
        </motion.div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-red-500 transition-colors group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  Exploring the latest advancements in modern engineering.
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center text-red-400 group"
            >
              <span className="mr-2">View All Trends</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}
