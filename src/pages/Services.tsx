import { motion } from "framer-motion";
import { ServiceHero } from "../components/service-components/ServiceHero";
import { ServiceOverview } from "../components/service-components//ServiceOverview";
import { ServiceDetailedSolutions } from "../components/service-components//ServiceDetailedSolutions";
import { ServiceProcess } from "../components/service-components//ServiceProcess";
import { ServiceCTA } from "../components/service-components//ServiceCTA";
import Footer from "../layout/Footer";

export default function Services() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceHero />
      <ServiceOverview />
      <ServiceDetailedSolutions />
      <ServiceProcess />
      <ServiceCTA />
      <Footer />
    </motion.div>
  );
};
