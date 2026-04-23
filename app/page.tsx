import Image from 'next/image';
import BookingCalendar from '@/components/BookingCalendar';

const safetyPanels = [
  {
    title: 'Staircase guardrails',
    caption: 'Measured, secure installations to reduce stairway risk.',
    image:
      'https://images.unsplash.com/photo-1617104600974-c24cbdf4f5b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Outlet protection',
    caption: 'Discreet tamper-resistant outlet solutions for every room.',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Furniture anchoring',
    caption: 'Heavy furniture stabilized with premium anti-tip systems.',
    image:
      'https://images.unsplash.com/photo-1616594039964-3f6f2e8eb1f4?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cloud px-6 py-8 text-ink sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <header className="flex items-center justify-between">
          <p className="text-lg tracking-tight text-ink sm:text-xl">babyproofers</p>
          <a
            href="#booking"
            className="rounded-full border border-stone px-4 py-2 text-sm text-ink transition hover:bg-white"
          >
            Contact Us
          </a>
        </header>

        <section className="mx-auto mt-20 max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            making homes safe for the next generation.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Professional home safety assessments and premium installation for Southern
            California families.
          </p>
          <a
            href="#booking"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-pine px-8 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
          >
            Start for free.
          </a>
        </section>

        <section className="mt-20 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-stone bg-white/70 p-4 shadow-luxe md:col-span-2">
            <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80">
              <Image
                src={safetyPanels[0].image}
                alt={safetyPanels[0].title}
                fill
                className="object-cover saturate-50"
              />
            </div>
            <h2 className="mt-4 text-xl font-medium text-ink">{safetyPanels[0].title}</h2>
            <p className="mt-1 text-sm text-ink/70">{safetyPanels[0].caption}</p>
          </article>

          {safetyPanels.slice(1).map((panel) => (
            <article key={panel.title} className="rounded-3xl border border-stone bg-white/70 p-4 shadow-luxe">
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <Image src={panel.image} alt={panel.title} fill className="object-cover saturate-50" />
              </div>
              <h2 className="mt-4 text-lg font-medium text-ink">{panel.title}</h2>
              <p className="mt-1 text-sm text-ink/70">{panel.caption}</p>
            </article>
          ))}
        </section>

        <section id="booking" className="mt-20 pb-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Consultation booking calendar
              </h2>
              <p className="mt-2 text-sm text-ink/75">
                Choose a date and reserve your in-home assessment.
              </p>
            </div>
            <a
              href="#booking"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cloud transition hover:bg-[#1f1b18]"
            >
              Contact Us
            </a>
          </div>

          <BookingCalendar />
        </section>
      </div>
    </main>
  );
}
