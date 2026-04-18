"use client";

import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight } from "lucide-react";

type CellValue = "yes" | "no" | "partial";

const dimensions = [
  "Signal-based targeting",
  "Managed infrastructure",
  "Dedicated copywriting",
  "Reply handling",
  "Scalable volume",
  "Live in 2 weeks",
];

const competitors: { name: string; values: CellValue[] }[] = [
  {
    name: "Litehouse",
    values: ["yes", "yes", "yes", "yes", "yes", "yes"],
  },
  {
    name: "Agencies",
    values: ["no", "partial", "partial", "no", "partial", "no"],
  },
  {
    name: "AI SDRs",
    values: ["partial", "no", "no", "no", "yes", "yes"],
  },
  {
    name: "In-House",
    values: ["no", "no", "partial", "yes", "no", "no"],
  },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") return <Check size={16} className="text-green" />;
  if (value === "no") return <X size={16} className="text-red/40" />;
  return <Minus size={16} className="text-muted-light/40" />;
}

export function ComparisonTable() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            How we compare
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Not all outbound solutions are the same.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-semibold text-muted-light uppercase tracking-wider py-4 px-5 w-[180px]" />
                  {competitors.map((c, i) => (
                    <th
                      key={c.name}
                      className={`text-center text-xs font-semibold uppercase tracking-wider py-4 px-4 ${
                        i === 0
                          ? "text-navy bg-yellow/5"
                          : "text-muted-light"
                      }`}
                    >
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dimensions.map((dim, rowIdx) => (
                  <tr
                    key={dim}
                    className={rowIdx < dimensions.length - 1 ? "border-b border-border/50" : ""}
                  >
                    <td className="text-sm font-medium text-navy py-3.5 px-5">
                      {dim}
                    </td>
                    {competitors.map((c, colIdx) => (
                      <td
                        key={c.name}
                        className={`text-center py-3.5 px-4 ${
                          colIdx === 0 ? "bg-yellow/5" : ""
                        }`}
                      >
                        <span className="inline-flex items-center justify-center">
                          <CellIcon value={c.values[rowIdx]} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors shadow-lg shadow-yellow/20"
          >
            See Why Teams Switch to Litehouse
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
