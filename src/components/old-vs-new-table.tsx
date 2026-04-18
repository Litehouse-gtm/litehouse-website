"use client";

import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight } from "lucide-react";

type CellValue = "yes" | "no" | "partial";

const dimensions = [
  "Target your entire TAM",
  "Managed email infrastructure",
  "AI-powered lead research & scoring",
  "Multi-source data enrichment",
  "Intent & buying signal detection",
  "Hyper-relevant personalisation at scale",
  "Live in 2 weeks",
  "Predictable monthly cost",
  "You own everything",
];

const methods: { name: string; highlight?: boolean; values: CellValue[] }[] = [
  {
    name: "The Growth Engine",
    highlight: true,
    values: ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"],
  },
  {
    name: "Hire SDRs",
    values: ["no", "no", "no", "no", "no", "partial", "no", "no", "no"],
  },
  {
    name: "Run Ads",
    values: ["no", "no", "no", "no", "no", "no", "yes", "partial", "partial"],
  },
  {
    name: "Wait for Inbound",
    values: ["no", "no", "no", "no", "no", "no", "no", "no", "yes"],
  },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") return <Check size={16} className="text-green" />;
  if (value === "no") return <X size={16} className="text-red/40" />;
  return <Minus size={16} className="text-muted-light/40" />;
}

export function OldVsNewTable() {
  return (
    <section className="relative py-20 md:py-28 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The Difference
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Old way vs. the Growth Engine
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            See what you actually get compared to the traditional approaches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-semibold text-muted-light uppercase tracking-wider py-4 px-5 w-[220px]" />
                  {methods.map((m) => (
                    <th
                      key={m.name}
                      className={`text-center text-xs font-semibold uppercase tracking-wider py-4 px-3 ${
                        m.highlight
                          ? "text-navy bg-yellow/8"
                          : "text-muted-light"
                      }`}
                    >
                      {m.highlight ? (
                        <span className="text-yellow">
                          {m.name}
                        </span>
                      ) : (
                        m.name
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dimensions.map((dim, rowIdx) => (
                  <tr
                    key={dim}
                    className={
                      rowIdx < dimensions.length - 1
                        ? "border-b border-border/50"
                        : ""
                    }
                  >
                    <td className="text-sm font-medium text-navy py-3 px-5">
                      {dim}
                    </td>
                    {methods.map((m) => (
                      <td
                        key={m.name}
                        className={`text-center py-3 px-3 ${
                          m.highlight ? "bg-yellow/8" : ""
                        }`}
                      >
                        <span className="inline-flex items-center justify-center">
                          <CellIcon value={m.values[rowIdx]} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors shadow-lg shadow-yellow/20"
          >
            Get the Growth Engine
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
