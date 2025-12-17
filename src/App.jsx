import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  Star,
} from "lucide-react";

const CONFIG = {
  name: "Vishal Khattar",
  role: "Customer Service Manager · Founder (BlinkBag)",
  location: "Edinburgh, United Kingdom · EH12",
  email: "khattar.vishal9@gmail.com",
  phone: "+44 7824 067196",
  links: {
    linkedin: "https://www.linkedin.com/in/vishal-khattar-34601b147/",
    instagram: "",
    website: "",
  },
  headline: "Operator + founder building premium experiences — on the floor and on the street.",
  subheadline:
    "MBA (Strategic Project Management) graduate with experience across customer service leadership, operations, and payroll at scale. Currently building BlinkBag — an LED-powered delivery-bag advertising platform that turns everyday routes into premium brand moments.",
  highlights: [
    { label: "Customer Service Leadership", value: "Lead daily ops + resolve issues fast" },
    { label: "Project Delivery", value: "CRM integration + multi-initiative coordination" },
    { label: "Data & Process", value: "Audits, automation, Power BI/Excel" },
  ],
  about:
    "I’m a people-first operator with a founder’s mindset. I’ve led daily retail operations, delivered CRM change, and worked in high-scale payroll and marketplace operations. Alongside my career, I’ve held elected leadership roles at Edinburgh Napier Students’ Association — representing 15,000+ students and negotiating outcomes with university leadership. Now I’m building BlinkBag: a next-gen delivery bag with LED panels that can run dynamic restaurant + brand campaigns in real time.",

  pages: [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "business", label: "Business" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ],

  business: {
    name: "BlinkBag",
    tagline: "The LED delivery bag that turns every ride into a billboard.",
    summary:
      "BlinkBag helps restaurants and brands reach local customers through dynamic ads displayed on delivery bags — right where attention is already high: the street. We’re building a scalable, trackable, and premium outdoor channel for modern cities.",
    bullets: [
      "Founder-led product strategy, brand identity, and go-to-market",
      "Partner outreach: restaurants, riders, and local brands",
      "Prototype + pilot planning (hardware + software + operations)",
    ],
    metrics: [
      { k: "Stage", v: "Prototype / Pilot" },
      { k: "Model", v: "B2B (restaurants & brands)" },
      { k: "Base", v: "Edinburgh" },
    ],
  },

  experience: [
    {
      company: "Ladbrokes",
      title: "Customer Service Manager",
      period: "Edinburgh · 06/2022 – Present",
      bullets: [
        "Lead daily operations, ensuring exceptional customer service and resolving client queries to improve satisfaction and loyalty.",
        "Managed integration of a new CRM system, improving data accuracy and overall customer relationship management.",
        "Collaborated with sales teams to boost revenue by 12% through improved cross-selling and up-selling strategies.",
        "Oversaw multiple initiatives end-to-end, ensuring clear coordination and timely completion.",
        "Improved team productivity by 25% through better communication and collaboration practices.",
      ],
      tags: ["Customer Experience", "Operations", "CRM", "Leadership"],
    },
    {
      company: "Edinburgh Napier Students’ Association",
      title: "Sabbatical Officer & Board of Director",
      period: "Edinburgh · 07/2022 – 06/2023",
      bullets: [
        "Elected to represent 15,000+ students; acted as strategic intermediary with university leadership.",
        "Negotiated extension of tuition payment plan (6 → 10 months), contributing to a 5% reduction in student drop-off.",
        "Managed 400+ representatives and volunteers to deliver projects and events; improved coordination and engagement.",
        "Chaired 9+ student council meetings, facilitating solutions-focused outcomes across stakeholders.",
        "Built partnerships with local businesses to create employment and internship opportunities for students.",
      ],
      tags: ["Stakeholder Management", "Negotiation", "Leadership", "Governance"],
    },
    {
      company: "Wipro",
      title: "Payroll Analyst",
      period: "Gurugram · 05/2019 – 12/2020",
      bullets: [
        "Managed payroll processing for 45,000+ employees, ensuring accurate and timely payments with compliance.",
        "Conducted payroll audits and reduced discrepancies by 6% through process improvements.",
        "Implemented an automated overpayment tool, increasing team productivity by 40% and reducing manual effort.",
        "Partnered with HR/Finance to resolve employee queries, adjustments, and deductions; improved satisfaction.",
        "Trained 8–10 team members on payroll processes and tools, improving team efficiency and retention.",
      ],
      tags: ["Payroll", "Automation", "Compliance", "Workday"],
    },
    {
      company: "Urban Company",
      title: "Operations Analyst",
      period: "Gurugram · 06/2018 – 04/2019",
      bullets: [
        "Analyzed and optimized operational processes to improve efficiency, reduce bottlenecks, and enhance delivery.",
        "Used data insights to recommend changes that increased professional income for service providers by 24%.",
        "Worked cross-functionally with marketing, tech, and customer service to implement operational improvements.",
        "Tracked and monitored KPIs using Excel and Power BI to support performance management.",
      ],
      tags: ["Operations", "Analytics", "Power BI", "Process Improvement"],
    },
  ],

  education: [
    {
      school: "Edinburgh Napier University",
      degree: "MBA · Strategic Project Management",
      period: "Graduated 05/2024",
      details: ["Sabbatical Officer & Board Director (Students’ Association)", "Strategy, project delivery, stakeholder management"],
    },
    {
      school: "Jagannath International Management School (JIMS)",
      degree: "BBA",
      period: "Graduated 06/2018",
      details: ["Business fundamentals, operations, and management"],
    },
  ],

  skills: [
    "Customer service leadership",
    "Operations management",
    "Project management",
    "Stakeholder management",
    "Process improvement",
    "Payroll & compliance",
    "Data analysis (Excel/Power BI)",
    "CRM (Salesforce/Ameyo/Seibel)",
    "Basic SQL",
    "Workday",
  ],

  tools: [
    "Microsoft Office",
    "Workday",
    "Power BI",
    "Advanced Excel",
    "Salesforce",
    "IBM Content Navigator",
    "Omnia",
    "Ameyo",
    "Seibel System",
  ],

  activities: [
    {
      title: "Appin Entrepreneurship Competition Finalist (2024)",
      org: "Bright Red Triangle · Edinburgh Napier University",
      bullets: [
        "Pitched a ‘Social Currency Card for Influencers’ concept (Visa/MasterCard powered).",
        "Cashback linked to social score; designed to drive organic brand marketing via creators.",
      ],
    },
    {
      title: "President, International Society (2022)",
      org: "Edinburgh Napier University",
      bullets: [
        "Organized 10+ events in one trimester (bingo nights, cultural events, tours, parties).",
        "Reached 100+ attendees per event; grew to 70 active members.",
        "Awarded “Best Society of the Year 2022” by the Students’ Association.",
      ],
    },
  ],

  blogPosts: [
    {
      slug: "why-i-build-products-people-notice",
      title: "Why I build products people notice",
      date: "2025-12-17",
      readTime: "4 min read",
      excerpt:
        "From customer service floors to city streets — what taught me to design for attention, trust, and measurable outcomes.",
      content: [
        "Most products fail for one reason: they’re invisible. Not just in marketing — in daily life.",
        "Working in customer-facing environments taught me the real rule: people only remember what feels smooth, fast, and human.",
        "That’s the same principle behind BlinkBag. Delivery riders already move through the busiest parts of the city — where attention is naturally high. So why shouldn’t that route carry premium, trackable brand messages?",
        "When you build for attention and trust, you get two wins: people notice you — and they believe you.",
        "That’s the work I love: making experiences feel premium, then making them scale.",
      ],
      tags: ["Build", "Operations", "Brand", "BlinkBag"],
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={cx("rounded-3xl border shadow-sm", className)}>{children}</div>;
}
function CardContent({ className = "", children }) {
  return <div className={cx("p-6", className)}>{children}</div>;
}
function Button({ variant = "primary", className = "", onClick, children }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]";
  const primary = "bg-white text-black hover:bg-white/90";
  const secondary = "bg-white/10 text-white hover:bg-white/15";
  return (
    <button onClick={onClick} className={cx(base, variant === "secondary" ? secondary : primary, className)}>
      {children}
    </button>
  );
}
function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
      {children}
    </span>
  );
}
function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
        {eyebrow}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">{subtitle}</p> : null}
    </div>
  );
}
function Anchor({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
      {children}
      <ExternalLink className="h-4 w-4 opacity-60" />
    </a>
  );
}

