import { Header } from "@/components/Home/header";
import { Footer } from "@/components/Home/footer";
import { HeroSection } from "@/components/Home/hero-section";
import { SolutionsSection } from "@/components/Home/solution-section";
import { TechStackSection } from "@/components/Home/tech-stack-section";
import { StatsSection } from "@/components/Home/stats-section";
import { CtaSection } from "@/components/Home/cta-section";
import ProcessSection from "@/components/Home/process-section";

/**
 * Landing page for G-Learner platform
 * Refactored to use component-based architecture for better maintainability
 * Each section is now a separate, reusable component
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero section with main value proposition */}
      <HeroSection />
      {/* Course solutions/categories section */}
      <SolutionsSection />
      {/* Technology stack section */}
      <TechStackSection />
      {/* Statistics section */}
      <StatsSection />
      {/* Call-to-action section */}
      <CtaSection />

      {/* Process steps section */}
      <ProcessSection />
      <Footer />
    </div>
  );
}
