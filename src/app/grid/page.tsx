import { ArrowRight, Play, Users, Megaphone, Clock, X } from "lucide-react";
import Image from "next/image";
import { TrustBar } from "@/components/trust-bar";
import { WorkflowSection } from "@/components/workflow-graphic";
import { Qualifier } from "@/components/qualifier";
import { Services } from "@/components/services";
import { SprintTimeline } from "@/components/sprint-timeline";
import { Calculator } from "@/components/calculator";
import { SocialProof } from "@/components/social-proof";
import { Consulting } from "@/components/consulting";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

/**
 * GridFrame — wraps a section with the editorial grid treatment.
 * Soft navy borders so the frame feels structural but not loud.
 */
function GridFrame({
  children,
  noBorder = false,
}: {
  children: React.ReactNode;
  noBorder?: boolean;
}) {
  return (
    <section
      className={`relative z-10 w-full ${noBorder ? "" : "border-b border-navy/50"} bg-cream/30 backdrop-blur-[1px]`}
    >
      <div className="max-w-[1440px] mx-auto border-x border-navy/50">
        {children}
      </div>
    </section>
  );
}

export default function GridFullPage() {
  return (
    <div className="grid-theme min-h-screen bg-cream relative overflow-hidden">
      {/* Grid-theme overrides: square off all card corners + connect cards */}
      <style>{`
        /* Square off every rounded card corner (keeps rounded-full for buttons) */
        .grid-theme .rounded-lg,
        .grid-theme .rounded-xl,
        .grid-theme .rounded-2xl,
        .grid-theme .rounded-3xl {
          border-radius: 0 !important;
        }

        /* Close gaps on card grids so cards touch */
        .grid-theme .grid.gap-3,
        .grid-theme .grid.gap-4,
        .grid-theme .grid.gap-5,
        .grid-theme .grid.gap-6 {
          gap: 0 !important;
        }

        /* Add connecting borders so touching cards share a line (no overlap that masks the frame) */
        .grid-theme .grid > .bg-card,
        .grid-theme .grid > .bg-white\\/5 {
          border-width: 1px !important;
          border-color: rgba(10, 37, 64, 0.25) !important;
        }

        /* Calculator slider thumb keeps its round */
        .grid-theme input[type="range"]::-webkit-slider-thumb,
        .grid-theme input[type="range"]::-moz-range-thumb {
          border-radius: 9999px !important;
        }

        /* Force light mode on ALL dark bgs (sections, inner cards, etc) — except VSL */
        .grid-theme [class*="bg-navy"]:not(.aspect-video):not(.aspect-video *),
        .grid-theme [class*="from-navy"]:not(.aspect-video):not(.aspect-video *) {
          background-image: none !important;
          background-color: transparent !important;
        }

        /* Convert white text to navy/muted in dark component regions */
        .grid-theme .text-white:not(.aspect-video *) { color: #0a2540 !important; }
        .grid-theme .text-white\\/80:not(.aspect-video *) { color: #0a2540 !important; }
        .grid-theme .text-white\\/70:not(.aspect-video *) { color: #4a5568 !important; }
        .grid-theme .text-white\\/60:not(.aspect-video *) { color: #4a5568 !important; }
        .grid-theme .text-white\\/50:not(.aspect-video *) { color: #4a5568 !important; }
        .grid-theme .text-white\\/40:not(.aspect-video *) { color: #6b7a8a !important; }
        .grid-theme .text-white\\/30:not(.aspect-video *) { color: #6b7a8a !important; }

        /* SOLID white card backgrounds — matches services cards, pops against cream */
        .grid-theme .bg-white\\/5 { background-color: #ffffff !important; }
        .grid-theme .bg-white\\/8 { background-color: #ffffff !important; }
        .grid-theme .bg-white\\/10 { background-color: #fbf9f5 !important; }
        .grid-theme .border-white\\/5 { border-color: rgba(10, 37, 64, 0.15) !important; }
        .grid-theme .border-white\\/10 { border-color: rgba(10, 37, 64, 0.2) !important; }
        .grid-theme .border-white\\/20 { border-color: rgba(10, 37, 64, 0.3) !important; }

        /* VSL stays dark (video placeholder must pop) */
        .grid-theme .aspect-video {
          background-color: #0a2540 !important;
          background-image: linear-gradient(to bottom right, #0a2540, #0a2540, #1a3a5c) !important;
        }

        /* Services + Sprint card grids: extend to touch the vertical frame lines.
           Scoped to card grids only (exclude Qualifier's asymmetric 1fr_2fr layout). */
        .grid-theme section .max-w-7xl > .grid[class*="grid-cols-4"],
        .grid-theme section .max-w-7xl > .grid[class*="md:grid-cols-3"] {
          margin-left: -1.5rem !important;
          margin-right: -1.5rem !important;
        }

        /* Kill the purple/blue glow in the consulting section */
        #consulting [class*="bg-\\[\\#4d65ff\\]"] {
          display: none !important;
        }

        /* Hide the decorative bg-grid overlay inside imported components
           (keeps their section hues, just removes the duplicate grid) */
        .grid-theme .bg-grid { display: none !important; }

        /* SIZE BUMP — inspired by Growth Today / ColdIQ scale */
        /* Headlines */
        .grid-theme h2.text-3xl,
        .grid-theme h2.text-3xl.sm\\:text-4xl { font-size: 3rem !important; line-height: 1.1 !important; }
        /* Subheads */
        .grid-theme .text-lg { font-size: 1.25rem !important; }
        .grid-theme .text-xl { font-size: 1.375rem !important; }
        /* Body in cards */
        .grid-theme .text-sm { font-size: 0.95rem !important; }
        .grid-theme .text-base { font-size: 1.0625rem !important; }
        /* Stats in workflow — numbers punchier */
        .grid-theme .text-2xl { font-size: 1.875rem !important; }
        /* More padding on section wrappers */
        .grid-theme .py-20 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
        .grid-theme .md\\:py-28 {
          padding-top: 6rem !important;
          padding-bottom: 6rem !important;
        }
        @media (min-width: 768px) {
          .grid-theme .md\\:py-28 {
            padding-top: 8rem !important;
            padding-bottom: 8rem !important;
          }
        }
        /* More card padding */
        .grid-theme .p-4 { padding: 1.5rem !important; }
        .grid-theme .p-5 { padding: 1.75rem !important; }
        .grid-theme .p-6 { padding: 2rem !important; }
      `}</style>

      {/* Structural grid background, anchored to content frame's left edge */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10, 37, 64, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10, 37, 64, 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "calc(50% - 719px) 0",
        }}
      />

      {/* Yellow glow */}
      <div className="absolute top-[-200px] left-[20%] w-[600px] h-[600px] bg-yellow/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[100px] right-[-100px] w-[400px] h-[400px] bg-[#4d65ff]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* NAV */}
      <GridFrame>
        <div className="flex items-center justify-between h-20 px-8">
          <Image
            src="/images/litehouse-logo.png"
            alt="Litehouse"
            width={120}
            height={32}
            className="h-7 w-auto"
          />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
            <a href="#how">How it works</a>
            <a href="#services">Services</a>
            <a href="#calculator">Calculator</a>
            <a href="#results">Results</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            href="#book"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors shadow-lg shadow-yellow/20"
          >
            Book a Call
          </a>
        </div>
      </GridFrame>

      {/* HERO */}
      <GridFrame>
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image
              src="/images/instantly-expert.svg"
              alt="Instantly Expert"
              width={160}
              height={44}
              className="h-10 w-auto"
            />
            <div className="flex items-center gap-2 bg-card border-2 border-navy rounded-full px-4 py-2">
              <div className="w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">C</span>
              </div>
              <span className="text-sm font-medium text-muted">Clay Partner</span>
            </div>
          </div>

          <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-navy mb-8">
            Smarter GTM.
            <br />
            <span className="bg-gradient-to-r from-yellow via-yellow to-[#f59e0b] bg-clip-text text-transparent">
              Faster growth.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted leading-relaxed mb-12 max-w-3xl mx-auto">
            We build and run GTM engines that automate your busywork, support
            your reps, and deliver a predictable pipeline of qualified leads.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full bg-yellow text-navy hover:bg-yellow-hover transition-colors shadow-lg shadow-yellow/20"
            >
              Book Your Free Strategy Call
              <ArrowRight size={16} />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full border-2 border-navy bg-cream text-navy hover:bg-card transition-colors"
            >
              See How We Help
            </a>
          </div>

          <p className="text-sm text-muted-light mb-10">
            Trusted by 30+ B2B companies across the US and UK
          </p>

          <div className="relative max-w-5xl mx-auto border-2 border-navy">
            <div className="relative bg-navy aspect-video flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow/5 rounded-full blur-[60px]" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-full bg-yellow/20 flex items-center justify-center backdrop-blur-sm border-2 border-yellow/50 hover:bg-yellow/30 transition-colors cursor-pointer">
                  <Play size={28} className="text-yellow ml-1" fill="currentColor" />
                </div>
                <p className="text-white/50 text-base">Watch how it works</p>
              </div>
            </div>
          </div>
        </div>
      </GridFrame>

      {/* TRUST BAR */}
      <GridFrame>
        <TrustBar />
      </GridFrame>

      {/* PROBLEM — custom grid-styled version with tints */}
      <GridFrame>
        <div className="border-b border-navy/50 px-8 py-14 text-center">
          <span className="inline-block text-xs font-bold text-red bg-red/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The common playbook
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-3">
            Most B2B teams build pipeline one of three ways.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Each one costs you something different: money, targeting, or predictability.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Hire an SDR team",
              cost: "$60-80k+ per rep",
              accentBar: "bg-red",
              tint: "from-red/10 via-red/5 to-transparent",
              costBadge: "text-red bg-red/5 border-red/20",
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
              accentBar: "bg-[#f97316]",
              tint: "from-[#f97316]/10 via-[#f97316]/5 to-transparent",
              costBadge: "text-[#f97316] bg-[#f97316]/5 border-[#f97316]/20",
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
              accentBar: "bg-muted-light",
              tint: "from-muted-light/10 via-muted-light/5 to-transparent",
              costBadge: "text-muted-light bg-muted-light/5 border-muted-light/20",
              problems: [
                "No control over volume or timing",
                "Content takes months to compound",
                "Referrals work until they don't",
                "Can't scale it when pipeline dries up",
              ],
            },
          ].map((item, i, arr) => (
            <div
              key={item.title}
              className={`relative p-8 overflow-hidden ${
                i < arr.length - 1 ? "md:border-r md:border-r-navy/40" : ""
              } ${i > 0 ? "border-t border-t-navy/40 md:border-t-0" : ""}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${item.accentBar}`} />
              <div className={`absolute inset-0 bg-gradient-to-b ${item.tint} pointer-events-none`} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 pt-2">
                  <item.icon size={20} className="text-muted-light" />
                  <h3 className="font-heading font-bold text-xl text-navy">{item.title}</h3>
                </div>
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-5 ${item.costBadge}`}>
                  {item.cost}
                </span>
                <ul className="space-y-2.5">
                  {item.problems.map((problem) => (
                    <li key={problem} className="flex items-start gap-2 text-sm text-muted">
                      <X size={14} className="text-red/60 shrink-0 mt-0.5" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </GridFrame>

      {/* WORKFLOW / Better Way — dark edge-to-edge */}
      <GridFrame >
        <WorkflowSection />
      </GridFrame>

      {/* QUALIFIER */}
      <GridFrame>
        <Qualifier />
      </GridFrame>

      {/* CONSULTING BANNER — custom inline, no negative margin */}
      <GridFrame>
        <a
          href="#consulting"
          className="block px-8 py-5 hover:bg-yellow/5 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-navy/5 border-2 border-navy/10 flex items-center justify-center shrink-0">
                <span className="text-lg">💡</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-navy">
                  Not quite the right fit? We also offer consulting.
                </p>
                <p className="text-sm text-muted">
                  Earlier stage or want to learn the ropes first? Start with a free GTM audit.
                </p>
              </div>
            </div>
            <ArrowRight size={20} className="text-muted group-hover:text-yellow transition-colors shrink-0 ml-4" />
          </div>
        </a>
      </GridFrame>

      {/* SERVICES */}
      <GridFrame>
        <Services />
      </GridFrame>

      {/* SPRINT TIMELINE — custom inline with dots inside cards + bigger content */}
      <GridFrame>
        <section className="relative py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 text-center mb-14">
            <span className="inline-block text-xs font-bold text-yellow bg-yellow/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              The 90-Day Sprint
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              From zero to scalable acquisition in 12 weeks
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              We install the system in two weeks, then run and optimise it
              over a 12-week sprint to reach your entire market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-navy/50">
              {[
                {
                  month: "Month 1",
                  label: "Build",
                  focus: "Infrastructure and foundations",
                  items: [
                    "Email infrastructure set up and warming started",
                    "ICP defined and your complete TAM mapped",
                    "Campaign architecture designed around your offer",
                    "Offer and positioning sharpened for cold outreach",
                  ],
                  outcome: "15-30 interested leads",
                  dot: "bg-yellow",
                  badge: "bg-yellow/10 text-yellow border-yellow/20",
                },
                {
                  month: "Month 2",
                  label: "Optimise",
                  focus: "Iterate and accelerate",
                  items: [
                    "Early results reviewed, campaigns iterated",
                    "Winning angles and segments doubled down on",
                    "Intent and buying signal logic added into campaigns",
                    "Volume scaled on what's working",
                  ],
                  outcome: "30-60 interested leads",
                  dot: "bg-[#4d65ff]",
                  badge: "bg-[#4d65ff]/10 text-[#4d65ff] border-[#4d65ff]/20",
                },
                {
                  month: "Month 3",
                  label: "Scale",
                  focus: "Scale and systemise",
                  items: [
                    "Max volume across proven campaigns",
                    "Signals refined and sharpened",
                    "Continuous optimisation driven by live data",
                    "Full process systemised for ongoing execution",
                  ],
                  outcome: "60-100+ interested leads",
                  dot: "bg-green",
                  badge: "bg-green/10 text-green border-green/20",
                },
              ].map((m, i, arr) => (
                <div
                  key={m.month}
                  className={`p-8 bg-white flex flex-col ${
                    i < arr.length - 1 ? "md:border-r md:border-r-navy/30" : ""
                  } ${i > 0 ? "border-t border-navy/30 md:border-t-0" : ""}`}
                >
                  {/* Month header INSIDE the card */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-4 h-4 rounded-full ${m.dot}`} />
                    <span className="text-base font-semibold text-navy">
                      {m.month}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${m.badge}`}
                    >
                      {m.label}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy mb-6">
                    {m.focus}
                  </h3>

                  <ul className="space-y-3 mb-8 flex-1">
                    {m.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base text-muted"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${m.dot} shrink-0 mt-2`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={`text-center py-4 border ${m.badge}`}>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">
                      Expected outcome
                    </p>
                    <p className="font-heading font-bold text-xl">
                      {m.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </section>
      </GridFrame>

      {/* CALCULATOR */}
      <GridFrame>
        <Calculator />
      </GridFrame>

      {/* SOCIAL PROOF */}
      <GridFrame>
        <SocialProof />
      </GridFrame>

      {/* CONSULTING — dark edge-to-edge */}
      <GridFrame >
        <Consulting />
      </GridFrame>

      {/* FAQ */}
      <GridFrame>
        <Faq />
      </GridFrame>

      {/* CTA — dark edge-to-edge */}
      <GridFrame >
        <CtaSection />
      </GridFrame>

      {/* FOOTER */}
      <GridFrame noBorder>
        <Footer />
      </GridFrame>
    </div>
  );
}
