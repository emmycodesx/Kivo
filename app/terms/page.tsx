
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms | MoneyTrack",
  description: "Read the Terms of Service for MoneyTrack.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:py-28">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Terms of Service
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Here&apos;s how MoneyTrack works.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            These terms explain how you can use MoneyTrack, what you can expect
            from the platform, and the responsibilities that come with using it.
          </p>

          <p className="mt-5 text-sm text-zinc-500">
            Last Updated: September 11, 2026
          </p>
        </div>
      </section>

      {/* Terms in a nutshell */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Terms in a nutshell
            </h2>

            <p className="mt-4 text-base leading-7 text-zinc-600">
              The important things to know before using MoneyTrack.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <span className="text-sm font-bold text-indigo-600">01</span>
              <h3 className="mt-4 text-base font-semibold">
                Use MoneyTrack responsibly
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                You agree to provide accurate information and use the
                application only for lawful and appropriate purposes.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <span className="text-sm font-bold text-indigo-600">02</span>
              <h3 className="mt-4 text-base font-semibold">
                Your financial information is your responsibility
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                MoneyTrack helps you organize financial information, but you are
                responsible for the accuracy of the information you enter.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <span className="text-sm font-bold text-indigo-600">03</span>
              <h3 className="mt-4 text-base font-semibold">
                MoneyTrack is not financial advice
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                The platform is designed for tracking and organization. It does
                not provide professional financial, investment, tax, or legal
                advice.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <span className="text-sm font-bold text-indigo-600">04</span>
              <h3 className="mt-4 text-base font-semibold">
                No real financial transactions
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                The current version of MoneyTrack uses simulated financial data
                and does not process real bank transactions or payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Terms */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Full Terms of Service
            </h2>

            <p className="mt-4 text-base leading-7 text-zinc-600">
              Please read these terms carefully before using MoneyTrack.
            </p>
          </div>

          <div className="mt-14 max-w-4xl space-y-14">
            {/* 1 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">01</p>
              <h3 className="mt-2 text-xl font-bold">About MoneyTrack</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                MoneyTrack is a personal finance tracking application designed
                to help users organize and monitor financial information such as
                income, expenses, transactions, budgets, savings goals, and
                spending habits.
              </p>
            </section>

            {/* 2 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">02</p>
              <h3 className="mt-2 text-xl font-bold">Eligibility</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                By using MoneyTrack, you confirm that you are legally able to
                enter into these Terms of Service and that the information you
                provide when using the application is accurate and complete.
              </p>
            </section>

            {/* 3 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">03</p>
              <h3 className="mt-2 text-xl font-bold">Your Account</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                You are responsible for maintaining the security of your account
                information and for activities carried out through your account.
                You agree to provide accurate information and keep it reasonably
                up to date.
              </p>
            </section>

            {/* 4 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">04</p>
              <h3 className="mt-2 text-xl font-bold">Acceptable Use</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                You agree to use MoneyTrack responsibly and lawfully. You must
                not misuse the platform, attempt to interfere with its
                operation, gain unauthorized access, or use the service for
                unlawful activities.
              </p>
            </section>

            {/* 5 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">05</p>
              <h3 className="mt-2 text-xl font-bold">Financial Information</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                MoneyTrack allows you to enter and organize financial
                information. You are responsible for ensuring that the
                information you enter is accurate. MoneyTrack does not verify
                the accuracy of manually entered financial information.
              </p>
            </section>

            {/* 6 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">06</p>
              <h3 className="mt-2 text-xl font-bold">No Financial Advice</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                MoneyTrack is intended as a financial tracking and organization
                tool. Nothing provided through the application should be
                considered professional financial, investment, tax, or legal
                advice.
              </p>
            </section>

            {/* 7 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">07</p>
              <h3 className="mt-2 text-xl font-bold">
                No Real Financial Transactions
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                The current version of MoneyTrack does not process real money
                transfers, payments, deposits, withdrawals, or other real
                financial transactions. It also does not connect directly to
                your real bank account or payment account.
              </p>
            </section>

            {/* 8 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">08</p>
              <h3 className="mt-2 text-xl font-bold">Data and Local Storage</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Depending on the version of MoneyTrack you use, financial
                information may be stored using browser-based local storage. You
                are responsible for understanding that clearing browser data or
                changing devices may affect information stored locally.
              </p>
            </section>

            {/* 9 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">09</p>
              <h3 className="mt-2 text-xl font-bold">Availability</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                We aim to keep MoneyTrack available and functioning properly,
                but we do not guarantee that the service will always be
                available, uninterrupted, secure, or free from errors.
              </p>
            </section>

            {/* 10 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">10</p>
              <h3 className="mt-2 text-xl font-bold">Intellectual Property</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                MoneyTrack and its original content, design, branding, features,
                and materials are protected by applicable intellectual property
                laws. You may not copy, modify, distribute, or reproduce our
                materials without appropriate permission.
              </p>
            </section>

            {/* 11 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">11</p>
              <h3 className="mt-2 text-xl font-bold">Third-Party Services</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                MoneyTrack may use or link to third-party services. Those
                services operate under their own terms and privacy policies, and
                MoneyTrack is not responsible for the policies or practices of
                independent third parties.
              </p>
            </section>

            {/* 12 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">12</p>
              <h3 className="mt-2 text-xl font-bold">Disclaimer</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                MoneyTrack is provided for personal finance tracking and
                organizational purposes. The information and functionality
                provided through the platform are provided without guarantees
                that they will always be complete, accurate, or suitable for
                every user&apos;s circumstances.
              </p>
            </section>

            {/* 13 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">13</p>
              <h3 className="mt-2 text-xl font-bold">
                Limitation of Liability
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                To the extent permitted by applicable law, MoneyTrack and its
                operators will not be responsible for losses or damages
                resulting from your use of the platform, reliance on information
                within the platform, or interruptions and technical issues
                beyond our reasonable control.
              </p>
            </section>

            {/* 14 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">14</p>
              <h3 className="mt-2 text-xl font-bold">Termination</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                We may suspend or terminate access to MoneyTrack if you violate
                these Terms or misuse the platform. You may also stop using the
                service at any time.
              </p>
            </section>

            {/* 15 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">15</p>
              <h3 className="mt-2 text-xl font-bold">Changes to These Terms</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                We may update these Terms of Service from time to time. When
                changes are made, the updated version will be published on this
                page along with a revised last-updated date. Continued use of
                MoneyTrack after changes are published means you acknowledge the
                updated Terms.
              </p>
            </section>

            {/* 16 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">16</p>
              <h3 className="mt-2 text-xl font-bold">Governing Law</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                These Terms of Service are governed by the applicable laws of
                Nigeria, without regard to conflict-of-law principles.
              </p>
            </section>

            {/* 17 */}
            <section>
              <p className="text-sm font-bold text-indigo-600">17</p>
              <h3 className="mt-2 text-xl font-bold">Contact</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                If you have questions about these Terms of Service or
                MoneyTrack, please contact the MoneyTrack team through the
                official contact channel provided by the application.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
