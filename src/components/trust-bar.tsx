"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { name: "Aigensei", file: "Client Logo Aigensei.png" },
  { name: "Beacon Advisors", file: "Client Logo Beacon Advisors.png" },
  { name: "College Funding Hero", file: "Client Logo College Funding Hero.png" },
  { name: "Flint", file: "Client Logo Flint.png" },
  { name: "Local Restore Pro", file: "Client Logo Local Restore Pro.png" },
  { name: "Market Snare", file: "Client Logo Market Snare.png" },
  { name: "NMC", file: "Client Logo NMC.png" },
  { name: "NewLLC", file: "Client Logo NewLLC.png" },
  { name: "Vincere Tax", file: "Client Logo Vincere Tax.png" },
];

// Duplicate for infinite scroll
const allLogos = [...clientLogos, ...clientLogos];

export function TrustBar() {
  return (
    <section className="py-8 border-y border-border bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-light mb-6">
          Trusted by teams at
        </p>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 h-10 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <Image
                src={`/logos/${logo.file}`}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
