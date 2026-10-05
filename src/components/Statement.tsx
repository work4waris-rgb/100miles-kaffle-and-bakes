import { Coffee, Croissant, HeartHandshake } from "lucide-react";

export function Statement() {
  return (
    <section className="statement-section">
      <div className="statement-card">
        <span className="eyebrow mb-6 mx-auto">The Philosophy</span>
        <blockquote className="statement-quote">
          “Good coffee transforms the start of your morning.
          <br />
          <em>Extraordinary food and warm spaces alter your entire day.”</em>
        </blockquote>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-black/10 text-left">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50/80 border border-black/8 hover:border-black/25 transition-colors">
            <div className="p-2.5 rounded-lg bg-white shadow-sm text-black">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black">Artisanal Roasting</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Single-origin beans roasted slowly to preserve delicate floral and cocoa undertones.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50/80 border border-black/8 hover:border-black/25 transition-colors">
            <div className="p-2.5 rounded-lg bg-white shadow-sm text-black">
              <Croissant className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black">Fresh Daily Bakes</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Hand-laminated flaky pastries, cheesecakes, and tarts baked fresh every sunrise.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50/80 border border-black/8 hover:border-black/25 transition-colors">
            <div className="p-2.5 rounded-lg bg-white shadow-sm text-black">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-black">Warm Serenity</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Designed as an oasis in Firozpur for deep conversations, remote work, and
                celebrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statement;
