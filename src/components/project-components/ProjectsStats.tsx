import { motion } from "framer-motion";

const ProjectsStats = () => {
  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-emerald-900 to-teal-800 dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">42+</div>
            <div className="text-emerald-200">Projects Completed</div>
          </motion.div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">1.2GW</div>
            <div className="text-emerald-200">Renewable Capacity</div>
          </motion.div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">18</div>
            <div className="text-emerald-200">Countries Served</div>
          </motion.div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">500k+</div>
            <div className="text-emerald-200">People Impacted</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsStats;
