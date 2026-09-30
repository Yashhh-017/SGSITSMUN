import Link from "next/link";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DISEC | SGSITS MUN 2026",
  description:
    "The arena of international security, where nations confront questions of disarmament, military technology, weapons proliferation and the delicate pursuit of peace.",
};

export default function DisecPage() {
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
              04
            </span>

            <span className="h-px w-10 bg-[#7eb8f7]/40" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40">
              United Nations Committee
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-cream sm:text-7xl md:text-8xl">
            DISEC
          </h1>

          <p className="mt-5 max-w-2xl font-display text-lg italic leading-relaxed text-[#7eb8f7]/85 sm:text-xl md:text-2xl">
            Disarmament & International Security Committee
          </p>

          {/* Description */}
          <p className="mt-7 max-w-2xl font-sans text-sm font-light leading-relaxed text-cream/65 sm:text-base md:text-lg">
            The arena of international security, where nations confront
            questions of disarmament, military technology, weapons
            proliferation and the delicate pursuit of peace.
          </p>

          {/* Quote */}
          <div className="mt-9 w-full max-w-xl border-t border-cream/10 pt-6">
            <p className="font-display text-sm italic leading-relaxed text-cream/65 sm:text-base">
              “How do nations pursue security without making conflict
              inevitable?”
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          AGENDA
      ========================================================== */}
      <section className="border-y border-cream/10 bg-[#081a3e]/30 px-6 py-14 sm:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/40 sm:text-xs">
            Agenda
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl md:text-5xl">
            What we'll be debating
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-10 rounded-full bg-[#7eb8f7]/70" />

          <p className="mx-auto mt-6 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/50 sm:text-base">
            Agenda to be announced.
          </p>

          {/* CTA */}
          <a
            href="/assets/agendas/disec-agenda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-4 border border-cream/15 bg-[#040e24]/60 px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-[#7eb8f7]/50 hover:bg-[#040e24]"
          >
            <span>Download Committee Agenda</span>

            <span className="text-[#7eb8f7]/70 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-[#7eb8f7]">
              ↓
            </span>
          </a>
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
                Disarmament & International Security
              </h3>

              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/50">
                Represent your nation and navigate the complex questions of
                international security, disarmament and the responsible use
                of military technology.
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
                United Nations Debate
              </p>

              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-cream/50">
                Debate. Negotiate. Draft. Resolve.
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
            href="/committees/unhrc"
            className="group text-left"
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/30 transition-colors duration-300 group-hover:text-[#7eb8f7] sm:text-xs">
              ← Previous
            </span>

            <span className="mt-1 block font-display text-base font-bold text-cream/70 transition-colors duration-300 group-hover:text-cream sm:text-lg">
              UNHRC
            </span>
          </Link>

          {/* Center marker */}
          <div className="hidden h-px w-12 bg-cream/10 sm:block" />

          {/* Next */}
          <Link
            href="/committees/unodc"
            className="group text-right"
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/30 transition-colors duration-300 group-hover:text-[#7eb8f7] sm:text-xs">
              Next →
            </span>

            <span className="mt-1 block font-display text-base font-bold text-cream/70 transition-colors duration-300 group-hover:text-cream sm:text-lg">
              UNODC
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}