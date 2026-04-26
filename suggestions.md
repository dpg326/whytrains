# WhyTrains — Placeholder Suggestions & Source Queries

Each section below lists every remaining `[PLACEHOLDER]` in the codebase, with multiple text options and search queries to find supporting sources.

---

## Section 01: Hero (`HeroSection.tsx`)

### `[MAIN MESSAGE HEADLINE]`
- **Option A:** "America Deserves Better Rail"
- **Option B:** "The Case for Trains"
- **Option C:** "Move People, Not Carbon"
- **Option D:** "Rail Is the Answer"

### `[SUPPORTING STATEMENT]`
- **Option A:** "Rail produces 2% of U.S. transport emissions while roads produce over 80%. It's time to rethink how we move."
- **Option B:** "A data-driven look at why investing in rail is the smartest infrastructure decision we can make."
- **Option C:** "Trains are cleaner, cheaper to operate, and more efficient than almost every alternative. Here's the proof."

### `[INSERT HERO VISUAL CONTAINER]`
- **Option A:** Animated U.S. map showing existing vs. proposed high-speed rail corridors
- **Option B:** Side-by-side icon comparison: 1 train vs. equivalent cars/trucks it replaces
- **Option C:** Simple animated counter showing tons of CO2 saved per rail mile vs. highway mile
- **Search queries:**
  - `"proposed US high speed rail map corridors"`
  - `"Amtrak ridership map data visualization"`
  - `"US rail network map open data"`

---

## Section 02: The Problem (`ProblemSection.tsx`)

> Paragraphs and callout boxes are already filled with EPA data. One visual placeholder remains.

### `[INSERT VISUAL COMPARISON OR DIAGRAM]`
- **Option A:** Stacked area chart showing U.S. transport emissions growth by mode (1990–2022)
- **Option B:** Proportional icon grid — 100 car icons, 2 highlighted as rail's share
- **Option C:** Sankey diagram: total U.S. GHG → transportation → by mode breakdown
- **Search queries:**
  - `"US transportation emissions by mode over time chart"`
  - `"EPA transportation sector emissions data download"`
  - `"vehicle miles traveled growth chart US 1990 2022"`

---

## Section 03: Carbon & Sustainability (`CarbonComparisonSection.tsx`)

> Donut chart and metrics are filled with EPA data. Bar chart still has placeholders.

### `[CARBON FOOTPRINT CHART: TRAINS VS CARS]` (bar chart title)
- **Option A:** "CO₂ Emissions per Passenger-Mile by Mode"
- **Option B:** "Grams of CO₂ per Passenger-Kilometer"
- **Option C:** "Carbon Intensity: How Each Mode Compares"

### `[INSERT CHART DESCRIPTION]`
- **Option A:** "Average lifecycle CO₂ emissions per passenger-mile across U.S. transportation modes."
- **Option B:** "Based on national average load factors and fleet fuel economy, 2022."

### Bar labels `[TRAIN]`, `[CAR]`, `[BUS]`, `[PLANE]` and axis labels
- Replace with: "Rail", "Passenger Car", "Bus", "Domestic Flight"
- Y-axis: "grams CO₂ per passenger-mile"
- X-axis: "Transportation Mode"
- **Search queries:**
  - `"CO2 emissions per passenger mile by transportation mode US"`
  - `"carbon intensity train vs car vs plane per passenger km"`
  - `"IEA transport CO2 emissions per passenger kilometer comparison"`
  - `"EPA greenhouse gas equivalencies calculator transportation"`

---

## Section 04: Diesel vs Electrified (`DieselVsElectrifiedSection.tsx`)

> Paragraphs and metrics are filled with EESI/IEA data. Chart placeholders remain.

### `[VISUAL COMPARISON: DIESEL VS ELECTRIFIED PERFORMANCE]`
- **Option A:** "Energy Efficiency Over Time: Diesel vs. Electric Rail Fleets"
- **Option B:** "Operating Cost per Train-Mile: Diesel vs. Electrified (Projected)"
- **Option C:** "Global Rail Electrification Progress by Region (2010–2025)"

### `[INSERT CHART DESCRIPTION AND TIME RANGE]`
- **Option A:** "Modeled comparison of operating costs and emissions intensity, 2010–2030."
- **Option B:** "Track electrification percentage by country/region over the past decade."

