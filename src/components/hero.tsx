import { ArrowRight, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { images, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero-bg mesh-pattern relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
            <Shield className="h-4 w-4" />
            Certification FrANDTB — Aéronautique
          </div>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-heading sm:text-5xl lg:text-[3.25rem]">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contacter-nous" className="btn-primary">
              Contactez-nous
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/a-propos" className="btn-outline">
              En savoir plus
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-up lg:pl-4" style={{ animationDelay: "150ms" }}>
          <div className="image-frame">
            <Image
              src={images.serviceProductionHome}
              alt="Contrôle non destructif aéronautique"
              width={1024}
              height={676}
              className="relative z-10 h-auto w-full rounded-2xl shadow-2xl shadow-primary/15"
              priority
            />
          </div>
          <div className="animate-float absolute -bottom-4 -left-4 z-20 rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:-left-8">
            <Image src={images.logo} alt="" width={120} height={42} className="h-8 w-auto" />
          </div>
          <div className="absolute -right-3 top-8 z-20 hidden rounded-xl bg-primary px-4 py-3 text-white shadow-lg sm:block">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs font-medium uppercase tracking-wide text-blue-100">
              Aéronautique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
