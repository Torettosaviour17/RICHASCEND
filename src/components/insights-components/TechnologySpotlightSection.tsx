"use client";

import { motion } from "framer-motion";

export default function TechnologySpotlightSection() {
  const technologies = [
    {
      title: "Advanced Simulation",
      description: "Predictive modeling and structural analysis tools",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Sustainable Materials",
      description: "Eco-friendly composites for construction",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-400"
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
      ),
    },
    {
      title: "IoT Monitoring",
      description: "Real-time structural health solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="flex items-center mb-10">
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
        <h2 className="text-3xl font-bold mx-4 text-center">
          Technology <span className="text-red-500">Spotlight</span>
        </h2>
        <div className="h-0.5 bg-gradient-to-r from-gray-900 via-red-500 to-gray-900 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10, borderColor: "#ef4444" }}
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 transition-all group"
          >
            <div className="w-14 h-14 bg-red-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-800 transition-colors">
              {tech.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
              {tech.title}
            </h3>
            <p className="text-gray-400">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