### `[PERFORMANCE METRIC]` (Y-axis) / `[TIME PERIOD]` (X-axis)
- Y-axis options: "Cost per train-km (USD)" or "% of track electrified" or "g CO₂/train-km"
- X-axis: "2010–2025" or "Year"
- **Search queries:**
  - `"rail electrification percentage by country over time"`
  - `"diesel vs electric train operating cost comparison data"`
  - `"India rail electrification progress statistics 2015 2024"`
  - `"European rail electrification percentage by country"`
  - `"Solutionary Rail electric vs diesel cost analysis"`

---

## Section 05: Travel Time (`TravelTimeVisualization.tsx`)

### Route names `[ROUTE NAME: CITY A → CITY B]` etc.
- **Option A (Northeast Corridor):**
  - "New York → Washington, D.C."
  - "Boston → New York"
  - "Philadelphia → Pittsburgh"
- **Option B (Proposed HSR):**
  - "Los Angeles → San Francisco"
  - "Dallas → Houston"
  - "Chicago → Detroit"
- **Option C (Mix of existing + proposed):**
  - "New York → Washington, D.C." (existing Acela)
  - "Los Angeles → San Francisco" (California HSR)
  - "Chicago → St. Louis" (proposed upgrade)

### `[INSERT TRAVEL TIME ESTIMATE]` (per bar)
- Need real door-to-door times for train, car, and plane+transit for each route
- **Search queries:**
  - `"Acela travel time New York Washington DC vs driving vs flying"`
  - `"California high speed rail projected travel time LA San Francisco"`
  - `"door to door travel time comparison train car plane US cities"`
  - `"Amtrak travel time vs driving popular routes"`
  - `"high speed rail travel time comparison US corridors"`

### `[INSERT SECTION OVERVIEW...]`
- **Option A:** "Comparing total door-to-door travel times across train, car, and air for key U.S. corridors — including check-in, security, and transit to/from airports."
- **Option B:** "When you factor in the full journey — not just time in the air — trains are competitive or faster on routes under 500 miles."

### `[INSERT DATA SOURCE ATTRIBUTION]`
- **Option A:** "Travel times based on published schedules and average drive times via Google Maps"
- **Option B:** "Sources: Amtrak, BTS, Google Maps estimated drive times"

### `[TRAVEL TIME VISUALIZATION]` / Route map
- **Option A:** Simplified corridor map with highlighted routes
- **Option B:** Isochrone map showing reachable cities within 3 hours by rail
- **Search queries:**
  - `"US rail corridor map Amtrak routes shapefile"`
  - `"isochrone map train travel time US cities"`

---

## Section 06: Funding & Cost (`FundingImpactSection.tsx`)

### `[FUNDING MODEL DESCRIPTION...]`
- **Option A:** "U.S. rail receives a fraction of the federal funding allocated to highways and aviation. This imbalance shapes every outcome — from ticket prices to service frequency."
- **Option B:** "While highway spending exceeds $50 billion annually, Amtrak's federal subsidy has historically been under $2 billion — a ratio that directly limits rail's competitiveness."
- **Search queries:**
  - `"US federal transportation spending highways vs rail comparison"`
  - `"Amtrak federal subsidy amount vs highway spending"`
  - `"federal transportation funding breakdown by mode US"`
  - `"Infrastructure Investment and Jobs Act rail funding allocation"`

### Before/After cards: `[INSERT TICKET PRICE RANGE]`, `[INSERT RIDERSHIP LEVEL]`, `[INSERT COVERAGE AREA]`
- Before: "$49–$300 (Acela, NE Corridor)", "32.8M annual riders (Amtrak FY2023)", "500+ stations, 21,400 route miles"
- After: "$15–$80 (subsidized model)", "Projected 50–80M annual riders", "Expanded to underserved corridors"
- **Search queries:**
  - `"Amtrak ridership statistics 2023 annual report"`
  - `"Amtrak ticket price range Acela regional"`
  - `"European rail subsidy model ridership impact"`
  - `"effect of rail subsidies on ridership studies"`

### `[COST COMPARISON BEFORE/AFTER SUBSIDY]` (chart title)
- **Option A:** "Per-Passenger Cost by Funding Scenario"
- **Option B:** "Public Cost per Passenger-Mile: Rail vs. Highway"

