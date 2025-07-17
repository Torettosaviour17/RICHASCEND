// src/components/CallToActionSection.tsx
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-red-700 to-red-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Engineer the Future Together?
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10">
            Let's collaborate on innovative solutions that push boundaries and
            create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-red-700 hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Start a Project
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
