"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Video, FileText } from "lucide-react";

const whoItsFor = [
  "0-$1M revenue, ready to grow",
  "Want to learn GTM with hands-on guidance",
  "No PMF yet, testing without burning cash",
  "Weeks to up to speed, not months",
];

export function ConsultingDraft() {
  return (
    <section id="consulting" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-navy to-[#0f2f4f] rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4d65ff]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-sm font-semibold text-yellow uppercase tracking-wider mb-3">
                Not ready for the Growth Engine?
              </p>
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                Start with a free GTM audit.
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Earlier stage or learning the ropes? Get direct access to the team that built the Growth Engine. No fluff, just answers.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: Video, text: "1:1 calls with Eden and James" },
                  { icon: MessageCircle, text: "Dedicated Slack channel" },
                  { icon: FileText, text: "Our templates, SOPs, and resources" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <item.icon size={16} className="text-yellow" />
                    </div>
                    <p className="text-sm text-white/70">{item.text}</p>
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

            <div>
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-5">
                Who consulting is for
              </h3>
              <div className="space-y-3">
                {whoItsFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                  >
                    <Check size={16} className="text-green shrink-0" />
                    <p className="text-sm text-white/70">{item}</p>
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
