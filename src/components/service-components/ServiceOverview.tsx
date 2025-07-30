import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaSolarPanel,
  FaBolt,
  FaPlug,
  FaTools,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

export const ServiceOverview = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="py-20"
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
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            End-to-end solutions from design to maintenance
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            {
              icon: <FaLightbulb className="text-3xl" />,
              title: "Design & Engineering",
              desc: "Custom energy system design",
            },
            {
              icon: <FaSolarPanel className="text-3xl" />,
              title: "Solar Installations",
              desc: "Residential & commercial solar",
            },
            {
              icon: <FaBolt className="text-3xl" />,
              title: "Transformer Services",
              desc: "Installation & maintenance",
            },
            {
              icon: <FaPlug className="text-3xl" />,
              title: "Grid Integration",
              desc: "Utility-scale solutions",
            },
            {
              icon: <FaTools className="text-3xl" />,
              title: "Maintenance",
              desc: "Preventive & predictive",
            },
            {
              icon: <FaChartLine className="text-3xl" />,
              title: "Performance Monitoring",
              desc: "Real-time analytics",
            },
            {
              icon: <FaHandshake className="text-3xl" />,
              title: "Consulting",
              desc: "Energy strategy & planning",
            },
            {
              icon: <FaLightbulb className="text-3xl" />,
              title: "Energy Audits",
              desc: "Efficiency optimization",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="w-16 h-16 bg-red-500/10 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 dark:text-red-400"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

