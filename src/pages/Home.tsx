import Hero from "../components/home-components/hero";
import OurPeopleSection from "../components/home-components/OurPeopleSection";
import OurWorkSection from "../components/home-components/OurWorkSection";
import SmartSolutionsSection from "../components/home-components/SmartSolutionsSection";  
import CallToActionSection from "../components/home-components/CallToActionSection";
import Footer from "../layout/Footer"

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Hero />
      <OurPeopleSection />
      <OurWorkSection />
      <SmartSolutionsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
