import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohan Agarwal & Co, Guwahati" },
      {
        name: "description",
        content:
          "Get in touch with Mohan Agarwal & Co — Chartered Accountants based in Guwahati, Assam. Call, email or visit us.",
      },
      { property: "og:title", content: "Contact Mohan Agarwal & Co" },
      {
        property: "og:description",
        content: "Reach our partners directly for audit, tax and advisory engagements.",
      },
    ],
  }),
  component: ContactPage,
});

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "mohanagarwalca@gmail.com",
    href: "mailto:mohanagarwalca@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 98648-57565", href: "tel:+919864857565" },
  { icon: MapPin, label: "Office", value: "Guwahati, Assam, India", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon – Sat · 10:00 to 19:00", href: undefined },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a partner."
        description="For new engagements, RFPs or a quick second opinion — reach us directly. We respond to every enquiry within 24 hours."
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {cards.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
                <div className="mt-1 font-display text-base font-semibold text-foreground">
                  {value}
                </div>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="block rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
              >
                {inner}
              </a>
            ) : (
              <div key={label} className="rounded-2xl border border-border bg-card p-7">
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
