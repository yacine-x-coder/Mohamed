"use client";

import Link from "next/link";
import { ArrowLeft, Home, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import PageNavigation from "@/component/PageNavigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 pb-20 pt-36">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-black sm:text-6xl">
          Let&apos;s
          <span className="block text-white/40">connect.</span>
        </h1>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <Mail className="text-blue-400" size={30} />

            <h2 className="mt-7 text-2xl font-bold">
              Get in touch
            </h2>

            <p className="mt-4 leading-7 text-white/45">
              Have a question or simply want to say hello? Send a message
              through the form.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <Home size={16} />
              Back Home
            </Link>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-blue-400/50"
              />

              <input
                type="email"
                placeholder="Your email"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-blue-400/50"
              />
            </div>

            <textarea
              placeholder="Your message"
              rows={7}
              className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-blue-400/50"
            />

            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Send Message
              <Send size={17} />
            </button>
          </motion.form>
        </div>

        <PageNavigation
          previous={{
            title: "Gallery",
            href: "/gallery",
          }}
        />
      </div>
    </div>
  );
}