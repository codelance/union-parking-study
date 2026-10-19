# Union Church CLT — Huntersville Campus Traffic, Parking & Expansion Study (Vue 3 + Quasar SPA)

Interactive Single-Page Application built with **Vue 3**, **Quasar Framework**, and **Vite**, ready for **Cloudflare Workers** deployment.

**Campus Location:** `11901 Sam Furr Rd (NC-73) / 2520 Ambassador Christian Way, Huntersville, NC 28078`  
**Sunday Service Times:** `8:30 AM` • `10:30 AM` • `12:30 PM`

---

## Features & Architecture

- **Framework:** Vue 3 (`<script setup>`) + Quasar Framework (`QLayout`, `QHeader`, `QCard`, `QSlider`, `QToggle`, `QLinearProgress`, `QBanner`, `QMarkupTable`, `QTimeline`) + Vite
- **Clergy & Leadership Friendly UX:**
  - **60-Second Executive Briefing** (`src/components/ExecutiveBriefing.vue`): Plain-English summary of the 4 core operational & expansion solutions.
  - **Interactive GIS Campus Map & Sunday Calculator** (`src/components/CampusMapSimulator.vue`): Real OpenStreetMap satellite-traced campus vectors, 4 guided Sunday views (`Arrival & Drop-Off`, `9:45 & 11:45 Swap`, `1:45 PM Final Dismissal`, `+400 New Spaces`), clickable station badges (`P1`, `V1–V4`, `E1–E3`), and 1-click attendance scenario presets (`800`, `1,000`, `1,350`, `1,850+`).
  - **Chick-fil-A Drop-Off & 3-Service Flow** (`src/components/TrafficEngineeringSection.vue`): Explains the Always-Open Outbound Escape Lane, Passenger-Side Canopy Drop-Off (`NE → SW`), and 6 Chick-fil-A / Disney parking best practices.
  - **Total Parcel GIS & +400 Space Expansion** (`src/components/ExpansionStudySection.vue`): Breakdown of the `~22–28 acre` parcel, existing `4.29 acres` (`~450` spaces), and `3.18 acres` of upland infill (`Zone E1: +175`, `Zone E2: +145`, `Zone E3: +80` = `850` total spaces).
  - **Sunday Morning Playbook & Team Schedule** (`src/components/SundayPlaybookSection.vue`): Quasar `QTimeline` for `8:30 AM`, `10:30 AM`, and `12:30 PM` services plus printable Police & Dream Team station cards.
  - **Light / Dark Mode Toggle & Print View:** Built-in Quasar `$q.dark.toggle()` button in the top toolbar plus 1-click PDF printing.

---

## Local Development & Cloudflare Workers Deployment

```bash
# Install dependencies
npm install

# Start Vite + Quasar local dev server
npm run dev

# Build production SPA into ./dist
npm run build

# Deploy to Cloudflare Workers (automatically runs npm run build via wrangler.jsonc)
npm run deploy
```
