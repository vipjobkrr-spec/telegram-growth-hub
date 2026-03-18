import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { LeadMagnet } from "@/components/LeadMagnet";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { StatsSection } from "@/components/StatsSection";
import { TrustSection } from "@/components/TrustSection";
import { TelegramPosts } from "@/components/TelegramPosts";
import { AboutSection } from "@/components/AboutSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="pt-14 sm:pt-16">
        {/* 1. Hero — без параллакса, сразу видна */}
        <HeroSection />
        {/* 2. Возможности */}
        <ScrollReveal>
          <div id="features">
            <FeaturesGrid />
          </div>
        </ScrollReveal>
        {/* 3. Лид-магнит */}
        <ScrollReveal parallaxOffset={50}>
          <div id="lead-magnet">
            <LeadMagnet />
          </div>
        </ScrollReveal>
        {/* 4. Статистика */}
        <ScrollReveal>
          <div id="stats">
            <StatsSection />
          </div>
        </ScrollReveal>
        {/* 5. Кейсы */}
        <ScrollReveal parallaxOffset={50}>
          <div id="use-cases">
            <UseCases />
          </div>
        </ScrollReveal>
        {/* 6. Блок доверия */}
        <ScrollReveal>
          <div id="trust">
            <TrustSection />
          </div>
        </ScrollReveal>
        {/* 7. Этапы работы */}
        <ScrollReveal parallaxOffset={50}>
          <div id="how-it-works">
            <HowItWorks />
          </div>
        </ScrollReveal>
        {/* 8. О проекте */}
        <ScrollReveal>
          <div id="about">
            <AboutSection />
          </div>
        </ScrollReveal>
        {/* Обновления из Telegram */}
        <ScrollReveal>
          <TelegramPosts />
        </ScrollReveal>
        {/* 9. Тарифы */}
        <ScrollReveal parallaxOffset={50}>
          <div id="pricing">
            <PricingSection />
          </div>
        </ScrollReveal>
        {/* 10. FAQ */}
        <ScrollReveal>
          <div id="faq">
            <FAQSection />
          </div>
        </ScrollReveal>
        {/* 11. Финальная форма */}
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
