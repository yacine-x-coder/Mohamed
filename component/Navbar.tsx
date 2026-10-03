"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Journey", href: "/#journey" },
  { name: "Interests", href: "/#interests" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className="
          mx-auto mt-4 flex w-[92%] max-w-6xl
          items-center justify-between
          rounded-2xl
          bg-black/40
          px-5 py-3
          shadow-2xl
          backdrop-blur-xl
          transition-all duration-500
        "
      >
        {/* Logo */}
        <a
          href="/#home"
          className="
            text-xl font-black tracking-tight
            text-white
            transition-all duration-300
            hover:text-blue-400
          "
        >
          MOHAMED<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                rounded-xl px-4 py-2
                text-sm font-medium
                text-white/60
                transition-all duration-300
                hover:bg-white/10
                hover:text-white
              "
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="
            rounded-xl
            bg-white/5
            p-2.5
            text-white
            transition-all duration-300
            hover:bg-white/10
            md:hidden
          "
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          className="
            mx-auto mt-2 w-[92%]
            rounded-2xl
            bg-black/80
            p-3
            shadow-2xl
            backdrop-blur-xl
            md:hidden
          "
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="
                block rounded-xl
                px-4 py-3
                text-sm
                text-white/70
                transition-all duration-300
                hover:bg-white/10
                hover:text-white
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
