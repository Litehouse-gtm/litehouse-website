"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Featured video testimonials (Vimeo)
const videoTestimonials = [
  {
    stat: "$30,750",
    statLabel: "closed in 4 weeks",
    context:
      "3 deals at a 60% close rate, in one of the most competitive spaces.",
    client: "E-commerce Marketing Agency",
    vimeoSrc: "https://player.vimeo.com/video/963166355?h=e3b1867a9e",
  },
  {
    stat: "21 meetings",
    statLabel: "in 60 days",
    context:
      "\"We're pretty much overloaded with deals that are close to closing.\"",
    client: "M&A Brokerage",
    vimeoSrc: "https://player.vimeo.com/video/1118209807?h=ddfdb1348d",
  },
];

// Slack / DM screenshots (real images)
const slackScreenshots = [
  {
    headline: "3 national 8-figure brands signed",
    sub: "In under 12 months, with 19 more in the pipeline.",
    client: "SEO Agency",
    imageSrc: "/images/social-proof/national-brand-signed.png",
    alt: "Slack message from SEO agency client announcing 3 national 8-figure brands signed",
  },
  {
    headline: "8 leads in day one",
    sub: "From 500 contacts sent on the very first day of the campaign.",
    client: "FTW",
    imageSrc: "/images/social-proof/ftw-day-one.png",
    alt: "Client message showing 8 leads generated in the first day of outbound",
  },
  {
    headline: "\"We closed Universal today\"",
    sub: "\"I think I have two more closes very soon.\"",
    client: "Pro-Revops-AI",
    imageSrc: "/images/social-proof/universal-close.png",
    alt: "Slack message from Pro-Revops-AI client announcing a Universal close",
  },
];

// Campaign screenshots with real numbers and real screenshots
const campaignScreenshots = [
  {
    headline: "152 leads in one month",
    sub: "With 4 deals already closed and more in the pipeline. Targeting local trade companies.",
    client: "Local Trade Campaign",
    imageSrc: "/images/social-proof/152-leads.png",
    alt: "Campaign screenshot showing 152 leads generated in one month",
  },
  {
    headline: "7 seller meetings",
    sub: "Booked with companies generating $10-20M in revenue.",
    client: "PE Firm Campaign",
    imageSrc: "/images/social-proof/7-seller-meetings.png",
    alt: "Campaign screenshot showing 7 seller meetings booked with mid-market companies",
  },
  {
    headline: "1 in every 94 contacts",
    sub: "Booked a meeting, targeting qualified tax specialists.",
    client: "Tax Specialist Campaign",
    imageSrc: "/images/social-proof/1-in-94.png",
    alt: "Campaign screenshot showing 1 lead per 94 contacts for tax specialist campaign",
  },
];

export function SocialProof() {
  return (
    <section id="results" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Client Results
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Real clients. Real results.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            No fluff. Just outcomes from campaigns we've run.
          </p>
        </motion.div>

        {/* Video testimonials — Vimeo embeds */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {videoTestimonials.map((v, i) => (
            <motion.div
              key={v.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-navy">
                <iframe
                  src={v.vimeoSrc}
                  title={`${v.client} testimonial`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <p className="font-heading font-bold text-3xl text-navy leading-none">
                    {v.stat}
                  </p>
                  <p className="text-sm text-muted">{v.statLabel}</p>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {v.context}
                </p>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider">
                  {v.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slack / DM screenshots — 3 real screenshots */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {slackScreenshots.map((s, i) => (
            <motion.div
              key={s.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-yellow/40 transition-colors flex flex-col"
            >
              <div className="relative w-full h-72 bg-gradient-to-br from-navy/5 to-navy/10 border-b border-border flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={s.imageSrc}
                    alt={s.alt}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="font-heading font-semibold text-base text-navy leading-snug mb-2">
                  {s.headline}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-3 flex-1">
                  {s.sub}
                </p>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider border-t border-border pt-3">
                  {s.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campaign screenshots — placeholders for Eden to add */}
        <div className="grid md:grid-cols-3 gap-4">
          {campaignScreenshots.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-yellow/40 transition-colors"
            >
              <div className="relative w-full h-72 bg-gradient-to-br from-navy/5 to-navy/10 border-b border-border flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={c.imageSrc}
                    alt={c.alt ?? c.headline}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-5">
                <p className="font-heading font-bold text-2xl text-navy leading-none mb-2">
                  {c.headline}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {c.sub}
                </p>
                <p className="text-xs font-semibold text-muted-light uppercase tracking-wider border-t border-border pt-3">
                  {c.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
