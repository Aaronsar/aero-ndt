import { AnimateIn } from "@/components/animate-in";
import { IconBadge } from "@/components/icon-badge";
import { featureIcons } from "@/lib/icons";
import { features } from "@/lib/site-config";

export function FeaturesGrid() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cards gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 70}>
              <article className="card card-hover card-panel card-panel-centered p-6 sm:p-8">
                <IconBadge icon={featureIcons[feature.icon]} size="md" className="mb-4" />
                <h3 className="font-bold text-heading">{feature.title}</h3>
                <p className="card-panel-text mt-2 text-sm leading-relaxed text-slate-600">
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
