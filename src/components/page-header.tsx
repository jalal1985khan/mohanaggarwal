type Props = { eyebrow: string; title: string; description: string };

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
