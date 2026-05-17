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
          Nightshift Systems respects your privacy. This page is a simple placeholder policy for the Nightshift
          Systems website and will be updated as the business requires more detailed legal terms.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Information we collect</h2>
        <p className="mt-3">
          If you contact us by email, we may receive your name, email address, business details, and the information
          you choose to include in your message.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">How we use information</h2>
        <p className="mt-3">
          We use contact information to respond to enquiries, discuss potential projects, provide services, and keep
          basic business records.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Contact</h2>
        <p className="mt-3">
          For privacy questions, contact{" "}
          <a href="mailto:hello@nightshiftsystems.com.au" className="text-emerald-300 hover:text-emerald-200">
            hello@nightshiftsystems.com.au
          </a>
          .
        </p>
      </section>
    </main>
  );
}
