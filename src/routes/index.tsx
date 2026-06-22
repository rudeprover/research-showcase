import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  GraduationCap, CloudSun, Mountain, Globe2, Mail, Phone, MapPin,
  ChevronDown, ArrowUpRight, Compass, Layers, Microscope, Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Earth2Sky — Geospatial & Environmental Consulting" },
      { name: "description", content: "Earth2Sky is a geospatial and environmental consulting firm offering specialised training, climate and cryosphere studies, and applied earth-observation research." },
      { property: "og:title", content: "Earth2Sky — Geospatial & Environmental Consulting" },
      { property: "og:description", content: "Training, climate & environmental studies, and applied geospatial research from a team of working scientists." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "founder", label: "Founder" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold tracking-tight">Earth2Sky</span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            · Geospatial Consulting
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-foreground px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-block">
          Work with us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Est. 2025 · India
        </p>
        <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Geospatial &amp; environmental<br className="hidden md:block" /> consulting,
          <em className="font-display italic text-muted-foreground"> grounded in science.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          Earth2Sky bridges earth observation and climate research with practical
          decision support — through specialised training and rigorous environmental
          studies for institutions, agencies and industry.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Our services <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}

type Service = {
  id: string;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  body: React.ReactNode;
};

const services: Service[] = [
  {
    id: "training",
    number: "01",
    icon: GraduationCap,
    title: "Training & Workshops",
    tagline: "Hands-on programmes in GIS, remote sensing & climate science.",
    body: (
      <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
        <p>
          Structured short courses and bespoke workshops for universities, research
          institutes, government agencies and private teams. Delivered by practising
          scientists, every module pairs concept with applied lab work.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Introduction to GIS & QGIS",
            "Remote Sensing with Google Earth Engine",
            "Python for Geospatial Analysis",
            "Climate & Hydrological Data Analysis",
            "Glacier & Cryosphere Monitoring",
            "Stable & Radio Isotope Methods",
            "Field Sampling & Sediment Coring",
            "Scientific Writing for Earth Sciences",
          ].map((m) => (
            <li key={m} className="border-l border-border pl-3 text-foreground/85">
              {m}
            </li>
          ))}
        </ul>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Formats — On-site · Hybrid · Custom curriculum
        </p>
      </div>
    ),
  },
  {
    id: "studies",
    number: "02",
    icon: CloudSun,
    title: "Climate & Environmental Studies",
    tagline: "Assessment, monitoring and impact studies for changing landscapes.",
    body: (
      <div className="space-y-5 text-sm leading-relaxed text-foreground/80">
        <p>
          End-to-end studies that combine satellite observation, in-situ
          measurement and isotope geochemistry to characterise how climate is
          reshaping rivers, glaciers, springs and watersheds.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Glacier mass balance & change detection",
            "Snow, ice melt & runoff partitioning",
            "Hydrological & sediment-load assessments",
            "Spring & groundwater recharge studies",
            "Black carbon & aerosol impact studies",
            "Paleoclimate & monsoon reconstruction",
            "Water quality & environmental health",
            "Climate vulnerability & resilience reports",
          ].map((m) => (
            <li key={m} className="border-l border-border pl-3 text-foreground/85">
              {m}
            </li>
          ))}
        </ul>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Deliverables — Technical reports · Datasets · Peer-reviewed outputs
        </p>
      </div>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Services" title="What we do" />
        <p className="mt-6 max-w-2xl text-base text-muted-foreground">
          Two practice areas, deeply connected. Click a card to read more.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  return (
    <article className="border border-border bg-card transition-colors hover:border-foreground/40">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-5 px-6 py-7 text-left"
      >
        <span className="font-display text-sm text-muted-foreground">{service.number}</span>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-foreground" />
            <h3 className="font-display text-xl font-medium tracking-tight">{service.title}</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{service.tagline}</p>
        </div>
        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border px-6 py-7 animate-in fade-in slide-in-from-top-1">
          {service.body}
        </div>
      )}
    </article>
  );
}

