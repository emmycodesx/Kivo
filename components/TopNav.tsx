"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Search,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function TopNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed left-[242px] right-0 top-0 z-30 h-[84px] border-b border-[#dce8f8] bg-white backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-8">
        {/* Search */}
        <div className="relative w-full max-w-[610px]">
          <Search
            size={21}
            strokeWidth={2}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3473c9]"
          />

          <input
            type="text"
            placeholder="Search transactions, categories..."
            className="h-[38px] w-full rounded-xl border border-[#d8e6fa] bg-white/60 pl-12 pr-20 text-[13px] font-medium text-[#173b82] outline-none transition-all duration-200 placeholder:text-[#3473c9] focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />

          {/* Keyboard Shortcut */}
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-md px-2 py-1 text-[12px] font-medium text-[#4c78b5]">
            <span className="text-[15px]">⌘</span>
            <span>K</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="ml-8 flex items-center gap-7">
          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-9 w-9 items-center justify-center text-[#2366b7] transition-colors duration-200 hover:text-indigo-600"
          >
            <Bell size={23} strokeWidth={2} />

            {/* Notification Dot */}
            <span className="absolute right-[5px] top-[4px] h-[7px] w-[7px] rounded-full bg-[#f43f68] ring-2 ring-[#f8fbff]" />
          </button>

          {/* Profile Dropdown */}
          <div
            ref={profileRef}
            className="relative"
          >
            {/* Profile Button */}
            <button
              type="button"
              onClick={() => setIsProfileOpen((prev) => !prev)}
              aria-expanded={isProfileOpen}
              className="flex items-center gap-3 rounded-lg py-1.5 pl-1 pr-1.5 transition-colors duration-200 hover:bg-[#edf4ff]"
            >
              {/* Avatar */}
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#e3e5ff] text-[13px] font-bold text-[#2447b8]">
                FT
              </div>

              {/* Name */}
              <span className="text-[13px] font-semibold text-[#162b70]">
                Emmanuel Taiwo
              </span>

              {/* Chevron */}
              <ChevronDown
                size={17}
                strokeWidth={2}
                className={`text-[#2366b7] transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 top-[52px] w-[240px] overflow-hidden rounded-2xl border border-[#dce8f8] bg-white shadow-[0_12px_35px_rgba(20,60,120,0.12)]">
                {/* User Info */}
                <div className="border-b border-[#edf1f7] px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e3e5ff] text-[13px] font-bold text-[#2447b8]">
                      FT
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#162b70]">
                        Emmanuel Taiwo
                      </p>

                      <p className="truncate text-[11px] text-gray-400">
                        emmanuel@example.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-gray-500 transition-colors hover:bg-[#f3f6ff] hover:text-indigo-600"
                  >
                    <User
                      size={18}
                      strokeWidth={2}
                    />

                    <span>Profile</span>
                  </Link>

                  <Link
                    href="/dashboard/settings"
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-gray-500 transition-colors hover:bg-[#f3f6ff] hover:text-indigo-600"
                  >
                    <Settings
                      size={18}
                      strokeWidth={2}
                    />

                    <span>Settings</span>
                  </Link>
                </div>

                {/* Sign Out */}
                <div className="border-t border-[#edf1f7] p-2">
                    <Link href="/">
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500"
                  >
                    <LogOut
                      size={18}
                      strokeWidth={2}
                    />

                    <span>Sign Out</span>
                  </button>
                    </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}