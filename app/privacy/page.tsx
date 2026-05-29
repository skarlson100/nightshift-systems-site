import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems, FleetTrack Pro, and related software services.",
  alternates: {
    canonical: "/privacy"
  },
  robots: {
    index: false,
    follow: true
  },
  openGraph: {
    title: "Privacy Policy | Nightshift Systems",
    description:
      "Privacy Policy for CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems, FleetTrack Pro, and related software services.",
    url: "https://nightshiftsystems.com.au/privacy",
    siteName: "Nightshift Systems",
    locale: "en_AU",
    type: "article"
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Nightshift Systems",
    description:
      "Privacy Policy for CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems, FleetTrack Pro, and related software services."
  }
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-[#f4efe7]">
      <section className="border-b border-[#2a2421]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <a href="/" className="text-sm text-[#d92a08] transition hover:text-[#f04a22]">
            Nightshift Systems
          </a>
          <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#716963]">Last updated: 18 May 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 text-base leading-8 text-[#a79f98] sm:px-8">
        <p>
          This Privacy Policy explains how CAJON OUTDOOR EQUIPMENT PTY LTD trading as Nightshift Systems, ABN 88 673
          204 558, handles information collected through this website, FleetTrack Pro, and related software services
          where applicable.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#f4efe7]">Information we may collect</h2>
        <p className="mt-3">
          If you contact Nightshift Systems, we may collect your name, email address, business details, and the
          information you choose to include in your message.
        </p>
        <p className="mt-3">
          FleetTrack Pro may collect account, organisation, vehicle, maintenance, receipt, trip, location/GPS, usage,
          and support data where those features are used.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#f4efe7]">How information is used</h2>
        <p className="mt-3">
          Information is used to respond to enquiries, provide and improve software services, maintain records,
          support users, operate Nightshift Systems and FleetTrack Pro features, and meet reasonable business or legal
          requirements.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#f4efe7]">Third-party services</h2>
        <p className="mt-3">
          Third-party services may include Supabase, Vercel, Resend, Expo, GitHub, app stores, and AI processing
          providers where used. These services may process information as required to host, operate, deliver, support,
          or improve the relevant software.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#f4efe7]">Security</h2>
        <p className="mt-3">
          Reasonable technical and organisational measures are used to protect information. No method of transmission
          or storage can be guaranteed to be absolutely secure.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#f4efe7]">Operator details</h2>
        <p className="mt-3">
          Nightshift Systems is operated by CAJON OUTDOOR EQUIPMENT PTY LTD, an Australian Proprietary Company. ACN
          673 204 558. D-U-N-S 891696846. Location: Aveley WA 6069, Australia.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-[#f4efe7]">Contact</h2>
        <p className="mt-3">
          For privacy questions, contact{" "}
          <a href="mailto:support@nightshiftsystems.com.au" className="text-[#d92a08] hover:text-[#f04a22]">
            support@nightshiftsystems.com.au
          </a>
          .
        </p>
      </section>
    </main>
  );
}
