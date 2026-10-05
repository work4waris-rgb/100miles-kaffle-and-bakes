import { useEffect, useRef, useState } from "react";
import cafeHeroImg from "@/assets/cafe-hero.png";
import signatureColdBrew from "@/assets/images/signature_cold_brew_1791207191976.jpg";
import { Sparkles, Clock, MapPin, Award, Calendar, ArrowUpRight } from "lucide-react";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Mouse parallax state
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const checkPointer = () => setIsFinePointer(mq.matches);
    checkPointer();
    mq.addEventListener("change", checkPointer);
    return () => mq.removeEventListener("change", checkPointer);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      // Normalized between -0.5 and 0.5
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    };

    const updateParallax = () => {
      // Smooth linear interpolation (lerp) for 60fps cinematic fluidity
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (bgRef.current) {
        // Multi-axis 3D parallax on .hero-bg responding to cursor position
        const bgShiftX = currentX * -56;
        const bgShiftY = currentY * -36;
        const rotX = currentY * -4;
        const rotY = currentX * 5;
        bgRef.current.style.transform = `scale(1.12) translate3d(${bgShiftX}px, ${bgShiftY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      if (contentRef.current) {
        // Counter-direction foreground depth
        const fgShiftX = currentX * 18;
        const fgShiftY = currentY * 12;
        contentRef.current.style.transform = `translate3d(${fgShiftX}px, ${fgShiftY}px, 20px)`;
      }

      if (cardRef.current) {
        // Floating 3D perspective tilt on the showcase card
        const cardRotY = currentX * -10;
        const cardRotX = currentY * 8;
        const cardShiftX = currentX * 24;
        const cardShiftY = currentY * 16;
        cardRef.current.style.transform = `translate3d(${cardShiftX}px, ${cardShiftY}px, 40px) perspective(1000px) rotateX(${cardRotX}deg) rotateY(${cardRotY}deg)`;
      }

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isFinePointer]);

  return (
    <section className="hero" id="hero">
      {/* Parallax Background responding to cursor position */}
      <div
        ref={bgRef}
        className={`hero-bg ${isFinePointer ? "" : "hero-bg-float"}`}
        style={{ backgroundImage: `url(${cafeHeroImg})` }}
        aria-hidden="true"
      />

      {/* Clean All-White Morning Overlays */}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-tint" aria-hidden="true" />

      {/* 3D Floating Inner Container */}
      <div className="hero-inner">
        {/* Left Column: Editorial Headline & Actions */}
        <div ref={contentRef} className="hero-content">
          <div className="hero-badge">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Firozpur's Premier Artisanal Roastery</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line">KAFFI</span>
            <span className="hero-line hero-line-accent">&amp; BAKES</span>
          </h1>

          <p className="hero-tagline">
            Where slow-roasted Arabica, warm morning bakes, and architectural tranquility come
            together. Crafted with precision. Served with soul.
          </p>

          <div className="hero-cta">
            <a href="#menu" className="btn-3d-gold">
              <span>Explore The Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              className="btn-3d-light"
              onClick={() => window.dispatchEvent(new CustomEvent("open-reserve"))}
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="mt-8 flex items-center gap-6 text-xs text-neutral-600 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open Today · 10:30 AM – 10:30 PM</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5 text-black font-semibold">
              <Award className="w-3.5 h-3.5 text-black" />
              <span>4.3★ Top Rated on Google</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Floating Showcase Card */}
        <div ref={cardRef} className="hero-floating-panel hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden mb-6 shadow-md border border-black/10">
            <img
              src={signatureColdBrew}
              alt="Cold Brew Reserve at KAFFI & BAKES"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider shadow-sm">
              CHEF'S PICK
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                Signature Reserve
              </span>
              <span className="text-sm font-bold text-black">₹160</span>
            </div>
            <h3 className="font-display text-2xl font-normal text-black">
              Slow-Steeped Cold Brew &amp; Tarts
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              18-hour cold steeped single-origin Arabica poured over crystal sphere ice, paired with
              warm morning chocolate tarts.
            </p>

            <div className="pt-3 border-t border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                <Clock className="w-3.5 h-3.5 text-black" />
                <span>Brewed Fresh Daily</span>
              </div>
              <button
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("add-to-tasting", {
                      detail: { name: "Cold Brew Reserve", price: "₹160", category: "Coffee" },
                    }),
                  );
                }}
                className="text-xs font-semibold text-black hover:text-neutral-600 transition-colors underline underline-offset-4"
              >
                + Add to Tasting
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Status Strip */}
      <div className="hero-strip">
        <div className="hero-strip-track">
          <div className="hero-strip-item">
            <MapPin className="w-3.5 h-3.5 text-black" />
            <span>Malwal Road, Model Town, Firozpur</span>
          </div>
          <div className="hero-strip-item">
            <Clock className="w-3.5 h-3.5 text-black" />
            <span>Dine-In &amp; Takeaway · 10:30 AM – 10:30 PM</span>
          </div>
          <div className="hero-strip-item">
            <Award className="w-3.5 h-3.5 text-black" />
            <span>4.3★ Rating · 50+ Verified Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
