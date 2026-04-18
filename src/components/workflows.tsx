"use client";

import { motion } from "framer-motion";
import { Workflow, Search, Bell, ArrowDownToLine, ArrowRight } from "lucide-react";

const workflows = [
  {
    icon: Search,
    title: "Inbound lead routing",
    description:
      "Website visitors and form fills automatically enriched, scored, and routed to the right sequence.",
    color: "bg-yellow/10 text-yellow",
    borderColor: "border-yellow/20",
  },
  {
    icon: ArrowDownToLine,
    title: "Data enrichment",
    description:
      "Prospect data enriched from 10+ sources. Job changes, funding rounds, tech stack, and more.",
    color: "bg-blue/10 text-blue",
    borderColor: "border-blue/20",
  },
  {
    icon: Bell,
    title: "Signal detection",
    description:
      "Real-time monitoring for buying signals. When a prospect is ready, we reach them first.",
    color: "bg-green/10 text-green",
    borderColor: "border-green/20",
  },
  {
    icon: Workflow,
    title: "CRM automation",
    description:
      "Leads synced, statuses updated, and pipeline stages managed automatically.",
    color: "bg-[#f97316]/10 text-[#f97316]",
    borderColor: "border-[#f97316]/20",
  },
];

export function Workflows() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-cream to-yellow-light/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold text-navy bg-navy/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Clay & Workflows
            </span>
            <h2 className="font-heading font-bold text-3xl text-navy mb-4">
              The technical layer most agencies skip
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              We don't just send emails. We build the data infrastructure and
              automation workflows that make everything else work.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow hover:text-yellow-hover transition-colors"
            >
              Learn more on a call
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {workflows.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-card border border-border border-l-4 ${item.borderColor} rounded-xl p-5 hover:shadow-md transition-all`}
              >
                <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-base text-navy mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
