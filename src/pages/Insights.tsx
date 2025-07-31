import HeroSection from "../components/insights-components/HeroSection";
import IndustryTrendsSection from "../components/insights-components/IndustryTrendsSection";
import CaseStudySection from "../components/insights-components/CaseStudySection";
import TechnologySpotlightSection from "../components/insights-components/TechnologySpotlightSection";
import ExpertOpinionsSection from "../components/insights-components/ExpertOpinionsSection";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-white">
      {/* Main Content */}
      <main className="container px-4 py-12">
        <HeroSection />
        <div className="h-16"></div>
        <IndustryTrendsSection />
        <div className="h-16"></div>
        <CaseStudySection />
        <div className="h-16"></div>
        <TechnologySpotlightSection />
        <div className="h-16"></div>
        <ExpertOpinionsSection />
      </main>
    </div>
  );
}
