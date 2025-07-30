import { motion } from "framer-motion";

export const ServiceCTA = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ready to Transform Your Energy Infrastructure?
        </motion.h2>
        <motion.p
          className="text-xl text-blue-200 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Contact our experts for a customized solution assessment
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-bold text-lg transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg font-bold text-lg transition-colors"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Request Service Quote
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 rounded-full bg-blue-400"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-6 h-6 rounded-full bg-indigo-400"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </motion.section>
  );
};
