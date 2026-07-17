# MaliWorks — Claude Code Knowledge Base

This file is the permanent reference for Claude Code sessions working on the MaliWorks website. Read this before making any changes. Keep it updated after significant work.

---

## Project Overview

- **Site**: Official landing page for MaliWorks, a neighborhood lawn care and outdoor services business.
- **Owner**: Malachi ("Mali"), a hardworking young entrepreneur.
- **Goal**: The site should feel professional, trustworthy, modern, and friendly — highlighting Mali's work ethic and personal brand without leaning into gimmicks or mentioning his exact age.
- **Audience**: Homeowners in the Hunningdon Lakes neighborhood looking for reliable, affordable outdoor help.
- **Live URL**: https://maliworks.com
- **Stack**: Next.js 15.3.5 · React 19 · TypeScript · Tailwind CSS v3 · lucide-react

---

## Repository & Deployment

- **GitHub**: https://github.com/miamislim/maliworks.git
- **Branch**: `main`
- **Deployment**: Vercel — auto-deploys on every push to `main`
- **Always** run `npm run build` before committing. Fix all type and build errors before pushing.
- **npm installs**: Use `--legacy-peer-deps --cache /tmp/npm-cache-maliworks` due to Radix UI / React 19 peer dep conflicts and a local npm cache permission issue.

```bash
npm install --legacy-peer-deps --cache /tmp/npm-cache-maliworks
npm run build
git add <files>
git commit -m "your message"
git push origin main
```

---

## Branding

### Colors (tailwind.config.ts)
| Token | Hex | Usage |
|---|---|---|
| `brand.green` | `#01F010` | Primary accent, CTAs, icons, gradient text |
| `brand.lime` | `#88BD35` | Gradient endpoint (green → lime) |
| `brand.dark` | `#0D0D0D` | Page background |
| `brand.charcoal` | `#111111` | Alternate section background |
| `brand.surface` | `#1A1A1A` | Form inputs, cards |
| `brand.card` | `#1E1E1E` | Card backgrounds |
| `brand.border` | `#2A2A2A` | Borders throughout |

### Typography
- Font: System default (Next.js default sans-serif stack)
- Headings: `font-bold`, tight tracking (`tracking-tight`)
- Body: `text-gray-400` on dark backgrounds
- Accent labels: `text-xs font-bold tracking-widest text-brand-green uppercase`
- Gradient text: `.gradient-text` utility class (green → lime, background-clip)

### Design Philosophy
- **Reference aesthetic**: Apple, Linear, Vercel, Stripe — clean, dark, premium
- **Glassmorphism**: `.glass` utility — `rgba(255,255,255,0.04)` background + `backdrop-filter: blur(12px)` + subtle border
- **No neon**: Glows and accents are low-opacity and heavily blurred. Never harsh or bright.
- **Whitespace-first**: Generous padding, sections breathe
- **Animations**: Scroll-reveal via `useScrollReveal` hook + `animate-on-scroll` / `.visible` CSS classes. Stagger via `.stagger > *:nth-child(n)`. Hero uses `animate-fade-up` with JS delay.
- **No badges on age**: Never reference Mali's exact age in UI copy.

### CSS Utilities (globals.css)
- `.glass` — glassmorphism card base
- `.gradient-text` — green-to-lime gradient clip
- `.animate-on-scroll` — starts `opacity:0; transform:translateY(20px)`, transitions to visible
- `.animate-on-scroll.visible` — `opacity:1; transform:translateY(0)`
- `.stagger > *:nth-child(n)` — staggered `transition-delay`
- `.section-divider` — thin horizontal rule between sections

---

## Site Structure (app/page.tsx)

```
<Navbar />
<Hero />
[section-divider]
<Services />
<About />
[section-divider]
{/* <Gallery /> — hidden until before/after photos are ready */}
<ContactForm />
<Reviews />
<Payment />
<Footer />
```

---

## Components

### Navbar (`app/components/Navbar.tsx`)
- Links: Services · About · Reviews · Request Quote
- Phone: `(757) 777-6058` → `tel:+17577776058`
- Sticky, glassmorphism background on scroll

