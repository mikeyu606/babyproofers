import Image from 'next/image';

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
            <a className={navLink} href="#approach">
              Mission
            </a>
            <a className={navLink} href="#labs">
              Impact
            </a>
            <a className={navLink} href="#labs">
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
            <a className={navLink} href="#footer">
              Newsroom
            </a>
            <a className={navLink} href="#footer">
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

      <section
        id="approach"
        className="scroll-mt-8 border-t border-stone/30 bg-white px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-plum">
            Our Approach
          </p>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16 md:gap-x-20">
            <div className="md:pr-8">
              <h2 className="font-serif-hero max-w-[14ch] text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]">
                Protect every inch of your home.
              </h2>
            </div>
            <div className="flex flex-col justify-end md:pt-24">
              <p className="max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
                <span className="font-semibold text-ink">babyproofers</span> is built on a simple belief:
                parents shouldn&apos;t have to guess what&apos;s hazardous. We combine in-home
                assessments, childproofing best practices, and careful installation so you can breathe
                easier—whether you&apos;re cooking dinner, hosting playdates, or chasing a toddler
                down the hall.
              </p>
              <a
                href="#footer"
                className="mt-8 inline-flex w-fit rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1f1b18]"
              >
                How we do it
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="labs" className="scroll-mt-8 bg-white text-ink">
        <div className="grid md:min-h-[min(85vh,920px)] md:grid-cols-2">
          <div className="relative min-h-[320px] md:min-h-0">
            <Image
              src="/happy.jpg"
              alt="Happy family relaxing together in a bright living room"
              fill
              className="object-cover object-[center_40%]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 md:py-16 lg:px-16 lg:py-20">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-plum">
              babyproofers Labs
            </p>
            <h2 className="font-serif-hero mt-5 max-w-[14ch] text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
              We&apos;re meticulous about every inch.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              Our team maps your home room by room—stairs, cabinets, windows, furniture, and
              outlets—then installs premium hardware with the same care we&apos;d want in our own
              spaces. Real peace of mind isn&apos;t a slogan; it&apos;s measured, anchored, and
              double-checked.
            </p>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-[#121314] px-5 pb-6 pt-12 text-white sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-white/15 pt-10">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <a href="/" className="font-serif-hero text-4xl font-semibold leading-none tracking-tight">
                babyproofers
              </a>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <p className="text-sm text-white/60">Index</p>
                <ul className="mt-4 space-y-2.5 text-[1rem] font-semibold">
                  <li><a href="#approach" className="hover:text-white/75">Mission</a></li>
                  <li><a href="#labs" className="hover:text-white/75">Labs</a></li>
                  <li><a href="#approach" className="hover:text-white/75">How We Work</a></li>
                  <li><a href="mailto:hello@babyproofers.com" className="hover:text-white/75">Contact</a></li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-white/60">Resources</p>
                <ul className="mt-4 space-y-2.5 text-[1rem] font-semibold">
                  <li><a href="#" className="hover:text-white/75">Safe Home Tips</a></li>
                  <li><a href="#" className="hover:text-white/75">FAQ</a></li>
                  <li><a href="#" className="hover:text-white/75">Trust &amp; Safety</a></li>
                  <li><a href="#" className="hover:text-white/75">Press</a></li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-sm text-white/60">Legal</p>
                <ul className="mt-4 space-y-2.5 text-[1rem] font-semibold">
                  <li><a href="#" className="hover:text-white/75">Security</a></li>
                  <li><a href="#" className="hover:text-white/75">Terms</a></li>
                  <li><a href="#" className="hover:text-white/75">Privacy</a></li>
                  <li><a href="#" className="hover:text-white/75">Accessibility</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
            <p>© 2026 babyproofers, Inc.</p>
            <p>English (US)</p>
          </div>
        </div>
      </footer>
    </>
  );
}
