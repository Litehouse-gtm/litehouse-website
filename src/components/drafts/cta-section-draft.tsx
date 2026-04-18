"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSectionDraft() {
  return (
    <section id="book" className="relative py-20 md:py-28 bg-navy overflow-hidden">
      <div className="absolute top-[-100px] left-[40%] w-[400px] h-[400px] bg-yellow/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Want access to the same GTM systems that have booked Tesla, TikTok and NFL?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Book a call. We'll walk you through how the Growth Engine would work for your business. No pitch decks, no fluff.
          </p>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors shadow-lg shadow-yellow/20"
          >
            Book a Call
            <ArrowRight size={18} />
          </a>

          <p className="text-sm text-white/30 mt-6">
            Free. 30 minutes. No commitment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
