"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

type PageNavigationProps = {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

export default function PageNavigation({
  previous,
  next,
}: PageNavigationProps) {
  return (
    <div className="mx-auto mt-20 flex max-w-5xl items-center justify-between gap-4 border-t border-white/10 pt-8">
      {previous ? (
        <Link href={previous.href}>
          <motion.div
            whileHover={{ x: -5 }}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition-colors hover:bg-white/[0.08]"
          >
            <ArrowLeft
              size={20}
              className="text-white/50 transition-transform group-hover:-translate-x-1"
            />

            <div>
              <p className="text-xs text-white/30">PREVIOUS</p>
              <p className="mt-1 font-semibold text-white">
                {previous.title}
              </p>
            </div>
          </motion.div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link href={next.href}>
          <motion.div
            whileHover={{ x: 5 }}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-right backdrop-blur-xl transition-colors hover:bg-white/[0.08]"
          >
            <div>
              <p className="text-xs text-white/30">NEXT</p>
              <p className="mt-1 font-semibold text-white">
                {next.title}
              </p>
            </div>

            <ArrowRight
              size={20}
              className="text-white/50 transition-transform group-hover:translate-x-1"
            />
          </motion.div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}