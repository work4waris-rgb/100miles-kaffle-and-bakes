import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const selector =
      ".floating-card-3d, .signature-card-3d, .menu-dish-card, .review-3d-card, .about-image-card, .statement-card, .hero-floating-panel";

    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      el.classList.add("reveal-init");
      (el as HTMLElement).style.setProperty("--reveal-index", String(index % 4));
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useScrollReveal;
