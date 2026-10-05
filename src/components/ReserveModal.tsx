import { useEffect, useState } from "react";
import { X, Sparkles, CheckCircle2, Ticket } from "lucide-react";
import { toast } from "sonner";

interface ReservationConfirmation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  ambiance: string;
  occasion: string;
}

export function ReserveModal() {
  const [open, setOpen] = useState(false);
  const [ambiance, setAmbiance] = useState("Sunlit Glasshouse");
  const [occasion, setOccasion] = useState("Casual Gathering");
  const [guests, setGuests] = useState(2);
  const [confirmation, setConfirmation] = useState<ReservationConfirmation | null>(null);

  useEffect(() => {
    const onOpen = () => {
      setConfirmation(null);
      setOpen(true);
    };
    window.addEventListener("open-reserve", onOpen);
    return () => window.removeEventListener("open-reserve", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pass: ReservationConfirmation = {
      id: `KB-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      guests,
      ambiance,
      occasion,
    };
    setConfirmation(pass);
    toast.success("Table Confirmed at KAFFI & BAKES!", {
      description: `Reservation #${pass.id} created for ${pass.name}. We look forward to hosting you.`,
    });
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-backdrop-light" onClick={() => setOpen(false)} />

      <div className="modal-card-3d">
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          <X className="w-5 h-5" />
        </button>

        {confirmation ? (
          /* Confirmation Pass Screen */
          <div className="text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-black">
                VIP Reservation Confirmed
              </span>
              <h3 className="font-display text-3xl font-light text-black mt-1">
                We're Preparing Your Table
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                A confirmation SMS will be sent to {confirmation.phone}.
              </p>
            </div>

            {/* Visual Digital Ticket */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-black/10 text-left space-y-3 relative overflow-hidden shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-black" />
                  <span className="font-mono text-xs font-bold text-black">{confirmation.id}</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  CONFIRMED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase font-semibold">
                    Guest
                  </span>
                  <p className="font-semibold text-black">{confirmation.name}</p>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase font-semibold">
                    Party
                  </span>
                  <p className="font-semibold text-black">{confirmation.guests} Guests</p>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase font-semibold">
                    Date &amp; Time
                  </span>
                  <p className="font-semibold text-black">
                    {confirmation.date || "Today"} @ {confirmation.time || "10:30 AM"}
                  </p>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase font-semibold">
                    Seating Zone
                  </span>
                  <p className="font-semibold text-black">{confirmation.ambiance}</p>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-neutral-500 border-t border-black/8">
                📍 Malwal Road, Firozpur · Please arrive within 15 minutes of reservation time.
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setOpen(false)} className="btn-3d-gold w-full !py-3">
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="eyebrow">Table Reservation</span>
              <h3 className="font-display text-3xl font-light text-black mt-1.5">
                Reserve Your Experience
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Complimentary instant table reservation. No advance fee required.
              </p>
            </div>

            {/* Ambiance Zone Selector */}
            <div>
              <label className="block text-xs font-semibold text-black mb-2 uppercase tracking-wider">
                Select Seating Zone
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {["Sunlit Glasshouse", "Velvet Lounge", "Open Garden Courtyard", "Barista Bar"].map(
                  (zone) => (
                    <button
                      type="button"
                      key={zone}
                      onClick={() => setAmbiance(zone)}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        ambiance === zone
                          ? "bg-black border-black text-white shadow-sm"
                          : "bg-white border-black/10 text-neutral-700 hover:border-black/30"
                      }`}
                    >
                      {zone}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Guest Counter */}
            <div>
              <label className="block text-xs font-semibold text-black mb-2 uppercase tracking-wider">
                Number of Guests
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 4, 6, 8, 12].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setGuests(num)}
                    className={`flex-1 py-2 text-xs rounded-lg font-semibold border transition-all ${
                      guests === num
                        ? "bg-black text-white border-black shadow-sm"
                        : "bg-white border-black/10 text-neutral-700 hover:border-black/30"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-black uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="e.g. Jasmeet Singh"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-neutral-50 border border-black/15 focus:border-black focus:ring-1 focus:ring-black outline-none text-black"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-black uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-neutral-50 border border-black/15 focus:border-black focus:ring-1 focus:ring-black outline-none text-black"
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-black uppercase tracking-wider mb-1">
                  Date
                </label>
                <input
                  required
                  name="date"
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  className="w-full px-3 py-2.5 text-xs rounded-xl bg-neutral-50 border border-black/15 focus:border-black outline-none text-black"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-black uppercase tracking-wider mb-1">
                  Time
                </label>
                <input
                  required
                  name="time"
                  type="time"
                  defaultValue="18:30"
                  className="w-full px-3 py-2.5 text-xs rounded-xl bg-neutral-50 border border-black/15 focus:border-black outline-none text-black"
                />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-3d-gold w-full !py-3.5 mt-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Confirm Instant Table Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ReserveModal;
