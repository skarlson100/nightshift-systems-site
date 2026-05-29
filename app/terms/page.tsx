import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems, FleetTrack Pro, and related software services.",
  alternates: {
    canonical: "/terms"
  },
  robots: {
    index: false,
    follow: true
  },
  openGraph: {
    title: "Terms of Service | Nightshift Systems",
    description:
      "Terms of Service for CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems, FleetTrack Pro, and related software services.",
    url: "https://nightshiftsystems.com.au/terms",
    siteName: "Nightshift Systems",
    locale: "en_AU",
    type: "article"
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Nightshift Systems",
    description:
      "Terms of Service for CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems, FleetTrack Pro, and related software services."
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f1eadf] text-[#15130f]">
      <section className="border-b border-[#d9d0c1]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <a href="/" className="text-sm text-[#d92a08] transition hover:text-[#9f260e]">
            Nightshift Systems
          </a>
          <h1 className="mt-8 text-4xl font-black tracking-[-0.035em]">Terms of Service</h1>
          <p className="mt-4 text-sm text-[#6f675d]">Last updated: 18 May 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 text-base leading-8 text-[#5f574f] sm:px-8">
        <p>
          These Terms apply to the Nightshift Systems website, FleetTrack Pro, and related software services unless
          separate written terms apply. The provider is CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems,
          ABN 88 673 204 558. ACN 673 204 558. FleetTrack Pro is a product of Nightshift Systems.
        </p>

        <h2 className="mt-10 text-xl font-black text-[#15130f]">Use of software and apps</h2>
        <p className="mt-3">
          Users are responsible for providing accurate information and for checking records entered into or exported
          from the software and apps, including vehicle records, maintenance history, compliance dates, receipts, trip
          records, and reports.
        </p>

        <h2 className="mt-10 text-xl font-black text-[#15130f]">Fleet and compliance records</h2>
        <p className="mt-3">
          FleetTrack Pro supports fleet management workflows, but it does not replace professional accounting, legal,
          tax, insurance, mechanical, registration, or compliance advice. Users should verify records, reminders, and
          exported reports before relying on them for business, compliance, or financial decisions.
        </p>

        <h2 className="mt-10 text-xl font-black text-[#15130f]">Availability and changes</h2>
        <p className="mt-3">
          Nightshift Systems aims to provide practical and reliable software, but services may change, be interrupted,
          or require maintenance from time to time.
        </p>

        <h2 className="mt-10 text-xl font-black text-[#15130f]">Operator details</h2>
        <p className="mt-3">
          Nightshift Systems is operated by CAJON OUTDOOR EQUIPMENT PTY LTD, an Australian Proprietary Company. D-U-N-S
          891696846. Location: Aveley WA 6069, Australia.
        </p>

        <h2 className="mt-10 text-xl font-black text-[#15130f]">Contact</h2>
        <p className="mt-3">
          For questions, contact{" "}
          <a href="mailto:support@nightshiftsystems.com.au" className="text-[#d92a08] hover:text-[#9f260e]">
            support@nightshiftsystems.com.au
          </a>
          .
        </p>
      </section>
    </main>
  );
}
