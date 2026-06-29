import type { Metadata } from "next";
import { careers } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Rejoignez-nous",
  description: careers.subtitle,
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-semibold text-[#1e293b] sm:text-4xl">
            {careers.title}
          </h1>
          <h2 className="mx-auto mt-8 max-w-3xl text-xl font-semibold text-[#1e293b] sm:text-2xl">
            {careers.subtitle}
          </h2>
        </div>
      </section>
    </>
  );
}
