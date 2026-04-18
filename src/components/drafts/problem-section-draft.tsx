"use client";

import { motion } from "framer-motion";
import { X, Users, Megaphone, Clock } from "lucide-react";

const oldWays = [
  {
    icon: Users,
    title: "Hire SDRs",
    cost: "$60-80k+ /year",
    color: "border-t-red",
    problems: [
      "3-6 months to ramp",
      "50-100 manual touches per day, tops",
      "They leave, you start from scratch",
      "Base, commission, training, turnover",
    ],
  },
  {
    icon: Megaphone,
    title: "Run Ads",
    cost: "$5-15k+ /month",
    color: "border-t-[#f97316]",
    problems: [
      "Can't target by company or job title",
      "Paying for impressions from people who'll never buy",
      "CPMs climb every year",
    ],
  },
  {
    icon: Clock,
    title: "Wait for Inbound",
    cost: "Unpredictable",
    color: "border-t-muted-light",
    problems: [
      "Referrals work until they don't",
      "No control over volume or timing",
      "Pipeline dries up, you can't scale it",
      "Content takes months to compound",
    ],
  },
];

export function ProblemSectionDraft() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-red bg-red/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The Old Way
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4 max-w-2xl mx-auto">
            Most B2B teams build pipeline one of three ways.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Each one is expensive, slow to scale, or out of your control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {oldWays.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-card border border-border border-t-4 ${item.color} rounded-xl p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon size={20} className="text-muted-light" />
                <h3 className="font-heading font-bold text-xl text-navy">
                  {item.title}
                </h3>
              </div>
              <span className="inline-block text-xs font-bold text-red bg-red/5 px-2.5 py-1 rounded-full mb-4">
                {item.cost}
              </span>
              <ul className="space-y-2.5">
                {item.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <X size={14} className="text-red/60 shrink-0 mt-0.5" />
                    {problem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted"
        >
          Teams cycle between all three, hoping something sticks. It rarely does.
        </motion.p>
      </div>
    </section>
  );
}
