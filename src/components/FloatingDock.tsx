import { useEffect, useState } from "react";
import { UtensilsCrossed, Calendar, X, Trash2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface TastingItem {
  id: string;
  name: string;
  price: string;
  category: string;
}

export function FloatingDock() {
  const [items, setItems] = useState<TastingItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleAdd = (e: CustomEvent<Omit<TastingItem, "id">>) => {
      const newItem: TastingItem = {
        id: Math.random().toString(36).substring(7),
        name: e.detail.name,
        price: e.detail.price,
        category: e.detail.category,
      };
      setItems((prev) => {
        const next = [...prev, newItem];
        window.dispatchEvent(
          new CustomEvent("tasting-count-update", { detail: { count: next.length } }),
        );
        return next;
      });
    };

    const handleToggle = () => setDrawerOpen((prev) => !prev);

    window.addEventListener("add-to-tasting", handleAdd as EventListener);
    window.addEventListener("toggle-tasting-drawer", handleToggle);

    return () => {
      window.removeEventListener("add-to-tasting", handleAdd as EventListener);
      window.removeEventListener("toggle-tasting-drawer", handleToggle);
    };
  }, []);

  const removeItem = (id: string) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.id !== id);
      window.dispatchEvent(
        new CustomEvent("tasting-count-update", { detail: { count: next.length } }),
      );
      return next;
    });
  };

  const clearAll = () => {
    setItems([]);
    window.dispatchEvent(new CustomEvent("tasting-count-update", { detail: { count: 0 } }));
    toast.info("Tasting tray cleared");
  };

  // Calculate estimated total
  const totalAmount = items.reduce((sum, item) => {
    const numeric = parseInt(item.price.replace(/[^\d]/g, ""), 10) || 0;
    return sum + numeric;
  }, 0);

  return (
    <>
      {/* Floating Action Dock (Bottom Right) */}
      <div className="floating-dock-bar">
        {items.length > 0 && (
          <button
            onClick={() => setDrawerOpen(true)}
            className="floating-action-pill bg-white border-black/20 text-black hover:border-black shadow-lg"
          >
            <UtensilsCrossed className="w-4 h-4 text-black" />
            <span className="font-semibold">{items.length} in Tasting Tray</span>
            <span className="font-mono text-xs font-bold bg-black text-white px-2 py-0.5 rounded-full">
              ₹{totalAmount}
            </span>
          </button>
        )}

        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-reserve"))}
          className="btn-3d-gold !py-2.5 !px-5 !rounded-full shadow-xl"
        >
          <Calendar className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">Reserve Table</span>
          <span className="sm:hidden">Book</span>
        </button>
      </div>

      {/* Floating Tasting Drawer / Modal */}
      {drawerOpen && (
        <div className="fixed inset-0 z-110 flex items-end sm:items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white rounded-2xl border border-black/15 p-6 shadow-2xl z-10 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-black" />
                <h3 className="font-display text-2xl font-light text-black">Your Tasting Tray</h3>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded-full text-neutral-500 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="py-8 text-center text-xs text-neutral-500 space-y-2">
                <p>Your tasting tray is empty.</p>
                <p>Browse our menu and click "+ Add to Tasting" to curate your visit.</p>
              </div>
            ) : (
              <div className="py-4 space-y-4 max-h-[50vh] overflow-y-auto">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-black/8"
                    >
                      <div>
                        <p className="text-xs font-semibold text-black">{item.name}</p>
                        <p className="text-[10px] text-neutral-500 uppercase">{item.category}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-black">{item.price}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-red-500 hover:text-red-700 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between text-sm">
                  <span className="font-semibold text-black">Estimated Tasting Bill:</span>
                  <span className="font-mono font-bold text-lg text-black">₹{totalAmount}</span>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={clearAll}
                    className="text-xs text-neutral-500 hover:text-red-600 transition-colors underline"
                  >
                    Clear All
                  </button>

                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      window.dispatchEvent(new CustomEvent("open-reserve"));
                    }}
                    className="btn-3d-gold !py-2.5 !px-4 !text-xs"
                  >
                    <span>Reserve with this Order</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingDock;
