import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { SectionHeader } from "@/components/section-header";
import { homeAbout, images } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <AnimateIn className="order-2 lg:order-1">
            <div className="relative">
              <div className="image-frame">
                <Image
                  src={images.aboutIllustration}
                  alt=""
                  width={703}
                  height={531}
                  className="relative z-10 h-auto w-full rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
            </div>
          </AnimateIn>

          <AnimateIn className="order-1 lg:order-2" delay={100}>
            <SectionHeader
              label="À propos"
              title={homeAbout.title}
              align="left"
            />
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>{homeAbout.paragraphs[0]}</p>
              <p>
                Fondée avec l&apos;ambition de satisfaire les besoins en{" "}
                <strong className="font-semibold text-heading">
                  Contrôle Non Destructif
                </strong>{" "}
                (<strong className="font-semibold text-heading"> CND </strong>) de la
                filière aéronautique à des tarifs compétitifs, notre entreprise vise
                également à croître en formant de nouveaux collaborateurs.
              </p>
            </div>
            <Link href="/a-propos" className="btn-primary mt-8">
              En savoir plus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
