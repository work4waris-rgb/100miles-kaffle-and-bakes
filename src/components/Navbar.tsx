import { useEffect, useState } from "react";
import { Calendar, Menu as MenuIcon, X, UtensilsCrossed } from "lucide-react";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#signatures", label: "Signatures" },
  { href: "#about", label: "Our Craft" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit & Hours" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [tastingCount, setTastingCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleAdd = () => setTastingCount((c) => c + 1);
    const handleReset = () => setTastingCount(0);
    window.addEventListener("tasting-count-update", ((e: CustomEvent) => {
      setTastingCount(e.detail?.count ?? 0);
    }) as EventListener);
    window.addEventListener("add-to-tasting", handleAdd);
    window.addEventListener("reset-tasting", handleReset);
    return () => {
      window.removeEventListener("add-to-tasting", handleAdd);
      window.removeEventListener("reset-tasting", handleReset);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="nav-container">
        <div className={`nav-island ${scrolled ? "nav-scrolled" : ""}`}>
          {/* Brand Logo */}
          <a href="#top" className="nav-brand-logo">
            <span>KAFFI</span> &amp; BAKES
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu-links">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {tastingCount > 0 && (
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("toggle-tasting-drawer"))}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-neutral-100 text-black border border-black/15 hover:bg-neutral-200 transition-colors"
                title="View Selected Tasting Items"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-black" />
                <span>{tastingCount} items</span>
              </button>
            )}

            <button
              className="btn-3d-gold !py-2.5 !px-5 !text-xs"
              onClick={() => window.dispatchEvent(new CustomEvent("open-reserve"))}
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Reserve</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 text-black hover:text-neutral-600 transition-colors"
              aria-label="Toggle navigation"
              onClick={() => setOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glass Navigation Overlay */}
      {open && (
        <div className="fixed inset-0 z-100 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-light tracking-widest text-black">
              <span className="font-semibold">KAFFI</span> &amp; BAKES
            </span>
            <button
              className="p-2 text-black hover:text-neutral-600"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto text-center">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-light text-black hover:text-neutral-500 transition-colors tracking-wider"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <button
              className="btn-3d-gold w-full !py-3.5"
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent("open-reserve"));
              }}
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Reserve a Table</span>
            </button>
            <p className="text-center text-xs text-neutral-500">
              Open Daily · 10:30 AM – 10:30 PM · Malwal Road, Firozpur
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
