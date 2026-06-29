import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="bg-white pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h1 className="text-3xl font-semibold leading-tight text-[#1e293b] sm:text-4xl lg:text-[2.5rem]">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {siteConfig.description}
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
}
