import { Facebook, Instagram, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-light">
      <div className="footer-inner">
        {/* Brand & Mission */}
        <div className="space-y-4">
          <div className="font-display text-3xl font-light tracking-widest text-black">
            <span className="font-semibold">KAFFI</span> &amp; BAKES
          </div>
          <p className="text-xs text-neutral-600 max-w-sm leading-relaxed">
            Firozpur's premier specialty cafe and artisanal patisserie. Hand-roasted single-origin
            beans, fresh morning laminated bakes, and architectural calm.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Navigation
          </h4>
          <nav className="flex flex-col gap-2.5 text-xs text-neutral-700">
            <a href="#menu" className="hover:text-black transition-colors">
              Artisanal Menu
            </a>
            <a href="#signatures" className="hover:text-black transition-colors">
              Signature Creations
            </a>
            <a href="#about" className="hover:text-black transition-colors">
              Our Craft &amp; Story
            </a>
            <a href="#reviews" className="hover:text-black transition-colors">
              Guest Testimonials
            </a>
            <a href="#visit" className="hover:text-black transition-colors">
              Hours &amp; Location
            </a>
          </nav>
        </div>

        {/* Hours & Quick Info */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Hours &amp; Contact
          </h4>
          <div className="text-xs text-neutral-700 space-y-1.5 leading-relaxed">
            <p className="font-semibold text-black">Malwal Road, Model Town</p>
            <p className="text-neutral-500">Adarsh Nagar, Firozpur, Punjab 152001</p>
            <p className="pt-1">
              <span className="text-neutral-500">Daily:</span> 10:30 AM – 10:30 PM
            </p>
            <p>
              <span className="text-neutral-500">Phone:</span>{" "}
              <a href="tel:+919779400060" className="text-black font-semibold hover:underline">
                +91 97794 00060
              </a>
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-black hover:text-neutral-600 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-black/8 max-w-1280px mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
        <p>© 2026 KAFFI &amp; BAKES · Firozpur, Punjab. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-black fill-black" />
          <span>for coffee &amp; bake lovers</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
