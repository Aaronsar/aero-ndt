import Image from "next/image";
import Link from "next/link";
import { homeAbout, images } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src={images.aboutIllustration}
              alt=""
              width={703}
              height={531}
              className="h-auto w-full rounded-lg"
            />
          </div>

          <div>
            <h2 className="section-title text-2xl sm:text-3xl">{homeAbout.title}</h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
              <p>{homeAbout.paragraphs[0]}</p>
              <p>
                Fondée avec l&apos;ambition de satisfaire les besoins en{" "}
                <strong className="font-semibold text-[#1e293b]">
                  Contrôle Non Destructif
                </strong>{" "}
                (<strong className="font-semibold text-[#1e293b]"> CND </strong>) de la
                filière aéronautique à des tarifs compétitifs, notre entreprise vise
                également à croître en formant de nouveaux collaborateurs.
              </p>
            </div>
            <Link href="/a-propos" className="btn-primary mt-8">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
