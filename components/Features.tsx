"use client";

export default function Features() {
  return (
    <main>
      <section id="features" className="py-4 bg-white">
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center ">
              {/* Transaction Tracking Card */}
              <div className="">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black mb-5"
                  style={{
                    background: "rgb(237, 233, 255",
                    color: "rgb(124, 58, 236",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#7C3AED"
                    className=""
                  >
                    <path
                      d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M8 8h8M8 12h8M8 16h4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                  Transaction Tracking
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                  Keep every transaction organized
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Add and manage your income and expenses in one place. Keep
                  your financial activity organized and easy to review.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(237, 233, 254)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#7C3AED"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Record income and expenses with ease
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(237, 233, 254)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#7C3AED"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Categorize transactions for clearer tracking
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(237, 233, 254)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#7C3AED"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Search and filter transactions when you need them
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
                    href="/dashboard"
                    style={{ color: "rgb(124, 58, 237)" }}
                  >
                    View dashboard{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="#7C3AED"
                      className=""
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center ">
                <div className="w-full max-w-sm mx-auto">
                  <div
                    className="rounded-3xl p-8 flex items-center justify-center"
                    style={{
                      background: "rgb(237, 233, 254)",
                      minHeight: "280px",
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="h-24 w-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        style={{ background: "rgb(124, 58, 237)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="white"
                          className=""
                        >
                          <path
                            d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                          <path
                            d="M8 8h8M8 12h8M8 16h4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="font-black text-xl mb-2"
                        style={{ color: "rgb(124, 58, 237)" }}
                      >
                        Transaction Tracking
                      </p>
                      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                        Clients fund the task upfront.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center lg:flex-row-reverse">
              <div className="lg:order-2">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black mb-5"
                  style={{
                    background: "rgb(219, 234, 254)",
                    color: "rgb(37, 99, 235)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#2563EB"
                    className=""
                  >
                    <path
                      d="M4 19V5M4 19h16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="m7 15 3-4 3 2 5-7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                  Spending Insights
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                  Understand where your money goes
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  See your income, expenses, and spending patterns at a glance.
                  Kivo helps you understand your financial activity more
                  clearly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(219, 234, 254)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#2563EB"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    View income and expenses at a glance
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(219, 234, 254)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#2563EB"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Track spending across different categories
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(219, 234, 254)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#2563EB"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Monitor your financial activity over time
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
                    href="/dashboard"
                    style={{ color: "rgb(37, 99, 235)" }}
                  >
                    View dashboard{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="#2563EB"
                      className=""
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:order-1">
                <div className="w-full max-w-sm mx-auto">
                  <div
                    className="rounded-3xl p-8 flex items-center justify-center"
                    style={{
                      background: "rgb(219, 234, 254)",
                      minHeight: "280px",
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="h-24 w-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        style={{ background: "rgb(37, 99, 235)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="white"
                          className=""
                        >
                          <path
                            d="M4 19V5M4 19h16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                          <path
                            d="m7 15 3-4 3 2 5-7"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="font-black text-xl mb-2"
                        style={{ color: "rgb(37, 99, 235)" }}
                      >
                        Spending Insights
                      </p>
                      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                        Freelancers can send a professional invoice directly to
                        any client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center ">
              <div className="">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black mb-5"
                  style={{
                    background: "rgb(220, 252, 231)",
                    color: "rgb(22, 163, 74)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#16A34A"
                    className=""
                  >
                    <path
                      d="M4 7.5A2.5 2.5 0 0 1 6.5 5H20v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M4 8h16M15 12h5v4h-5a2 2 0 0 1 0-4Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                  Budget Management
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                  Stay in control of your spending
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Set spending limits for your categories and keep track of how
                  much you have used. Stay aware of your budget before you go
                  over it.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(220, 252, 231)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#16A34A"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Create budgets for your spending categories
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(220, 252, 231)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#16A34A"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Track spending against your budget limits
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(220, 252, 231)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#16A34A"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Identify categories that are getting close to their limits
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
                    href="/dashboard"
                    style={{ color: "rgb(22, 163, 74)" }}
                  >
                    View dashboard{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="#16A34A"
                      className=""
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center ">
                <div className="w-full max-w-sm mx-auto">
                  <div
                    className="rounded-3xl p-8 flex items-center justify-center"
                    style={{
                      background: "rgb(220, 252, 231)",
                      minHeight: "280px",
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="h-24 w-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        style={{ background: "rgb(22, 163, 74)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="white"
                          className=""
                        >
                          <path
                            d="M4 7.5A2.5 2.5 0 0 1 6.5 5H20v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                          <path
                            d="M4 8h16M15 12h5v4h-5a2 2 0 0 1 0-4Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="font-black text-xl mb-2"
                        style={{ color: "rgb(22, 163, 74)" }}
                      >
                        Budget Management
                      </p>
                      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                        Every user gets a built-in Naira wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center lg:flex-row-reverse">
              <div className="lg:order-2">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black mb-5"
                  style={{
                    background: "rgb(243, 232, 255)",
                    color: "rgb(147, 51, 234)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#9333EA"
                    className=""
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="12"
                      cy="12"
                      r="1.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  Savings Goals
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                  Turn your savings goals into progress
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Set a target, add contributions, and follow your progress.
                  Kivo makes it easier to stay focused on what you are
                  saving for.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(243, 232, 255)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#9333EA"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Set a target amount and deadline
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(243, 232, 255)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#9333EA"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Add contributions as you save
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(243, 232, 255)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#9333EA"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    See your progress toward each goal
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
                    href="/dashboard"
                    style={{ color: "rgb(147, 51, 234)" }}
                  >
                    View dashboard{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="#9333EA"
                      className=""
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:order-1">
                <div className="w-full max-w-sm mx-auto">
                  <div
                    className="rounded-3xl p-8 flex items-center justify-center"
                    style={{
                      background: "rgb(243, 232, 255)",
                      minHeight: "280px",
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="h-24 w-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        style={{ background: "rgb(147, 51, 234)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="white"
                          className=""
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></circle>
                          <circle
                            cx="12"
                            cy="12"
                            r="5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></circle>
                          <circle
                            cx="12"
                            cy="12"
                            r="1.5"
                            fill="currentColor"
                          ></circle>
                        </svg>
                      </div>
                      <p
                        className="font-black text-xl mb-2"
                        style={{ color: "rgb(147, 51, 234)" }}
                      >
                        Savings Goals
                      </p>
                      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                        Built-in encrypted messaging means you never have to
                        leave the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center ">
              <div className="">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black mb-5"
                  style={{
                    background: "rgb(254, 243, 199)",
                    color: "rgb(217, 119, 6)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#D97706"
                    className=""
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></rect>
                    <path
                      d="M7 16v-3M12 16V8M17 16v-6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                  Financial Overview
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                  See your finances in one clear dashboard
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Bring your balances, income, expenses, budgets, savings, and
                  recent transactions together in one place.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(254, 243, 199)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#D97706"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    View your current balance and financial totals
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(254, 243, 199)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#D97706"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Review recent transactions quickly
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div
                      className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgb(254, 243, 199)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#D97706"
                        className=""
                      >
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8 12.75C8 12.75 9.6 13.6625 10.4 15C10.4 15 12.8 9.75 16 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    Monitor budgets and savings progress
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
                    href="/dashboard"
                    style={{ color: "rgb(217, 119, 6)" }}
                  >
                    View dashboard{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="#D97706"
                      className=""
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center ">
                <div className="w-full max-w-sm mx-auto">
                  <div
                    className="rounded-3xl p-8 flex items-center justify-center"
                    style={{
                      background: "rgb(254, 243, 199)",
                      minHeight: "280px",
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="h-24 w-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        style={{ background: "rgb(217, 119, 6)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          color="white"
                          className=""
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></rect>
                          <path
                            d="M7 16v-3M12 16V8M17 16v-6"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="font-black text-xl mb-2"
                        style={{ color: "rgb(217, 119, 6)" }}
                      >
                        Financial Overview
                      </p>
                      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                        Top freelancers have verified their identity with a
                        government-issued ID.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