### `[INSERT CHART DESCRIPTION AND METHODOLOGY]`
- **Option A:** "Estimated cost per passenger-trip under current funding, with increased subsidy, and with full European-style public investment."
- **Option B:** "Comparison of direct + indirect public cost per passenger-mile across modes."

### Chart axis labels
- Y-axis: "Cost per passenger-trip (USD)" or "Public cost per passenger-mile"
- X-axis: "Current Funding" / "Moderate Subsidy" / "Full Public Investment"
- **Search queries:**
  - `"cost per passenger mile Amtrak vs highway vs aviation subsidy"`
  - `"public subsidy per passenger mile by transportation mode US"`
  - `"true cost of driving including road maintenance externalities"`

### `[INSERT POLICY IMPACT EXPLANATION OR EXPERT QUOTE]`
- **Option A:** "Every dollar invested in public transit returns approximately five dollars in economic benefits." — American Public Transportation Association
- **Option B:** "Countries that invest in rail see lower transport emissions, higher productivity, and more equitable access to opportunity."
- **Option C:** "The United States spends 6x more per capita on roads than on rail, yet rail moves people at a fraction of the carbon cost."
- **Search queries:**
  - `"economic return on public transit investment APTA"`
  - `"rail investment economic benefit quote expert"`
  - `"US rail underinvestment compared to Europe expert opinion"`

### `[ATTRIBUTION PLACEHOLDER]`
- Match to whichever quote is chosen above (e.g., "American Public Transportation Association" or "Congressional Budget Office, 2021")

---

## Section 07: Community & Productivity (`CommunityProductivitySection.tsx`)

### `[HUB-CENTERED COMMUNITY DESCRIPTION]`
- **Option A:** "How Transit Stations Reshape Neighborhoods"
- **Option B:** "Station-Adjacent Development and Community Growth"
- **Option C:** "The Ripple Effect of a Rail Hub"

### Transit hub descriptions (two paragraphs)
- **Paragraph 1 options:**
  - "Transit-oriented development near rail stations creates walkable, mixed-use neighborhoods that reduce car dependency and increase quality of life."
  - "Rail hubs concentrate housing, retail, and services within walking distance, naturally reducing VMT and creating vibrant community centers."
- **Paragraph 2 options:**
  - "Studies show property values within half a mile of rail stations increase 10–25%, and local businesses see measurable foot traffic gains."
  - "Each new transit station is estimated to support 1,000–4,000 permanent jobs within its surrounding quarter-mile radius."
- **Search queries:**
  - `"transit oriented development economic impact studies"`
  - `"property value increase near rail stations research"`
  - `"jobs created per transit station US data"`
  - `"TOD walkability mixed use neighborhood rail"`

### Metrics: `[XX%]`, `[X.Xk]`, `[$XXM]`
- **Walkability:** "10–25%" — property value premium near stations
- **Jobs:** "1–4k" — jobs created per station (direct + indirect)
- **Property impact:** "$100M+" — average property value uplift per station area
- **Search queries:**
  - `"property value premium near rail transit stations percentage"`
  - `"economic impact per transit station jobs created"`
  - `"transit oriented development property value increase dollar amount"`

### `[X.X hrs]` and `[XX%]` (Productivity stats)
- **Commute time:** "4.5 hrs" — average weekly commute time recoverable by switching to rail (can work on train)
- **Remote work:** "23%" — higher remote work adoption near rail corridors
- **Search queries:**
  - `"average US commute time per week hours"`
  - `"productive time on train vs car commute study"`
  - `"remote work adoption rate near transit rail corridors"`
  - `"train commuters productivity work during commute survey"`

### `[REMOTE WORK PRODUCTIVITY IMPACT]`
- **Option A:** "Rail Commuters Recover Productive Hours"
- **Option B:** "Working While Moving: The Rail Advantage"

### Productivity description paragraph
- **Option A:** "Rail commuters can use travel time productively — reading, working, or resting — unlike drivers. This effectively adds hours back to each week, reducing burnout and improving output."
- **Option B:** "Reliable, frequent rail service enables hybrid work patterns where commuters choose when and how often to travel, reducing stress while maintaining team connection."
- **Search queries:**
  - `"train commuters productivity vs car commuters study"`
  - `"rail commute productive time use survey UK Europe"`
  - `"benefits of train commute work life balance research"`

