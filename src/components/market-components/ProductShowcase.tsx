// src/components/market-components/ProductShowcase.tsx
import { useState } from "react";
import { FaBolt, FaSun } from "react-icons/fa";

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("transformers");

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Energy Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technologies for diverse energy needs
          </p>
        </div>

        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-10 justify-center">
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "transformers"
                ? "border-b-2 border-red-600 text-red-600 dark:text-red-500"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("transformers")}
          >
            Transformers
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "solar"
                ? "border-b-2 border-amber-500 text-amber-500"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("solar")}
          >
            Solar Panels
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
            {activeTab === "transformers" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/transformers.mp4" type="video/mp4" />
              </video>
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/solar.mp4" type="video/mp4" />
              </video>
            )}
          </div>

          <div>
            {activeTab === "transformers" ? (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaBolt className="text-3xl text-red-600" />
                  <h3 className="text-2xl font-bold">
                    Advanced Transformer Technology
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  High-efficiency transformers with smart monitoring and 30+
                  year lifespan
                </p>
                <ul className="space-y-3">
                  {[
                    "IoT Monitoring System",
                    "99.2% Energy Efficiency",
                    "Modular Design",
                    "30+ Year Lifespan",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaSun className="text-3xl text-amber-500" />
                  <h3 className="text-2xl font-bold">
                    High-Efficiency Solar Panels
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Premium solar panels with industry-leading efficiency and
                  durability
                </p>
                <ul className="space-y-3">
                  {[
                    "22.8% Conversion Efficiency",
                    "25-Year Warranty",
                    "Weather Resistant",
                    "Self-Cleaning Surface",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
