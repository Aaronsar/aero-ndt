interface PageBannerProps {
  title: string;
  description?: string;
}

export function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className="page-banner relative py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="section-label text-sky-300">AERO NDT</span>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl" />
    </section>
  );
}
