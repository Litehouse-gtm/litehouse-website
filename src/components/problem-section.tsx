"use client";

import { motion } from "framer-motion";
import { X, Users, Megaphone, Clock } from "lucide-react";

const oldWays = [
  {
    icon: Users,
    title: "Hire an SDR team",
    cost: "$60-80k+ per rep",
    color: "border-t-red",
    problems: [
      "Months to ramp, then they leave",
      "50-100 manual touches a day, max",
      "Need five reps to move real volume",
      "Base + commission + management overhead",
    ],
  },
  {
    icon: Megaphone,
    title: "Run paid ads",
    cost: "$5-15k+ /month",
    color: "border-t-[#f97316]",
    problems: [
      "No way to target by company",
      "No way to target by job title",
      "Paying for impressions from the wrong people",
      "CPMs climb every year",
    ],
  },
  {
    icon: Clock,
    title: "Wait for inbound",
    cost: "Unpredictable",
    color: "border-t-muted-light",
    problems: [
      "No control over volume or timing",
      "Content takes months to compound",
      "Referrals work until they don't",
      "Can't scale it when pipeline dries up",
    ],
  },
];

export function ProblemSection() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Old Way */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-5xl mx-auto"
        >
          <span className="inline-block text-xs font-bold text-red bg-red/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The common playbook
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Most B2B teams build pipeline one of three ways.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Each one costs you something different: money, targeting, or predictability.
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

      </div>
    </section>
  );
}
