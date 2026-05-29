import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nightshift Systems | Software Systems for Operators",
  description:
    "Nightshift Systems is a focused Perth software studio building FleetTrack Pro and practical software tools for fleet, operations, and business workflows.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Nightshift Systems | Software Systems for Operators",
    description:
      "A focused Perth software studio building FleetTrack Pro and practical tools for fleet, operations, and business workflows.",
    url: "https://nightshiftsystems.com.au",
    siteName: "Nightshift Systems",
    images: [
      {
        url: "/images/brand/nightshift-systems-logo-light.png",
        width: 2000,
        height: 2000,
        alt: "Nightshift Systems logo"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nightshift Systems | Software Systems for Operators",
    description:
      "A focused Perth software studio building FleetTrack Pro and practical tools for fleet, operations, and business workflows.",
    images: ["/images/brand/nightshift-systems-logo-light.png"]
  }
};

const buildItems = [
  {
    code: "OPS",
    title: "Operational software systems",
    text: "Tools for records, reminders, costs, jobs, and the daily handovers that usually end up scattered across spreadsheets and inboxes."
  },
  {
    code: "FLT",
    title: "Fleet and asset platforms",
    text: "FleetTrack Pro is the flagship product: a platform for maintenance, expenses, GPS usage, compliance, service alerts, and fleet history."
  },
  {
    code: "INT",
    title: "Internal business tools",
    text: "Focused internal systems for businesses that need cleaner data capture, fewer manual steps, and better control over repeat workflows."
  }
];

const fleetFeatures = [
  "Maintenance tracking",
  "Fleet costs",
  "GPS trip records",
  "Usage history",
  "Compliance reminders",
  "Service intervals",
  "Receipt scanning",
  "PDF reports"
];

const statusRows = [
  ["PER-01", "maintenance queue", "synced"],
  ["PER-02", "cost ledger", "recorded"],
  ["PER-03", "vehicle usage", "mapped"],
  ["PER-04", "report export", "ready"]
];

