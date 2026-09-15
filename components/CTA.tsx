```tsx
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-indigo-600 px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          READY TO TAKE CONTROL?
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your money.
          <br />
          <span className="text-black/20">Your clarity. Your control.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Track your spending, understand your finances, and make every naira
          count with MoneyTrack.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-indigo-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
          >
            Get Started — Free
          </a>

          <a
            href="#"
            className="rounded-full border border-black/20 bg-black/10 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/20"
          >
            Explore MoneyTrack
          </a>
        </div>

        <p className="mt-6 text-sm text-black/40">
          Simple tools. Clear insights. Better financial habits.
        </p>
      </div>
    </section>
  );
}

