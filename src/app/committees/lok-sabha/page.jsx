import Link from "next/link";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LOK SABHA | SGSITS MUN 2026",
  description:
    "A forum where competing visions of governance meet. Debate, negotiate and legislate as elected representatives navigating the complexities of a living democracy.",
};

export default function LokSabhaPage() {
  return (
    <main className="min-h-screen bg-[#040e24] text-cream">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden px-6 pt-28 pb-16 sm:px-8 md:pt-36 md:pb-20 lg:px-12">
        {/* Soft background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-[#082052]/35 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Back */}
          <Link
            href="/#committees"
            className="group mb-10 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40 transition-colors duration-300 hover:text-[#7eb8f7] sm:text-xs"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            All Committees
          </Link>

          {/* Committee number */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#7eb8f7]/80">
              01
            </span>

            <span className="h-px w-10 bg-[#7eb8f7]/40" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40">
              Parliamentary Committee
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            LOK SABHA
          </h1>

          <p className="mt-5 font-display text-lg italic text-[#7eb8f7]/85 sm:text-xl md:text-2xl">
            The House of the People
          </p>

          {/* Description */}
          <p className="mt-7 max-w-2xl font-sans text-sm font-light leading-relaxed text-cream/65 sm:text-base md:text-lg">
            A forum where competing visions of governance meet. Debate,
            negotiate and legislate as elected representatives navigating the
            complexities of a living democracy.
          </p>

          {/* Quote */}
          <div className="mt-9 w-full max-w-xl border-t border-cream/10 pt-6">
            <p className="font-display text-sm italic leading-relaxed text-cream/65 sm:text-base">
              “What should a democracy demand of those who govern it?”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          AGENDA
      ========================================================== */}
      {/* =========================================================
    AGENDA
========================================================= */}
<section className="border-y border-cream/10 bg-[#081a3e]/30 px-6 py-14 sm:px-8 md:py-16 lg:px-12">
  <div className="mx-auto max-w-4xl">
    {/* Header */}
    <div className="text-center">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/40 sm:text-xs">
        Agenda
      </p>

      <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl md:text-5xl">
        What we'll be debating
      </h2>

      <div className="mx-auto mt-4 h-[2px] w-10 rounded-full bg-[#7eb8f7]/70" />

      <p className="mx-auto mt-5 max-w-2xl font-sans text-sm font-light leading-relaxed text-cream/50 sm:text-base">
        Where constitutional choices and economic realities shape India's future.
      </p>
    </div>

    {/* Agenda Items */}
    <div className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
      {/* Agenda 01 */}
      <div className="grid gap-4 py-7 sm:grid-cols-[80px_1fr] sm:gap-8">
        <div>
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#7eb8f7]/80">
            01
          </span>
        </div>

        <div>
          <p className="font-display text-lg font-semibold leading-snug text-cream sm:text-xl">
            Addressing the Challenges of “One Nation, One Election”
          </p>

          <p className="mt-2 max-w-2xl font-sans text-sm font-light leading-relaxed text-cream/50">
            Analyzing its constitutional, logistical and democratic implications.
          </p>
        </div>
      </div>

      {/* Agenda 02 */}
      <div className="grid gap-4 py-7 sm:grid-cols-[80px_1fr] sm:gap-8">
        <div>
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#7eb8f7]/80">
            02
          </span>
        </div>

        <div>
          <p className="font-display text-lg font-semibold leading-snug text-cream sm:text-xl">
            Strengthening India’s Economic Resilience
          </p>

          <p className="mt-2 max-w-2xl font-sans text-sm font-light leading-relaxed text-cream/50">
            Examining geopolitical and energy shocks, crude-oil volatility,
            E20, inflation, taxation, trade and energy security.
          </p>
        </div>
      </div>
    </div>

    {/* Download */}
    <div className="mt-8 text-center">
      <a
        href="/assets/agendas/lok-sabha-agenda.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-4 border border-cream/15 bg-[#040e24]/50 px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-[#7eb8f7]/50 hover:bg-[#040e24]"
      >
        <span>Download Full Agenda</span>

        <span className="text-[#7eb8f7]/70 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-[#7eb8f7]">
          ↓
        </span>
      </a>
    </div>
  </div>
</section>

      {/* =========================================================
          COMMITTEE INFORMATION
      ========================================================== */}
      <section className="px-6 py-14 sm:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">

            {/* Left */}
            <div className="text-center md:text-left">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/35 sm:text-xs">
                Committee
              </p>

              <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
                The House of the People
              </h3>

              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/50">
                Represent a constituency, defend your position and work
                through the complexities of parliamentary debate.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden h-20 w-px bg-cream/10 md:block" />

            {/* Right */}
            <div className="text-center md:text-right">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/35 sm:text-xs">
                Format
              </p>

              <p className="font-display text-xl font-semibold text-cream/85 sm:text-2xl">
                Parliamentary Debate
              </p>

              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/50">
                Debate. Negotiate. Amend. Build consensus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESOURCES
      ========================================================== */}
      <section className="border-t border-cream/10 px-6 py-12 sm:px-8 md:py-14 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/35 sm:text-xs">
            Resources
          </p>

          <p className="font-sans text-sm font-light text-cream/40">
            Background guides and additional committee documents will be
            available here closer to the conference.
          </p>
        </div>
      </section>

      {/* =========================================================
          PREVIOUS / NEXT
      ========================================================== */}
      <section className="border-t border-cream/10 px-6 py-10 sm:px-8 md:py-12 lg:px-12">
        <div className="mx-auto flex max-w-4xl items-center justify-between">

          {/* Previous */}
          <Link
            href="/committees/unodc"
            className="group text-left"
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/30 transition-colors duration-300 group-hover:text-[#7eb8f7] sm:text-xs">
              ← Previous
            </span>

            <span className="mt-1 block font-display text-base font-bold text-cream/70 transition-colors duration-300 group-hover:text-cream sm:text-lg">
              UNODC
            </span>
          </Link>

          {/* Center marker */}
          <div className="hidden h-px w-12 bg-cream/10 sm:block" />

          {/* Next */}
          <Link
            href="/committees/mahabharata"
            className="group text-right"
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/30 transition-colors duration-300 group-hover:text-[#7eb8f7] sm:text-xs">
              Next →
            </span>

            <span className="mt-1 block font-display text-base font-bold text-cream/70 transition-colors duration-300 group-hover:text-cream sm:text-lg">
              MAHABHARATA
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}