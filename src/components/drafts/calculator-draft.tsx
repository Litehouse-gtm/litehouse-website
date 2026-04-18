"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SliderConfig {
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  format: (v: number) => string;
  fullWidth?: boolean;
}

const sliderConfigs: Record<string, SliderConfig> = {
  volume: {
    label: "Monthly sending volume",
    hint: "Contacts emailed per month",
    min: 10000,
    max: 100000,
    step: 1000,
    defaultValue: 20000,
    format: (v) => v.toLocaleString(),
  },
  cpl: {
    label: "Contacts per lead",
    hint: "How many contacts for 1 positive reply",
    min: 50,
    max: 1000,
    step: 10,
    defaultValue: 400,
    format: (v) => v.toString(),
  },
  booking: {
    label: "Booking rate",
    hint: "% of leads that book a call",
    min: 10,
    max: 80,
    step: 5,
    defaultValue: 25,
    format: (v) => v + "%",
  },
  close: {
    label: "Close rate",
    hint: "% of calls that close",
    min: 5,
    max: 50,
    step: 5,
    defaultValue: 15,
    format: (v) => v + "%",
  },
  ltv: {
    label: "Average deal value",
    hint: "Revenue per closed deal",
    min: 5000,
    max: 100000,
    step: 500,
    defaultValue: 15000,
    format: (v) => "$" + v.toLocaleString(),
    fullWidth: true,
  },
};

function Slider({
  config,
  value,
  onChange,
}: {
  config: SliderConfig;
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - config.min) / (config.max - config.min)) * 100;

  return (
    <div className={config.fullWidth ? "col-span-full" : ""}>
      <div className="flex justify-between items-baseline mb-2.5">
        <label className="text-sm font-semibold text-navy">{config.label}</label>
        <span className="font-heading font-bold text-base text-navy">
          {config.format(value)}
        </span>
      </div>
      <div className="relative">
        <div
          className="absolute top-1/2 left-0 h-1.5 bg-yellow rounded-full -translate-y-1/2 pointer-events-none"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative z-10 w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-yellow [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-yellow [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>
      <p className="text-xs text-muted-light mt-1.5">{config.hint}</p>
    </div>
  );
}

export function CalculatorDraft() {
  const [values, setValues] = useState({
    volume: sliderConfigs.volume.defaultValue,
    cpl: sliderConfigs.cpl.defaultValue,
    booking: sliderConfigs.booking.defaultValue,
    close: sliderConfigs.close.defaultValue,
    ltv: sliderConfigs.ltv.defaultValue,
  });

  const update = useCallback((key: string, value: number) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  const leads = Math.round(values.volume / values.cpl);
  const calls = Math.round(leads * (values.booking / 100));
  const deals = Math.round(calls * (values.close / 100) * 10) / 10;
  const monthlyRev = deals * values.ltv;
  const annualRev = monthlyRev * 12;

  const dealsDisplay = deals % 1 === 0 ? deals.toString() : deals.toFixed(1);

  return (
    <section id="calculator" className="relative py-20 md:py-28 bg-gradient-to-b from-yellow-light/30 to-cream">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">
            Run the numbers on your pipeline.
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Adjust the inputs. See what outbound could do for your revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-xl p-8 mb-6">
            <h3 className="font-heading font-bold text-lg text-navy mb-7">
              Your inputs
            </h3>
            <div className="grid sm:grid-cols-2 gap-7">
              {Object.entries(sliderConfigs).map(([key, config]) => (
                <Slider
                  key={key}
                  config={config}
                  value={values[key as keyof typeof values]}
                  onChange={(v) => update(key, v)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: "Leads per month", value: leads.toString(), sub: "Positive replies" },
              { label: "Calls booked", value: calls.toString(), sub: "Per month" },
              { label: "Deals closed", value: dealsDisplay, sub: "Per month" },
            ].map((r) => (
              <div
                key={r.label}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-1.5">
                  {r.label}
                </p>
                <p className="font-heading font-extrabold text-3xl text-navy">
                  {r.value}
                </p>
                <p className="text-xs text-muted-light mt-1">{r.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Monthly revenue",
                value: "$" + Math.round(monthlyRev).toLocaleString(),
              },
              {
                label: "Annual revenue",
                value: "$" + Math.round(annualRev).toLocaleString(),
                sub: "Projected over 12 months",
              },
            ].map((r) => (
              <div
                key={r.label}
                className="relative bg-cream border-2 border-yellow rounded-xl p-6 text-center overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-yellow" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-1.5">
                  {r.label}
                </p>
                <p className="font-heading font-extrabold text-4xl text-navy">
                  {r.value}
                </p>
                {r.sub && (
                  <p className="text-xs text-muted-light mt-1">{r.sub}</p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors"
            >
              Want these numbers for your business?
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
