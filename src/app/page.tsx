import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { YachtCardsSection } from "@/components/sections/yacht-cards-section";
import { AdventuresBanner } from "@/components/sections/adventures-banner";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { FeaturedYachtsCarousel } from "@/components/sections/featured-yachts-carousel";
import { DestinationsPreview } from "@/components/sections/destinations-preview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ServiceCategories } from "@/components/sections/service-categories";
import { CharterGuideSection } from "@/components/sections/charter-guide-section";
import { LuxuryPortfolioSection } from "@/components/sections/luxury-portfolio-section";
import { FinalCTABanner } from "@/components/sections/final-cta-banner";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <IntroductionSection />
      <YachtCardsSection />
      <AdventuresBanner />
      <StatisticsSection />
      <FeaturedYachtsCarousel />
      <DestinationsPreview />
      <TestimonialsSection />
      <ServiceCategories />
      <CharterGuideSection />
      <LuxuryPortfolioSection />
      <FinalCTABanner />
      <Footer />
    </>
  );
}