"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, Clock, Award } from "lucide-react";

const criteria = [
  {
    icon: DollarSign,
    title: "$1M+ annual revenue",
    description: "You've got the budget to invest in growth and the revenue to justify outbound.",
    gradient: "from-yellow/20 to-yellow/5",
    iconBg: "bg-yellow/15",
    iconColor: "text-yellow",
    borderHover: "hover:border-yellow/40",
  },
  {
    icon: Users,
    title: "40,000+ total addressable market",
    description: "Enough prospects to sustain high-volume campaigns without burning through your market.",
    gradient: "from-blue/20 to-blue/5",
    iconBg: "bg-blue/15",
    iconColor: "text-blue",
    borderHover: "hover:border-blue/40",
  },
  {
    icon: TrendingUp,
    title: "LTV over $10k per customer",
    description: "The maths works on outbound acquisition. Higher LTV means higher ROI.",
    gradient: "from-green/20 to-green/5",
    iconBg: "bg-green/15",
    iconColor: "text-green",
    borderHover: "hover:border-green/40",
  },
  {
    icon: Clock,
    title: "Don't have bandwidth to build in-house",
    description: "Or don't want the trial and error. You'd rather have a system installed and running in weeks.",
    gradient: "from-[#f97316]/20 to-[#f97316]/5",
    iconBg: "bg-[#f97316]/15",
    iconColor: "text-[#f97316]",
    borderHover: "hover:border-[#f97316]/40",
  },
  {
    icon: Award,
    title: "Established product-market fit",
    description: "You know what you sell and who wants it. You just need a system to reach them at scale.",
    gradient: "from-navy/10 to-navy/5",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
    borderHover: "hover:border-navy/30",
  },
];

export function Qualifier() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-cream to-yellow-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Sticky left heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Is This Right For You?
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Who the Growth Engine is for
            </h2>
            <p className="text-lg text-muted">
              We work best with B2B companies that tick most of these boxes.
            </p>
          </motion.div>

          {/* Stacked cards */}
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
