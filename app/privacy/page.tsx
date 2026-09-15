"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import {
  ShieldCheck,
  Ban,
  Database,
  SlidersHorizontal,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:py-28">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
            Privacy Policy
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your money is yours.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            MoneyTrack is designed to help you understand and organize your
            finances while keeping your information handled responsibly.
          </p>

          <p className="mt-5 text-sm text-zinc-600">
            Last Updated: September 11, 2026
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">

          {/* Privacy in plain English */}
         <div className="border-b border-white/10 pb-16">
  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
    Privacy in plain English
  </h2>

  <div className="mt-10 grid gap-x-16 gap-y-12 sm:grid-cols-2">
    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600/10">
        <ShieldCheck className="h-5 w-5 text-indigo-600" />
      </div>

      <div>
        <h3 className="text-base font-semibold text-black">
          What we collect
        </h3>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          Depending on how MoneyTrack is implemented, information may include
          your name, email address, transactions, income and expense records,
          budgets, savings goals, and basic application preferences.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600/10">
        <Ban className="h-5 w-5 text-indigo-600" />
      </div>

      <div>
        <h3 className="text-base font-semibold text-black">
          What we don't do
        </h3>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          MoneyTrack does not sell or rent your personal information. The
          current version also does not connect to real bank accounts, payment
          providers, or external financial accounts.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600/10">
        <Database className="h-5 w-5 text-indigo-600" />
      </div>

      <div>
        <h3 className="text-base font-semibold text-black">
          How your data is stored
        </h3>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          The current version may use browser-based localStorage to keep your
          application data available on the same browser and device.
        </p>
      </div>
    </div>

    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600/10">
        <SlidersHorizontal className="h-5 w-5 text-indigo-600" />
      </div>

      <div>
        <h3 className="text-base font-semibold text-black">
          How you control it
        </h3>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          Depending on the version of MoneyTrack, you may be able to review,
          edit, delete, or reset information stored within the application.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Full Privacy Policy */}
          <article className="max-w-3xl pt-16">

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Full Privacy Policy
            </h2>

            <section id="about" className="mt-14">
              <PolicyHeading number="1" title="About MoneyTrack" />

              <PolicyText>
                MoneyTrack is a personal finance tracking application designed
                to help users organize simulated information relating to
                income, expenses, budgets, savings goals, and transactions.
              </PolicyText>

              <PolicyText>
                MoneyTrack is currently a frontend application and does not
                connect to real bank accounts, payment providers, or external
                financial accounts.
              </PolicyText>

              <PolicyText>
                MoneyTrack does not process payments or move money on behalf
                of users.
              </PolicyText>
            </section>

            <section id="information" className="mt-14">
              <PolicyHeading
                number="2"
                title="Information We May Collect"
              />

              <PolicyText>
                Depending on how the application is implemented, MoneyTrack
                may collect or store information such as:
              </PolicyText>

              <PolicyList
                items={[
                  "Your name",
                  "Email address",
                  "Account credentials",
                  "Transaction information that you choose to enter",
                  "Income and expense records",
                  "Budget information",
                  "Savings goals and contributions",
                  "Application preferences, such as theme or currency",
                  "Basic technical information necessary for the application to function",
                ]}
              />

              <div className="mt-7 border-l-2 border-indigo-600 bg-indigo-600/10 px-5 py-4">
                <p className="text-sm leading-7 text-black">
                  You should not enter sensitive banking credentials, debit or
                  credit card numbers, bank account passwords, or other highly
                  sensitive financial information into the current version of
                  MoneyTrack.
                </p>
              </div>
            </section>

            <section id="financial-information" className="mt-14">
              <PolicyHeading
                number="3"
                title="Financial Information"
              />

              <PolicyText>
                MoneyTrack allows users to enter financial information for
                personal organization and demonstration purposes.
              </PolicyText>

              <PolicyText>
                This information may include:
              </PolicyText>

              <PolicyList
                items={[
                  "Income amounts",
                  "Expense amounts",
                  "Transaction descriptions",
                  "Categories",
                  "Dates",
                  "Budget limits",
                  "Savings targets",
                  "Savings contributions",
                ]}
              />

              <PolicyText>
                The current version of MoneyTrack uses simulated financial
                data and browser-based storage. It does not retrieve
                information directly from financial institutions.
              </PolicyText>
            </section>

            <section id="how-we-use" className="mt-14">
              <PolicyHeading
                number="4"
                title="How We Use Information"
              />

              <PolicyText>
                Information provided to MoneyTrack may be used to:
              </PolicyText>

              <PolicyList
                items={[
                  "Create and manage your account",
                  "Provide the application's features",
                  "Display your financial dashboard",
                  "Calculate balances, income, expenses, budgets, and savings progress",
                  "Save your application preferences",
                  "Improve the functionality and usability of the application",
                  "Detect and resolve application errors",
                  "Maintain the security and integrity of the service",
                ]}
              />

              <PolicyText>
                We do not use your financial information to provide investment
                recommendations or personalized financial advice.
              </PolicyText>
            </section>

            <section id="local-storage" className="mt-14">
              <PolicyHeading
                number="5"
                title="Local Storage"
              />

              <PolicyText>
                The current version of MoneyTrack may use your browser's
                localStorage to save application data.
              </PolicyText>

              <PolicyText>
                This allows information to remain available when you refresh
                the page or return to the application using the same browser
                and device.
              </PolicyText>

              <PolicyText>
                Because localStorage is browser-specific:
              </PolicyText>

              <PolicyList
                items={[
                  "Your data may not automatically synchronize across devices.",
                  "Clearing your browser's storage may remove your MoneyTrack data.",
                  "Other people who have access to your device or browser profile may potentially access locally stored information.",
                  "Local storage should not be considered a secure replacement for a production financial database.",
                ]}
              />

              <PolicyText>
                Users should avoid entering highly sensitive financial or
                authentication information into a practice or locally stored
                environment.
              </PolicyText>
            </section>

            <section id="cookies" className="mt-14">
              <PolicyHeading
                number="6"
                title="Cookies and Similar Technologies"
              />

              <PolicyText>
                The current version of MoneyTrack may not require cookies for
                its core functionality.
              </PolicyText>

              <PolicyText>
                If cookies, analytics tools, authentication services, or other
                tracking technologies are introduced in a future version, this
                Privacy Policy may be updated to explain what technologies are
                used and why.
              </PolicyText>
            </section>

            <section id="third-party" className="mt-14">
              <PolicyHeading
                number="7"
                title="Third-Party Services"
              />

              <PolicyText>
                MoneyTrack may eventually use third-party services for
                functions such as hosting, authentication, analytics, email
                delivery, or application infrastructure.
              </PolicyText>

              <PolicyText>
                When third-party services are introduced, information handled
                by those providers may be subject to their respective privacy
                policies and terms.
              </PolicyText>

              <PolicyText>
                We will make reasonable efforts to identify relevant
                third-party services where appropriate.
              </PolicyText>
            </section>

            <section id="data-sharing" className="mt-14">
              <PolicyHeading
                number="8"
                title="Data Sharing"
              />

              <PolicyText>
                MoneyTrack does not sell or rent your personal information.
              </PolicyText>

              <PolicyText>
                Information may be disclosed when reasonably necessary to:
              </PolicyText>

              <PolicyList
                items={[
                  "Provide or maintain the service",
                  "Use a third-party service required to operate the application",
                  "Protect the security of MoneyTrack",
                  "Comply with applicable legal obligations",
                  "Respond to lawful requests from authorities",
                ]}
              />
            </section>

            <section id="security" className="mt-14">
              <PolicyHeading
                number="9"
                title="Data Security"
              />

              <PolicyText>
                We take reasonable measures to protect information handled by
                the application.
              </PolicyText>

              <PolicyText>
                However, no method of electronic storage or transmission can
                be guaranteed to be completely secure.
              </PolicyText>

              <PolicyText>
                The current practice version of MoneyTrack should not be used
                to store highly sensitive financial credentials or information.
              </PolicyText>
            </section>

            <section id="retention" className="mt-14">
              <PolicyHeading
                number="10"
                title="Data Retention and Deletion"
              />

              <PolicyText>
                Depending on the version of MoneyTrack you use, information may
                remain stored until:
              </PolicyText>

              <PolicyList
                items={[
                  "You delete it through the application",
                  "You reset your application data",
                  "Your browser storage is cleared",
                  "The information is otherwise deleted as part of the operation of the service",
                ]}
              />

              <PolicyText>
                If a future cloud-based version of MoneyTrack is introduced,
                additional data retention and deletion procedures may apply.
              </PolicyText>
            </section>

            <section id="children" className="mt-14">
              <PolicyHeading
                number="11"
                title="Children's Privacy"
              />

              <PolicyText>
                MoneyTrack is not specifically designed for children.
              </PolicyText>

              <PolicyText>
                We do not knowingly intend to collect personal information
                from children in circumstances where applicable law requires
                parental consent.
              </PolicyText>

              <PolicyText>
                If you believe that a child has provided personal information
                inappropriately, please contact us so that appropriate action
                can be considered.
              </PolicyText>
            </section>

            <section id="choices" className="mt-14">
              <PolicyHeading
                number="12"
                title="Your Choices"
              />

              <PolicyText>
                Depending on the version of the application, you may be able
                to:
              </PolicyText>

              <PolicyList
                items={[
                  "Review information stored in your account",
                  "Edit your transactions, budgets, and savings goals",
                  "Delete individual records",
                  "Reset application data",
                  "Update certain account or application preferences",
                ]}
              />

              <PolicyText>
                If you have questions about your information, you may contact
                us using the contact information provided on the MoneyTrack
                website.
              </PolicyText>
            </section>

            <section id="changes" className="mt-14">
              <PolicyHeading
                number="13"
                title="Changes to This Privacy Policy"
              />

              <PolicyText>
                We may update this Privacy Policy when MoneyTrack's features,
                technology, data practices, or legal requirements change.
              </PolicyText>

              <PolicyText>
                When significant changes are made, the updated policy will be
                made available through the MoneyTrack website.
              </PolicyText>

              <PolicyText>
                The "Last Updated" date at the beginning of this policy
                indicates when the policy was most recently revised.
              </PolicyText>
            </section>

            <section id="contact" className="mt-14">
              <PolicyHeading
                number="14"
                title="Contact Us"
              />

              <PolicyText>
                Questions about privacy email @<span className="text-indigo-600">privacy@moneytrack.com</span>
              </PolicyText>

              

              <div className="mt-10 border-t border-black/10 pt-8">
                <p className="text-sm leading-7 text-zinc-600">
                  MoneyTrack is a practice financial management application.
                  It is not a bank, payment processor, investment platform, or
                  financial institution.
                </p>
              </div>
            </section>

          </article>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </main>
  );
}

function PolicyHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
      <span className="mr-3 text-indigo-500">
        {number}.
      </span>
      {title}
    </h2>
  );
}

function PolicyText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mt-5 text-sm leading-8 text-zinc-600">
      {children}
    </p>
  );
}

function PolicyList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="mt-5 space-y-3 pl-5 text-sm leading-7 text-zinc-600">
      {items.map((item) => (
        <li key={item} className="list-disc pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

