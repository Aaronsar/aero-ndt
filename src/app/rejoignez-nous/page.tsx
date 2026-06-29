import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { CtaBanner } from "@/components/cta-banner";
import { IconBadge } from "@/components/icon-badge";
import { PageBanner } from "@/components/page-banner";
import { careers } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Rejoignez-nous",
  description: careers.subtitle,
};

export default function CareersPage() {
  return (
    <>
      <PageBanner title={careers.title} description={careers.subtitle} />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimateIn>
            <div className="card mx-auto max-w-xl p-10 text-center">
              <IconBadge
                icon={BriefcaseBusiness}
                size="md"
                className="mx-auto mb-6"
              />
              <h2 className="text-xl font-bold text-heading sm:text-2xl">
                {careers.subtitle}
              </h2>
              <p className="mt-4 text-slate-600">
                Envoyez-nous votre candidature via notre formulaire de contact.
              </p>
              <Link href="/contacter-nous" className="btn-primary mt-8">
                Postuler
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