export default function App() {
  const getRoute = () => {
    const raw = (typeof window !== "undefined" ? window.location.hash : "") || "#home";
    const [hash, query] = raw.split("?");
    const page = (hash || "#home").replace("#", "");
    const params = new URLSearchParams(query || "");
    return { page, post: params.get("post") };
  };

  const [{ page, post }, setRoute] = useState(getRoute());

  React.useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const [mode, setMode] = useState("dark");
  const isDark = mode === "dark";

  const palette = useMemo(() => {
    return isDark
      ? { bg: "bg-[#070A0F]", border: "border-white/10", card: "bg-white/[0.04]", text: "text-white", sub: "text-white/70" }
      : { bg: "bg-[#F7F8FA]", border: "border-black/10", card: "bg-black/[0.04]", text: "text-black", sub: "text-black/70" };
  }, [isDark]);

  return (
    <div
      className={cx(palette.bg, "min-h-screen")}
      style={{ ["--accent"]: "#12F7A2", ["--accent2"]: "#B6FF4D" }}
    >
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-b from-[color:var(--accent)]/20 via-transparent to-[color:var(--accent2)]/10" />
        <div className="absolute -bottom-64 right-[-160px] h-[560px] w-[560px] rounded-full blur-3xl bg-gradient-to-b from-[color:var(--accent)]/20 via-transparent to-[color:var(--accent2)]/10" />
      </div>

      {/* Top nav */}
      <div className="sticky top-0 z-20 backdrop-blur-xl">
        <div
          className={cx(
            "mx-auto flex max-w-6xl items-center justify-between px-5 py-4 border-b",
            isDark ? "bg-[#070A0F]/60 border-white/10" : "bg-white/70 border-black/10"
          )}
        >
          <a href="#home" className="group inline-flex items-center gap-3">
            <div className={cx("h-9 w-9 rounded-2xl border grid place-items-center shadow-sm", isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5")}>
              <Star className={cx("h-4 w-4", isDark ? "text-white" : "text-black")} />
            </div>
            <div className="leading-tight">
              <div className={cx("text-sm font-semibold", isDark ? "text-white" : "text-black")}>{CONFIG.name}</div>
              <div className={cx("text-xs", isDark ? "text-white/70" : "text-black/70")}>Portfolio</div>
            </div>
          </a>

          <div className="hidden items-center gap-2 text-sm sm:flex">
            {CONFIG.pages.map((p) => {
              const active = page === p.id;
              return (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={cx(
                    "rounded-full px-3 py-1 transition",
                    active ? (isDark ? "bg-white/10 text-white" : "bg-black/10 text-black") : (isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black")
                  )}
                >
                  {p.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}>
              {isDark ? "Light" : "Dark"}
            </Button>
            <Button onClick={() => (window.location.hash = "#contact")}>
              Let’s talk <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl px-5 pb-20">
        {/* HOME */}
        {page === "home" && (
          <>
            <section className="pt-14 sm:pt-20">
              <motion.div initial="hidden" animate="show" variants={fadeUp} className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className={cx("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs", isDark ? "border-white/10 bg-white/5 text-white/70" : "border-black/10 bg-black/5 text-black/70")}>
                    <MapPin className="h-3.5 w-3.5" />
                    {CONFIG.location}
                  </div>
                  <h1 className={cx("mt-5 text-4xl font-semibold tracking-tight sm:text-5xl", isDark ? "text-white" : "text-black")}>
                    {CONFIG.headline}
                  </h1>
                  <p className={cx("mt-4 max-w-2xl text-base leading-relaxed", isDark ? "text-white/70" : "text-black/70")}>
                    {CONFIG.subheadline}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Chip>{CONFIG.role}</Chip>
                    <Chip>Founder-led growth</Chip>
                    <Chip>Execution-first</Chip>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button onClick={() => (window.location.hash = "#business")}>
                      Explore BlinkBag <Rocket className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" onClick={() => (window.location.hash = "#work")}>
                      View work experience
                    </Button>
                    <div className={cx("ml-0 sm:ml-2 text-sm", isDark ? "text-white/70" : "text-black/70")}>
                      <span className="opacity-80">Links:</span>{" "}
                      <span className="inline-flex items-center gap-3">
                        <Anchor href={CONFIG.links.linkedin}>LinkedIn</Anchor>
                        {CONFIG.links.instagram ? <Anchor href={CONFIG.links.instagram}>Instagram</Anchor> : null}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <Card className={cx("shadow-xl", isDark ? "border-white/10 bg-white/[0.04]" : "border-black/10 bg-black/[0.04]")}>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className={cx("text-sm font-semibold", isDark ? "text-white" : "text-black")}>Snapshot</div>
                          <div className={cx("text-xs", isDark ? "text-white/70" : "text-black/70")}>What I bring</div>
                        </div>
                        <div className={cx("h-10 w-10 rounded-2xl border grid place-items-center", isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5")}>
                          <Sparkles className={cx("h-4 w-4", isDark ? "text-white" : "text-black")} />
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3">
                        {CONFIG.highlights.map((h) => (
                          <div key={h.label} className={cx("rounded-2xl border p-4", isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5")}>
                            <div className={cx("text-xs", isDark ? "text-white/70" : "text-black/70")}>{h.label}</div>
                            <div className={cx("mt-1 text-sm font-semibold", isDark ? "text-white" : "text-black")}>{h.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/10 p-4">
                        <div className={cx("text-xs", isDark ? "text-white/70" : "text-black/70")}>Currently building</div>
                        <div className={cx("mt-1 text-sm font-semibold", isDark ? "text-white" : "text-black")}>{CONFIG.business.name}</div>
                        <div className={cx("mt-2 text-sm", isDark ? "text-white/70" : "text-black/70")}>{CONFIG.business.tagline}</div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {CONFIG.business.metrics.map((m) => (
                      <Card key={m.k} className={cx(isDark ? "border-white/10 bg-white/[0.04]" : "border-black/10 bg-black/[0.04]")}>
                        <CardContent className="p-4">
                          <div className={cx("text-xs", isDark ? "text-white/70" : "text-black/70")}>{m.k}</div>
                          <div className={cx("mt-1 text-sm font-semibold", isDark ? "text-white" : "text-black")}>{m.v}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="mt-16 sm:mt-24">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <SectionTitle
                  eyebrow="ABOUT"
                  title="Operator energy. Founder ambition."
                  subtitle="A clean summary that feels premium, confident, and hum
