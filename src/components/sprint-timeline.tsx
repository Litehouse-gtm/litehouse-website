"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const months = [
  {
    month: "Month 1",
    label: "Build",
    focus: "Infrastructure and foundations",
    items: [
      "Email infrastructure set up and warming started",
      "ICP defined and your complete TAM mapped",
      "Campaign architecture designed around your offer",
      "Offer and positioning sharpened for cold outreach",
    ],
    outcome: "15-30 interested leads",
    color: "bg-yellow/10 text-yellow border-yellow/20",
    dotColor: "bg-yellow",
  },
  {
    month: "Month 2",
    label: "Optimise",
    focus: "Iterate and accelerate",
    items: [
      "Early results reviewed, campaigns iterated",
      "Winning angles and segments doubled down on",
      "Intent and buying signal logic added into campaigns",
      "Volume scaled on what's working",
    ],
    outcome: "30-60 interested leads",
    color: "bg-[#4d65ff]/10 text-[#4d65ff] border-[#4d65ff]/20",
    dotColor: "bg-[#4d65ff]",
  },
  {
    month: "Month 3",
    label: "Scale",
    focus: "Scale and systemise",
    items: [
      "Max volume across proven campaigns",
      "Signals refined and sharpened",
      "Continuous optimisation driven by live data",
      "Full process systemised for ongoing execution",
    ],
    outcome: "60-100+ interested leads",
    color: "bg-green/10 text-green border-green/20",
    dotColor: "bg-green",
  },
];

export function SprintTimeline() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy to-[#0f2f4f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-[30%] w-[400px] h-[400px] bg-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The 90-Day Sprint
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            From zero to scalable acquisition in 12 weeks
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We install the system in two weeks, then run and optimise it over a
            12-week sprint to reach your entire market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-6">
          {months.map((month, i) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Month header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${month.dotColor}`} />
                <span className="text-sm font-semibold text-white">
                  {month.month}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${month.color}`}>
                  {month.label}
                </span>
              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full flex flex-col">
                <h3 className="font-heading font-bold text-lg text-white mb-4">
                  {month.focus}
                </h3>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {month.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/50"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${month.dotColor} shrink-0 mt-1.5`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Outcome badge */}
                <div className={`text-center py-3 rounded-lg border ${month.color}`}>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-0.5">
                    Expected outcome
                  </p>
                  <p className="font-heading font-bold text-lg">
                    {month.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors shadow-lg shadow-yellow/20"
          >
            Start Your 12-Week Sprint
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
