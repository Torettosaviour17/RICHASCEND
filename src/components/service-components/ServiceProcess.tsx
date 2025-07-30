import { motion } from "framer-motion";

export const ServiceProcess = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
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
            Our Service Process
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A structured approach to delivering exceptional results
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="absolute left-16 top-16 bottom-16 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block">
            <motion.div
              className="absolute top-0 w-full h-0 bg-blue-600"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                step: "01",
                title: "Consultation & Assessment",
                desc: "We begin with understanding your specific energy challenges and goals through detailed discussions and site assessments.",
              },
              {
                step: "02",
                title: "Solution Design",
                desc: "Our engineers develop customized solutions tailored to your operational requirements and budget constraints.",
              },
              {
                step: "03",
                title: "Implementation Planning",
                desc: "We create detailed project plans with timelines, resources, and contingency measures for seamless execution.",
              },
              {
                step: "04",
                title: "Installation & Commissioning",
                desc: "Our certified technicians execute the installation with minimal disruption, followed by rigorous testing.",
              },
              {
                step: "05",
                title: "Training & Handover",
                desc: "Comprehensive training for your team and complete documentation for smooth operations.",
              },
              {
                step: "06",
                title: "Ongoing Support",
                desc: "24/7 monitoring, maintenance programs, and performance optimization services.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className={`flex items-start gap-6 ${
                  idx % 2 === 0 ? "md:text-right md:flex-row-reverse" : ""
                }`}
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.step}
                </motion.div>
                <div className={`${idx % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
