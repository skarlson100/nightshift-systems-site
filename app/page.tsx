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

const accent = "text-[#d92a08]";

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
  ["00:12", "maintenance queue", "synced"],
  ["00:18", "cost ledger", "recorded"],
  ["00:24", "vehicle usage", "mapped"],
  ["00:31", "report export", "ready"]
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
      "border-[#d92a08] bg-[#d92a08] text-[#fff7ed] shadow-[0_16px_44px_rgba(217,42,8,0.18)] hover:border-[#f04a22] hover:bg-[#f04a22]",
    secondary:
      "border-[#3a332f] bg-[#11100f]/80 text-[#f4efe7] hover:border-[#d92a08]/55 hover:bg-[#181614]"
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#d92a08]/70 focus:ring-offset-2 focus:ring-offset-[#050505] ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function LogoPlate({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div
      className={
        compact
          ? "relative h-10 w-10 overflow-hidden rounded border border-[#d92a08]/25 bg-[#f3f0eb]"
          : "relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-lg border border-[#d92a08]/25 bg-[#f3f0eb] shadow-[0_30px_110px_rgba(0,0,0,0.55),0_0_90px_rgba(217,42,8,0.14)]"
      }
    >
      <Image
        src="/images/brand/nightshift-systems-logo-light.png"
        alt="Nightshift Systems logo"
        fill
        sizes={compact ? "40px" : "(max-width: 768px) 82vw, 420px"}
        priority={!compact}
        className="object-contain p-1"
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2a2421] bg-[#050505]/88 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3" aria-label="Nightshift Systems home">
          <LogoPlate compact />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#f4efe7] sm:inline">
            Nightshift Systems
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[#9a928b] md:flex">
          <a href="#build" className="transition hover:text-[#f4efe7]">What we do</a>
          <a href="#fleettrack" className="transition hover:text-[#f4efe7]">FleetTrack Pro</a>
          <a href="#why" className="transition hover:text-[#f4efe7]">Why we build</a>
          <a href="#contact" className="transition hover:text-[#f4efe7]">Contact</a>
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

function OperationsConsole() {
  return (
    <aside className="control-panel relative overflow-hidden rounded-lg border border-[#332b27] bg-[#0d0c0b]/92 shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
      <div className="flex items-center justify-between border-b border-[#332b27] px-4 py-3">
        <div>
          <p className="panel-label">Live system model</p>
          <h2 className="mt-1 text-sm font-semibold text-[#f4efe7]">Operations command surface</h2>
        </div>
        <span className="status-pill">
          <span className="status-light" />
          nominal
        </span>
      </div>

      <div className="grid gap-px bg-[#332b27] sm:grid-cols-3">
        {[
          ["Fleet", "costs / service"],
          ["Records", "usage / history"],
          ["Reports", "export / review"]
        ].map(([label, value]) => (
          <div key={label} className="bg-[#11100f] p-4">
            <p className="panel-label">{label}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f4efe7]">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-px bg-[#332b27] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="bg-[#11100f] p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#f4efe7]">Signal log</p>
            <span className="font-mono text-xs text-[#716963]">PER / WA</span>
          </div>
          {statusRows.map(([time, item, state]) => (
            <div key={item} className="grid grid-cols-[3.4rem_1fr_auto] items-center gap-3 border-t border-[#2a2421] py-3 first:border-t-0">
              <span className="font-mono text-xs text-[#716963]">{time}</span>
              <span className="text-sm text-[#c8bfb6]">{item}</span>
              <span className={`font-mono text-xs uppercase tracking-[0.12em] ${accent}`}>{state}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#11100f] p-5">
          <p className="text-sm font-semibold text-[#f4efe7]">Workflow core</p>
          <pre className="mt-4 overflow-hidden rounded-md border border-[#332b27] bg-[#050505] p-4 font-mono text-xs leading-6 text-[#c8bfb6]">
            <code>{`fleet.costs()
service.alerts()
usage.review()
reports.export()`}</code>
          </pre>
          <p className="mt-4 text-sm leading-6 text-[#8f8780]">
            A restrained interface language for practical tools: clear status, traceable records, and fewer moving parts.
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
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#f4efe7] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-[#a79f98]">{text}</p> : null}
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
    <div className="control-panel rounded-lg border border-[#332b27] bg-[#0b0a09] p-5">
      <div className="grid gap-5 sm:grid-cols-[280px_1fr] sm:items-center">
        <PhoneFrame
          src="/images/fleettrack/dashboard.jpeg"
          alt="FleetTrack Pro dashboard screenshot"
          className="mx-auto h-[520px] w-[250px]"
        />
        <div className="grid gap-4">
          <div className="rounded-md border border-[#d92a08]/25 bg-[#141210] p-4 shadow-[0_0_36px_rgba(217,42,8,0.08)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#f4efe7]">Fleet status</p>
              <span className="status-pill">
                <span className="status-light" />
                active
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                ["3", "vehicles"],
                ["0", "overdue"],
                ["$3.2k", "MTD"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-[#332b27] bg-[#050505]/55 p-3">
                  <p className="text-lg font-semibold text-[#d92a08]">{value}</p>
                  <p className="mt-1 text-xs text-[#8f8780]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-[#332b27] bg-[#11100f] p-4">
            <p className="text-sm font-semibold text-[#f4efe7]">FleetTrack Pro handles</p>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {fleetFeatures.slice(0, 6).map((item) => (
                <span key={item} className="border-l border-[#d92a08]/45 pl-3 text-[#c8bfb6]">
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
    <main className="min-h-screen bg-[#050505] text-[#f4efe7]">
      <Header />

      <section className="relative overflow-hidden border-b border-[#2a2421]">
        <div className="hero-grid" />
        <div className="scanlines" aria-hidden="true" />
        <HeroSignals />
        <Container className="relative grid gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-28">
          <div>
            <p className="panel-label text-[#d92a08]">Perth / independent software studio</p>
            <div className="mt-6 max-w-[360px] sm:hidden">
              <LogoPlate />
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-[#f4efe7] sm:text-6xl lg:text-7xl">
              Software systems for operators who need less noise and more control.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b3aaa2]">
              Nightshift Systems builds practical software tools for fleet, operations, and business workflows.
              FleetTrack Pro is the flagship product, backed by the same focused approach: clear records, useful
              interfaces, and systems that respect how the work actually runs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#fleettrack">View FleetTrack Pro</Button>
              <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Contact Nightshift Systems</Button>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-px bg-[#332b27] text-center">
              {["Perth", "ESTD 2026", "Software studio"].map((item) => (
                <span key={item} className="bg-[#0d0c0b]/90 px-3 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a928b]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden sm:block">
            <div className="absolute inset-8 rounded-full border border-[#d92a08]/10" aria-hidden="true" />
            <LogoPlate />
          </div>
        </Container>
      </section>

      <section className="border-b border-[#2a2421] bg-[#0a0908]">
        <Container className="grid gap-px bg-[#332b27] py-px sm:grid-cols-2 lg:grid-cols-4">
          {["FleetTrack Pro", "Operational software", "Internal tools", "Perth, Western Australia"].map((item) => (
            <div key={item} className="bg-[#11100f] p-5">
              <p className="panel-label text-[#8f8780]">{item}</p>
            </div>
          ))}
        </Container>
      </section>

      <section id="build" className="border-b border-[#2a2421] py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="What Nightshift Systems does"
            title="Focused systems for operational businesses."
            text="Nightshift Systems is a small, focused software studio. The work is practical by design: tools for people who need dependable records, clearer workflows, and software that gets out of the way."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {buildItems.map((item) => (
              <article key={item.title} className="control-panel rounded-lg border border-[#332b27] bg-[#11100f] p-5 transition duration-200 hover:border-[#d92a08]/45">
                <span className="inline-flex h-9 min-w-12 items-center justify-center rounded border border-[#44372f] bg-[#050505] px-3 font-mono text-xs font-semibold text-[#d92a08]">
                  {item.code}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-[#f4efe7]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#a79f98]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="fleettrack" className="border-b border-[#2a2421] bg-[#090807] py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="panel-label text-[#d92a08]">Flagship product</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#f4efe7] sm:text-5xl">
              FleetTrack Pro is built by Nightshift Systems.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#a79f98]">
              FleetTrack Pro is a fleet cost, maintenance, usage, and operations tracking platform for small operators.
              It brings vehicle records, servicing, expenses, GPS trip history, compliance reminders, and reporting into
              one cleaner workflow.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {fleetFeatures.map((feature) => (
                <span key={feature} className="rounded-full border border-[#d92a08]/25 bg-[#d92a08]/8 px-3 py-1.5 text-sm text-[#d8d0c7]">
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="https://fleettrackpro.com.au">View FleetTrack Pro</Button>
              <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Ask about operations software</Button>
            </div>
          </div>

          <FleetVisual />
        </Container>
      </section>

      <section id="why" className="border-b border-[#2a2421] py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            eyebrow="Why we build software"
            title="The best tools are quiet, direct, and tied to the work."
          />
          <div className="control-panel rounded-lg border border-[#332b27] bg-[#11100f] p-6 sm:p-7">
            <p className="text-base leading-8 text-[#d8d0c7]">
              Nightshift Systems exists for the operational middle ground: businesses that have outgrown paper trails
              and spreadsheet workarounds, but do not need an oversized enterprise platform.
            </p>
            <p className="mt-5 text-base leading-8 text-[#a79f98]">
              The studio is independent and Perth-based. The focus is narrow on purpose: practical software products,
              selected internal tools, and interfaces that make fleet, operations, and business records easier to trust.
            </p>
            <p className="mt-5 text-base leading-8 text-[#a79f98]">
              That means fewer claims, cleaner systems, and a bias toward tools that can be used by real operators under
              real time pressure.
            </p>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-20 lg:py-24">
        <Container>
          <div className="control-panel rounded-lg border border-[#d92a08]/35 bg-[#11100f] p-6 shadow-[0_0_70px_rgba(217,42,8,0.08)] sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="panel-label text-[#d92a08]">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#f4efe7] sm:text-4xl">
                Need a cleaner operational system?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#a79f98]">
                Contact Nightshift Systems about FleetTrack Pro, fleet operations, or a focused internal software tool
                for a workflow that needs more control.
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <Button href="mailto:support@nightshiftsystems.com.au">Contact Nightshift Systems</Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#2a2421] bg-[#080706] py-8">
        <Container>
          <div className="grid gap-8 text-sm text-[#8f8780] md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-[#f4efe7]">Nightshift Systems</p>
              <p className="mt-2">Perth, Western Australia</p>
              <p className="mt-1">ABN: 23942251561</p>
            </div>
            <div>
              <a href="#fleettrack" className="transition hover:text-[#f4efe7]">FleetTrack Pro</a>
            </div>
            <div>
              <a href="mailto:support@nightshiftsystems.com.au" className="transition hover:text-[#f4efe7]">
                support@nightshiftsystems.com.au
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-[#2a2421] pt-6 text-xs text-[#716963] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Nightshift Systems. FleetTrack Pro is a product by Nightshift Systems.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="transition hover:text-[#c8bfb6]">Privacy Policy</a>
              <a href="/terms" className="transition hover:text-[#c8bfb6]">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
