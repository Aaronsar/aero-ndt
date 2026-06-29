import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
    </>
  );
}
