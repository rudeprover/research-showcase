import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mountain, GraduationCap, Briefcase, BookOpen, FlaskConical,
  Wrench, Award, Users, Globe, Mail, Phone, MapPin, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-glacier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Om Kumar — Himalayan Glaciologist & Climate Scientist" },
      { name: "description", content: "Portfolio of Dr. Om Kumar, Project Scientist at the National Institute of Hydrology, Roorkee — Himalayan cryosphere, paleoclimate and isotope hydrology research." },
      { property: "og:title", content: "Dr. Om Kumar — Himalayan Glaciologist & Climate Scientist" },
      { property: "og:description", content: "Research, publications and projects on Himalayan glaciers, monsoon variability and climate change." },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "company", label: "Company" },
  { id: "contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-6 md:px-8">
        <Hero />
        <CardGrid />
        <CompanySection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Dr. Om Kumar
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mt-2 overflow-hidden rounded-3xl">
      <img src={heroImg} alt="Himalayan glacier landscape" width={1920} height={1024}
        className="h-[460px] w-full object-cover md:h-[560px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/10" />
      <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-12">
        <span className="mb-5 inline-flex w-fit items-center rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent-foreground">
          Himalayan Glaciologist & Climate Scientist
        </span>
        <h1 className="text-4xl font-semibold text-background md:text-6xl">Dr. Om Kumar</h1>
        <p className="mt-3 max-w-2xl text-base text-background/90 md:text-lg">
          Project Scientist · National Institute of Hydrology, Roorkee
        </p>
        <p className="mt-1 max-w-2xl text-sm text-background/70">
          Ministry of Jal Shakti, Dept. of Water Resources, River Development & Ganga Rejuvenation
        </p>
        <dl className="mt-7 grid max-w-xl grid-cols-4 gap-5">
          {[
            ["15", "Publications"],
            ["40.7", "Total Impact Factor"],
            ["6", "H-Index"],
            ["117+", "Citations"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="font-display text-2xl font-semibold text-accent md:text-3xl">{v}</dt>
              <dd className="mt-1 text-[10px] uppercase tracking-widest text-background/70">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

type CardData = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  body: React.ReactNode;
  section?: string;
};

const publications = [
  { title: "Role of Indian Summer Monsoon and westerlies on past glacier and climate variability in the Himalaya and East Africa during the late Quaternary.", journal: "Earth-Science Reviews (Elsevier, Q1)", if: "10.44", doi: "https://doi.org/10.1016/j.earscirev.2020.103431" },
  { title: "Disentangling the source of moisture driving glacier dynamics and identification of the 8.2 ka event — pore water isotopes, Western Himalaya.", journal: "Scientific Reports (Nature Portfolio, Q1)", if: "3.9", doi: "https://doi.org/10.1038/s41598-020-71686-4" },
  { title: "Deciphering the role of meteorological parameters controlling sediment load and water discharge in the Sutlej basin, Western Himalaya.", journal: "Journal of Environmental Management (Elsevier, Q1)", if: "9.61", doi: "https://doi.org/10.1016/j.jenvman.2021.113413" },
  { title: "Testing reliable proxies to understand Mid-Holocene climate variability — Chandratal Lake, Western Himalayas.", journal: "Quaternary International (Elsevier)", if: "2.30", doi: "https://doi.org/10.1016/j.quaint.2020.11.003" },
  { title: "Westward shift of Indian Summer Monsoon precipitation and heat-wave frequency patterns over South Asia.", journal: "Int. J. of Disaster Studies & Climate Resilience (2025)", if: "", doi: "https://doi.org/10.64866/j.ijdscr.2025.10005" },
  { title: "Deciphering the past climate and monsoon variability from lake sediment archives of India: a review.", journal: "Journal of Climate Change (SAGE)", if: "0.9", doi: "https://doi.org/10.3233/JCC-170011" },
  { title: "The water tower of India in a long-term perspective — reconstructing glaciers and climate in Himachal Pradesh during the last 13,000 years.", journal: "Journal of Climate Change (SAGE)", if: "0.9", doi: "https://doi.org/10.3233/JCC-160011" },
  { title: "Understanding the hydro-chemical functioning of glacierized catchments of the upper Indus basin in Ladakh.", journal: "Environmental Science & Pollution Research (Springer, Q1)", if: "5.0", doi: "https://doi.org/10.1007/s11356-022-23477-9" },
  { title: "Mega festivals like MahaKumbh facilitated transmission of SARS-CoV-2 to humans and endangered animals via contaminated water.", journal: "Int. J. of Hygiene & Environmental Health (Elsevier, Q1)", if: "~7.0", doi: "https://doi.org/10.1016/j.ijheh.2021.113836" },
  { title: "Prevalence of anemia in females of early reproductive age and its correlation with socio-economic indicators — India.", journal: "Discover Public Health (Springer Nature)", if: "", doi: "https://doi.org/10.1186/s12982-025-00992-x" },
  { title: "Decoding the hydro-meteorological processes of spring recharge dynamics in the Alaknanda River basin through stable & radio isotopes.", journal: "Hydrological Sciences Journal (Taylor & Francis, Q1) — under revision", if: "2.77", doi: "" },
  { title: "Mid-Holocene shifts in westerlies: impacts on Central Asia, Mediterranean and Indian civilisations, and Himalayan-Tibet cryosphere.", journal: "Communications Earth & Environment (Nature Portfolio, Q1) — under revision", if: "8.1", doi: "" },
  { title: "Assessing chemical weathering processes in the Takoli Gad watershed, Lesser Himalaya, using DIC isotopes and major-ion compositions of spring water.", journal: "Journal of Hydrology, Regional Studies (Q1) — under revision", if: "4.86", doi: "" },
  { title: "Black carbon and sublimation dynamics in retreating Hindu Kush Himalayan glaciers under two atmospheric circulations.", journal: "Atmospheric Chemistry and Physics (Q1) — under review", if: "6.3", doi: "" },
  { title: "Disentangling tropospheric moisture source contributions using vapor δ18O and d-excess across contrasting atmospheric circulations in India.", journal: "Atmospheric Environment (Q1) — under review", if: "3.7", doi: "" },
];

const cards: CardData[] = [
  {
    id: "research", section: "research",
    icon: Mountain, title: "Research Interests",
    subtitle: "Himalayan cryosphere, paleoclimate & isotope hydrology",
    body: (
      <ul className="grid gap-2 sm:grid-cols-2">
        {[
          "Himalayan Glaciology", "Paleoclimate reconstruction", "Holocene monsoon variability",
          "Stable & radio isotopes", "Lake sediment proxies", "Cryosphere–carbon dynamics",
          "Black carbon & sublimation", "Snow & ice melt modelling", "Spring & groundwater recharge",
          "Atmospheric circulation", "Westerlies–monsoon interaction", "Climate resilience",
          "Hydro-chemical weathering", "Environmental health & water",
        ].map((t) => (
          <li key={t} className="rounded-lg bg-muted px-3 py-2 text-sm text-foreground/80">{t}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "education",
    icon: GraduationCap, title: "Education",
    subtitle: "Ph.D. Himalayan Glaciology · UGC-NET Qualified",
    body: (
      <ul className="space-y-4 text-sm">
        <Edu year="2021" title="Ph.D. — Himalayan Glaciology"
          detail="Thesis: A multi-proxy study of Holocene monsoon climate variability and atmospheric circulation changes — Chandratal Lake sediments, Western Himalayas." />
        <Edu year="2014" title="UGC-NET (Environmental Sciences)"
          detail="National Eligibility Test, UGC, Government of India." />
        <Edu year="2013" title="M.Sc. Dissertation"
          detail="Trends of Indian Summer Monsoon and sediment load over the River Ganga, Bihar." />
        <Edu year="2012" title="M.Sc. Summer Intern — IMD Patna"
          detail="Trends of precipitation over Patna and Purnea, Bihar (Mentor: Dr. Ashish Sen)." />
        <Edu year="2011" title="B.Sc. (H) Environmental Sciences"
          detail="Water quality status of Sewage Treatment Plant, Beur, Patna." />
      </ul>
    ),
  },
  {
    id: "experience", section: "experience",
    icon: Briefcase, title: "Work Experience",
    subtitle: "Project Scientist at NIH Roorkee · 10+ years",
    body: (
      <ol className="relative space-y-5 border-l border-border pl-5 text-sm">
        <Job period="Aug 2025 – Present" role="Project Scientist"
          org="National Institute of Hydrology, Roorkee · Ministry of Jal Shakti" />
        <Job period="Jun 2024 – Aug 2025" role="Maharishi Kanad Postdoctoral Fellow"
          org="Institution of Eminence, University of Delhi — Himalayan Cryosphere Carbon Dynamics & Climate Change" />
        <Job period="2024 – Present" role="Teaching to Ph.D. Scholars"
          org="Department of Geology, University of Delhi" />
        <Job period="2023 – 2025" role="Assistant Professor (Guest)"
          org="Hansraj College, University of Delhi" />
        <Job period="2022 – 2023" role="Assistant Professor"
          org="Miranda House, University of Delhi" />
        <Job period="2020 – 2022" role="Assistant Professor (Ad-hoc)"
          org="Lakshmibai College, University of Delhi" />
        <Job period="2018 – 2020" role="Assistant Professor (Guest)"
          org="Hansraj College, University of Delhi" />
        <Job period="2014 – 2019" role="Scientific Assistant / JRF / SRF"
          org="School of Environmental Sciences, JNU — Himalayan cryosphere & Indo-Swiss projects" />
      </ol>
    ),
  },
  {
    id: "publications", section: "publications",
    icon: BookOpen, title: "Publications",
    subtitle: "15 papers · H-index 6 · Total IF 40.7",
    body: (
      <ol className="space-y-4 text-sm">
        {publications.map((p, i) => (
          <li key={i} className="rounded-xl border border-border/70 p-4">
            <p className="text-foreground/90">{p.title}</p>
            <p className="mt-1.5 text-xs text-muted-foreground">{p.journal}{p.if ? ` · IF ${p.if}` : ""}</p>
            {p.doi && (
              <a href={p.doi} target="_blank" rel="noreferrer"
                className="mt-1.5 inline-block text-xs text-accent hover:underline">DOI</a>
            )}
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: "projects", section: "projects",
    icon: FlaskConical, title: "Research Projects & Grants",
    subtitle: "4 funded projects including PI role",
    body: (
      <ul className="space-y-4 text-sm">
        <Proj years="2024–2025" role="PI · Maharishi Kanad Postdoc Fellow (₹16 Lakh)"
          title="Monsoon and cryosphere carbon dynamics and water in changing climate"
          host="Institution of Eminence, University of Delhi" />
        <Proj years="2016–2018" role="Junior Research Fellow"
          title="Application of multi-proxy approach to understand past glaciation and climate variability of Western Himalaya"
          host="JNU · IUAC funded" />
        <Proj years="2014–2016" role="Junior Research Fellow"
          title="Estimation of snow melt, ice melt, rainfall–runoff and base-flow contributions to the Chhota Shigri stream using environmental isotopes"
          host="JNU · BARC funded" />
        <Proj years="2013–2014" role="Scientific Assistant"
          title="The Response of Hydrological Systems in India to Climate Change (INDICE)"
          host="JNU · Switzerland funded" />
      </ul>
    ),
  },
  {
    id: "skills",
    icon: Wrench, title: "Skills & Tools",
    subtitle: "Python, QGIS, Isotope Analysis & more",
    body: (
      <div className="flex flex-wrap gap-2">
        {["Python","R Studio","QGIS","COMSOL Multiphysics","Picarro Isotope Analyzer","ICP-MS","IRMS",
          "Laser Particle Analyzer","Ion Chromatograph","Sediment Coring","Isotope Mixing Model","QIIME 2"
        ].map((s) => (
          <span key={s} className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-foreground/80">{s}</span>
        ))}
      </div>
    ),
  },
  {
    id: "awards",
    icon: Award, title: "Awards & Recognition",
    subtitle: "Best presentation awards · IISc postdoc selection",
    body: (
      <ul className="space-y-3 text-sm text-foreground/85">
        <li>• Best Presentation Award — International Conference on Geospatial Innovations, University of Delhi (2025)</li>
        <li>• 1st Prize, Best Poster Presentation — National Seminar on Geochemical Processes & Climate Change (2015)</li>
        <li>• Selected for Postdoc, Centre for Earth Sciences, IISc Bangalore (2021)</li>
        <li>• Shortlisted (2nd-stage interview) — Assistant Professor, IIT Delhi · IIT Bombay · IISER Berhampur</li>
        <li>• Qualified UGC-NET in Environmental Sciences (2014)</li>
      </ul>
    ),
  },
  {
    id: "conferences",
    icon: Users, title: "Conferences & Talks",
    subtitle: "11+ presentations at national & international venues",
    body: (
      <ol className="space-y-3 text-sm text-foreground/85 list-decimal pl-5 marker:text-muted-foreground">
        <li>Tracking the last 11,000-year glaciers and monsoon climate variability — University of Delhi, 2025 <em className="text-accent">(Best Presentation)</em></li>
        <li>Holocene Indian Summer Monsoon — PRL Ahmedabad, 2025</li>
        <li>HKH Wetlands & Springs: A Climate Change Barometer — University of Delhi, 2025</li>
        <li>Decoding the role of ISM and westerlies in cloud cover variability — 11th WMO Conference, IITM Pune, 2025</li>
        <li>Holocene monsoon variability from ice cores & lake sediments — Indian Colloquium on Micropaleontology, 2024</li>
        <li>Identifying drivers of aerosol variability in the Himalayas — AGU, 2021</li>
        <li>Tracking glacier and climate variability in the Himalaya — International Geological Congress, 2020</li>
      </ol>
    ),
  },
];


function Edu({ year, title, detail }: { year: string; title: string; detail: string }) {
  return (
    <li>
      <div className="text-xs uppercase tracking-widest text-accent">{year}</div>
      <div className="mt-0.5 font-medium text-foreground">{title}</div>
      <p className="mt-1 text-foreground/70">{detail}</p>
    </li>
  );
}

function Job({ period, role, org }: { period: string; role: string; org: string }) {
  return (
    <li className="relative">
      <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{period}</div>
      <div className="mt-0.5 font-medium text-foreground">{role}</div>
      <p className="text-foreground/70">{org}</p>
    </li>
  );
}

function Proj({ years, role, title, host }: { years: string; role: string; title: string; host: string }) {
  return (
    <li className="rounded-xl border border-border/70 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-medium text-foreground">{title}</span>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{years}</span>
      </div>
      <p className="mt-1.5 text-xs text-accent">{role}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{host}</p>
    </li>
  );
}

function ExpandableCard({ card }: { card: CardData }) {
  const [open, setOpen] = useState(false);
  const Icon = card.icon;
  return (
    <div id={card.section} className="group rounded-2xl border border-border/70 bg-card transition-shadow hover:shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft">
          <Icon className="h-5 w-5 text-accent" />
        </span>
        <span className="flex-1">
          <span className="block font-display text-base font-semibold text-foreground">{card.title}</span>
          <span className="block text-sm text-muted-foreground">{card.subtitle}</span>
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border/60 px-5 py-5 animate-in fade-in slide-in-from-top-1">
          {card.body}
        </div>
      )}
    </div>
  );
}

function CompanySection() {
  return (
    <section id="company" className="relative mt-10 overflow-hidden rounded-2xl bg-foreground p-6 text-background md:p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-foreground to-foreground" />
      <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/10 backdrop-blur">
            <Globe className="h-5 w-5 text-background" />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold">Environmental ES</h3>
            <p className="text-sm text-background/75">Environmental Research & Consulting</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1.5 text-xs text-background/80">
          <Globe className="h-3.5 w-3.5" /> Domain coming soon
        </span>
      </div>
    </section>
  );
}

function CardGrid() {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => <ExpandableCard key={c.id} card={c} />)}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-10 rounded-2xl border border-border/70 bg-card p-6 md:p-8">
      <h2 className="font-display text-2xl font-semibold">Get in Touch</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <ContactItem icon={Mail} label="Primary Email" value="omkrs007@gmail.com" href="mailto:omkrs007@gmail.com" />
        <ContactItem icon={Mail} label="Institutional Email" value="omrs007.pdf@ioe.du.ac.in" href="mailto:omrs007.pdf@ioe.du.ac.in" highlight />
        <ContactItem icon={Phone} label="Phone" value="+91-9555111859" href="tel:+919555111859" />
        <ContactItem icon={MapPin} label="Current Position" value="National Institute of Hydrology, Roorkee" />
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href, highlight }: {
  icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; highlight?: boolean;
}) {
  const inner = (
    <div className={`flex items-center gap-4 rounded-xl border border-border/60 p-4 transition-colors hover:border-accent/60 ${highlight ? "bg-accent-soft/60" : ""}`}>
      <Icon className="h-5 w-5 text-accent" />
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-foreground py-8 text-center text-xs text-background/60">
      Dr. Om Kumar · Project Scientist · National Institute of Hydrology, Roorkee · {new Date().getFullYear()}
    </footer>
  );
}
