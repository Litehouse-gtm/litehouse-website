"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Server,
  Target,
  Radar,
  Mail,
  PenLine,
  BarChart3,
  MessageSquare,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Setup & Infrastructure",
    tagline: "Land in the primary inbox every time.",
    description:
      "Dedicated domains and mailboxes built from scratch and owned by you. All the technical setup, warming, and monitoring handled end to end.",
  },
  {
    icon: Target,
    title: "TAM Mapping & ICP",
    tagline: "Reach every buyer, not just whoever's in Apollo.",
    description:
      "We map your complete TAM across multiple sources, tighten the ICP, and triple-verify every contact. No bounces, no wasted sends.",
  },
  {
    icon: Radar,
    title: "Intent & Buying Signals",
    tagline: "Catch prospects the moment they're in-market.",
    description:
      "Funding rounds, hiring, job changes, tech adoption, all tracked live. Signals fire campaigns at the right time and weave straight into the messaging.",
  },
  {
    icon: Compass,
    title: "Funnel Design & Strategy",
    tagline: "A system built for your offer, not a template.",
    description:
      "Campaign architecture, value prop, and positioning sharpened for cold outreach. Ongoing optimisation driven by real data, not assumptions.",
  },
  {
    icon: PenLine,
    title: "Copywriting & Messaging",
    tagline: "Emails that actually get replies.",
    description:
      "Campaign angles tailored to your ICP and offer, with spintax variations at scale. Every message iterated against real reply data, not guesswork.",
  },
  {
    icon: Mail,
    title: "Multi-Channel Outreach",
    tagline: "More touchpoints, more replies.",
    description:
      "Multi-step email sequences, LinkedIn connections and messaging, all coordinated from one campaign plan. Volume tuned to your TAM and ramped without burning domains.",
  },
  {
    icon: MessageSquare,
    title: "Reply Management",
    tagline: "Every reply handled, meetings booked.",
    description:
      "We read, triage, and qualify every reply. Good leads get booked straight onto your calendar with full context for a smooth handoff.",
  },
  {
    icon: BarChart3,
    title: "CRM Integration & Analytics",
    tagline: "Turn campaign data into clear decisions.",
    description:
      "Full CRM sync so nothing slips through the cracks, plus live dashboards and attribution by campaign, angle, and list. You always know what's working.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The Litehouse Growth Engine
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Everything you need to fill your pipeline
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A complete outbound system, built, managed, and optimised by our
            team. Here's what's included.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-yellow/30 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-yellow/10 flex items-center justify-center mb-4">
                <service.icon size={18} className="text-yellow" />
              </div>
              <h3 className="font-heading font-semibold text-base text-navy mb-2">
                {service.title}
              </h3>
              <p className="font-heading font-semibold text-sm text-navy mb-2 leading-snug">
                {service.tagline}
              </p>
              <p className="text-[13px] text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors"
          >
            Get the Growth Engine
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
