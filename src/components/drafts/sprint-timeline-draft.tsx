"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const months = [
  {
    month: "Month 1",
    label: "Build",
    focus: "System built. Foundation laid.",
    items: [
      "Email infrastructure and deliverability configured",
      "ICP defined, TAM mapped, data enriched",
      "Intent signals and scoring logic set up",
      "Campaigns architected, first copy tested",
    ],
    outcome: "20-30 interested leads",
    color: "bg-yellow/10 text-yellow border-yellow/20",
    dotColor: "bg-yellow",
  },
  {
    month: "Month 2",
    label: "Optimise",
    focus: "Winning angles doubled down on.",
    items: [
      "Campaigns iterated weekly on live data",
      "Top copy angles scaled, weak ones killed",
      "Signals refined from response patterns",
      "Volume increased on converting segments",
    ],
    outcome: "40-60 interested leads",
    color: "bg-[#4d65ff]/10 text-[#4d65ff] border-[#4d65ff]/20",
    dotColor: "bg-[#4d65ff]",
  },
  {
    month: "Month 3",
    label: "Scale",
    focus: "Full-scale execution. Predictable pipeline.",
    items: [
      "High-volume sending across proven segments",
      "TAM coverage expanded with validated messaging",
      "Continuous optimisation from live data",
      "Reporting locked in for the long haul",
    ],
    outcome: "60-100+ interested leads",
    color: "bg-green/10 text-green border-green/20",
    dotColor: "bg-green",
  },
];

export function SprintTimelineDraft() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy to-[#0f2f4f] overflow-hidden">
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
            Zero to scalable pipeline in 12 weeks.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Two weeks to install. Twelve weeks to scale. No ramp time, no learning curve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {months.map((month, i) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${month.dotColor}`} />
                <span className="text-sm font-semibold text-white">
                  {month.month}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${month.color}`}>
                  {month.label}
                </span>
              </div>

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