function Container({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

function Button({
  href,
  children,
  variant = "primary"
}: Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>) {
  const styles = {
    primary:
      "border-[#15130f] bg-[#15130f] text-[#f5f0e8] hover:border-[#d92a08] hover:bg-[#d92a08]",
    secondary:
      "border-[#cfc7b9] bg-[#f5f0e8] text-[#15130f] hover:border-[#15130f] hover:bg-[#ebe3d6]"
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#d92a08]/70 focus:ring-offset-2 focus:ring-offset-[#f1eadf] ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function LogoMark({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div
      className={
        compact
          ? "relative h-11 w-11 overflow-hidden rounded-full border border-[#cfc7b9] bg-[#f1eadf]"
          : "relative mx-auto aspect-square w-full max-w-[430px] overflow-hidden rounded-[1.4rem] border border-[#cfc7b9] bg-[#f1eadf]"
      }
    >
      <Image
        src="/images/brand/nightshift-systems-logo-transparent.png"
        alt="Nightshift Systems logo"
        fill
        sizes={compact ? "44px" : "(max-width: 768px) 84vw, 430px"}
        priority={!compact}
        className="object-contain p-2"
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9d0c1] bg-[#f1eadf]/88 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3" aria-label="Nightshift Systems home">
          <LogoMark compact />
          <span className="hidden text-xs font-black uppercase tracking-[0.2em] text-[#15130f] sm:inline">
            Nightshift Systems
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#6f675d] md:flex">
          <a href="#build" className="transition hover:text-[#15130f]">What we do</a>
          <a href="#fleettrack" className="transition hover:text-[#15130f]">FleetTrack Pro</a>
          <a href="#why" className="transition hover:text-[#15130f]">Why we build</a>
          <a href="#contact" className="transition hover:text-[#15130f]">Contact</a>
        </nav>
        <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Contact</Button>
      </Container>
    </header>
  );
}

function HeroSignals() {
  return (
    <div className="hero-signal-layer" aria-hidden="true">
      <span className="trace trace-a" />
      <span className="trace trace-b" />
      <span className="trace trace-c" />
      <span className="pulse-dot dot-a" />
      <span className="pulse-dot dot-b" />
      <span className="pulse-dot dot-c" />
    </div>
  );
}

function TechnicalPanel() {
  return (
    <aside className="technical-panel relative overflow-hidden rounded-[1.5rem] border border-[#cfc7b9] bg-[#f7f2ea]">
      <div className="grid grid-cols-[1fr_auto] gap-6 border-b border-[#d9d0c1] p-5">
        <div>
          <p className="panel-label text-[#d92a08]">System model</p>
          <h2 className="mt-2 text-xl font-black tracking-[-0.02em] text-[#15130f]">Operations without excess interface noise.</h2>
        </div>
        <span className="status-pill">
          <span className="status-light" />
          nominal
        </span>
      </div>

      <div className="grid border-b border-[#d9d0c1] sm:grid-cols-3">
        {[
          ["Fleet", "costs / service"],
          ["Records", "usage / history"],
          ["Reports", "export / review"]
        ].map(([label, value]) => (
          <div key={label} className="border-b border-[#d9d0c1] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <p className="panel-label text-[#8a8176]">{label}</p>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#15130f]">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-[#d9d0c1] p-5 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-black text-[#15130f]">Signal log</p>
            <span className="font-mono text-xs text-[#8a8176]">PER / WA</span>
          </div>
          {statusRows.map(([time, item, state]) => (
            <div key={item} className="grid grid-cols-[4.3rem_1fr_auto] items-center gap-3 border-t border-[#ddd5c8] py-3 first:border-t-0">
              <span className="font-mono text-xs text-[#8a8176]">{time}</span>
              <span className="text-sm text-[#4a443d]">{item}</span>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#d92a08]">{state}</span>
            </div>
          ))}
        </div>

        <div className="p-5">
          <p className="text-sm font-black text-[#15130f]">Workflow core</p>
          <pre className="mt-4 overflow-hidden rounded-xl border border-[#d9d0c1] bg-[#efe7da] p-4 font-mono text-xs leading-6 text-[#27231e]">
            <code>{`fleet.costs()
service.alerts()
usage.review()
reports.export()`}</code>
          </pre>
          <p className="mt-4 text-sm leading-6 text-[#6f675d]">
            A clean technical surface for practical tools: clear state, traceable records, and fewer moving parts.
          </p>
        </div>
      </div>
    </aside>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text
}: Readonly<{ eyebrow: string; title: string; text?: string }>) {
  return (
    <div className="max-w-3xl">
      <p className="panel-label text-[#d92a08]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#15130f] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-[#5f574f]">{text}</p> : null}
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  className = ""
}: Readonly<{ src: string; alt: string; className?: string }>) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-speaker" />
      <Image
        src={src}
        alt={alt}
        width={946}
        height={2049}
        sizes="(max-width: 640px) 250px, 280px"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function FleetVisual() {
  return (
    <div className="technical-panel rounded-[1.5rem] border border-[#cfc7b9] bg-[#f7f2ea] p-5">
      <div className="grid gap-6 sm:grid-cols-[280px_1fr] sm:items-center">
        <PhoneFrame
          src="/images/fleettrack/dashboard.jpeg"
          alt="FleetTrack Pro dashboard screenshot"
          className="mx-auto h-[520px] w-[250px]"
        />
        <div className="grid gap-4">
          <div className="rounded-2xl border border-[#d9d0c1] bg-[#f1eadf] p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-[#15130f]">Fleet status</p>
              <span className="status-pill">
                <span className="status-light" />
                active
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["3", "vehicles"],
                ["0", "overdue"],
                ["$3.2k", "MTD"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-[#d9d0c1] bg-[#faf6ef] p-3">
                  <p className="text-lg font-black text-[#15130f]">{value}</p>
                  <p className="mt-1 text-xs text-[#6f675d]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#d9d0c1] bg-[#faf6ef] p-5">
            <p className="text-sm font-black text-[#15130f]">FleetTrack Pro handles</p>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {fleetFeatures.slice(0, 6).map((item) => (
                <span key={item} className="border-l border-[#d92a08]/45 pl-3 text-[#4a443d]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <PhoneFrame
            src="/images/fleettrack/maintenance.jpeg"
            alt="FleetTrack Pro maintenance screenshot"
            className="hidden h-[280px] w-[134px] sm:block"
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1eadf] text-[#15130f]">
      <Header />

      <section className="relative overflow-hidden border-b border-[#d9d0c1]">
        <div className="hero-grid" />
        <HeroSignals />
        <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-28">
          <div>
            <p className="panel-label text-[#d92a08]">Perth / independent software studio</p>
            <div className="mt-8 max-w-[350px] sm:hidden">
              <LogoMark />
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.055em] text-[#15130f] sm:text-7xl lg:text-8xl">
              Software systems for operators who need less noise and more control.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f574f]">
              Nightshift Systems builds practical software tools for fleet, operations, and business workflows.
              FleetTrack Pro is the flagship product, built with the same bias toward clear records, useful interfaces,
              and systems that respect how work actually runs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#fleettrack">View FleetTrack Pro</Button>
              <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Contact Nightshift Systems</Button>
            </div>
          </div>

          <div className="relative hidden sm:block">
            <div className="absolute -inset-8 rounded-[2rem] border border-[#d92a08]/20" aria-hidden="true" />
            <LogoMark />
            <div className="mt-5 grid grid-cols-3 gap-px border border-[#d9d0c1] bg-[#d9d0c1] text-center">
              {["Perth", "ESTD 2026", "Software studio"].map((item) => (
                <span key={item} className="bg-[#f7f2ea] px-3 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#6f675d]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#d9d0c1]">
        <Container className="grid gap-px bg-[#d9d0c1] py-px sm:grid-cols-2 lg:grid-cols-4">
          {["FleetTrack Pro", "Operational software", "Internal tools", "Perth, Western Australia"].map((item) => (
            <div key={item} className="bg-[#f7f2ea] p-5">
              <p className="panel-label text-[#6f675d]">{item}</p>
            </div>
          ))}
        </Container>
      </section>

      <section id="build" className="border-b border-[#d9d0c1] py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="What Nightshift Systems does"
            title="Focused systems for operational businesses."
            text="Nightshift Systems is a small, focused software studio. The work is practical by design: tools for people who need dependable records, clearer workflows, and software that gets out of the way."
          />
          <div className="mt-12 grid gap-px border border-[#d9d0c1] bg-[#d9d0c1] md:grid-cols-3">
            {buildItems.map((item) => (
              <article key={item.title} className="technical-panel bg-[#f7f2ea] p-6 transition duration-200 hover:bg-[#faf6ef]">
                <span className="inline-flex h-9 min-w-12 items-center justify-center rounded-full border border-[#d9d0c1] bg-[#f1eadf] px-3 font-mono text-xs font-bold text-[#d92a08]">
                  {item.code}
                </span>
                <h3 className="mt-8 text-xl font-black tracking-[-0.02em] text-[#15130f]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5f574f]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="fleettrack" className="border-b border-[#d9d0c1] bg-[#ebe3d6] py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="panel-label text-[#d92a08]">Flagship product</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#15130f] sm:text-6xl">
              FleetTrack Pro is built by Nightshift Systems.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#5f574f]">
              FleetTrack Pro is a fleet cost, maintenance, usage, and operations tracking platform for small operators.
              It brings vehicle records, servicing, expenses, GPS trip history, compliance reminders, and reporting into
              one cleaner workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {fleetFeatures.map((feature) => (
                <span key={feature} className="rounded-full border border-[#cfc7b9] bg-[#f7f2ea] px-3 py-1.5 text-sm text-[#4a443d]">
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="https://fleettrackpro.com.au">View FleetTrack Pro</Button>
              <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Ask about operations software</Button>
            </div>
          </div>

          <FleetVisual />
        </Container>
      </section>

      <section id="why" className="border-b border-[#d9d0c1] py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            eyebrow="Why we build software"
            title="The best tools are quiet, direct, and tied to the work."
          />
          <div className="technical-panel rounded-[1.5rem] border border-[#cfc7b9] bg-[#f7f2ea] p-7 sm:p-8">
            <p className="text-base leading-8 text-[#27231e]">
              Nightshift Systems exists for the operational middle ground: businesses that have outgrown paper trails
              and spreadsheet workarounds, but do not need an oversized enterprise platform.
            </p>
            <p className="mt-5 text-base leading-8 text-[#5f574f]">
              The studio is independent and Perth-based. The focus is narrow on purpose: practical software products,
              selected internal tools, and interfaces that make fleet, operations, and business records easier to trust.
            </p>
            <p className="mt-5 text-base leading-8 text-[#5f574f]">
              That means fewer claims, cleaner systems, and a bias toward tools that can be used by real operators under
              real time pressure.
            </p>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-24 lg:py-28">
        <Container>
          <div className="technical-panel rounded-[1.5rem] border border-[#cfc7b9] bg-[#f7f2ea] p-7 sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="panel-label text-[#d92a08]">Contact</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#15130f] sm:text-5xl">
                Need a cleaner operational system?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f574f]">
                Contact Nightshift Systems about FleetTrack Pro, fleet operations, or a focused internal software tool
                for a workflow that needs more control.
              </p>
            </div>
            <div className="mt-7 lg:mt-0">
              <Button href="mailto:support@nightshiftsystems.com.au">Contact Nightshift Systems</Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#d9d0c1] bg-[#ebe3d6] py-9">
        <Container>
          <div className="grid gap-8 text-sm text-[#5f574f] md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="font-black uppercase tracking-[0.16em] text-[#15130f]">Nightshift Systems</p>
              <p className="mt-2">Perth, Western Australia</p>
              <p className="mt-1">ABN: 23942251561</p>
            </div>
            <div>
              <a href="#fleettrack" className="transition hover:text-[#15130f]">FleetTrack Pro</a>
            </div>
            <div>
              <a href="mailto:support@nightshiftsystems.com.au" className="transition hover:text-[#15130f]">
                support@nightshiftsystems.com.au
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-[#d9d0c1] pt-6 text-xs text-[#6f675d] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Nightshift Systems. FleetTrack Pro is a product by Nightshift Systems.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="transition hover:text-[#15130f]">Privacy Policy</a>
              <a href="/terms" className="transition hover:text-[#15130f]">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
