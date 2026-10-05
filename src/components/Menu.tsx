import { useState } from "react";
import { Plus, Check, UtensilsCrossed, Sparkles } from "lucide-react";
import { toast } from "sonner";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  veg: boolean;
  tag?: string;
};

const MENU_CATEGORIES: { category: string; icon: string; items: MenuItem[] }[] = [
  {
    category: "Coffee & Cold Brews",
    icon: "☕",
    items: [
      {
        name: "Artisan Coffee Frappe",
        desc: "Slow-chilled double-espresso blended with rich milk cream and cocoa mist.",
        price: "₹180",
        veg: true,
        tag: "Bestseller",
      },
      {
        name: "18-Hour Nitro Cold Brew",
        desc: "Steeped in small glass batches for extreme smoothness and chocolate notes.",
        price: "₹160",
        veg: true,
        tag: "Signature",
      },
      {
        name: "Saffron Kesar Chai",
        desc: "Single-estate Assam black tea slow-brewed with pure Kashmiri saffron.",
        price: "₹120",
        veg: true,
      },
      {
        name: "Spanish Vanilla Latte",
        desc: "Silky espresso, condensed milk, Madagascar vanilla, and micro-velvet foam.",
        price: "₹190",
        veg: true,
      },
      {
        name: "Classic Cortado",
        desc: "Equal parts double ristretto and warm textured whole milk in a Gibraltar glass.",
        price: "₹150",
        veg: true,
      },
    ],
  },
  {
    category: "Bakery & Desserts",
    icon: "🍰",
    items: [
      {
        name: "Alphonso Mango Cheesecake",
        desc: "Creamy Philadelphia cheesecake topped with vibrant Alphonso puree glaze.",
        price: "₹220",
        veg: true,
        tag: "Chef Special",
      },
      {
        name: "Seasonal Fruit Loaf Cake",
        desc: "Daily-baked butter sponge cake loaded with fresh seasonal berries and apricots.",
        price: "₹180",
        veg: true,
      },
      {
        name: "Belgian Brownie Tart",
        desc: "Dark 70% Callebaut chocolate ganache baked in a flaky, crumbly shortcrust pastry.",
        price: "₹160",
        veg: true,
      },
      {
        name: "Butter Almond Croissant",
        desc: "72-layer laminated French pastry filled with sweet frangipane almond cream.",
        price: "₹180",
        veg: true,
        tag: "Fresh at 7AM",
      },
      {
        name: "Warm Salted Caramel Tiramisu",
        desc: "Espresso-soaked savoiardi ladyfingers layered with whipped mascarpone cream.",
        price: "₹240",
        veg: true,
      },
    ],
  },
  {
    category: "Continental Mains",
    icon: "🍽️",
    items: [
      {
        name: "Fluffy Chicken Herb Omelette",
        desc: "Folded three-egg omelette stuffed with tender herb-seasoned chicken and cheddar.",
        price: "₹220",
        veg: false,
      },
      {
        name: "Wok Honey Chilli Broccoli",
        desc: "Charred florets tossed in toasted sesame, sweet garlic, and fiery pepper glaze.",
        price: "₹200",
        veg: true,
        tag: "Popular",
      },
      {
        name: "Kesar Makhni Paneer Bowl",
        desc: "Silken paneer cubes in velvety saffron-scented tomato butter reduction with herb toast.",
        price: "₹240",
        veg: true,
      },
      {
        name: "Truffle Wild Mushroom Toast",
        desc: "Sautéed shiitake and button mushrooms with white truffle oil on sourdough.",
        price: "₹230",
        veg: true,
      },
    ],
  },
  {
    category: "Mexican & Tacos",
    icon: "🌮",
    items: [
      {
        name: "Crispy Chimichanga Non-Veg",
        desc: "Golden-crisped wheat tortilla packed with shredded chipotle chicken, beans and cheese.",
        price: "₹280",
        veg: false,
        tag: "Fiery",
      },
      {
        name: "Egyptian Herb Falafel Platter",
        desc: "Crispy chickpea falafel patties, smoked paprika hummus, pickled beets, and warm pita.",
        price: "₹220",
        veg: true,
      },
      {
        name: "Smoked Quesadilla Grande",
        desc: "Melted Monterey Jack cheese, fire-roasted sweet corn, jalapeños, and salsa fresca.",
        price: "₹210",
        veg: true,
      },
    ],
  },
  {
    category: "Gourmet Bites",
    icon: "🍟",
    items: [
      {
        name: "Truffle Parmesan Loaded Fries",
        desc: "Hand-cut crispy potatoes drizzled with warm cheddar sauce, pickled jalapeños and herbs.",
        price: "₹160",
        veg: true,
        tag: "Must Try",
      },
      {
        name: "Herb Butter Garlic Sourdough",
        desc: "Thick-cut woodfired sourdough slathered in roasted garlic confit and rosemary butter.",
        price: "₹120",
        veg: true,
      },
      {
        name: "Crispy Corn & Jalapeño Poppers",
        desc: "Golden breaded corn and cream cheese bites served with sweet chilli cilantro dip.",
        price: "₹180",
        veg: true,
      },
    ],
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const currentCategory = MENU_CATEGORIES[activeCategory] ?? MENU_CATEGORIES[0]!;

  const filteredItems = currentCategory.items.filter((item) => {
    if (dietFilter === "veg") return item.veg;
    if (dietFilter === "non-veg") return !item.veg;
    return true;
  });

  const handleAddDish = (item: MenuItem) => {
    window.dispatchEvent(
      new CustomEvent("add-to-tasting", {
        detail: { name: item.name, price: item.price, category: currentCategory.category },
      }),
    );
    setAddedItems((prev) => ({ ...prev, [item.name]: true }));
    toast.success(`Added ${item.name} (${item.price}) to Tasting Order`, {
      description: "You can review all selections in your tasting basket dock.",
    });

    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.name]: false }));
    }, 2000);
  };

  return (
    <section className="menu-section" id="menu">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="eyebrow mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>Curated Offerings</span>
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-light text-black">
          The Artisanal <span className="italic font-normal">Menu</span>
        </h2>
        <p className="text-sm text-neutral-600">
          Prepared fresh to order using whole ingredients, pure butter, and premium spices. Average
          ₹200 – ₹400 per guest.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="menu-tabs-wrapper">
        <div className="menu-tabs-bar">
          {MENU_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              className={`menu-tab-btn ${activeCategory === idx ? "active" : ""}`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Secondary Dietary Filter Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Filter:
          </span>
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-black/10">
            <button
              onClick={() => setDietFilter("all")}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                dietFilter === "all"
                  ? "bg-black text-white font-semibold"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              All Items ({currentCategory.items.length})
            </button>
            <button
              onClick={() => setDietFilter("veg")}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                dietFilter === "veg"
                  ? "bg-emerald-700 text-white font-semibold"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Pure Veg
            </button>
            <button
              onClick={() => setDietFilter("non-veg")}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                dietFilter === "non-veg"
                  ? "bg-rose-700 text-white font-semibold"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Non-Veg
            </button>
          </div>
        </div>

        <button
          onClick={() => window.dispatchEvent(new CustomEvent("toggle-tasting-drawer"))}
          className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:text-neutral-600 transition-colors"
        >
          <UtensilsCrossed className="w-3.5 h-3.5 text-black" />
          <span>View Current Tasting Basket</span>
        </button>
      </div>

      {/* 3D Floating Menu Cards Grid */}
      <div className="menu-cards-grid">
        {filteredItems.map((item) => (
          <article key={item.name} className="menu-dish-card group">
            <div>
              {/* Badge & Dietary Pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={item.veg ? "diet-pill-veg" : "diet-pill-nonveg"}>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.veg ? "bg-emerald-600" : "bg-red-600"
                    }`}
                  />
                  {item.veg ? "VEG" : "NON VEG"}
                </span>

                {item.tag && (
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black text-white">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-normal text-black group-hover:text-neutral-600 transition-colors">
                  {item.name}
                </h3>
                <span className="font-mono text-base font-bold text-black shrink-0">
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-600 leading-relaxed mt-2.5">{item.desc}</p>
            </div>

            {/* Quick Add Action Button */}
            <div className="pt-4 mt-4 border-t border-black/8 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500 font-medium">Freshly prepared</span>
              <button
                onClick={() => handleAddDish(item)}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                  addedItems[item.name]
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                    : "bg-black hover:bg-neutral-800 text-white border-black"
                }`}
              >
                {addedItems[item.name] ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5 text-white" />
                    <span>Add to Tasting</span>
                  </>
                )}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-neutral-500">
        All taxes included · Please inform our barista of any specific dietary or nut allergies.
      </div>
    </section>
  );
}

export default Menu;
