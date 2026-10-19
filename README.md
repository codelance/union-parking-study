# Union Church CLT — Huntersville Campus Traffic & Parking Study SPA

Interactive Single-Page Application (SPA) and civil/traffic engineering study for **Union Church CLT's Huntersville Campus** at **Ambassador Christian School** (`11901 Sam Furr Rd / 2520 Ambassador Christian Way, Huntersville, NC 28078`).

## Features Included in the SPA

1. **GIS-Accurate Interactive Campus Map (Loaded Immediately on Start):**
   - Traced directly from real OpenStreetMap / Mecklenburg County GIS satellite vectors (**North ↑**).
   - Displays the **62-vertex building footprint** (`69,537 sq ft` ground footprint / `80,081 gross sq ft`, `2,100-seat auditorium`), **Sam Furr Rd (NC-73)** 4-lane highway corridor, **Ambassador Christian Way** S-curve over the **Ramah Creek culvert bridge**, **Curved SE Portico Drop-Off Loop**, and all **3 paved parking sectors (`~450 stalls / 4.29 acres`)**.
   - **4 Interactive Operational Modes:**
     - `1. Arrival + Drop-Off (8:30 AM)`
     - `2. 9:45 & 11:45 AM Service Swap (8:30 ↔ 10:30 ↔ 12:30)`
     - `3. 1:45 PM Final Egress Flush`
     - `4. +400 Stall Upland Expansion Plan (Zones E1, E2, E3)`
2. **Interactive Surge & Capacity Modeler:**
   - Live calculators for peak service attendance (`400–2,100` people), average vehicle occupancy, Dream Team parking policy, and the `+400 stall` expansion toggle.
3. **Complete Supporting Documentation Tabs + Full Print View:**
   - **Chick-fil-A Queuing ($M/M/c$) & 3-Service Flow:** Always-open West S-Curve escape lane, NE→SW passenger-side Portico Drop-Off with bypass lane, and Ping-Pong (`Zone B ↔ Zone C`) turnaround alternation.
   - **Parcel GIS & +400 Stall Expansion Study:** Exact square footage and acreage analysis explaining how to expand from `~450` to `~850` stalls across **Zone E1 (+175)**, **Zone E2 (+145)**, and **Zone E3 (+80)**.
   - **Sunday Operations Playbook:** Master minute-by-minute timeline (`7:15 AM – 2:05 PM`), volunteer duty cards (`P1`, `V1–V4`), and equipment checklist. Also available in standalone markdown at [`SUNDAY_PARKING_PLAYBOOK.md`](./SUNDAY_PARKING_PLAYBOOK.md).

## Deploying to Cloudflare Workers

This repository is pre-configured for **Cloudflare Workers Static Assets** via [`wrangler.jsonc`](./wrangler.jsonc):

- **Build Command:** `npm run build` (or leave blank for direct static asset deploy)
- **Deploy Command:** `npx wrangler deploy`
- **Static Assets Directory:** `./public` (`not_found_handling: "single-page-application"`)
