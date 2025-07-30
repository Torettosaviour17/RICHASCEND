import HeroSection from "../components/market-components/HeroSection";
import ProductShowcase from "../components/market-components/ProductShowcase";
import TechSection from "../components/market-components/TechSection";
import VideoSection from "../components/market-components/VideoSection";
import Footer from "../layout/Footer";

const MarketPage = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeroSection />
      <div className="space-y-20">
        <ProductShowcase />
        <TechSection />
        <VideoSection />
        <Footer />
      </div>
    </div>
  );
};

export default MarketPage;
