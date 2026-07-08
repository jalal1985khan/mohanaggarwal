import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Mohan Agarwal & Co" },
      {
        name: "description",
        content:
          "What our clients say about working with Mohan Agarwal & Co — Chartered Accountants, Guwahati.",
      },
      { property: "og:title", content: "Client Testimonials — Mohan Agarwal & Co" },
      {
        property: "og:description",
        content: "Long-term partnerships built on rigour, discretion and clarity.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const items = [
  {
    name: "R. Sharma",
    role: "MD, Manufacturing SME",
    q: "Their audit team is methodical and exceptionally responsive. We've grown together for over a decade.",
  },
  {
    name: "A. Bhuyan",
    role: "Founder, Logistics Startup",
    q: "From incorporation to GST and MSME registration — they handled everything with a calm, partner-led approach.",
  },
  {
    name: "P. Goyal",
    role: "CFO, NBFC",
    q: "Sharp commercial instincts, deep technical depth, and zero compromises on compliance. A trusted second opinion.",
  },
  {
    name: "S. Das",
    role: "Director, Trading House",
    q: "Their advisory work materially changed how we plan and report. The clarity they bring is rare.",
  },
  {
    name: "M. Khan",
    role: "Proprietor, Retail Chain",
    q: "Approachable, professional, and always one step ahead on tax planning. Highly recommended.",
  },
  {
    name: "V. Agarwal",
    role: "Promoter, Real Estate",
    q: "Their network across India helped us scale operations confidently. Outstanding service standards.",
  },
];

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Trusted by founders, families and finance leaders."
        description="A small selection of what our clients say about working with us — across industries, geographies and engagement types."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {items.map((it) => (
            <figure
              key={it.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <Quote className="h-8 w-8 text-primary/70" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{it.q}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="font-display text-base font-semibold">{it.name}</div>
                <div className="text-sm text-muted-foreground">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
