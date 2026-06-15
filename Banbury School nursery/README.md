# Banbury School Day Nursery — Website

Static HTML/CSS website for Banbury School Day Nursery, Banbury, Oxfordshire.

Built by [Head-Start Web Development](https://www.head-startwebdevelopment.co.uk)

---

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `rooms.html` | Rooms & Staff |
| `curriculum.html` | Curriculum |
| `fees.html` | Sessions, Funding & Fees |
| `spaces.html` | Available Spaces |
| `parent-info.html` | Parent Information & FAQs |
| `policies.html` | Policies |
| `newsletter.html` | Newsletter |
| `contact.html` | Contact / Book a Visit |
| `404.html` | 404 Not Found |

---

## Tech stack

- Plain HTML5 and CSS3 — no frameworks, no build step
- CSS Custom Properties for design tokens (colours, spacing, radii)
- CSS Grid and Flexbox for layout
- Vanilla JS (`myscripts.js`) — mobile nav toggle and auto copyright year only
- Google Fonts — Nunito
- Web3Forms — contact form submissions

---

## Project structure

```
index.html
rooms.html
curriculum.html
fees.html
spaces.html
parent-info.html
policies.html
newsletter.html
contact.html
404.html
styles.css
myscripts.js
sitemap.xml          (to be added before launch)
robots.txt           (to be added before launch)
images/
documents/           (PDFs — prospectus, newsletters, registration form)
```

---

## Colours

| Variable | Hex | Use |
|---|---|---|
| `--color-navy` | `#2A528A` | Header, footer, hero, alternating sections |
| `--color-accent` | `#5D6EC7` | Icons, hover states, card placeholders |
| `--color-cta` | `#9F71DB` | Buttons and CTAs |
| `--color-section-a` | `#FFFFFF` | Alternating section backgrounds |
| `--color-section-b` | `#EEF2FA` | Subtle tint — fact cards, staff cards |
| `--color-gold` | `#E9D498` | Award star accents |
| `--color-text` | `#1A1A2E` | Body text and headings |
| `--color-text-light` | `#FFFFFF` | Text on dark backgrounds |

---

## Deployment

Hosted on AWS:
- S3 bucket with static website hosting enabled
- CloudFront distribution for HTTPS and CDN
- Domain DNS pointed to CloudFront

---

## Pre-launch checklist

- [ ] Add real staff photos to `images/`
- [ ] Add nursery photos for room sections
- [ ] Complete all page content
- [ ] Add `sitemap.xml`
- [ ] Add `robots.txt`
- [ ] Add GA4 `gtag.js` snippet to all pages
- [ ] Set up Google Search Console and verify ownership
- [ ] Submit sitemap in Search Console
- [ ] Test contact form submissions reach nursery inbox
- [ ] Validate HTML at validator.w3.org
- [ ] Test on mobile (375px), tablet (768px) and desktop
- [ ] Confirm all PDF links open correctly

---

## Contact

Banbury School Day Nursery  
Ruskin Road, Banbury, Oxfordshire, OX16 9HY  
01295 256400  
bsdnursery1989@gmail.com
