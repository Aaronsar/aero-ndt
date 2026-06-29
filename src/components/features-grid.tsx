import Image from "next/image";
import { features } from "@/lib/site-config";

export function FeaturesGrid() {
  return (
    <section className="bg-[#f0f5fa] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="card flex flex-col items-center p-8 text-center"
            >
              <Image
                src={feature.icon}
                alt=""
                width={80}
                height={80}
                className="mb-5 h-16 w-16 object-contain"
              />
              <h3 className="text-lg font-semibold text-[#1e293b]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
