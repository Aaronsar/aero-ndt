import Image from "next/image";
import { values } from "@/lib/site-config";

export function ValueCards() {
  return (
    <section className="bg-[#f0f5fa] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="section-title mb-12 text-center text-2xl sm:text-3xl">
          Nos valeurs
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {values.map((value) => (
            <article
              key={value.title}
              className="card flex flex-col items-center p-6 text-center"
            >
              <Image
                src={value.image}
                alt=""
                width={120}
                height={120}
                className="mb-4 h-24 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#1e293b]">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
