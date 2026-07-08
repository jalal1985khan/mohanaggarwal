import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-accent font-display text-lg font-bold text-primary-foreground">
              M
            </span>
            <span className="font-display text-base font-semibold">Mohan Agarwal & Co</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A leading Chartered Accountant firm based in Guwahati, Assam, delivering audit, tax,
            advisory and outsourcing services across India.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/msme-registration", label: "MSME Registration" },
              { to: "/testimonials", label: "Testimonials" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              mohanagarwalca@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              +91 98648-57565
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              Guwahati, Assam, India
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Mohan Agarwal & Co. All rights reserved.</p>
          <p>Chartered Accountants · Guwahati, Assam</p>
        </div>
      </div>
    </footer>
  );
}
