import { Star, CheckCircle, Quote, MessageSquare } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  highlight: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Rare to find a place in Punjab where both the specialty espresso and the aesthetic ambiance are this exceptional. The lighting in the evening feels like a high-end luxury lounge.",
    author: "Simranjit Singh",
    role: "Local Architect & Coffee Enthusiast",
    rating: 5,
    highlight: "Exceptional Ambiance & Roast",
    date: "Reviewed on Google",
  },
  {
    quote:
      "The Mango Cheesecake is genuinely world-class. Velvety, with the freshest fruit layer. Paired with their slow-steeped cold brew, it is now my weekend ritual in Firozpur.",
    author: "Dr. Prabhjot Kaur",
    role: "Regular Guest",
    rating: 5,
    highlight: "World-Class Mango Cheesecake",
    date: "Reviewed on Google",
  },
  {
    quote:
      "Easily the best cafe in Firozpur. The staff is polite, the Mexican chimichanga was crispy and piping hot, and the Wi-Fi speed made working here a joy. 10 out of 10.",
    author: "Rohan Varma",
    role: "Digital Nomad",
    rating: 5,
    highlight: "Great Wi-Fi & Gourmet Plates",
    date: "Reviewed on Google",
  },
];

export function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="eyebrow mx-auto">
          <MessageSquare className="w-3.5 h-3.5 text-black" />
          <span>Guest Stories</span>
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-light text-black">
          What People Are <span className="italic font-normal">Saying</span>
        </h2>

        {/* 3D Floating Score Badge */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/15 shadow-md">
            <span className="font-display text-3xl font-bold text-black leading-none">4.3</span>
            <div className="flex text-black gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black text-black" />
              ))}
            </div>
            <span className="text-xs text-neutral-600 font-medium border-l border-black/15 pl-3">
              Based on 50+ Verified Google Reviews
            </span>
          </div>
        </div>
      </div>

      {/* 3D Testimonial Cards */}
      <div className="reviews-grid">
        {TESTIMONIALS.map((t) => (
          <article key={t.author} className="review-3d-card group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-black gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-black bg-neutral-100 px-2 py-0.5 rounded-md border border-neutral-200">
                  {t.highlight}
                </span>
              </div>

              <blockquote className="font-display text-lg text-black leading-relaxed relative">
                <Quote className="w-6 h-6 text-black/10 absolute -top-3 -left-2 -z-10" />“{t.quote}”
              </blockquote>
            </div>

            <div className="pt-5 mt-6 border-t border-black/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-black flex items-center gap-1.5">
                  <span>{t.author}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-black" />
                </h4>
                <p className="text-xs text-neutral-500">{t.role}</p>
              </div>
              <span className="text-[10px] text-neutral-500 font-medium tracking-wider uppercase">
                {t.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
