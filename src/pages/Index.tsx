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

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <Navbar />
      <main className="pt-14 sm:pt-16">
        {/* 1. Hero + кнопка + форма заявки */}
        <HeroSection />
        {/* 2. Возможности (карточки + описание) */}
        <div id="features">
          <FeaturesGrid />
        </div>
        {/* 3. Лид-магнит (быстрый расчёт) */}
        <div id="lead-magnet">
          <LeadMagnet />
        </div>
        {/* 4. Преимущества / Статистика */}
        <div id="stats">
          <StatsSection />
        </div>
        {/* 5. Кейсы */}
        <div id="use-cases">
          <UseCases />
        </div>
        {/* 6. Блок доверия */}
        <div id="trust">
          <TrustSection />
        </div>
        {/* 7. Этапы работы */}
        <div id="how-it-works">
          <HowItWorks />
        </div>
        {/* 8. О проекте */}
        <div id="about">
          <AboutSection />
        </div>
        {/* Обновления из Telegram */}
        <TelegramPosts />
        {/* 9. Тарифы */}
        <div id="pricing">
          <PricingSection />
        </div>
        {/* 10. FAQ */}
        <div id="faq">
          <FAQSection />
        </div>
        {/* 11. Финальная форма захвата */}
        <CTASection />
      </main>
      {/* 12. Контакты */}
      <Footer />
    </div>
  );
};

export default Index;
