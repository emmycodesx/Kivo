"use client";

import Image from "next/image";
import { useState } from "react";
import { User, Mail, Phone, LockKeyhole, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-8 pb-16">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center">

        {/* Register Card */}
        <div className="w-full rounded-3xl border border-zinc-100 bg-white p-5 shadow-sm sm:p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
        {/* Logo + Heading */}
        <div className="mb-6 text-center">
          <div className="mb-3 inline-flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Kivo"
              width={52}
              height={52}
              priority
              className="rounded-2xl"
            />
          </div>

          <h1 className="text-2xl font-black text-zinc-900">Welcome back</h1>

          <p className="mt-1 text-sm text-zinc-500">
            Take control of your finances, simply.
          </p>
        </div>
          

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-700"
              >
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 pl-10 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

          

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-sm font-medium text-zinc-700"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="12345678"
                  minLength={8}
                  required
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 pl-10 pr-11 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-transparent focus:ring-2 focus:ring-indigo-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <label className="group flex cursor-pointer items-start gap-3">
              <div className="relative mt-0.5 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="sr-only"
                />

                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                    agreed
                      ? "border-indigo-600 bg-indigo-600"
                      : "border-zinc-300 group-hover:border-indigo-600"
                  }`}
                >
                  {agreed && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5 text-white"
                    >
                      <path
                        d="M4 10.5L8 14.5L16 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <span className="text-sm leading-snug text-zinc-600">
                I have read and agree to the{" "}
                <a
                  href="/terms"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Create Account */}
            <button
              type="submit"
              disabled={!agreed}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />

            <span className="text-xs font-medium text-zinc-400">
              or continue with
            </span>

            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          {/* Google Button - Frontend Only */}
          <button
            type="button"
            onClick={() => {
              // Google authentication will be connected later.
            }}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition-all duration-200 hover:bg-zinc-50 hover:shadow-sm"
          >
            {/* Google Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.45a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.56-5.17 3.56-8.64Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3c-1.07.72-2.44 1.15-4.07 1.15-3.13 0-5.79-2.11-6.74-4.95H1.26v3.09A12 12 0 0 0 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.26 14.3A7.23 7.23 0 0 1 4.88 12c0-.8.14-1.58.38-2.3V6.61H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.39l4-3.09Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.36.61 4.61 1.81l3.45-3.45C17.95 1.12 15.23 0 12 0A12 12 0 0 0 1.26 6.61l4 3.09C5.21 6.86 7.87 4.75 12 4.75Z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Login */}
          <p className="mt-3 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Sign-up Here
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
