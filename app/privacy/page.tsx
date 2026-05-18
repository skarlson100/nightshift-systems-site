export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <a href="/" className="text-sm text-emerald-300 transition hover:text-emerald-200">
            Nightshift Systems
          </a>
          <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 18 May 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 text-base leading-8 text-slate-400 sm:px-8">
        <p>
          This Privacy Policy explains how Nightshift Systems, ABN 23 942 251 561, handles information collected
          through this website, FleetTrack Pro, and related operational software services where applicable.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Information we may collect</h2>
        <p className="mt-3">
          If you contact Nightshift Systems, we may collect your name, email address, business details, and the
          information you choose to include in your message.
        </p>
        <p className="mt-3">
          FleetTrack Pro may collect account, organisation, vehicle, maintenance, receipt, trip, location/GPS, usage,
          and support data where those features are used.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">How information is used</h2>
        <p className="mt-3">
          Information is used to respond to enquiries, provide and improve software services, maintain records,
          support users, operate FleetTrack Pro features, and meet reasonable business or legal requirements.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Third-party services</h2>
        <p className="mt-3">
          Third-party services may include Supabase, Vercel, Resend, Expo, GitHub, app stores, and AI processing
          providers where used. These services may process information as required to host, operate, deliver, support,
          or improve the relevant software.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Security</h2>
        <p className="mt-3">
          Reasonable technical and organisational measures are used to protect information. No method of transmission
          or storage can be guaranteed to be absolutely secure.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Contact</h2>
        <p className="mt-3">
          For privacy questions, contact{" "}
          <a href="mailto:support@nightshiftsystems.com.au" className="text-emerald-300 hover:text-emerald-200">
            support@nightshiftsystems.com.au
          </a>
          .
        </p>
      </section>
    </main>
  );
}
