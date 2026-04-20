"use client";

import { motion } from "framer-motion";
import { PenLine, Sparkles, TrendingUp, Shield } from "lucide-react";

const differentiators = [
  {
    icon: PenLine,
    title: "Messaging obsession",
    description:
      "Most agencies lead with tech. We lead with writing. Every campaign starts with copy that genuinely resonates, not recycled templates or AI slop.",
    gradient: "from-yellow/20 to-yellow/5",
    iconBg: "bg-yellow/15",
    iconColor: "text-yellow",
    borderHover: "hover:border-yellow/40",
  },
  {
    icon: Sparkles,
    title: "AI-powered personalization",
    description:
      "Every message is hyper-relevant to the specific prospect. Not generic mail-merge fields. Real context, real relevance, at scale.",
    gradient: "from-blue/20 to-blue/5",
    iconBg: "bg-blue/15",
    iconColor: "text-blue",
    borderHover: "hover:border-blue/40",
  },
  {
    icon: TrendingUp,
    title: "Relevance at scale",
    description:
      "Most agencies pick volume or quality. We do both. High-volume sending with messaging that still feels like it was written just for them.",
    gradient: "from-green/20 to-green/5",
    iconBg: "bg-green/15",
    iconColor: "text-green",
    borderHover: "hover:border-green/40",
  },
  {
    icon: Shield,
    title: "You own the system",
    description:
      "Your infrastructure, your domains, your accounts. Nothing locked behind us. If we part ways, you keep everything we built.",
    gradient: "from-navy/10 to-navy/5",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
    borderHover: "hover:border-navy/30",
  },
];

export function WhyUs() {
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
              Why Litehouse
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              We're not the only outbound agency.
            </h2>
            <p className="text-lg text-muted">
              But we do a few things differently.
            </p>
          </motion.div>

          <div className="space-y-4">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative bg-card border border-border rounded-xl p-6 md:p-8 ${item.borderHover} transition-all overflow-hidden group`}
              >
                {/* Subtle gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative flex items-start gap-5">
                  <div
                    className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <item.icon size={20} className={item.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
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
