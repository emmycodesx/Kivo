// components/Sidebar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  PiggyBank,
  BarChart3,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    href: "/dashboard/transactions",
    icon: ArrowLeftRight,
  },
  {
    name: "Budgets",
    href: "/dashboard/budgets",
    icon: PieChart,
  },
  {
    name: "Savings Goals",
    href: "/dashboard/savings",
    icon: PiggyBank,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[242px] flex-col border-r border-[#dce8f8] bg-white px-3 py-6">
      {/* Logo */}
      <Link
        href="/dashboard"
        className="mb-7 flex items-center gap-3 px-2"
      >
        <Image
          src="/images/logo.png"
          alt="Kivo"
          width={42}
          height={42}
          priority
          className="h-[42px] w-[42px] object-contain"
        />

        <span className="text-[25px] font-bold tracking-tight text-[#101c68]">
          Kivo
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex h-[46px] items-center gap-5 rounded-xl px-4 transition-colors duration-200 ${
                isActive
                  ? "bg-[#e5efff] text-indigo-600"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-transparent"
              }`}
            >
              <Icon
                size={22}
                strokeWidth={2}
                className="shrink-0 transition-colors duration-200"
              />

              <span className="text-[14px] font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Kivo Card */}
      <div className="relative mt-auto overflow-hidden rounded-xl border border-[#d6e4fb] bg-[#eef4ff] px-4 py-4">
        <div className="pointer-events-none absolute -bottom-8 -right-6 h-20 w-28 rounded-full bg-[#dce7ff] blur-xl" />

        <div className="relative mb-4 flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Kivo"
            width={38}
            height={38}
            className="h-[38px] w-[38px] object-contain"
          />

          <span className="text-[22px] font-bold tracking-tight text-[#101c68]">
            Kivo
          </span>
        </div>

        <p className="relative max-w-[155px] text-[14px] font-medium leading-5 text-indigo-600">
          Better money habits,
          <br />
          brighter future.
        </p>
      </div>
    </aside>
  );
}