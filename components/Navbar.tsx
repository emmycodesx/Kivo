
"use client";

import { useEffect } from "react";
import Link from "next/link"

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const logoText = document.getElementById("logo-text");
    const navLinks = document.querySelectorAll<HTMLElement>(".nav-link");
    const loginBtn = document.getElementById("login-btn");

    if (!navbar || !logoText || !loginBtn) return;

    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-lg");
        navbar.classList.remove("bg-transparent");

        logoText.classList.remove("text-gray-900");
        logoText.classList.add("text-black");

        navLinks.forEach((link) => {
          link.classList.remove("text-gray-600");
          link.classList.add("text-black");
        });

        loginBtn.classList.remove("text-gray-600");
        loginBtn.classList.add("text-black");
      } else {
        navbar.classList.remove("bg-white", "shadow-lg");
        navbar.classList.add("bg-transparent");

        logoText.classList.remove("text-black");
        logoText.classList.add("text-gray-900");

        navLinks.forEach((link) => {
          link.classList.remove("text-black");
          link.classList.add("text-gray-600");
        });

        loginBtn.classList.remove("text-black");
        loginBtn.classList.add("text-gray-600");
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed left-0 top-0 z-50 w-full bg-transparent px-6 py-4 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="MoneyTrack logo"
            className="h-8 w-8 object-contain"
          />

          <span
            id="logo-text"
            className="text-sm font-bold tracking-tight text-gray-900"
          >
            MoneyTrack
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="nav-link text-xs font-medium text-gray-600 transition hover:text-blue-700"
          >
            About
          </Link>

          <Link
            href="#"
            className="nav-link text-xs font-medium text-gray-600 transition hover:text-blue-700"
          >
            Product
          </Link>

          <Link
            href="/#testimonial"
            className="nav-link text-xs font-medium text-gray-600 transition hover:text-blue-700"
          >
            Testimonial
          </Link>

          <a
            href="#"
            className="nav-link text-xs font-medium text-gray-600 transition hover:text-blue-700"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            id="login-btn"
            href="#"
            className="rounded-full px-4 py-2 text-xs font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Log in
          </a>

          <a
            href="#"
            className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-indigo-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

