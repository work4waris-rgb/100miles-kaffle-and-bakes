import { useState } from "react";
import cafeHeroImg from "@/assets/cafe-hero.png";
import { Sparkles, CheckCircle2 } from "lucide-react";

const STATS = [
  { value: "4.3★", label: "Google Rated", note: "50+ local reviews" },
  { value: "100%", label: "Arabica Reserve", note: "Single-origin beans" },
  { value: "35+", label: "Artisan Creations", note: "Bakes & gourmet plates" },
  { value: "7 Days", label: "Open Daily", note: "10:30 AM – 10:30 PM" },
];

const TABS = [
  {
    id: "coffee",
    title: "The Coffee Ritual",
    description:
      "Every pull from our espresso bar is calibrated for pressure, extraction time, and temperature. From silky microfoam cappuccinos to smooth 18-hour cold brew, we take no shortcuts.",
    points: [
      "Single-origin Coorg & Chikmagalur beans",
      "Custom cold-brew steeping towers",
      "Plant-based milk options available",
    ],
  },
  {
    id: "bakery",
    title: "The Artisan Bakery",
    description:
      "Our pastry counter is filled each morning with buttery, golden-laminated croissants, velvety New York and mango cheesecakes, and rich dark chocolate brownie tarts made with real butter.",
    points: [
      "Baked fresh every morning on-site",
      "Real fruit and authentic Belgian chocolate",
      "Eggless & vegetarian selections",
    ],
  },
  {
    id: "space",
    title: "The Architectural Sanctuary",
    description:
      "Engineered with warm acoustic ceilings, tufted cream lounge seating, and soft golden LED ribbons, KAFFI & BAKES is built to be your favorite second home in Firozpur.",
    points: [
      "High-speed Wi-Fi and power outlets",
      "Sunlit window nooks & private lounge zones",
      "Ideal for meetings, reading & dates",
    ],
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        {/* Left: 3D Visual with Floating Badges */}
        <div className="about-3d-visual">
          <div className="about-image-card">
            <img
              src={cafeHeroImg}
              alt="Panoramic interior of KAFFI & BAKES in Firozpur"
              loading="lazy"
            />
          </div>

          {/* Floating Stamp / Card */}
          <div className="about-floating-stamp">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black">
                  Bespoke Interior
                </p>
                <p className="text-[11px] text-neutral-500">
                  Gold Strip Lighting &amp; Mosaic Tiles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Narrative & Interactive Pillars */}
        <div className="space-y-6">
          <span className="eyebrow">Our Story &amp; Craft</span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-black leading-tight">
            A Space Built for <span className="italic font-normal">Moments</span> That Linger
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed">
            KAFFI &amp; BAKES was born in Firozpur from a passionate desire to elevate cafe culture.
            We envisioned a place where the air smells of freshly ground espresso and caramelized
            butter, where every guest feels unhurried, treasured, and inspired.
          </p>

          {/* Interactive Feature Tabs */}
          <div className="pt-2">
            <div className="flex items-center gap-2 p-1.5 bg-neutral-100 rounded-xl border border-black/10 w-fit">
              {TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === idx
                      ? "bg-black text-white shadow-sm"
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="mt-4 p-5 rounded-2xl bg-white border border-black/10 shadow-sm space-y-3">
              <p className="text-sm text-neutral-700 leading-relaxed">
                {TABS[activeTab]?.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-black/8">
                {TABS[activeTab]?.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-xs text-neutral-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3D Floating Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-white border border-black/10 shadow-sm hover:border-black/30 hover:-translate-y-1 transition-all"
              >
                <span className="font-display text-2xl lg:text-3xl font-semibold text-black">
                  {stat.value}
                </span>
                <p className="text-xs font-semibold text-black mt-1">{stat.label}</p>
                <p className="text-[10px] text-neutral-500">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
