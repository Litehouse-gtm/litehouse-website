"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long before we see results?",
    a: "It depends on a lot of factors. We've had clients see positive replies on day one of outbound, and others where it took a couple of weeks to dial in the messaging. Results get better month after month as we iterate on copy and angles. It's an iterative process. Setup takes two weeks, then live campaigns start after that.",
  },
  {
    q: "What's the minimum commitment?",
    a: "We run in 3-month blocks. The first 90 days gives us enough time to set up infrastructure, test angles, and get campaigns dialled in. After that, we continue in 3-month blocks and decide together whether to keep going.",
  },
  {
    q: "How do you ensure compliance and avoid spam filters?",
    a: "We follow best practices across every campaign to protect deliverability and stay compliant. That means using dedicated domains and warmed-up inboxes, authenticating with SPF/DKIM/DMARC, and rotating sending to keep volumes natural. Every email is personalised, relevant to the recipient's role, and includes an opt-out to meet GDPR and CAN-SPAM requirements. The result is high inbox placement, stronger reply rates, and zero risk to your brand reputation.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is based on volume. The size of your TAM, how many contacts we're reaching each month, and the level of infrastructure required all factor in. Book a call and we'll scope a price that fits.",
  },
  {
    q: "What happens to our data if we stop working together?",
    a: "Everything is yours. All the infrastructure, from domains and mailboxes to sending accounts, is set up under your name from day one. Lead lists, copy, campaign analytics, all of it gets handed over. We offload everything to you so you can keep running if you want to.",
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
          className={`text-muted shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
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

export function Faq() {
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
            Frequently asked questions
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