### Hero (`app/components/Hero.tsx`)
- Headline: "Hi, I'm Mali." + "Reliable Help for Your Home & Yard."
- Subtext: personal voice, hardworking entrepreneur framing
- CTAs: "Get a Free Quote" (→ #contact) + phone number button
- Trust strip: Free Quotes · No Contracts · Satisfaction Guaranteed · 📍 Hunningdon Lakes
- Service area line: "Proudly serving the Hunningdon Lakes community with dependable, affordable lawn care and outdoor services."
- Photo: `public/images/mali-photo.png` (blazer, professional)
- Photo treatment: `rounded-3xl overflow-hidden` + bottom dark fade gradient + branded green radial glow behind (sibling div, not clipped) + subtle drop shadow
- Glow: `radial-gradient(ellipse, rgba(1,240,16,0.18)→transparent)` at `blur(48px)`

### Services (`app/components/Services.tsx`)
- 8 service cards in a responsive grid (`sm:2 lg:3 xl:4` columns)
- Plus one overflow CTA card ("Need something else?")
- Cards: `.glass border border-brand-border rounded-2xl p-6` with green icon, title, description
- Optional `badge` field renders a small pill in the top-right corner
- Icons from `lucide-react`

**Current services:**
| Title | Icon | Badge |
|---|---|---|
| Lawn Mowing | `Scissors` | — |
| Edging | `Crop` | — |
| Weed Eating | `Wind` | — |
| Yard Cleanup | `Trash2` | — |
| Leaf Removal | `Leaf` | — |
| Garage Cleanup | `Package` | — |
| Odd Jobs | `Wrench` | — |
| Trash Can Pressure Washing | `Droplets` | "Popular Add-On Service" |

### About (`app/components/About.tsx`)
- Single photo: `public/images/mali-photo-2.png` (black t-shirt, casual)
- Photo treatment: `rounded-3xl overflow-hidden` + branded green radial glow behind (sibling, not clipped) + subtle drop shadow
- Glow: `radial-gradient(ellipse, rgba(1,240,16,0.15)→transparent)` at `blur(52px)`
- Floating name tag: "Malachi / Founder, MaliWorks" at `-bottom-5 -right-5`
- Body copy: 2 paragraphs on Mali's work ethic + service area line: "Currently serving homeowners throughout Hunningdon Lakes."
- 4 quality cards (2-col grid): Shows up on time · Quality-focused · Respectful · Community-driven ("Serving Hunningdon Lakes.")

### ContactForm (`app/components/ContactForm.tsx`)
- `"use client"` — scroll-reveal, controlled state
- **Formspree endpoint**: `https://formspree.io/f/mgoganao`
- Service area note below subtitle: "Currently serving homeowners throughout Hunningdon Lakes."
- Fields: Full Name · Phone · Email · Service Address · Service Needed (dropdown) · Description · Preferred Date · Preferred Time (toggle buttons) · Upload Photos
- Dropdown services: Lawn Mowing · Edging · Weed Eating · Yard Cleanup · Leaf Removal · **Trash Can Pressure Washing** · Garage Cleanup · Odd Jobs · Multiple Services · Other
- On success: green confirmation card with "Thanks! Your quote request has been sent. Mali will contact you as soon as possible." + reset form
- On error: red inline alert with phone link `(757) 777-6058`

### Reviews (`app/components/Reviews.tsx`)
- 3 review cards: Sarah M. · James T. · Linda R.
- Stars, quote, name, tag line

### Payment (`app/components/Payment.tsx`)
- Section title: "Support MaliWorks"
- Single glassmorphism card: "Pay or Support Mali"
- Cash App button → `https://cash.app/$makingcashhh1` (new tab, `rel="noopener noreferrer"`)
- Inline Cash App SVG icon + `ExternalLink` from lucide-react
- Supporting copy about helping Mali build his business

### Footer (`app/components/Footer.tsx`)
- Contact: `(757) 777-6058` · `matchesson@gmail.com` · `maliworks.com`
- CTA band: Phone button + Quote button side by side

### Gallery (`app/components/Gallery.tsx`)
- **Hidden** — code preserved, not rendered in page.tsx
- Restore by uncommenting `import Gallery` and `<Gallery />` in page.tsx
- Requires before/after photos added to `public/images/gallery/`

---

## Public Images

| File | Usage |
|---|---|
| `public/images/mali-photo.png` | Hero section (blazer, professional) |
| `public/images/mali-photo-2.png` | About section (black t-shirt, casual) |
| `public/images/maliworks-logo.png` | Logo (white + green on transparent, 1394×734) |
| `public/images/lawn.jpg` | Background lawn photo |

---

## Contact & Business Info

| Field | Value |
|---|---|
| Phone | `(757) 777-6058` / `tel:+17577776058` |
| Email | `matchesson@gmail.com` |
| Website | `https://maliworks.com` |
| Cash App | `https://cash.app/$makingcashhh1` |
| Service Area | Hunningdon Lakes neighborhood |

This info appears in: Navbar · Hero · ContactForm · Footer · layout.tsx metadata · JSON-LD structured data.

---

## SEO & Metadata (app/layout.tsx)

- Title: "MaliWorks | Reliable Lawn Care & Yard Services"
- `metadataBase`: `https://maliworks.com`
- OG description mentions phone number
- LocalBusiness JSON-LD structured data with full contact info
- `public/robots.txt` — allows all crawlers, points to sitemap
- `public/sitemap.xml` — lists `https://maliworks.com/`

---

## Design Rules for Future Sessions

1. **Never redesign** any section unless the user explicitly requests it.
2. **Never change** navigation links, typography scale, or section spacing unless asked.
3. **Match exactly**: use the same `glass`, `border-brand-border`, `rounded-2xl/3xl`, `p-6`, hover transitions, and stagger animations as existing cards.
4. **No neon**: Keep green accents at low opacity (≤20% for glows). Always blur heavily.
5. **Photo glows**: Use sibling divs (never children of `overflow-hidden` containers). Use `radial-gradient` with `rgba(1,240,16,…)` at ≤18% center opacity, `blur(48px+)`.
6. **No age mentions**: Never state Mali's exact age in any UI copy.
7. **Service area**: Only claim Hunningdon Lakes. Do not imply broader coverage.
8. **Comments**: Add a comment only when the WHY is non-obvious. No doc blocks.
9. **Build before push**: Always run `npm run build`, fix all errors, then commit and push.

---

## Recent Changes (reverse chronological)

- **Portrait glow enhancement** — Added soft branded radial gradient glow behind Hero and About photos. Sibling div pattern to avoid overflow-hidden clipping. Drop shadow added to both photo containers.
- **Hunningdon Lakes service area** — Added neighborhood messaging to Hero (trust strip + service area line), About (body copy + "Community-driven" card), and ContactForm (subtitle note).
- **Trash Can Pressure Washing** — New service card (8th) with `Droplets` icon and "Popular Add-On Service" badge. Added to ContactForm dropdown between Leaf Removal and Garage Cleanup. Badge system added to Services component (optional `badge` field).
- **Payment section** — New `<Payment />` component above footer. Cash App button with inline SVG icon. `https://cash.app/$makingcashhh1`.
- **Next.js upgrade** — 15.1.0 → 15.3.5 (security fix required by Vercel). `eslint-config-next` matched.
- **Formspree wiring** — Real fetch POST to `https://formspree.io/f/mgoganao`. Form reset via `useRef`. Success/error UI with live phone link.
- **Photo glow removal (earlier pass)** — Removed all neon glows, radial backgrounds, and blur effects from Hero and About. Later re-added as a subtle, premium version (see portrait glow enhancement above).
- **Single photo About** — Reduced from two-photo layout to single `mali-photo-2.png` with floating name tag.
- **Real contact info** — Replaced all placeholders with production data (phone, email, website).
- **Revision pass** — Removed WhyChoose and FAQ sections. Gallery hidden. Reviews reduced to 3. Nav simplified.

---

## Future Ideas

- [ ] Restore Gallery section with real before/after photos (code is ready in `Gallery.tsx`)
- [ ] Add a Google Reviews embed or pull live review count
- [ ] Add a "Book a Time" integration (Calendly or similar) to the contact form
- [ ] Add a dedicated Trash Can Pressure Washing landing section or promotional callout
- [ ] Add social media links (Instagram, TikTok) to Footer once accounts are active
- [ ] Add a seasonal promotions banner (e.g. spring cleanup, fall leaf removal)
- [ ] Set up a custom email at maliworks.com for a more professional contact address
- [ ] Add a favicon and OG image for rich social sharing previews
- [ ] Consider a testimonials carousel once more reviews accumulate
- [ ] Add Google Maps embed or service area map showing Hunningdon Lakes coverage
