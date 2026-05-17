const buildItems = [
  {
    icon: "01",
    title: "Operational software systems",
    text: "Practical systems for daily operations, job tracking, records, reminders, costs, and the work that sits between people and spreadsheets."
  },
  {
    icon: "02",
    title: "Fleet and asset platforms",
    text: "FleetTrack Pro is the clearest example: software for vehicles, servicing, compliance, costs, usage, and operational history."
  },
  {
    icon: "03",
    title: "Internal business tools",
    text: "Focused internal tools for businesses that need cleaner data capture, fewer manual handovers, and better visibility."
  }
];

const proofItems = ["FleetTrack Pro", "Operational software", "Internal tools", "Selected projects"];

const fleetFeatures = [
  "Maintenance tracking",
  "Vehicle cost history",
  "Trip logging",
  "Compliance reminders",
  "AI receipt scanning",
  "PDF reports",
  "Team access",
  "Small fleets"
];

const processSteps = [
  ["Discover", "Understand the operational problem, current records, and what the team needs to see."],
  ["Design", "Map the simplest useful system around the real workflow, not a generic template."],
  ["Build", "Develop the working tool with practical interfaces and maintainable foundations."],
  ["Launch", "Put it in front of real users, adjust the rough edges, and support adoption."],
  ["Improve", "Refine the system as the business learns what it needs next."]
];

const consoleModules = [
  ["Vehicles", "Service records", "FleetTrack Pro"],
  ["Costs", "Parts and labour", "Operational history"],
  ["Compliance", "Registration reminders", "Internal records"],
  ["Reports", "PDF exports", "Management view"]
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
  variant?: "primary" | "secondary" | "fleet";
}>) {
  const styles = {
    primary:
      "border-emerald-400/40 bg-emerald-400 text-[#03110b] hover:bg-emerald-300 hover:border-emerald-300 shadow-[0_16px_48px_rgba(52,211,153,0.16)]",
    secondary: "border-slate-700 bg-slate-950/40 text-slate-100 hover:border-slate-500 hover:bg-slate-900",
    fleet:
      "border-[#ff5722]/45 bg-[#ff5722] text-white hover:border-[#ff7a45] hover:bg-[#ff6a32] shadow-[0_16px_48px_rgba(255,87,34,0.16)]"
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 text-sm font-medium transition duration-200 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#050608]/82 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-emerald-400/30 bg-emerald-400/10 text-sm font-bold text-emerald-300">
            NS
          </span>
          <span className="text-sm font-semibold tracking-[-0.01em] text-white">Nightshift Systems</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          <a href="#build" className="transition hover:text-white">What we build</a>
          <a href="#fleettrack" className="transition hover:text-white">FleetTrack Pro</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#process" className="transition hover:text-white">Process</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <Button href="mailto:hello@nightshiftsystems.com.au" variant="secondary">Start a project</Button>
      </Container>
    </header>
  );
}

