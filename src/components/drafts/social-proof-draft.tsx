"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const caseStudies = [
  {
    company: "SaaS Company",
    industry: "B2B SaaS",
    metric: "27 meetings",
    detail: "booked in first month",
    quote: "Placeholder for real client testimonial.",
  },
  {
    company: "Marketing Agency",
    industry: "Agency",
    metric: "8 deals closed",
    detail: "from cold email in 90 days",
    quote: "Placeholder for real client testimonial.",
  },
  {
    company: "Tech Startup",
    industry: "Technology",
    metric: "3x pipeline",
    detail: "increase in 60 days",
    quote: "Placeholder for real client testimonial.",
  },
];

const testimonials = [
  {
    name: "Client Name",
    role: "CEO",
    company: "Company",
    text: "Placeholder testimonial. Replace with real client feedback.",
  },
  {
    name: "Client Name",
    role: "Head of Sales",
    company: "Company",
    text: "Placeholder testimonial. Replace with real client feedback.",
  },
  {
    name: "Client Name",
    role: "Founder",
    company: "Company",
    text: "Placeholder testimonial. Replace with real client feedback.",
  },
];

export function SocialProofDraft() {
  return (
    <section id="results" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            The results speak for themselves.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Real campaigns. Real numbers. Real pipeline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <p className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-1">
                {study.industry}
              </p>
              <p className="font-heading font-extrabold text-3xl text-navy mb-1">
                {study.metric}
              </p>
              <p className="text-sm text-muted mb-4">{study.detail}</p>
              <p className="text-sm text-muted italic border-t border-border pt-4">
                &ldquo;{study.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <Quote size={20} className="text-yellow mb-3" />
              <p className="text-sm text-muted leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-muted-light">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
