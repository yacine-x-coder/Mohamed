"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Journey", href: "/journey" },
  { name: "Interests", href: "/interests" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((value) => !value);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 flex w-[92%] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-white"
        >
          MOHAMED<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-white text-black"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-all duration-300 hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {dark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="mx-auto mt-2 w-[92%] rounded-2xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm transition-all ${
                  active
                    ? "bg-white text-black"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}