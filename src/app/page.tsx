import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import CarbonComparisonSection from "@/components/sections/CarbonComparisonSection";
import DieselVsElectrifiedSection from "@/components/sections/DieselVsElectrifiedSection";
import TravelTimeVisualization from "@/components/sections/TravelTimeVisualization";
import FundingImpactSection from "@/components/sections/FundingImpactSection";
import CommunityProductivitySection from "@/components/sections/CommunityProductivitySection";
import SystemsVisionSection from "@/components/sections/SystemsVisionSection";
import SummarySection from "@/components/sections/SummarySection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import SourcesFooter from "@/components/sections/SourcesFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <CarbonComparisonSection />
      <DieselVsElectrifiedSection />
      <TravelTimeVisualization />
      <FundingImpactSection />
      <CommunityProductivitySection />
      <SystemsVisionSection />
      <SummarySection />
      <CallToActionSection />
      <SourcesFooter />
    </main>
  );
}
