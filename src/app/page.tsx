import { AboutSection } from "@/components/about-section";
import { CtaBanner } from "@/components/cta-banner";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { MarqueeBand } from "@/components/marquee-band";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Features />
      <AboutSection />
      <ServicesSection />
      <CtaBanner />
    </>
  );
}
