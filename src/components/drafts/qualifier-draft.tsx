"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, Clock, Award } from "lucide-react";

const criteria = [
  {
    icon: DollarSign,
    title: "$1M+ annual revenue",
    description: "You've got the revenue to justify outbound and the budget to invest in growth.",
    gradient: "from-yellow/20 to-yellow/5",
    iconBg: "bg-yellow/15",
    iconColor: "text-yellow",
    borderHover: "hover:border-yellow/40",
  },
  {
    icon: Users,
    title: "40,000+ total addressable market",
    description: "Enough prospects to sustain volume without burning through your market in a month.",
    gradient: "from-blue/20 to-blue/5",
    iconBg: "bg-blue/15",
    iconColor: "text-blue",
    borderHover: "hover:border-blue/40",
  },
  {
    icon: TrendingUp,
    title: "LTV over $10k per customer",
    description: "Outbound maths works when deals are big enough to pay for themselves.",
    gradient: "from-green/20 to-green/5",
    iconBg: "bg-green/15",
    iconColor: "text-green",
    borderHover: "hover:border-green/40",
  },
  {
    icon: Clock,
    title: "No bandwidth to build in-house",
    description: "You'd rather have a system running in weeks than spend months figuring it out.",
    gradient: "from-[#f97316]/20 to-[#f97316]/5",
    iconBg: "bg-[#f97316]/15",
    iconColor: "text-[#f97316]",
    borderHover: "hover:border-[#f97316]/40",
  },
  {
    icon: Award,
    title: "Product-market fit established",
    description: "You know what you sell and who wants it. We handle getting you in front of them.",
    gradient: "from-navy/10 to-navy/5",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
    borderHover: "hover:border-navy/30",
  },
];

export function QualifierDraft() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-cream to-yellow-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Who It's For
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              The Growth Engine works best for...
            </h2>
            <p className="text-lg text-muted">
              B2B teams that tick most of these boxes.
            </p>
          </motion.div>

          <div className="space-y-3">
            {criteria.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative bg-card border border-border rounded-xl p-5 ${item.borderHover} transition-all overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative flex items-start gap-5">
                  <div
                    className={`w-9 h-9 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <item.icon size={18} className={item.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
