import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  FileSearch,
  Briefcase,
  Building2,
  TrendingUp,
} from "lucide-react";
import { StockImage } from "@/components/ui/stock-image";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohan Agarwal & Co - Chartered Accountants in Guwahati, Assam" },
      {
        name: "description",
        content:
          "A leading CA firm in Guwahati delivering audit, tax, advisory, outsourcing & MSME registration services across India.",
      },
      { property: "og:title", content: "Mohan Agarwal & Co - Chartered Accountants" },
      {
        property: "og:description",
        content: "Audit, tax, consulting & advisory services from Guwahati, Assam.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: FileSearch,
    title: "Audit & Assurance",
    desc: "Statutory, internal and tax audits with uncompromising rigour.",
  },
  {
    icon: Calculator,
    title: "Direct & Indirect Tax",
    desc: "End-to-end tax planning, GST and compliance management.",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    desc: "Strategy, valuations and transaction support for growth.",
  },
  {
    icon: Building2,
    title: "Company Formation",
    desc: "Incorporation, ROC filings and corporate secretarial services.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    desc: "Internal controls, SOPs and regulatory compliance frameworks.",
  },
  {
    icon: TrendingUp,
    title: "Outsourcing",
    desc: "Bookkeeping, payroll and CFO services tailored to scale.",
  },
];

const stats = [
  { value: "20+", label: "Years of practice" },
  { value: "500+", label: "Clients served" },
  { value: "15+", label: "Cities covered" },
  { value: "100%", label: "Compliance focus" },
];

import { useState, useEffect } from "react";

function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <StockImage
          category="hero"
          alt="Professional business team collaboration"
          width={1920}
          height={1280}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 pb-28 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-36 lg:pt-40">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Guwahati · Established 2004
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Numbers you trust. <span className="text-gradient-accent">Counsel you keep.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Mohan Agarwal & Co is a Chartered Accountant firm built on rigour, discretion and
            decades of expertise — partnering with founders, enterprises and institutions across
            India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Explore services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Talk to a partner
            </Link>
          </motion.div>

          {/* Stat strip */}
          <div className="mt-16 grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:mt-20 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card/70 px-5 py-6 backdrop-blur text-center">
                <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="relative py-16 sm:py-24 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Expertise you can see. Results you can trust.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced Chartered Accountants combines deep technical knowledge with
                practical business insights to deliver solutions that drive growth and ensure
                compliance.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { count: "500+", label: "Satisfied Clients" },
                  { count: "20+", label: "Years Experience" },
                  { count: "15+", label: "Cities Covered" },
                  { count: "100%", label: "Client Retention" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-lg bg-background/50 border border-border/50"
                  >
                    <div className="font-display text-2xl font-bold text-primary">{stat.count}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <StockImage
                  category="business"
                  index={0}
                  alt="Professional team meeting"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-square w-24 overflow-hidden rounded-xl border-4 border-background shadow-lg sm:w-32">
                <StockImage
                  category="finance"
                  index={0}
                  alt="Audit work in progress"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionHeading
            eyebrow="About the firm"
            title="A tradition of integrity, a future of excellence."
            description="A vision transformed into reality by a group of dynamic CAs offering high-end expertise in auditing, consulting, outsourcing and business advisory — headquartered in Guwahati with associates across India."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Discretion", d: "Confidentiality is non-negotiable on every engagement." },
              { t: "Precision", d: "Standards-driven workpapers and review at every layer." },
              { t: "Reach", d: "Network of associates across all major Indian cities." },
              { t: "Continuity", d: "Long-term partnerships, not transactional engagements." },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="font-display text-lg font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative border-t border-border/40 bg-card/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="The full spectrum of professional services."
            description="Everything from setting standards of excellence to assessing performance and helping you do better tomorrow."
            align="center"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="group bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Experience the clarity of professional excellence.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Talk to our partners about audit, tax, advisory or compliance — and get a tailored
            response within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Schedule a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
