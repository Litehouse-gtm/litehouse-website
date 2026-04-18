"use client";

import { motion } from "framer-motion";
import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/james-sales/litehouse-intro-call-clone?hide_event_type_details=1&hide_gdpr_banner=1&text_color=0a2540&primary_color=ecc840";

export function CtaSection() {
  return (
    <section id="book" className="relative py-20 md:py-28 bg-navy overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[-100px] left-[40%] w-[400px] h-[400px] bg-yellow/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Want access to the same GTM systems that have booked Domino's, Culligan, and impact.com?
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Pick a time that works for you.
          </p>
        </motion.div>

        {/* Calendly inline widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
        >
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </motion.div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
