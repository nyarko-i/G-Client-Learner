import { Header } from "@/components/Home/header";
import { Footer } from "@/components/Home/footer";
import { HeroSection } from "@/components/Home/hero-section";
import { SolutionsSection } from "@/components/Home/solution-section";

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
      <Footer />
    </div>
  );
}
