"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Brain,
  Database,
  Radar,
  PenLine,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    label: "Total Addressable Market",
    description: "We scrape your entire market. Every relevant company, every decision maker, fully verified. No database scraps.",
    tools: ["Clay", "Prospeo", "LinkedIn"],
    dotColor: "bg-yellow",
  },
  {
    icon: Server,
    label: "Email Infrastructure",
    description: "We build and configure your email infrastructure from scratch. Dedicated domains, warmed mailboxes, full deliverability. You own it for life.",
    tools: ["Instantly", "EmailBison", "Scaled Mail"],
    dotColor: "bg-blue",
  },
  {
    icon: Brain,
    label: "AI Research, Qualification & Scoring",
    description: "AI researches every prospect, qualifies them against your ICP, and scores them by fit. The best leads rise to the top.",
    tools: ["Clay", "AI Agents", "Custom scoring"],
    dotColor: "bg-green",
  },
  {
    icon: Database,
    label: "Data Enrichment",
    description: "Multi-source enrichment on every prospect. Job titles, company data, tech stack, funding. Context that makes messages land.",
    tools: ["Clay", "Prospeo", "Clearbit"],
    dotColor: "bg-yellow",
  },
  {
    icon: Radar,
    label: "Intent & Buying Signals",
    description: "Real-time buying signals feed the system. Job changes, funding rounds, hiring patterns, tech adoption. We reach prospects when they're ready.",
    tools: ["Clay", "Google Alerts", "Job boards"],
    dotColor: "bg-blue",
  },
  {
    icon: PenLine,
    label: "Hyper-Relevant Copywriting & Personalisation",
    description: "Copy crafted for each segment. AI personalisation at scale that still reads like a human wrote it. No templates, no slop.",
    tools: ["AI personalisation", "Spintax", "A/B testing"],
    dotColor: "bg-green",
  },
];

export function WorkflowSectionDraft() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy to-[#0f2f4f] overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-yellow/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            A Better Way
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            One system. Every channel. Your entire market.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            We install the outbound engine and run it. Managed infrastructure, hyper-relevant messaging, and campaigns that consistently book meetings. At a fraction of the cost of hiring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16"
        >
          {[
            { number: "10x", label: "More touches than a single SDR" },
            { number: "2 weeks", label: "To go live, not 6 months" },
            { number: "100%", label: "Infrastructure you own" },
            { number: "$0", label: "Hiring, training, or turnover costs" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
            >
              <p className="font-heading font-bold text-2xl text-yellow mb-1">
                {stat.number}
              </p>
              <p className="text-xs text-white/40 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-heading font-semibold text-xl text-white/80">
            How the system works
          </h3>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #ecc840 0, #ecc840 6px, transparent 6px, transparent 12px)",
            }}
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex items-start gap-4 mb-8 last:mb-0 ${
                  "md:w-1/2 " +
                  (isLeft ? "md:pr-10 md:ml-0" : "md:pl-10 md:ml-auto")
                } pl-14 md:pl-0`}
              >
                <div
                  className={`absolute w-3 h-3 rounded-full ${step.dotColor} border-2 border-navy
                  left-[18px] md:left-auto top-5
                  ${isLeft ? "md:-right-[7px]" : "md:-left-[7px]"}
                `}
                />

                <div className="bg-white/5 border border-white/10 rounded-xl p-5 w-full hover:bg-white/8 hover:border-white/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <step.icon size={18} className="text-yellow" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider">
                        Step {i + 1}
                      </span>
                      <h3 className="font-heading font-semibold text-base text-white leading-tight">
                        {step.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-medium text-white/40 bg-white/5 px-2 py-0.5 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-yellow rounded-xl px-8 py-4 shadow-lg shadow-yellow/20">
            <Rocket size={20} className="text-navy" />
            <span className="font-heading font-bold text-lg text-navy">
              Predictable pipeline. On repeat.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow hover:text-yellow-hover transition-colors"
          >
            See it working for your business
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