function Approach() {
  const items = [
    { icon: Microscope, title: "Scientific rigour", body: "Methods drawn from peer-reviewed research, with full traceability from raw observation to insight." },
    { icon: Layers, title: "Multi-scale data", body: "Satellite, airborne and field measurements fused to give a coherent picture across landscape and time." },
    { icon: Compass, title: "Decision support", body: "Findings translated into clear maps, reports and training so partners can act with confidence." },
  ];
  return (
    <section id="approach" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Approach" title="How we work" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border-t border-foreground pt-6">
              <Icon className="h-5 w-5" />
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const [open, setOpen] = useState(false);
  return (
    <section id="founder" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Founder" title="About the founder" />
        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="aspect-square w-full max-w-xs border border-border bg-muted/60 flex items-center justify-center">
              <Mountain className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="mt-5 font-display text-xl font-medium tracking-tight">Dr. Om Kumar</p>
            <p className="text-sm text-muted-foreground">Founder · Lead Scientist</p>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/85">
            <p>
              Earth2Sky is led by <strong>Dr. Om Kumar</strong>, a Postdoctoral
              Researcher at the International Centre of Excellence for Dams,
              IIT&nbsp;Roorkee, working on climate change, the cryosphere, and
              monsoon–river sediment interaction.
            </p>
            <p>
              With over a decade of research across the Himalaya — spanning glacier
              dynamics, paleoclimate reconstruction and isotope hydrology — he founded
              Earth2Sky to translate that science into training and consulting that
              institutions can put to work.
            </p>
            <dl className="grid grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["15", "Publications"],
                ["10+", "Years field research"],
                ["4", "Funded projects"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-medium">{v}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              {open ? "Hide details" : "Read full bio"}
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div className="space-y-4 border-t border-border pt-6 text-sm text-foreground/80 animate-in fade-in slide-in-from-top-1">
                <p>
                  Ph.D. in Himalayan Glaciology with a thesis on Holocene monsoon
                  variability from Chandratal Lake sediments. UGC-NET qualified in
                  Environmental Sciences (2014).
                </p>
                <p>
                  Previously Maharishi Kanad Postdoctoral Fellow at the Institution of
                  Eminence, University of Delhi; Project Scientist at the National
                  Institute of Hydrology, Roorkee; and faculty across the University of
                  Delhi colleges.
                </p>
                <p>
                  Research interests: Himalayan cryosphere, stable &amp; radio isotopes,
                  paleoclimate proxies, monsoon–westerlies interaction, black carbon,
                  spring recharge dynamics and environmental health.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-background/60">Contact</p>
        <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">
          Let's discuss your project.
        </h2>
        <p className="mt-5 max-w-xl text-base text-background/70">
          Tell us about your training need, study area or research question.
          We'll respond within two working days.
        </p>
        <div className="mt-12 grid gap-px bg-background/20 md:grid-cols-3">
          <ContactItem icon={Mail} label="Email" value="hello@earth2sky.in" href="mailto:hello@earth2sky.in" />
          <ContactItem icon={Phone} label="Phone" value="+91 95551 11859" href="tel:+919555111859" />
          <ContactItem icon={MapPin} label="Based in" value="Roorkee, India" />
        </div>
        <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-background/30 px-3 py-1.5 text-xs uppercase tracking-widest text-background/70">
          <Globe2 className="h-3.5 w-3.5" /> earth2sky.in · domain coming soon
        </p>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string;
}) {
  const inner = (
    <div className="flex h-full flex-col justify-between gap-6 bg-foreground p-7 transition-colors hover:bg-foreground/90">
      <Icon className="h-5 w-5 text-background/80" />
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-background/50">{label}</div>
        <div className="mt-2 font-display text-lg text-background">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-medium tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10 text-center text-xs text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 md:flex-row md:justify-between">
        <span className="font-display text-sm text-foreground">Earth2Sky</span>
        <span>© {new Date().getFullYear()} Earth2Sky · Geospatial & Environmental Consulting</span>
        <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Founded by Dr. Om Kumar</span>
      </div>
    </footer>
  );
}
