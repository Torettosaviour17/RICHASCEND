// import React from "react";
import { FaCogs, FaLightbulb, FaShieldAlt, FaLeaf } from "react-icons/fa";

const TechSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative engineering driving our energy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaCogs className="text-3xl text-red-600" />,
              title: "Smart Monitoring",
              desc: "Real-time performance tracking and predictive maintenance",
            },
            {
              icon: <FaLightbulb className="text-3xl text-amber-500" />,
              title: "High Efficiency",
              desc: "Advanced materials maximizing energy conversion",
            },
            {
              icon: <FaShieldAlt className="text-3xl text-blue-600" />,
              title: "Durable Design",
              desc: "Weather-resistant construction for harsh environments",
            },
            {
              icon: <FaLeaf className="text-3xl text-green-600" />,
              title: "Eco-Friendly",
              desc: "Sustainable materials with low carbon footprint",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-700 to-red-900 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Technical Specifications
                </h3>
                <p className="text-red-100 max-w-lg">
                  Download detailed technical sheets for our products
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-red-800 rounded-lg font-medium">
                  Transformers (PDF)
                </button>
                <button className="px-6 py-3 bg-white text-red-800 rounded-lg font-medium">
                  Solar Panels (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
