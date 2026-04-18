"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long before we see results?",
    a: "First positive replies usually land within 2-3 weeks. The system is fully built and live in 2 weeks. Month 1 is testing angles, Month 2 is scaling winners, Month 3 is predictable pipeline.",
  },
  {
    q: "What's the minimum commitment?",
    a: "3 months minimum. That's enough time to build the system, find winning angles, and scale. After that, it's month-to-month.",
  },
  {
    q: "Do we need to provide leads or data?",
    a: "No. We handle ICP definition, TAM mapping, list building, and enrichment end-to-end. You provide context on your business, ICP, and offer. We handle the rest.",
  },
  {
    q: "What industries do you work with?",
    a: "B2B SaaS, professional services, agencies, and technology. The common thread: clear ICP, proven product, average deal size above $10k.",
  },
  {
    q: "How is this different from other outbound agencies?",
    a: "Most agencies blast generic templates and hope. We build signal-based campaigns with hyper-relevant messaging crafted for each prospect. Plus, you own all the infrastructure we build. Nothing locked behind us.",
  },
  {
    q: "What tools do you use?",
    a: "Clay for enrichment, dedicated sending infrastructure for deliverability, custom workflows for signals and automation. Certified Instantly Expert. Clay Partner.",
  },
  {
    q: "Can we see examples of your work?",
    a: "Yes. Book a call and we'll walk you through real campaign examples, numbers, and the exact system we'd build for you.",
  },
  {
    q: "What happens if we stop working together?",
    a: "You keep everything. Domains, mailboxes, sending accounts, every piece of infrastructure we built. No ransom, no lock-in.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-navy pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-muted shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-5"
        >
          <p className="text-sm text-muted leading-relaxed">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

export function FaqDraft() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Questions we get asked most.
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know before booking a call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
