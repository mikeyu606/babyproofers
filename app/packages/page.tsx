import Link from 'next/link';

const mustHaves = [
  { name: 'Outlets (Auto-Slide Covers)', detail: '$75 per outlet', note: 'Most requested essential' },
  { name: 'Anchoring Furniture (Anti-Tip)', detail: '$300 for 8-12 anchors', note: 'High injury prevention impact' },
  { name: 'Invisible Magnetic Locks', detail: '$200 package add-on', note: 'Cabinets + drawers hero product' }
];

const everydayHazards = [
  'Sharp Edges (Corner Guards)',
  'Toilet Locks',
  'Oven and Fridge Locks'
];

const premiumUpgrades = [
  'Window Stops / Window Locks',
  'Plexiglass Banister Guards',
  'Water Safety + Scald Protection',
  'Pool Safety Coordination',
  'Change-out Air Filter service add-on'
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-cloud text-ink">
      <header className="border-b border-stone/70 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 md:px-12">
          <Link href="/" className="font-serif-hero text-3xl font-semibold tracking-tight">
            babyproofers
          </Link>
          <Link
            href="/book-consultation"
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#1f1b18]"
          >
            Book Consultation
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">Packages & Services</p>
        <h1 className="font-serif-hero mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl">
          What we include in a safer-home package.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
          We prioritize the highest-impact protections first, then layer in daily safety upgrades and
          custom structural options depending on your home.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-5 pb-8 sm:px-8 md:grid-cols-3 md:px-12">
        <article className="rounded-3xl border border-stone bg-white p-6 shadow-luxe md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">High Priority</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Must-Haves</h2>
          <p className="mt-2 text-sm text-ink/70">Core protections parents ask for first.</p>
          <ul className="mt-5 space-y-4">
            {mustHaves.map((item) => (
              <li key={item.name} className="rounded-2xl border border-stone/70 p-4">
                <p className="font-semibold">{item.name}</p>
                <p className="mt-1 text-sm text-ink/75">{item.note}</p>
                <p className="mt-2 text-sm font-semibold text-plum">{item.detail}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-stone bg-white p-6 shadow-luxe">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">Medium Priority</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Everyday Hazards</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink/80">
            {everydayHazards.map((item) => (
              <li key={item} className="rounded-xl bg-cloud px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 md:px-12">
        <article className="rounded-3xl border border-stone bg-white p-6 shadow-luxe">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">Specialty / Structural</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Premium Upgrades</h2>
          <ul className="mt-5 grid gap-3 text-sm text-ink/80 md:grid-cols-2">
            {premiumUpgrades.map((item) => (
              <li key={item} className="rounded-xl bg-cloud px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
