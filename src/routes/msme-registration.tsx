import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/msme-registration")({
  head: () => ({
    meta: [
      { title: "MSME Registration — Mohan Agarwal & Co" },
      {
        name: "description",
        content:
          "End-to-end MSME / Udyam registration support — eligibility, documentation, filing and follow-up by experienced Chartered Accountants.",
      },
      { property: "og:title", content: "MSME / Udyam Registration" },
      {
        property: "og:description",
        content: "Get your MSME registered with expert CA support from Guwahati.",
      },
    ],
  }),
  component: MsmePage,
});

const benefits = [
  "Collateral-free bank loans under government schemes",
  "Lower interest rates and priority sector lending",
  "Subsidies on patent and trademark registration",
  "Protection against delayed payments from buyers",
  "Eligibility for government tenders & subsidies",
  "Concessions on electricity, ISO certification & more",
];

const steps = [
  {
    n: "01",
    t: "Eligibility check",
    d: "We confirm your enterprise classification under the latest MSME criteria.",
  },
  {
    n: "02",
    t: "Document collation",
    d: "We collect Aadhaar, PAN, business and bank details with a clean checklist.",
  },
  {
    n: "03",
    t: "Udyam filing",
    d: "Your application is filed on the Udyam portal with complete accuracy.",
  },
  {
    n: "04",
    t: "Certificate handover",
    d: "We deliver your Udyam Registration Certificate and post-registration guidance.",
  },
];

function MsmePage() {
  return (
    <>
      <PageHeader
        eyebrow="MSME / Udyam"
        title="MSME registration — done right, the first time."
        description="Unlock the full set of benefits available to micro, small and medium enterprises under the MSMED Act with end-to-end support from our team."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Why MSME registration matters
            </h2>
            <p className="mt-4 text-muted-foreground">
              Registered MSMEs unlock a wide spectrum of financial, legal and regulatory benefits
              designed to accelerate growth and protect cash flow.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Our four-step process
            </h2>
            <div className="mt-8 space-y-4">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="flex gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                >
                  <span className="font-display text-2xl font-bold text-gradient-accent">
                    {s.n}
                  </span>
                  <div>
                    <div className="font-display text-lg font-semibold">{s.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Start MSME registration <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
