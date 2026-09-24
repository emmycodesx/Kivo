"use client"

export default function Pricing() {
  const checkIcon = (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-blue-500"
        viewBox="0 0 16 16"
      >
        <path d="M0 0h16v16H0z" fill="none" />
        <polyline
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          points="2.75 8.75 6.25 12.25 13.25 4.75"
        />
      </svg>
    </div>
  );

  return (
    <section id="pricing" className="mb-20 bg-white px-4 pt-20">
      <div className="mx-auto w-full max-w-[1440px] px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-black md:text-5xl">
            Simple pricing.{" "}
            <span className="text-indigo-600">No surprises.</span>
          </h2>

          <p className="mt-3 text-center text-sm font-medium leading-6 text-gray-400">
            Everything you need to take control of your finances,
            <br />
            with a plan that grows with you.
          </p>

          <div className="mb-12 mt-4 flex items-center justify-center gap-3">
            <button className="text-sm font-semibold text-zinc-700">
              Monthly
            </button>

            <button
              type="button"
              className="relative h-6 w-11 rounded-full bg-zinc-300 focus:outline-none"
              aria-label="Toggle billing period"
            >
              <div
                className="absolute top-1 h-4 w-4 rounded-full bg-indigo-600 shadow-sm"
                style={{ transform: "translateX(2px)" }}
              />
            </button>

            <button className="flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors">
              Yearly
              <span className="rounded-full bg-indigo-600 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
                −20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="relative flex flex-col rounded-xl border border-black/10 bg-zinc-100 p-9 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">
            <p className="text-sm font-medium text-gray-400">Free</p>

            <h3 className="mt-2 text-2xl font-bold text-black">
              ₦0{" "}
              <span className="text-sm font-normal text-gray-500">
                /month
              </span>
            </h3>

            <p className="mt-3 text-xs font-medium text-zinc-600">
              Perfect for getting started
            </p>

            <ul className="mt-8 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Track incomes and expenses</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Manage transactions</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Set basic budgets</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Create savings goals</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>View spending journey</span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-black/20 bg-transparent px-5 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              Get Started
            </button>
          </div>

          <div className="relative flex flex-col rounded-xl border border-black/10 bg-zinc-100 p-9 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">
            <p className="text-sm font-medium text-gray-400">Pro</p>

            <h3 className="mt-2 text-2xl font-bold text-black">
              ₦4,500{" "}
              <span className="text-sm font-normal text-gray-500">
                /month
              </span>
            </h3>

            <p className="mt-3 text-xs font-medium text-zinc-600">
              More insights, more control, more progress
            </p>

            <ul className="mt-8 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Everything in Free</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Advanced analytics & reports</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Unlimited savings goals</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Spending insights</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Budget alerts</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Priority Support</span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-black/20 bg-transparent px-5 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              Get Started
            </button>
          </div>

          <div className="relative flex flex-col rounded-xl bg-black p-9 transition duration-300 hover:-translate-y-1">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
              Most Popular
            </span>

            <p className="text-sm font-medium text-gray-400">Premium</p>

            <h3 className="mt-2 text-2xl font-bold text-indigo-600">
              ₦9,000{" "}
              <span className="text-sm font-normal text-gray-500">
                /month
              </span>
            </h3>

            <p className="mt-3 text-xs font-medium text-white">
              Take your financial management to the next level
            </p>

            <ul className="mt-8 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Everything in Pro</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Custom spending categories</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Detailed financial reports</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Debt tracking</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Bill reminders</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Enhanced security</span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
            >
              Get Started
            </button>
          </div>

          <div className="relative flex flex-col rounded-xl border border-black/10 bg-zinc-100 p-9 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30">
            <p className="text-sm font-medium text-gray-400">Premium+</p>

            <h3 className="mt-2 text-2xl font-bold text-black">
              ₦18,000{" "}
              <span className="text-sm font-normal text-gray-500">
                /month
              </span>
            </h3>

            <p className="mt-3 text-xs font-medium text-zinc-600">
              The complete package for ultimate financial freedom
            </p>

            <ul className="mt-8 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Everything in Premium</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Personal finance coach</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Customizable reports</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Investment tracking</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>Early access to new features</span>
              </li>

              <li className="flex items-center gap-3">
                {checkIcon}
                <span>24/7 dedicated support</span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-black/20 bg-transparent px-5 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

