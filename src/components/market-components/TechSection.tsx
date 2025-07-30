// src/components/market-components/TechSection.tsx

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
              icon: <FaCogs />,
              title: "Smart Monitoring",
              color: "text-red-600",
            },
            {
              icon: <FaLightbulb />,
              title: "High Efficiency",
              color: "text-amber-500",
            },
            {
              icon: <FaShieldAlt />,
              title: "Durable Design",
              color: "text-blue-600",
            },
            {
              icon: <FaLeaf />,
              title: "Eco-Friendly",
              color: "text-green-600",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className={`text-3xl mb-4 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.title === "Smart Monitoring" &&
                  "Real-time performance tracking"}
                {feature.title === "High Efficiency" &&
                  "Advanced materials maximizing output"}
                {feature.title === "Durable Design" &&
                  "Built to withstand harsh environments"}
                {feature.title === "Eco-Friendly" &&
                  "Sustainable materials with low impact"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
