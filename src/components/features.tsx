import { Award, Clock, Shuffle, TrendingDown } from "lucide-react";
import { features } from "@/lib/site-config";

const iconMap = {
  Award,
  TrendingDown,
  Shuffle,
  Clock,
} as const;

export function Features() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            Nos atouts
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Pourquoi choisir AERO NDT ?
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.title}
                className="group glass rounded-2xl p-8 transition hover:border-sky-500/30 hover:bg-sky-500/5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-400 transition group-hover:bg-sky-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
