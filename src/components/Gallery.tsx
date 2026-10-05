import cafeHeroImg from "@/assets/cafe-hero.png";

const MOMENTS = [
  { label: "Golden hour", position: "center 48%" },
  { label: "At the counter", position: "75% 45%" },
  { label: "A quiet table", position: "18% 70%" },
  { label: "Evening glow", position: "center 30%" },
  { label: "Made to gather", position: "88% 62%" },
];

export function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-heading-wrap">
        <span className="eyebrow">Inside Kaffi</span>
        <h2 className="gallery-heading">Scenes from our space</h2>
      </div>
      <div className="gallery-grid">
        {MOMENTS.map((moment, index) => (
          <figure className={`gallery-tile gallery-tile-${index + 1}`} key={moment.label}>
            <img src={cafeHeroImg} alt={moment.label} style={{ objectPosition: moment.position }} />
            <figcaption>{moment.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;