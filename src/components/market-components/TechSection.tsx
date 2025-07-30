import type { ReactNode } from "react";
import { FaCogs, FaLightbulb, FaShieldAlt, FaLeaf } from "react-icons/fa";

type Feature = {
  icon: ReactNode;
  title: string;
  color: string; // Tailwind text color class
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: <FaCogs aria-hidden="true" className="inline-block" />,
    title: "Smart Monitoring",
    color: "text-red-600",
    description: "Real-time performance tracking with IoT telemetry",
  },
  {
    icon: <FaLightbulb aria-hidden="true" className="inline-block" />,
    title: "High Efficiency",
    color: "text-amber-500",
    description: "Advanced materials maximizing output",
  },
  {
    icon: <FaShieldAlt aria-hidden="true" className="inline-block" />,
    title: "Durable Design",
    color: "text-blue-600",
    description: "Built to withstand harsh environments",
  },
  {
    icon: <FaLeaf aria-hidden="true" className="inline-block" />,
    title: "Eco-Friendly",
    color: "text-green-600",
    description: "Sustainable materials with low impact",
  },
];

const TechSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative engineering driving our energy solutions
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon, title, color, description }) => (
            <article
              key={title}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className={`text-3xl mb-4 ${color}`}>{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
