import { AnimateIn } from "@/components/animate-in";
import { IconBadge } from "@/components/icon-badge";
import { SectionHeader } from "@/components/section-header";
import { valueIcons } from "@/lib/icons";
import { values } from "@/lib/site-config";

export function ValueCards() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn>
          <SectionHeader label="Engagement" title="Nos valeurs" />
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {values.map((value, i) => (
            <AnimateIn key={value.title} delay={i * 60}>
              <article className="card card-hover group flex h-full flex-col items-center p-6 text-center">
                <IconBadge icon={valueIcons[value.icon]} size="md" className="mb-4" />
                <h3 className="font-bold text-heading">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
