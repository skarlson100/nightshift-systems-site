export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <a href="/" className="text-sm text-emerald-300 transition hover:text-emerald-200">
            Nightshift Systems
          </a>
          <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">Terms of Service</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 18 May 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 text-base leading-8 text-slate-400 sm:px-8">
        <p>
          These terms are a simple placeholder for the Nightshift Systems website. They will be updated with more
          detailed terms as required for specific products, projects, or services.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Website use</h2>
        <p className="mt-3">
          The information on this website is provided for general business enquiries. It does not create a service
          agreement, support agreement, or product subscription by itself.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Project work</h2>
        <p className="mt-3">
          Any software project, product subscription, or commercial engagement will be governed by separate written
          terms agreed between the relevant parties.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Contact</h2>
        <p className="mt-3">
          For questions, contact{" "}
          <a href="mailto:hello@nightshiftsystems.com.au" className="text-emerald-300 hover:text-emerald-200">
            hello@nightshiftsystems.com.au
          </a>
          .
        </p>
      </section>
    </main>
  );
}
