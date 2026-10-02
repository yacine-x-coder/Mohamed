"use client";

import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import PageNavigation from "@/component/PageNavigation";

const galleryItems = [
  "Memory 01",
  "Memory 02",
  "Memory 03",
  "Memory 04",
  "Memory 05",
  "Memory 06",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Gallery
        </p>

        <h1 className="mt-4 text-5xl font-black sm:text-6xl">
          Moments &
          <span className="block text-white/40">memories.</span>
        </h1>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.2),transparent_35%)] transition-transform duration-700 group-hover:scale-125" />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <ImageIcon
                  size={36}
                  className="text-white/30 transition-transform duration-500 group-hover:scale-125"
                />

                <span className="mt-4 text-sm text-white/40">
                  {item}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="/contact"
          className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105"
        >
          Get in Touch

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <PageNavigation
          previous={{
            title: "Interests",
            href: "/interests",
          }}
          next={{
            title: "Contact",
            href: "/contact",
          }}
        />
      </div>
    </div>
  );
}