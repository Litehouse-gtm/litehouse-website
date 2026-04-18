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
    points: [
      "Dedicated sending domains and mailboxes",
      "DNS, SPF, DKIM, DMARC configured",
      "Warmed, monitored, and rotated daily",
    ],
  },
  {
    icon: Target,
    title: "TAM Mapping & ICP",
    points: [
      "ICP definition and segmentation",
      "Full addressable market mapped",
      "Triple-verified contact data",
    ],
  },
  {
    icon: Radar,
    title: "Intent & Buying Signals",
    points: [
      "Real-time signal detection",
      "Trigger-based campaign logic",
      "Reach prospects when they're ready",
    ],
  },
  {
    icon: Mail,
    title: "Multi-Channel Outreach",
    points: [
      "Email and LinkedIn sequences",
      "Coordinated multi-touch follow-ups",
      "Volume scaled without burning domains",
    ],
  },
  {
    icon: PenLine,
    title: "Copywriting & Messaging",
    points: [
      "Campaign angles built for each segment",
      "AI-powered personalisation at scale",
      "Copy iterated weekly from reply data",
    ],
  },
  {
    icon: BarChart3,
    title: "CRM Integration & Analytics",
    points: [
      "CRM synced in real time",
      "Performance dashboards for every campaign",
      "Full pipeline attribution",
    ],
  },
  {
    icon: MessageSquare,
    title: "Reply Management",
    points: [
      "Positive replies flagged and qualified",
      "Objections handled in-inbox",
      "Meetings booked straight to your calendar",
    ],
  },
  {
    icon: Compass,
    title: "Funnel Design & Strategy",
    points: [
      "Campaign architecture and offer framing",
      "Sequence flows built to convert",
      "Ongoing strategy calls with your team",
    ],
  },
];

export function ServicesDraft() {
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
            Everything included. Nothing outsourced.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            One team, one system, every piece of the outbound puzzle handled in-house.
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
              <h3 className="font-heading font-semibold text-base text-navy mb-3">
                {service.title}
              </h3>
              <ul className="space-y-1.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-[13px] text-muted leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow/60 shrink-0 mt-1.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
