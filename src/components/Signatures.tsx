import signatureMangoCheesecake from "@/assets/images/signature_mango_cheesecake_1791207180924.jpg";
import signatureColdBrew from "@/assets/images/signature_cold_brew_1791207191976.jpg";
import signatureCroissant from "@/assets/images/signature_croissant_bake_1791207204328.jpg";
import { Sparkles, Plus } from "lucide-react";
import { toast } from "sonner";

interface SignatureItem {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  tag: string;
  desc: string;
  tastingNotes: string[];
  veg: boolean;
}

const SIGNATURES: SignatureItem[] = [
  {
    id: "mango-cheesecake",
    name: "Alphonso Mango Cheesecake",
    price: "₹220",
    category: "Patisserie",
    image: signatureMangoCheesecake,
    tag: "Chef's Crown Jewel",
    desc: "Silky baked cream cheesecake topped with ripe Alphonso mango coulis and garden mint on a buttery graham crust.",
    tastingNotes: ["Velvety", "Tropical Citrus", "Honey Graham"],
    veg: true,
  },
  {
    id: "nitro-cold-brew",
    name: "18-Hr Artisan Cold Brew",
    price: "₹160",
    category: "Specialty Coffee",
    image: signatureColdBrew,
    tag: "Guest Favorite",
    desc: "Slow-steeped Coorg Arabica filtered over crystal spheres. Unnaturally smooth with zero bitterness.",
    tastingNotes: ["Dark Chocolate", "Roasted Hazelnut", "Clean Finish"],
    veg: true,
  },
  {
    id: "almond-croissants",
    name: "Almond Croissants & Tarts",
    price: "₹180",
    category: "Bakery",
    image: signatureCroissant,
    tag: "Baked Fresh at 7 AM",
    desc: "Hand-laminated 72-layer French butter croissant generously filled with frangipane almond cream and toasted flaked almonds.",
    tastingNotes: ["Flaky Crunch", "Toasted Almond", "Sweet Butter"],
    veg: true,
  },
];

export function Signatures() {
  const handleAddToTasting = (item: SignatureItem) => {
    window.dispatchEvent(
      new CustomEvent("add-to-tasting", {
        detail: { name: item.name, price: item.price, category: item.category },
      }),
    );
    toast.success(`Added ${item.name} to your Tasting Order`, {
      description: "Click the Tasting Tray in the navigation or dock to view.",
    });
  };

  return (
    <section className="signatures-section" id="signatures">
      <div className="signatures-container">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="eyebrow mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Crown Creations</span>
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-black">
            Our <span className="italic font-normal">Signature</span> Highlights
          </h2>
          <p className="text-sm text-neutral-600">
            Hand-crafted in limited daily batches. The iconic dishes that put KAFFI &amp; BAKES on
            Firozpur's culinary map.
          </p>
        </div>

        <div className="signatures-grid">
          {SIGNATURES.map((item) => (
            <article key={item.id} className="signature-card-3d">
              {/* Image Frame */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-[11px] font-semibold shadow-sm">
                  {item.tag}
                </div>
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-black border border-black/10 shadow-sm">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="diet-pill-veg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      VEG
                    </span>
                    <span className="text-[11px] text-neutral-500 font-medium tracking-wider uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-black">{item.name}</h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mt-2">{item.desc}</p>
                </div>

                {/* Tasting Notes & Action */}
                <div className="pt-4 border-t border-black/10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleAddToTasting(item)}
                    className="w-full py-2.5 px-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-medium text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300 text-white" />
                    <span>Add to Tasting Tray</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Signatures;
