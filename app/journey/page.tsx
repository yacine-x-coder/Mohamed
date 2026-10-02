"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import PageNavigation from "@/component/PageNavigation";

const journey = [
  {
    number: "01",
    title: "The Beginning",
    text: "Every journey starts with a first step, a first experience and a first idea.",
  },
  {
    number: "02",
    title: "Experiences",
    text: "Different moments, challenges and discoveries gradually shape the journey.",
  },
  {
    number: "03",
    title: "Today",
    text: "A moment to look back, understand the path and appreciate how far it has come.",
  },
  {
    number: "04",
    title: "What Comes Next",
    text: "New goals, new experiences and new chapters are waiting ahead.",
  },
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Journey
        </p>

        <h1 className="mt-4 text-5xl font-black sm:text-6xl">
          The road
          <span className="block text-white/40">so far.</span>
        </h1>

        <div className="relative mt-16">
          <div className="absolute left-[20px] top-0 h-full w-px bg-white/10" />

          <div className="space-y-10">
            {journey.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black text-xs font-bold">
                  {item.number}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-white/45">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Link
          href="/interests"
          className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105"
        >
          Explore Interests

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <PageNavigation
          previous={{
            title: "About",
            href: "/about",
          }}
          next={{
            title: "Interests",
            href: "/interests",
          }}
        />
      </div>
    </div>
  );
}