function OperationsConsole() {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0b1016]/86 shadow-[0_30px_100px_rgba(0,0,0,0.32)]">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
        <div>
          <p className="text-xs text-slate-500">Example operational interface</p>
          <h2 className="mt-1 text-sm font-medium text-slate-100">Fleet and cost records</h2>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
          illustrative
        </span>
      </div>

      <div className="grid gap-px bg-slate-800 md:grid-cols-4">
        {consoleModules.map(([label, value, state]) => (
          <div key={label} className="bg-[#0d1117] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-slate-400">{label}</p>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <p className="mt-3 text-lg font-semibold text-white">{value}</p>
            <p className="mt-1 text-xs text-slate-500">{state}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-px bg-slate-800 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-[#0d1117] p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-white">Operational records</p>
            <span className="text-xs text-slate-500">example view</span>
          </div>
          {["Oyster MK 2 service logged", "Registration renewal noted", "Tyre replacement cost added", "Monthly fleet report prepared"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-3 border-t border-slate-800 py-3 first:border-t-0">
                <span className="text-xs tabular-nums text-slate-500">0{index + 1}</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <span className="flex-1 text-sm text-slate-300">{item}</span>
                <span className="text-xs text-slate-500">recorded</span>
              </div>
            )
          )}
        </div>

        <div className="bg-[#0d1117] p-5">
          <p className="text-sm font-medium text-white">System shape</p>
          <pre className="mt-4 overflow-hidden rounded-lg border border-slate-800 bg-[#050608] p-4 text-xs leading-6 text-slate-300">
            <code>{`vehicles.record()
service.log()
costs.review()
report.export()`}</code>
          </pre>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            A simplified representation of the kind of operational interface Nightshift Systems builds around real records and decisions.
          </p>
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
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-400">{text}</p> : null}
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
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function FleetVisual() {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#070b12] p-5">
      <div className="grid gap-5 sm:grid-cols-[280px_1fr] sm:items-center">
        <PhoneFrame
          src="/images/fleettrack/dashboard.jpeg"
          alt="FleetTrack Pro dashboard screenshot"
          className="mx-auto h-[520px] w-[250px]"
        />
        <div className="grid gap-4">
          <div className="rounded-lg border border-[#ff5722]/20 bg-[#111827] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white">Fleet status</p>
              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Active</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                ["3", "vehicles"],
                ["0", "overdue"],
                ["$3.2k", "MTD"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-slate-700/70 bg-slate-950/35 p-3">
                  <p className="text-lg font-semibold text-[#ff6a32]">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-[#0d1117] p-4">
            <p className="text-sm font-medium text-white">Recent maintenance</p>
            <div className="mt-4 space-y-3 text-sm">
              {["Fix dent on front passenger A panel", "4 x new tyres", "Vehicle service"].map((item) => (
                <div key={item} className="flex items-center justify-between gap-4">
                  <span className="text-slate-400">{item}</span>
                  <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300">Complete</span>
                </div>
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
    <main className="min-h-screen bg-[#050608] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid" />
        <Container className="relative grid gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">Nightshift Systems</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Practical software for real operational work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Nightshift Systems is the company behind FleetTrack Pro and selected internal software projects for
              businesses that need clearer records, cleaner workflows, and fewer spreadsheet workarounds.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:hello@nightshiftsystems.com.au">Start a project</Button>
              <Button href="#fleettrack" variant="secondary">View FleetTrack Pro</Button>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Built in Australia. Currently focused on FleetTrack Pro and selected internal software projects.
            </p>
          </div>

          <OperationsConsole />
        </Container>
      </section>

      <section className="border-b border-slate-800 bg-[#080b0f]">
        <Container className="grid gap-px bg-slate-800 py-px sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item) => (
            <div key={item} className="bg-[#0d1117] p-5">
              <p className="text-sm font-medium text-slate-200">{item}</p>
            </div>
          ))}
        </Container>
      </section>

      <section id="build" className="border-b border-slate-800 py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Focused systems for operational businesses."
            text="Nightshift Systems is not trying to be a large full-service agency. The work is deliberately focused around operational software, FleetTrack Pro, and selected internal tools."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {buildItems.map((item) => (
              <article key={item.title} className="group rounded-xl border border-slate-800 bg-[#0d1117] p-5 transition duration-200 hover:border-emerald-400/35">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-950 text-xs font-medium text-emerald-300 group-hover:border-emerald-400/40">
                  {item.icon}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="fleettrack" className="border-b border-slate-800 bg-[#070a0f] py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#ff6a32]">FleetTrack Pro</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Fleet management without the enterprise bloat.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              A mobile-first fleet system for small operators who need maintenance, costs, trips, compliance,
              reporting, and team visibility in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {fleetFeatures.map((feature) => (
                <span key={feature} className="rounded-full border border-[#ff5722]/20 bg-[#ff5722]/8 px-3 py-1.5 text-sm text-slate-300">
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="https://fleettrackpro.com.au" variant="fleet">View FleetTrack Pro</Button>
              <Button href="#build" variant="secondary">See features</Button>
            </div>
          </div>

          <FleetVisual />
        </Container>
      </section>

      <section id="about" className="border-b border-slate-800 py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              Built from operational work, not a pitch deck.
            </h2>
          </div>
          <div className="rounded-xl border border-slate-800 bg-[#0d1117] p-6 sm:p-7">
            <p className="text-base leading-8 text-slate-300">
              Nightshift Systems was started by Steven Cang after building internal operational tools for real-world
              fleet and infrastructure environments.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-400">
              FleetTrack Pro began as an internal system for managing vehicles, servicing, compliance, and operating
              costs. It evolved into a standalone platform because the same problem kept appearing: small operators
              needed practical fleet software without enterprise complexity.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-400">
              The company is currently focused on FleetTrack Pro and selected internal software projects where the
              problem is clear, operational, and worth solving properly.
            </p>
          </div>
        </Container>
      </section>

      <section id="process" className="border-b border-slate-800 py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="From problem to working system."
            text="A clear, practical path for selected projects where the workflow is understood and the system has a real operational job to do."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map(([title, text], index) => (
              <article key={title} className="rounded-xl border border-slate-800 bg-[#0d1117] p-5">
                <p className="text-sm font-medium text-emerald-300">0{index + 1}</p>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-20 lg:py-24">
        <Container>
          <div className="rounded-xl border border-slate-800 bg-[#0d1117] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Ready to replace the messy workaround?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                Tell us what is slowing your team down. We will help turn it into a practical system your business
                can actually use.
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <Button href="mailto:hello@nightshiftsystems.com.au">Contact Nightshift Systems</Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-slate-800 py-8">
        <Container>
          <div className="grid gap-8 text-sm text-slate-500 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="font-semibold text-white">Nightshift Systems</p>
              <p className="mt-2">Australian operational software systems</p>
            </div>
            <div>
              <a href="#fleettrack" className="transition hover:text-slate-200">FleetTrack Pro</a>
            </div>
            <div>
              <a href="mailto:hello@nightshiftsystems.com.au" className="transition hover:text-slate-200">
                hello@nightshiftsystems.com.au
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Nightshift Systems. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="transition hover:text-slate-400">Privacy Policy</a>
              <a href="/terms" className="transition hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
