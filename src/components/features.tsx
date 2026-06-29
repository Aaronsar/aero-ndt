import { AnimateIn } from "@/components/animate-in";
import { IconBadge } from "@/components/icon-badge";
import { SectionHeader } from "@/components/section-header";
import { featureIcons } from "@/lib/icons";
import { features } from "@/lib/site-config";

export function Features() {
  return (
    <section className="relative bg-surface py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn>
          <SectionHeader
            label="Nos atouts"
            title="Pourquoi choisir AERO NDT ?"
            description="Une expertise CND dédiée à la filière aéronautique, avec réactivité et rigueur."
          />
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 80}>
              <article className="card card-hover group relative flex h-full flex-col items-center overflow-hidden p-8 text-center">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition group-hover:opacity-100" />
                <IconBadge icon={featureIcons[feature.icon]} size="lg" className="mb-5" />
                <h3 className="text-lg font-bold text-heading">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
