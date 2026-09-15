import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import StatsCard from "@/components/Stats";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />

      <section id="hero" className="min-h-screen px-8 mb-12 pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex mb-5 justify-center items-center gap-2 rounded-full px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>

            <span className="text-xs font-bold text-gray-600">
              Smart money management
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Take control of your money
            <br />
            <span className="relative inline-block text-indigo-600">
              with MoneyTrack.
              <svg
                className="absolute -bottom-2 left-0 w-full text-indigo-600"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8.5C60 3.5 150 3 298 9.5"
                  stroke="#2563EB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.4"
                  pathLength="1"
                  strokeDashoffset="0"
                  strokeDasharray="1 1"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
            Manage your spending, track your savings,
            <br className="hidden md:block" />
            and stay on top of your financial goals — all in one simple place
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Get Started
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
            >
              See how it works
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <img
              src="/images/dashboard.png"
              alt="MoneyTrack Dashboard"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24" id="how-it-works">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            How it Works
          </p>

          <h2 className="mx-auto max-w-3xl text-xl font-bold tracking-tight text-white md:text-5xl">
            Your money. <span className="text-indigo-600">Your control.</span>
          </h2>
        </div>

        <div className="mb-20 flex justify-start">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0A0A0A] p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:bg-blue-500 transition-transform duration-300 hover:-translate-y-[5px]">
            <span className="pointer-events-none absolute -right-4 -top-10 text-[180px] font-bold leading-none text-blue-500/[0.045]">
              01
            </span>

            <div className="relative z-10">
              <p className="text-sm font-semibold text-blue-500">01 /</p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-14v2m0 10v2"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Track your money
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                Add your income and expenses and see exactly where your money
                goes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 flex justify-end">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0A0A0A] p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:bg-blue-500 transition-transform duration-300 hover:-translate-y-[5px]">
            <span className="pointer-events-none absolute -right-4 -top-10 text-[180px] font-bold leading-none text-blue-500/[0.045]">
              02
            </span>

            <div className="relative z-10">
              <p className="text-sm font-semibold text-blue-500">02 /</p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-6-6h12"
                  />

                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Set your goals
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                Create budgets and savings goals to keep your finances organized
                and on track.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 flex justify-start">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0A0A0A] p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:bg-blue-500 transition-transform duration-300 hover:-translate-y-[5px]">
            <span className="pointer-events-none absolute -right-4 -top-10 text-[180px] font-bold leading-none text-blue-500/[0.045]">
              03
            </span>

            <div className="relative z-10">
              <p className="text-sm font-semibold text-blue-500">03 /</p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 19V5m0 14h16"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7 15 4-4 3 3 5-6"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Grow your future
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                Use your financial insights to make smarter decisions and build
                better money habits.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0A0A0A] p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:bg-blue-500 transition-transform duration-300 hover:-translate-y-[5px]">
            <span className="pointer-events-none absolute -right-4 -top-10 text-[180px] font-bold leading-none text-blue-500/[0.045]">
              04
            </span>

            <div className="relative z-10">
              <p className="text-sm font-semibold text-blue-500">04 /</p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m9-9H3"
                  />
                </svg>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Stay in control
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                Get a clear view of your finances and stay confident about every
                financial decision.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <PricingSection />
      {/* Stats Card */}
      <StatsCard />
      {/* What our Users Say */}
      <Testimonial />
      {/* CTA */}
      <section className="relative overflow-hidden bg-indigo-600 px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            READY TO TAKE CONTROL?
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your money.
            <br />
            <span className="text-gray-200">Your clarity. Your control.</span>
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
              className="rounded-full   px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore MoneyTrack
            </a>
          </div>

          <p className="mt-6 text-sm text-white">
            Simple tools. Clear insights. Better financial habits.
          </p>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
