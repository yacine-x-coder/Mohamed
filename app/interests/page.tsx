"use client";

import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Compass,
  Lightbulb,
  Music,
  Plane,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";
import PageNavigation from "@/component/PageNavigation";

const interests = [
  {
    icon: Camera,
    title: "Photography",
    text: "Moments, places and memories captured through images.",
  },
  {
    icon: Plane,
    title: "Travel",
    text: "Discovering new places and experiencing different environments.",
  },
  {
    icon: Music,
    title: "Music",
    text: "Different sounds and styles that become part of everyday life.",
  },
  {
    icon: Compass,
    title: "Exploration",
    text: "Curiosity and discovering new ideas, places and experiences.",
  },
  {
    icon: Lightbulb,
    title: "Ideas",
    text: "Thinking about possibilities and turning simple ideas into something meaningful.",
  },
  {
    icon: Trophy,
    title: "Goals",
    text: "Personal goals, challenges and the motivation to keep moving forward.",
  },
];

export default function InterestsPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Interests
        </p>

        <h1 className="mt-4 text-5xl font-black sm:text-6xl">
          Things I
          <span className="block text-white/40">enjoy.</span>
        </h1>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.07]"
              >
                <Icon
                  size={30}
                  className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h2 className="mt-7 text-xl font-bold">
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
          href="/gallery"
          className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105"
        >
          View Gallery

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <PageNavigation
          previous={{
            title: "Journey",
            href: "/journey",
          }}
          next={{
            title: "Gallery",
            href: "/gallery",
          }}
        />
      </div>
    </div>
  );
}