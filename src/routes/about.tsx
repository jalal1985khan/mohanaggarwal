import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { motion } from "framer-motion";
const officeBuilding = "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1920";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mohan Agarwal & Co" },
      {
        name: "description",
        content:
          "A Guwahati-based Chartered Accountant firm with associates across India, delivering audit, tax and advisory with rigour and discretion.",
      },
      { property: "og:title", content: "About Mohan Agarwal & Co" },
      {
        property: "og:description",
        content:
          "Built by a group of dynamic Chartered Accountants — discretion, precision and reach.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    t: "Excellence",
    d: "We measure ourselves by the standards of the most demanding engagements.",
  },
  { t: "Integrity", d: "Independent counsel and uncompromising professional ethics." },
  { t: "Partnership", d: "We invest in long-term relationships, not transactional engagements." },
  { t: "Insight", d: "Numbers are only the beginning — we deliver context and clarity." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A vision transformed into reality."
        description="Mohan Agarwal & Co is a leading Chartered Accountant firm headquartered in Guwahati, Assam, with a network of associates across all major cities in India."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                Mohan Agarwal & Co was founded by a group of highly experienced and dynamic
                Chartered Accountants committed to delivering high-end expertise in auditing,
                consulting, outsourcing and business advisory services. The firm believes deeply in
                giving the very best professional services to its clients.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our main office is located at Guwahati and we have associate offices across all the
                major cities of India. Every office is equipped with the latest technology and
                reference materials. A large team of professionals beyond our core members allows us
                to meet the requirements of both prospective and existing clients.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To meet the growing demands of a fiercely competitive market, we continually grow
                our network of highly skilled associates with strong professional backgrounds and
                exposure across related areas of responsibility.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {values.map((v, index) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                >
                  <div className="font-display text-lg font-semibold">{v.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE SHOWCASE */}
      <section className="relative py-20 sm:py-28 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Our Presence Across India
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Headquartered in Guwahati with a network of associate offices in all major cities,
              we're never far from where you need us.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={officeBuilding}
              alt="Professional office building"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-2">Strategic Locations</h3>
              <p className="text-white/90">
                Serving clients from Guwahati to Mumbai, Delhi to Chennai, and everywhere in
                between.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
