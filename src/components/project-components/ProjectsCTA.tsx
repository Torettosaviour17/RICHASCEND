import { motion } from "framer-motion";

const ProjectsCTA = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.7 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          Ready to Start Your Energy Project?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
        >
          Our team of experts is ready to help you plan and implement
          sustainable energy solutions
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
        >
          <motion.button
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-lg transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Project Consultation
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-white text-emerald-600 hover:bg-gray-100 border border-emerald-600 rounded-lg font-bold text-lg transition-colors"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f9fafb",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsCTA;
