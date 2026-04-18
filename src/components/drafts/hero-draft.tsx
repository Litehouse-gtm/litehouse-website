"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function HeroDraft() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-[-200px] left-[20%] w-[600px] h-[600px] bg-yellow/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[100px] right-[-100px] w-[400px] h-[400px] bg-[#4d65ff]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Image
            src="/images/instantly-expert.svg"
            alt="Instantly Expert"
            width={160}
            height={44}
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
            <div className="w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">C</span>
            </div>
            <span className="text-sm font-medium text-muted">Clay Partner</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-navy mb-6"
        >
          Smarter GTM.
          <br />
          <span className="bg-gradient-to-r from-yellow via-yellow to-[#f59e0b] bg-clip-text text-transparent">
            Faster growth.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          We build and run outbound systems that book meetings. No SDRs to hire. No templates to burn. Just pipeline, on repeat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors shadow-lg shadow-yellow/20"
          >
            Book a Strategy Call
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full border border-border text-navy hover:bg-card transition-colors"
          >
            See the system
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-muted-light mb-8"
        >
          Trusted by 30+ B2B teams across the US and UK
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="relative bg-navy rounded-2xl aspect-video flex items-center justify-center overflow-hidden shadow-2xl shadow-navy/30">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow/5 rounded-full blur-[60px]" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-yellow/20 flex items-center justify-center backdrop-blur-sm border border-yellow/30 hover:bg-yellow/30 transition-colors cursor-pointer">
                <Play size={24} className="text-yellow ml-1" fill="currentColor" />
              </div>
              <p className="text-white/40 text-sm">Watch how it works</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
