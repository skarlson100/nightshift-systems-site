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

const studioFocus = [
  {
    code: "01",
    title: "Fleet systems",
    text: "Vehicle records, maintenance history, cost capture, usage visibility, and the operational detail that small fleets need to trust."
  },
  {
    code: "02",
    title: "Operational workflows",
    text: "Practical software for repeat work: reminders, approvals, handovers, logs, documents, and the status points that keep work moving."
  },
  {
    code: "03",
    title: "Automation tools",
    text: "Small, targeted automations that reduce manual admin without hiding the data operators still need to inspect and control."
  },
  {
    code: "04",
    title: "Visibility dashboards",
    text: "Focused dashboards for the metrics that matter: cost, activity, compliance, capacity, exceptions, and work waiting on action."
  }
];

const fleetFeatures = [
  ["Cost tracking", "Expenses, parts, labour, receipts, and fleet cost history in one place."],
  ["Maintenance tracking", "Service intervals, maintenance records, completed work, and upcoming attention points."],
  ["Usage / km visibility", "Trip and usage records that help operators understand how vehicles are being used."],
  ["Operations oversight", "A cleaner operating picture for small teams managing vehicles, compliance, and reporting."]
];

const philosophy = [
  "Built from real operational problems",
  "Practical before flashy",
  "Simple systems that reduce admin",
  "Designed for small operators who need control"
];

const systemRows = [
  ["Fleet", "cost / maintenance", "online"],
  ["Ops", "workflow / reminders", "synced"],
  ["Data", "records / exports", "ready"]
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
      "border-[#15130f] bg-[#15130f] text-[#f7f1e7] hover:border-[#d92a08] hover:bg-[#d92a08]",
    secondary:
      "border-[#cfc5b5] bg-[#f8f1e7]/75 text-[#15130f] hover:border-[#15130f] hover:bg-[#fff9ef]"
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#d92a08]/70 focus:ring-offset-2 focus:ring-offset-[#f1eadf] ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function LogoBlock({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div
      className={
        compact
          ? "relative h-11 w-11 overflow-hidden rounded-full border border-[#cfc5b5] bg-[#f1eadf]"
          : "relative aspect-square w-full overflow-hidden rounded-[2rem] border border-[#cfc5b5] bg-[#f1eadf]"
      }
    >
      <Image
        src="/images/brand/nightshift-systems-logo-transparent.png"
        alt="Nightshift Systems logo"
        fill
        sizes={compact ? "44px" : "(max-width: 768px) 88vw, 520px"}
        priority={!compact}
        className="object-contain p-2"
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8cebd] bg-[#f1eadf]/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3" aria-label="Nightshift Systems home">
          <LogoBlock compact />
          <span className="hidden text-xs font-black uppercase tracking-[0.22em] text-[#15130f] sm:inline">
            Nightshift Systems
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#6c6257] md:flex">
          <a href="#studio" className="transition hover:text-[#15130f]">Studio</a>
          <a href="#fleettrack" className="transition hover:text-[#15130f]">FleetTrack Pro</a>
          <a href="#why" className="transition hover:text-[#15130f]">Why</a>
          <a href="#contact" className="transition hover:text-[#15130f]">Contact</a>
        </nav>
        <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Contact</Button>
      </Container>
    </header>
  );
}

function PixelRouteSystem() {
  const nodes = [
    "left-[12%] top-[18%]",
    "left-[30%] top-[18%]",
    "left-[30%] top-[40%]",
    "left-[55%] top-[40%]",
    "left-[55%] top-[68%]",
    "left-[80%] top-[68%]",
    "left-[80%] top-[26%]",
    "left-[64%] top-[26%]"
  ];

  return (
    <div className="pixel-system" aria-hidden="true">
      <div className="pixel-grid" />
      <div className="route-line route-h route-1" />
      <div className="route-line route-v route-2" />
      <div className="route-line route-h route-3" />
      <div className="route-line route-v route-4" />
      <div className="route-line route-h route-5" />
      <div className="route-line route-v route-6" />
      <div className="route-line route-h route-7" />
      <span className="route-runner runner-a" />
      <span className="route-runner runner-b" />
      <span className="route-runner runner-c" />
      {nodes.map((position, index) => (
        <span key={position} className={`pixel-node ${position}`}>
          <span>{index + 1}</span>
        </span>
      ))}
      <div className="pixel-cluster cluster-a" />
      <div className="pixel-cluster cluster-b" />
    </div>
  );
}

