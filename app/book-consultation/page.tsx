import Link from 'next/link';

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="border-b border-stone/70 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 md:px-12">
          <Link href="/" className="font-serif-hero text-3xl font-semibold tracking-tight">
            babyproofers
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link href="/how-we-do-it" className="text-sm font-medium text-ink/75 transition hover:text-ink">
              How We Do It
            </Link>
            <Link href="/packages" className="text-sm font-medium text-ink/75 transition hover:text-ink">
              Packages
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 md:px-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">Book Consultation</p>
        <h1 className="font-serif-hero mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl">
          Tell us about your home and we will build the right safety plan.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
          Fill out this quick intake so we can prepare recommendations before your consultation call.
        </p>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8 md:px-12">
        <form className="rounded-3xl border border-stone bg-white p-6 shadow-luxe sm:p-8">
          <div className="grid gap-5">
            <label className="text-sm font-medium text-ink/85">
              Full Name
              <input className="mt-2 w-full rounded-xl border border-stone px-3 py-2.5" type="text" name="name" />
            </label>
            <label className="text-sm font-medium text-ink/85">
              Email
              <input className="mt-2 w-full rounded-xl border border-stone px-3 py-2.5" type="email" name="email" />
            </label>
            <label className="text-sm font-medium text-ink/85">
              Phone
              <input className="mt-2 w-full rounded-xl border border-stone px-3 py-2.5" type="tel" name="phone" />
            </label>
            <label className="text-sm font-medium text-ink/85">
              Child Age(s)
              <input className="mt-2 w-full rounded-xl border border-stone px-3 py-2.5" type="text" name="ages" />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-ink/85">
            Home Address
            <input className="mt-2 w-full rounded-xl border border-stone px-3 py-2.5" type="text" name="address" />
          </label>

          <label className="mt-5 block text-sm font-medium text-ink/85">
            Top Safety Concerns / Questions
            <textarea
              className="mt-2 min-h-28 w-full rounded-xl border border-stone px-3 py-2.5"
              name="questions"
              placeholder="Example: stairs, outlets, cabinets, furniture anchoring, pool safety..."
            />
          </label>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink/85">Services You Want Included</legend>
            <div className="mt-3 grid gap-2 text-sm text-ink/80">
              <label><input className="mr-2" type="checkbox" name="services" value="outlets" />Outlets (Auto-Slide Covers)</label>
              <label><input className="mr-2" type="checkbox" name="services" value="anti-tip" />Furniture Anchoring (Anti-Tip)</label>
              <label><input className="mr-2" type="checkbox" name="services" value="locks" />Invisible Magnetic Locks</label>
              <label><input className="mr-2" type="checkbox" name="services" value="edges" />Corner Guards</label>
              <label><input className="mr-2" type="checkbox" name="services" value="window" />Window Stops / Locks</label>
              <label><input className="mr-2" type="checkbox" name="services" value="filter" />Change-out Air Filter</label>
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-8 inline-flex rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#1f1b18]"
          >
            Submit Consultation Request
          </button>
        </form>
      </section>
    </main>
  );
}
