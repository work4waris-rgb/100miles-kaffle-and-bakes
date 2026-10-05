import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Signatures from "@/components/Signatures";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import ReserveModal from "@/components/ReserveModal";
import FloatingDock from "@/components/FloatingDock";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAFFI & BAKES — Specialty Cafe & Artisan Patisserie in Firozpur" },
      {
        name: "description",
        content:
          "Experience slow-roasted single origin Arabica coffee, morning croissants, signature cheesecakes, and gourmet continental fare on Malwal Road, Firozpur. Open daily 10:30 AM – 10:30 PM.",
      },
      {
        property: "og:title",
        content: "KAFFI & BAKES — Specialty Cafe & Artisan Patisserie in Firozpur",
      },
      {
        property: "og:description",
        content:
          "Where slow-roasted coffee meets architectural tranquility. Malwal Road, Firozpur, Punjab.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <div id="top" className="page">
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Signatures />
        <Menu />
        <About />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <ReserveModal />
      <FloatingDock />
    </div>
  );
}