---

## Section 08: Systems-Level Vision (`SystemsVisionSection.tsx`)

### Hub labels `[HUB A]` through `[HUB E]`, `[CENTER]`
- **Option A (US hubs):** "Chicago", "New York", "Los Angeles", "Atlanta", "Dallas", "National Network"
- **Option B (Abstract):** "Regional Hub", "Metro Core", "Suburban Node", "Freight Link", "Airport Connector", "Central Exchange"
- **Option C (Modal):** "High-Speed Rail", "Commuter Rail", "Bus Rapid Transit", "Bike Share", "Airport", "Intermodal Hub"

### `[INTEGRATED SYSTEM DESCRIPTION...]`
- **Option A:** "Rail doesn't exist in isolation. A modern transportation system connects high-speed rail, commuter lines, bus networks, cycling infrastructure, and airports into a seamless multimodal network."
- **Option B:** "The strongest rail systems worldwide work because they connect to everything else — buses, bikes, ride-shares, and airports — making the entire network greater than the sum of its parts."
- **Search queries:**
  - `"multimodal transportation network integration rail bus bike"`
  - `"intermodal transit hub design best practices"`
  - `"European integrated public transport network case study"`

### Three pillars: titles + descriptions
- **Pillar 1 — "First/Last Mile"**
  - "Connecting rail stations to surrounding communities via bike share, local bus, and pedestrian infrastructure so every journey is seamless from door to door."
  - Search: `"first last mile transit connection solutions research"`

- **Pillar 2 — "Freight & Passenger Synergy"**
  - "Shared rail corridors that move both people and goods efficiently, reducing truck traffic on highways while maintaining supply chain reliability."
  - Search: `"shared rail corridor freight passenger synergy benefits"`

- **Pillar 3 — "Renewable Energy Integration"**
  - "Electrified rail powered by renewable sources, with transmission lines along rail rights-of-way creating a distributed clean energy backbone."
  - Search: `"Solutionary Rail renewable energy transmission rail corridor"`
  - Search: `"electrified rail renewable energy grid integration"`

---

## Section 09: Call to Action (`CallToActionSection.tsx`)

### `[CALL TO ACTION TEXT]`
- **Option A:** "Demand Better Rail"
- **Option B:** "It Starts With a Track"
- **Option C:** "Build the Network America Needs"
- **Option D:** "Your Voice Shapes the Next Mile"

### `[INSERT SUPPORTING CTA DESCRIPTION...]`
- **Option A:** "Contact your representatives. Support rail-first infrastructure policy. Share this page. The data is clear — we just need the will to act."
- **Option B:** "Every great rail system started with public demand. Learn about proposed corridors in your region, write to your legislators, and join the movement for modern American rail."
- **Option C:** "The facts are here. The technology exists. What's missing is political will — and that starts with you."

### `[PRIMARY ACTION LABEL]`
- **Option A:** "Contact Your Rep"
- **Option B:** "Take Action"
- **Option C:** "Support Rail Policy"

### `[SECONDARY ACTION LABEL]`
- **Option A:** "Share This Page"
- **Option B:** "Learn More"
- **Option C:** "Find Your Corridor"

### Contact footer items
- **Email:** "hello@whytrains.org" or "[INSERT CONTACT EMAIL]"
- **Social:** "@whytrains on Twitter/X, Instagram, Threads"
- **Newsletter:** "Subscribe for rail policy updates"

---

## Summary: Quick-Win Placeholders to Fill Next

These are the highest-impact placeholders that would most strengthen the site's argument:

| Priority | Section | Placeholder | Why |
|----------|---------|-------------|-----|
| 1 | Hero | Headline + subheadline | First thing visitors see |
| 2 | CTA | Headline + buttons | Last thing visitors see |
| 3 | Carbon | Bar chart with real g CO₂/passenger-mile data | Strongest visual argument |
| 4 | Travel Time | Real city pairs + real times | Makes the case tangible |
| 5 | Funding | Subsidy comparison data | Addresses "why isn't it better?" |
| 6 | Community | TOD metrics with real numbers | Economic case beyond environment |
| 7 | Systems | Pillar descriptions | Completes the forward-looking vision |
