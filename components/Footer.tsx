"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-4 pt-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="MoneyTrack"
                className="h-9 w-9"
              />
              <span className="text-xl font-bold">Kivo</span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Take control of your money. Track your spending, plan your
              finances, and build better financial habits.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-2 text-sm font-semibold text-gray-300">
              Platform
            </h3>

            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#features" className="transition hover:text-blue-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-blue-500">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="transition hover:text-blue-500"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-2 text-sm font-semibold text-gray-300">
              Company
            </h3>

            <ul className="mt-2 space-y-2 text-sm text-gray-400">
              <li>
                <a href="/about" className="transition hover:text-blue-500">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="/terms" className="transition hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-2 text-sm font-semibold text-gray-300">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Get the latest updates and news.
            </p>

            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
              />

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-400">
              &copy; 2026 Kivo. All rights reserved.
            </p>
          </div>

          <div className="mb-5 flex gap-5 text-sm md:mb-0">
            <a
              href="#"
              aria-label="X"
              className="rounded-full p-2 transition hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full p-2 transition hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Email"
              className="rounded-full p-2 transition hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M19.25 4H4.75A2.755 2.755 0 0 0 2 6.75v10.5A2.755 2.755 0 0 0 4.75 20h14.5A2.755 2.755 0 0 0 22 17.25V6.75A2.755 2.755 0 0 0 19.25 4M4.75 5.5h14.5c.69 0 1.25.56 1.25 1.25v.975l-8.5 4.91l-8.5-4.91V6.75c0-.69.56-1.25 1.25-1.25m14.5 13H4.75c-.69 0-1.25-.56-1.25-1.25V9.46l8.5 4.91l8.5-4.91v7.79c0 .69-.56 1.25-1.25 1.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
