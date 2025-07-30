import { motion } from "framer-motion";

const ProjectsHero = () => {
  return (
    <motion.section
      className="py-24 bg-gradient-to-r from-emerald-900 to-teal-800 dark:from-gray-800 dark:to-gray-900"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our Energy Projects
        </motion.h1>
        <motion.p
          className="text-xl text-emerald-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Discover our portfolio of innovative energy solutions transforming
          communities worldwide
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ProjectsHero;
