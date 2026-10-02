"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      setDark(false);
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      setDark(true);
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current;

      if (next) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

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
          light-navbar
        "
      >
        {/* Logo */}
        <a
          href="/#home"
          className="text-xl font-black tracking-tight text-white light-text"
        >
          MOHAMED<span className="text-blue-400">.</span>
        </a>

        {/* Desktop */}
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
                light-nav-link
              "
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* THEME BUTTON */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              rounded-xl
              bg-white/5
              p-2.5
              text-white
              transition-all duration-300
              hover:bg-white/10
              light-theme-button
            "
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="
              rounded-xl
              bg-white/5
              p-2.5
              text-white
              md:hidden
              light-theme-button
            "
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="
            mx-auto mt-2 w-[92%]
            rounded-2xl
            bg-black/80
            p-3
            shadow-2xl
            backdrop-blur-xl
            light-mobile-menu
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
                transition-all
                hover:bg-white/10
                hover:text-white
                light-nav-link
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