function HeroConsole() {
  return (
    <div className="hero-console">
      <div className="flex items-center justify-between border-b border-[#d8cebd] px-5 py-4">
        <div>
          <p className="micro-label text-[#d92a08]">Operator control layer</p>
          <p className="mt-1 text-sm font-black text-[#15130f]">Nightshift Systems / Perth WA</p>
        </div>
        <span className="status-pill">
          <span className="status-light" />
          live
        </span>
      </div>
      <div className="grid gap-px bg-[#d8cebd] sm:grid-cols-3">
        {systemRows.map(([label, value, state]) => (
          <div key={label} className="bg-[#fbf5ea] p-5">
            <p className="micro-label text-[#81766a]">{label}</p>
            <p className="mt-5 text-lg font-black tracking-[-0.02em] text-[#15130f]">{value}</p>
            <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#d92a08]">{state}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-[#d8cebd] bg-[#f1eadf] p-4">
          <p className="micro-label text-[#81766a]">Signal path</p>
          <div className="mt-4 space-y-3">
            {["capture record", "review exception", "send reminder", "export report"].map((item, index) => (
              <div key={item} className="grid grid-cols-[2.4rem_1fr_auto] items-center gap-3">
                <span className="font-mono text-xs text-[#81766a]">0{index + 1}</span>
                <span className="h-px bg-[#d8cebd]" />
                <span className="text-sm font-semibold text-[#403a33]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#d8cebd] bg-[#15130f] p-4 text-[#f7f1e7]">
          <p className="micro-label text-[#f1714c]">Core loop</p>
          <pre className="mt-4 overflow-hidden font-mono text-xs leading-6 text-[#f4dfd4]">
            <code>{`records.input()
costs.review()
ops.control()`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text
}: Readonly<{ eyebrow: string; title: string; text?: string }>) {
  return (
    <div className="max-w-3xl">
      <p className="micro-label text-[#d92a08]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[#15130f] sm:text-6xl">{title}</h2>
      {text ? <p className="mt-6 text-base leading-8 text-[#5c534a] sm:text-lg">{text}</p> : null}
    </div>
  );
}

function PhoneFrame({ src, alt, className = "" }: Readonly<{ src: string; alt: string; className?: string }>) {
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

function FleetProductPanel() {
  return (
    <div className="product-shell">
      <div className="product-map" aria-hidden="true">
        <span className="map-dot map-dot-a" />
        <span className="map-dot map-dot-b" />
        <span className="map-dot map-dot-c" />
      </div>
      <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-center">
        <PhoneFrame
          src="/images/fleettrack/dashboard.jpeg"
          alt="FleetTrack Pro dashboard screenshot"
          className="mx-auto h-[540px] w-[260px]"
        />
        <div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#d8cebd] bg-[#d8cebd] sm:grid-cols-2">
            {fleetFeatures.map(([title, text]) => (
              <article key={title} className="bg-[#fbf5ea] p-5">
                <span className="inline-block h-2 w-2 bg-[#d92a08] shadow-[0_0_12px_rgba(217,42,8,0.55)]" />
                <h3 className="mt-5 text-lg font-black tracking-[-0.02em] text-[#15130f]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5c534a]">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-5 rounded-3xl border border-[#d8cebd] bg-[#f1eadf] p-5 sm:flex-row sm:items-center">
            <PhoneFrame
              src="/images/fleettrack/maintenance.jpeg"
              alt="FleetTrack Pro maintenance screenshot"
              className="hidden h-[260px] w-[126px] sm:block"
            />
            <div>
              <p className="micro-label text-[#d92a08]">Flagship platform</p>
              <p className="mt-3 text-xl font-black tracking-[-0.03em] text-[#15130f]">
                Fleet cost, maintenance, usage, and operations tracking for small operators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1eadf] text-[#15130f]">
      <Header />

      <section className="hero-stage">
        <PixelRouteSystem />
        <Container className="relative z-10 grid gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <p className="micro-label text-[#d92a08]">Premium independent software studio / Perth</p>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.91] tracking-[-0.065em] text-[#15130f] sm:text-7xl lg:text-[5.9rem]">
              Software systems for operators who need less noise and more control.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4f473f]">
              Nightshift Systems builds practical software tools for fleet, operations, and business workflows.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#fleettrack">View FleetTrack Pro</Button>
              <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Contact Nightshift Systems</Button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="brand-orbit" aria-hidden="true" />
            <LogoBlock />
            <HeroConsole />
          </div>
        </Container>
      </section>

      <section className="section-band border-y border-[#d8cebd]">
        <Container className="grid gap-px bg-[#d8cebd] py-px sm:grid-cols-2 lg:grid-cols-4">
          {["Fleet systems", "Operational workflows", "Automation tools", "Business visibility"].map((item) => (
            <div key={item} className="bg-[#fbf5ea] p-5">
              <p className="micro-label text-[#6c6257]">{item}</p>
            </div>
          ))}
        </Container>
      </section>

      <section id="studio" className="relative overflow-hidden py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="Studio focus"
              title="Practical systems with a sharper operating surface."
              text="Nightshift Systems designs and builds focused software for the workflows that sit between people, vehicles, costs, records, and decisions."
            />
            <div className="focus-grid">
              {studioFocus.map((item) => (
                <article key={item.title} className="focus-card">
                  <div className="flex items-start justify-between gap-4">
                    <span className="pixel-code">{item.code}</span>
                    <span className="mini-route" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.035em] text-[#15130f]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5c534a]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="fleettrack" className="section-band border-y border-[#d8cebd] py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionHeading
              eyebrow="Flagship product"
              title="FleetTrack Pro, built by Nightshift Systems."
              text="A clean technical product for fleet cost, maintenance, usage, and operations tracking."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href="https://fleettrackpro.com.au">View FleetTrack Pro</Button>
              <Button href="mailto:support@nightshiftsystems.com.au" variant="secondary">Ask about operations software</Button>
            </div>
          </div>
          <div className="mt-12">
            <FleetProductPanel />
          </div>
        </Container>
      </section>

      <section id="why" className="relative overflow-hidden py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Nightshift Systems"
            title="Built for operators who need the work to become easier to control."
            text="The studio philosophy is simple: understand the operational problem first, then build software that reduces admin and makes the useful state of the business easier to see."
          />
          <div className="why-panel">
            {philosophy.map((item, index) => (
              <div key={item} className="why-row">
                <span className="font-mono text-xs font-bold text-[#d92a08]">0{index + 1}</span>
                <span className="text-lg font-black tracking-[-0.025em] text-[#15130f]">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="pb-24 lg:pb-32">
        <Container>
          <div className="contact-panel">
            <div className="contact-pixels" aria-hidden="true" />
            <div>
              <p className="micro-label text-[#d92a08]">Contact</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[#15130f] sm:text-6xl">
                Need a cleaner operational system?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5c534a]">
                Contact Nightshift Systems about FleetTrack Pro, fleet operations, or a focused internal software tool
                for a workflow that needs more control.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:support@nightshiftsystems.com.au">Contact Nightshift Systems</Button>
              <Button href="#studio" variant="secondary">Review studio focus</Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#d8cebd] bg-[#ebe1d2] py-9">
        <Container>
          <div className="grid gap-8 text-sm text-[#5c534a] md:grid-cols-[1.2fr_1fr_1fr]">
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
          <div className="mt-8 flex flex-col gap-4 border-t border-[#d8cebd] pt-6 text-xs text-[#6c6257] sm:flex-row sm:items-center sm:justify-between">
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
