import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import {
  FileSearch,
  Calculator,
  Briefcase,
  Building2,
  ShieldCheck,
  TrendingUp,
  Banknote,
  Scale,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";
const auditWork = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920";
const taxConsulting = "https://images.pexels.com/photos/530212/pexels-photo-530212.jpeg?auto=compress&cs=tinysrgb&w=1920";
const businessAdvisory = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mohan Agarwal & Co" },
      {
        name: "description",
        content:
          "Audit, tax, advisory, outsourcing, company formation, risk and compliance services from a leading Chartered Accountant firm.",
      },
      { property: "og:title", content: "Services — Mohan Agarwal & Co" },
      {
        property: "og:description",
        content: "The full spectrum of professional services from a Guwahati CA firm.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: FileSearch,
    title: "Audit & Assurance",
    desc: "Statutory audits, internal audits, tax audits and special purpose reviews — delivered with uncompromising rigour and independence.",
    image: auditWork,
  },
  {
    icon: Calculator,
    title: "Direct Taxation",
    desc: "Corporate and personal tax planning, return filing, assessments, and representation before tax authorities.",
    image: taxConsulting,
  },
  {
    icon: Banknote,
    title: "GST & Indirect Tax",
    desc: "GST registration, filings, audits, refunds and end-to-end indirect tax compliance management.",
    image: taxConsulting,
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    desc: "Financial strategy, valuations, due diligence and transaction support to help you grow with confidence.",
    image: businessAdvisory,
  },
  {
    icon: Building2,
    title: "Company Formation",
    desc: "Private limited, LLP and partnership incorporation, ROC filings and corporate secretarial services.",
    image: businessAdvisory,
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    desc: "Internal control reviews, SOP design, regulatory compliance frameworks and forensic engagements.",
    image: auditWork,
  },
  {
    icon: TrendingUp,
    title: "Outsourcing & CFO",
    desc: "Bookkeeping, payroll, MIS, virtual CFO and finance function outsourcing tailored to your scale.",
    image: businessAdvisory,
  },
  {
    icon: Scale,
    title: "Legal & Regulatory",
    desc: "FEMA, RBI, SEBI, IBC and allied advisory across regulatory and statutory matters.",
    image: taxConsulting,
  },
  {
    icon: Globe2,
    title: "NRI & Cross-Border",
    desc: "Tax planning, repatriation, DTAA and compliance support for NRIs and international structures.",
    image: businessAdvisory,
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="The full spectrum to help organisations work better."
        description="Everything from creating standards of excellence, training your people to work in more effective ways, assessing how you're doing — and helping you perform even better in the future."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, image }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="group bg-card overflow-hidden transition-colors hover:bg-secondary"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/90 text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
