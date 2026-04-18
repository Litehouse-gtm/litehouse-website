"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ConsultingBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10 mb-20">
      <motion.a
        href="#consulting"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="block bg-card border border-border rounded-xl p-5 hover:border-yellow/40 transition-all group cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
              <span className="text-lg">💡</span>
            </div>
            <div>
              <p className="font-heading font-semibold text-navy">
                Not quite the right fit? We also offer consulting.
              </p>
              <p className="text-sm text-muted">
                Earlier stage or want to learn the ropes first? Start with a free GTM audit.
              </p>
            </div>
          </div>
          <ArrowRight size={20} className="text-muted group-hover:text-yellow transition-colors shrink-0 ml-4" />
        </div>
      </motion.a>
    </div>
  );
}
