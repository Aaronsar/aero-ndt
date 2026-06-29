const items = [
  "Contrôle Non Destructif",
  "Certification FrANDTB",
  "Filière Aéronautique",
  "Expertise Niveau 3",
  "Contrôle en production",
  "Qualité & Conformité",
];

export function MarqueeBand() {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-4">
      <div className="marquee-track flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 text-sm font-semibold uppercase tracking-widest text-slate-400"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}
