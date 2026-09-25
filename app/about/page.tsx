import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import {
  UserRound,
  ShieldCheck,
  Zap,
  ChartNoAxesCombined,
  Heart,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Kivo",
  description:
    "Learn about Kivo, our mission, and why we're building a simpler way to manage personal finances.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#09090b]">
      <Navbar />

      {/* MISSION */}

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-indigo-600">
              Our mission
            </p>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[#09090b] sm:text-5xl">
              Make managing your money
              <br />
              simpler and more understandable.
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-500">
              We exist to make personal finance easier to understand and manage.
              Kivo gives you a simple way to track your income, expenses,
              budgets, savings, and spending habits — helping you stay aware of
              where your money is going and make more informed financial
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <Stats />
      </section>

      {/* VALUES*/}

      <section className="bg-white px-6 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              What we stand for
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#09090b] sm:text-5xl lg:text-6xl">
              Our values
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              These values guide everything we do at Kivo — from the features we
              build to the way we support our users. They keep us focused on
              making personal finance simpler, clearer, and more useful.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <UserRound size={24} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-[#09090b]">
                User First
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                Everything we build is designed with you in mind. We focus on
                creating tools that make managing your financial life easier.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <ShieldCheck size={24} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-[#09090b]">
                Security &amp; Privacy
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                Your financial information matters. Kivo is designed with
                privacy, transparency, and responsible data handling in mind.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <Zap size={24} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-[#09090b]">
                Simplicity
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                Managing your money shouldn&apos;t be complicated. We focus on
                clean design, straightforward tools, and an easy experience.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <ChartNoAxesCombined size={24} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-[#09090b]">
                Transparency
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                We believe financial tools should be clear about how they work,
                what they offer, and how your information is handled.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <Heart size={24} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-[#09090b]">
                Financial Empowerment
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                We want to help you build better habits, understand your
                spending, and take greater control of your financial future.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-600/5">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <UsersRound size={24} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-[#09090b]">
                A Better Financial Future
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-zinc-500">
                We&apos;re building Kivo to give people better tools to
                understand their money and make more intentional financial
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA*/}
      <section className="bg-indigo-600">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 lg:py-24">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Take control of your finances.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-indigo-100">
            Understand your money, track your progress, and build better
            financial habits with Kivo.
          </p>

          <div className="mt-8">
            <a
              href="/dashboard"
              className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-zinc-100"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
