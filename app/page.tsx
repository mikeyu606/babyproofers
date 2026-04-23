import Image from 'next/image';
import BookingCalendar from '@/components/BookingCalendar';

const navLink =
  'text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-white/95 transition hover:text-white';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/family.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/30"
            aria-hidden
          />
        </div>

        <header className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-start gap-x-4 px-5 pt-7 sm:px-8 sm:pt-9 md:px-12 md:pt-10 lg:px-16">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7" aria-label="Primary">
            <a className={navLink} href="#mission">
              Mission
            </a>
            <a className={navLink} href="#impact">
              Impact
            </a>
            <a className={navLink} href="#booking">
              Labs
            </a>
          </nav>
          <a
            href="/"
            className="justify-self-center pt-0.5 text-center text-lg font-semibold tracking-tight text-white sm:text-xl md:text-[1.35rem]"
          >
            babyproofers
          </a>
          <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 sm:gap-x-7" aria-label="Secondary">
            <a className={navLink} href="#newsroom">
              Newsroom
            </a>
            <a className={navLink} href="#careers">
              Careers
            </a>
          </nav>
        </header>

        <section className="relative z-10 flex min-h-[calc(100vh-5.5rem)] flex-col justify-end pb-14 pl-5 sm:min-h-[calc(100vh-6rem)] sm:pb-20 sm:pl-8 md:pb-24 md:pl-12 lg:pb-28 lg:pl-16">
          <h1 className="font-serif-hero max-w-[12ch] text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:max-w-[14ch] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
            The home safety team
            <br />
            designed for your family.
          </h1>
        </section>
      </div>

      <div className="bg-cloud px-5 py-16 text-ink sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <section id="mission" className="scroll-mt-8 border-b border-stone/60 pb-14">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mission</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
              We help families make every room safer with thoughtful assessments, premium hardware, and
              meticulous installation across Southern California.
            </p>
          </section>

          <section id="impact" className="scroll-mt-8 border-b border-stone/60 py-14">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Impact</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
              From stair gates to anchored furniture and outlet protection, our work reduces everyday
              hazards so you can focus on life with little ones.
            </p>
          </section>

          <section id="booking" className="scroll-mt-8 pt-4">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Booking calendar</h2>
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

          <section id="newsroom" className="scroll-mt-8 border-t border-stone/60 pt-14">
            <h2 className="text-lg font-semibold tracking-tight">Newsroom</h2>
            <p className="mt-2 max-w-2xl text-sm text-ink/75">
              For press and partnerships, reach out through your booking request or contact form—we reply
              within one business day.
            </p>
          </section>

          <section id="careers" className="scroll-mt-8 pb-4 pt-10">
            <h2 className="text-lg font-semibold tracking-tight">Careers</h2>
            <p className="mt-2 max-w-2xl text-sm text-ink/75">
              We hire careful craftspeople and safety consultants in Southern California. Tell us about your
              experience when you book a consultation call.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
