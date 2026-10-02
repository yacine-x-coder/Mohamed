"use client";

import Link from "next/link";
import { ArrowRight, Heart, Sparkles, UserRound } from "lucide-react";
import { motion } from "motion/react";
import PageNavigation from "@/component/PageNavigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            About
          </p>

          <h1 className="mt-4 text-5xl font-black sm:text-6xl">
            A little bit
            <span className="block text-white/40">about Mohamed.</span>
          </h1>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: UserRound,
              title: "Who I Am",
              text: "A personal introduction and a space to share the person behind the portfolio.",
            },
            {
              icon: Sparkles,
              title: "My Character",
              text: "A collection of values, ideas and qualities that describe the journey.",
            },
            {
              icon: Heart,
              title: "What Matters",
              text: "The interests, people and experiences that make every chapter meaningful.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <Icon className="text-blue-400" size={28} />

                <h2 className="mt-6 text-xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-white/45">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <Link
          href="/journey"
          className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105"
        >
          Explore My Journey

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <PageNavigation
          previous={{
            title: "Home",
            href: "/",
          }}
          next={{
            title: "Journey",
            href: "/journey",
          }}
        />
      </div>
    </div>
  );
}