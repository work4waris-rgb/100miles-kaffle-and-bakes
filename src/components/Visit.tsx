import { MapPin, Phone, Clock, Calendar, Navigation, ExternalLink } from "lucide-react";

export function Visit() {
  return (
    <section className="visit-section" id="visit">
      <div className="visit-grid">
        {/* Left Column: Details & Actions */}
        <div className="visit-card-left space-y-6">
          <div>
            <span className="eyebrow">Find &amp; Experience Us</span>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-black mt-3">
              Come As <span className="italic font-normal">You Are</span>
            </h2>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              Step through our doors on Malwal Road for morning brew moments, quiet afternoon
              meetings, or celebratory evening feasts.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 py-2 border-y border-black/10">
            <div className="flex items-start gap-3 text-sm text-neutral-700">
              <div className="p-2 rounded-lg bg-neutral-100 text-black shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-black">Malwal Road, Model Town</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Adarsh Nagar, Firozpur, Punjab 152001, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-neutral-700">
              <div className="p-2 rounded-lg bg-neutral-100 text-black shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-black">Open Daily</p>
                <p className="text-xs text-neutral-500">
                  10:30 AM – 10:30 PM (Kitchen closes 10:00 PM)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-neutral-700">
              <div className="p-2 rounded-lg bg-neutral-100 text-black shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-black">Table Inquiries &amp; Orders</p>
                <a
                  href="tel:+919779400060"
                  className="text-xs text-black font-semibold hover:underline"
                >
                  +91 97794 00060
                </a>
              </div>
            </div>
          </div>

          {/* Delivery Platform Integrations */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2.5">
              Instant Delivery Partners:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-100 text-black border border-neutral-300 hover:bg-neutral-200 transition-colors"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-100 text-black border border-neutral-300 hover:bg-neutral-200 transition-colors"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-reserve"))}
              className="btn-3d-gold w-full !py-3.5"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Your Table Now</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Map Visual */}
        <div className="visit-card-right relative group">
          <iframe
            title="Location of KAFFI & BAKES on Malwal Road, Firozpur"
            src="https://www.google.com/maps?q=Malwal%20Road%2C%20Firozpur%2C%20Punjab&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-black/10 shadow-lg flex items-center gap-2 text-xs font-semibold text-black">
            <Navigation className="w-3.5 h-3.5 text-black" />
            <span>5 Mins from Firozpur Cantt Railway Station</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visit;
