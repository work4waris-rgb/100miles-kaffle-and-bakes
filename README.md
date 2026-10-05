# Kaffi & Bakes Hero

Build ONLY the hero/landing section for "KAFFI & BAKES" cafe website.

This is a single full-screen hero component, premium and cinematic.

---

🖼️ BACKGROUND IMAGE

Use the uploaded cafe interior image as the hero background.

The image shows: a wide panoramic cafe interior with warm gold LED

ceiling strips, tufted cream sofas, patterned mosaic floor tiles,

dark slatted ceiling, terracotta wall art, and deep perspective depth.

Apply this layered treatment to the image:

- Layer 1 (bottom): the photo at full bleed, cover, center-anchored

- Layer 2: a dark gradient overlay —

  left side: rgba(0,0,0,0.72)

  center: rgba(0,0,0,0.45)

  right: rgba(0,0,0,0.30)

  (creates a vignette that keeps left side readable for text)

- Layer 3: a very subtle warm amber tint — rgba(180, 100, 20, 0.08)

  blended over the whole image to pull out the gold tones

---

🧱 3D DEPTH EFFECT (CSS + JS)

Add a parallax mouse-tracking effect:

- On mouse move across the page, the background image shifts slightly

  in the OPPOSITE direction (max ±18px X and ±10px Y)

- Text content shifts slightly in the SAME direction as mouse

  (max ±6px X and ±4px Y) — creating a 3D depth illusion

- Use smooth CSS transition: transform 0.12s ease-out

- On mobile: disable mouse tracking, use subtle CSS keyframe float

  instead (background drifts 8px up/down over 8s, infinite)

---

✍️ TYPOGRAPHY & CONTENT

Position: centered, vertically centered, slight left-of-center lean

Top badge (above headline):

- Small pill: "✦ Now Open in Firozpur"

- Style: semi-transparent white border, blur backdrop,

  tiny white text, 12px, rounded-full

Main headline (two lines):

Line 1: "KAFFI"

Line 2: "& BAKES"

- Font: Cormorant Garamond, 200 weight (ultra thin),

  11vw font-size on desktop

- Color: #FFFFFF

- Letter-spacing: 0.25em (very wide)

- Line height: 0.9 (tight stacking)

- Each line animates in separately on load:

  fade up from 30px below, staggered 0.2s delay,

  duration 1.1s, ease-out

Tagline (below headline):

"Crafted with care. Served with soul."

- Font: Inter, 300 weight, 15px

- Color: rgba(255,255,255,0.70)

- Letter-spacing: 0.18em

- Fades in 0.5s after headline

CTA buttons (row, centered, margin-top 2.5rem):

Button 1 — "Explore Menu"

    - Background: rgba(255,255,255,0.12)

    - Border: 1px solid rgba(255,255,255,0.35)

    - Backdrop-filter: blur(12px)

    - Text: white, 13px, Inter, letter-spacing 0.12em

    - Hover: background rgba(255,255,255,0.22),

      slight scale(1.03), transition 0.25s

    - Padding: 14px 32px, border-radius: 2px (almost square)

Button 2 — "Reserve a Table"

    - Same glass style but with a warm amber border:

      1px solid rgba(210,140,50,0.6)

    - Text color: rgba(210,165,90,1) — warm gold

    - Hover: border fully opaque amber, text brighter gold

---

📍 BOTTOM STRIP (fixed to bottom of hero)

A thin frosted strip spanning full width, 52px tall:

- Background: rgba(0,0,0,0.45), backdrop-filter: blur(16px)

- Border-top: 1px solid rgba(255,255,255,0.08)

- Three info pills evenly spaced:

  "📍 Malwal Road, Firozpur"

  "🕙 Open · Closes 10:30 PM"

  "⭐ 4.3 · 50+ Reviews"

- Font: Inter 12px, rgba(255,255,255,0.65)

- On mobile: scrolls horizontally, no wrap

---

🔻 SCROLL INDICATOR

Bottom-center, just above the info strip:

- A thin vertical line, 40px tall, rgba(255,255,255,0.3)

- Below it: small text "scroll" in Inter 10px,

  letter-spacing 0.2em, rgba(255,255,255,0.4)

- The line pulses with a subtle opacity animation (0.3 → 0.8 → 0.3)

  over 2s infinite — draws the eye downward

---

📐 SPECS

- Full viewport height: height: 100vh, min-height: 600px

- No navbar inside this component

  (assume navbar floats above it separately)

- Fully responsive:

  - Desktop: all above specs

  - Tablet (768px): headline drops to 14vw, buttons stack

  - Mobile (480px): headline 18vw, parallax disabled,

    bottom strip scrolls horizontally

---

🚫 DO NOT

- No card grids, no section wrappers with padding

- No gradients that wash out the photo completely

- No white background anywhere

- No rounded corners on buttons (keep them sharp, 2px max radius)

- No default hero templates — this must feel bespoke and cinematic

- No text shadows heavier than 0 2px 20px rgba(0,0,0,0.5)

---

Fonts: Google Fonts — Cormorant Garamond (200, 400) + Inter (300, 400).

The overall feel: a luxury hotel landing page meets a premium

specialty cafe — dark, warm, editorial, cinematic.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kaffi-glow-hero.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3b3253cd-7227-4492-b1f2-ab8ad1ff4380).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
