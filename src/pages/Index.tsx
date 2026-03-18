import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { StatsSection } from "@/components/StatsSection";
import { TelegramPosts } from "@/components/TelegramPosts";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-14 sm:pt-16">
        <HeroSection />
        <div id="features">
          <FeaturesGrid />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="use-cases">
          <UseCases />
        </div>
        <div id="stats">
          <StatsSection />
        </div>
        <TelegramPosts />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
