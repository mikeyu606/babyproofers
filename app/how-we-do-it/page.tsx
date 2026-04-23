import Link from 'next/link';

const steps = [
  {
    title: 'Home Safety Walkthrough',
    description:
      'We inspect each room, staircase, bathroom, kitchen, and outdoor area to identify age-specific risks for your child.'
  },
  {
    title: 'Custom Safety Plan',
    description:
      'You receive a clear room-by-room scope, recommended hardware, and a transparent proposal before any installation starts.'
  },
  {
    title: 'Professional Installation',
    description:
      'Our team installs and tests each product with clean, minimal aesthetics and secure mounting standards.'
  },
  {
    title: 'Final Review + Parent Handoff',
    description:
      'We walk you through each safety upgrade, answer questions, and share maintenance tips for long-term peace of mind.'
  }
];

export default function HowWeDoItPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="border-b border-stone/70 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 md:px-12">
          <Link href="/" className="font-serif-hero text-3xl font-semibold tracking-tight">
            babyproofers
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link href="/packages" className="text-sm font-medium text-ink/75 transition hover:text-ink">
              Packages
            </Link>
            <Link
              href="/book-consultation"
              className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#1f1b18]"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">How We Do It</p>
        <h1 className="font-serif-hero mt-4 max-w-[14ch] text-4xl font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl">
          A safer home plan that is practical, clean, and built around your family.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
          Our process is designed to keep decisions simple for parents while covering real-world risk
          points. We focus on what matters most first, then layer in everyday hazard protection and
          premium upgrades where needed.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-20 sm:px-8 md:px-12">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-stone bg-white p-6 shadow-luxe">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">Step {index + 1}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{step.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">{step.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
