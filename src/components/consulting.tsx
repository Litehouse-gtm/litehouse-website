"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Video, FileText } from "lucide-react";

const whoItsFor = [
  "$0-$1M annual revenue",
  "Looking for hands-on GTM guidance",
  "Still finding product-market fit",
  "Need weeks, not months, to get up to speed",
];

export function Consulting() {
  return (
    <section id="consulting" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-navy to-[#0f2f4f] rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4d65ff]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10 md:gap-10">
            <div>
              <p className="text-sm font-semibold text-yellow uppercase tracking-wider mb-3">
                Earlier stage?
              </p>
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                Start with a free GTM audit.
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                If you're earlier stage or want to learn the ropes before going
                all-in, our consulting gives you direct access to the same team
                that powers the Growth Engine.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: Video, text: "1:1 calls with our founding team" },
                  { icon: MessageCircle, text: "Dedicated Slack channel" },
                  { icon: FileText, text: "Our templates, SOPs, and resources" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <item.icon size={20} className="text-yellow" />
                    </div>
                    <p className="text-base text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="inline-flex items-center gap-2 text-sm font-semibold text-yellow hover:text-yellow-hover transition-colors"
              >
                Book a free audit
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="md:border-l md:border-white/10 md:pl-10">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-5">
                Who consulting is best for
              </h3>
              <div className="space-y-3">
                {whoItsFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                  >
                    <Check size={20} className="text-green shrink-0" />
                    <p className="text-base text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
