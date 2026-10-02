"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Compass,
  Images,
  Mail,
  MapPin,
  Sparkles,
  UserRound,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "interests", label: "Interests" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="relative">

      {/* =========================================================
          01 — HOME
      ========================================================= */}
      <section
        id="home"
        className="flex min-h-screen scroll-mt-24 items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-5xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/60 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Personal Portfolio
            </div>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-8xl lg:text-[9rem]">
              Mohamed
              <span className="text-blue-400">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50 sm:text-xl">
              A personal space to discover Mohamed, his journey, interests,
              memories, and the story behind the person.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1"
              >
                Discover More
                <ArrowDown
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Get in Touch
              </a>

            </div>

          </div>

          <div className="mt-24 flex flex-wrap gap-8 text-sm text-white/30">
            <span>01 / 06</span>
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>


      {/* =========================================================
          02 — ABOUT
      ========================================================= */}
      <section
        id="about"
        className="min-h-screen scroll-mt-24 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                02 / About
              </p>

              <h2 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-7xl">
                About
                <br />
                Mohamed<span className="text-blue-400">.</span>
              </h2>
            </div>

            <div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-blue-300">
                  <UserRound size={25} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Who is Mohamed?
                </h3>

                <p className="mt-5 leading-8 text-white/50">
                  Mohamed is 33 years old. This portfolio is a personal
                  presentation created to introduce him and provide a place
                  where visitors can explore different parts of his story.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-widest text-white/30">
                      Age
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      33
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-widest text-white/30">
                      Portfolio
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Personal
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href="#journey"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
                >
                  Continue to Journey
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          03 — JOURNEY
      ========================================================= */}
      <section
        id="journey"
        className="min-h-screen scroll-mt-24 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              03 / Journey
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-7xl">
              The Journey
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-6 leading-8 text-white/45">
              A section dedicated to the important moments and experiences
              that make up Mohamed&apos;s personal journey.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Beginning",
                text: "Every journey starts somewhere. This space can describe the beginning of Mohamed's story.",
              },
              {
                number: "02",
                title: "Experiences",
                text: "Important experiences, moments, and changes can be presented here.",
              },
              {
                number: "03",
                title: "Today",
                text: "A place to describe where Mohamed is today and what currently matters to him.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
              >
                <span className="font-mono text-sm text-cyan-400/60">
                  {item.number}
                </span>

                <h3 className="mt-12 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/40">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 flex justify-end">
            <a
              href="#interests"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
            >
              Explore Interests
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================
          04 — INTERESTS
      ========================================================= */}
      <section
        id="interests"
        className="min-h-screen scroll-mt-24 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              04 / Interests
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-7xl">
              Interests
              <span className="text-purple-400">.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/45">
              Discover the subjects, activities, and things that can be part
              of Mohamed&apos;s world.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Personal Interests",
              "Activities",
              "Favorite Things",
              "Future Goals",
            ].map((item, index) => (
              <div
                key={item}
                className="group min-h-[220px] rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-purple-300">
                  <Sparkles size={21} />
                </div>

                <p className="mt-8 font-mono text-xs text-white/20">
                  0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  Personal information can be added here.
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 flex justify-end">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
            >
              Visit Gallery
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================
          05 — GALLERY
      ========================================================= */}
      <section
        id="gallery"
        className="min-h-screen scroll-mt-24 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              05 / Gallery
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-7xl">
              Gallery
              <span className="text-emerald-400">.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/45">
              A visual space for photos, memories, places, and moments.
            </p>
          </div>

          <div className="grid auto-rows-[180px] gap-4 md:grid-cols-3">

            <div className="group row-span-2 flex items-end rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 via-white/[0.03] to-purple-500/10 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-[1.01]">
              <div>
                <Images className="mb-4 text-emerald-300" size={28} />
                <p className="text-xl font-bold text-white">
                  Memory 01
                </p>
                <p className="mt-2 text-sm text-white/35">
                  Photo placeholder
                </p>
              </div>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
              <p className="text-xs text-white/20">02</p>
              <p className="mt-10 text-lg font-semibold text-white">
                Memory 02
              </p>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
              <p className="text-xs text-white/20">03</p>
              <p className="mt-10 text-lg font-semibold text-white">
                Memory 03
              </p>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
              <p className="text-xs text-white/20">04</p>
              <p className="mt-10 text-lg font-semibold text-white">
                Memory 04
              </p>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
              <p className="text-xs text-white/20">05</p>
              <p className="mt-10 text-lg font-semibold text-white">
                Memory 05
              </p>
            </div>

          </div>

          <div className="mt-12 flex justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
            >
              Go to Contact
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================
          06 — CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="min-h-screen scroll-mt-24 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center">

          <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                06 / Contact
              </p>

              <h2 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-7xl">
                Let&apos;s
                <br />
                Connect<span className="text-orange-400">.</span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-white/45">
                This section can contain Mohamed&apos;s real contact
                information, social links, or another preferred way to get
                in touch.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#home"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1"
                >
                  Back to Home
                  <ArrowUpIcon />
                </a>

              </div>

            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-orange-300">
                <Mail size={24} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Contact Information
              </h3>

              <p className="mt-4 leading-7 text-white/40">
                Real contact details can be placed here once they are
                provided.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <MapPin size={18} className="text-white/40" />
                  <span className="text-sm text-white/50">
                    Location
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <Mail size={18} className="text-white/40" />
                  <span className="text-sm text-white/50">
                    Email
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION NAVIGATION
      ========================================================= */}
      <div className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 rounded-2xl border border-white/10 bg-black/50 p-2 shadow-2xl backdrop-blur-xl lg:block">

        <div className="flex items-center gap-1">

          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-xl px-3 py-2 text-xs font-medium text-white/40 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {String(index + 1).padStart(2, "0")}
            </a>
          ))}

        </div>

      </div>


      {/* =========================================================
          PREVIOUS / NEXT
      ========================================================= */}
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">

        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Home
        </a>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          Contact
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

      </div>

    </div>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-hover:-translate-y-1"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}