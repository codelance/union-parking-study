export const executiveTakeaways = [
  {
    id: 1,
    badge: '1. Eliminate P1 / P11 Bottleneck',
    badgeColor: 'warning',
    icon: 'swap_vert',
    title: 'Extend Cones 50 ft Past P1 (1 Lane In / 1 Lane Out)',
    description:
      'On the Pastor\'s map, P1/P11 is the primary bottleneck where Green exits (P11→P1) meet Blue arrivals (P1→P12). Extending the center cone line 50 ft past P1 toward P12 blocks left turns into P11 once Exit Lot 1 is full—keeping Inbound (Right) and Outbound (Left) completely separate.'
  },
  {
    id: 2,
    badge: '2. Safe Canopy Drop-Off (G)',
    badgeColor: 'info',
    icon: 'family_restroom',
    title: 'Passenger-Side Unloading at Front Greeters (G)',
    description:
      'Families loop from P4 past the Southeast Greeter (G) through the front portico toward the Southwest Greeter (G) so children step directly onto the right-hand sidewalk—then either park in Exit Lot 1 or exit past P11→P1.'
  },
  {
    id: 3,
    badge: '3. Smooth 9:45 & 11:45 Swaps',
    badgeColor: 'positive',
    icon: 'sync_alt',
    title: 'Flush Lots 2–4 South & Close P6→P10 Cut-Through',
    description:
      'Between services, let P4/P3/P2 flush Lots 2, 3 & 4 South for 12 minutes while early arrivals bypass up the outer P2→P5→P6 lane into Lots 5–8. Closing the P6→G→P10 cut-through stops exiting cars from crossing arriving traffic.'
  },
  {
    id: 4,
    badge: '4. Expand to Lots 11–13 (+360 Spaces)',
    badgeColor: 'accent',
    icon: 'add_road',
    title: '+360 New Spaces 100% Inside Owned GIS Parcels',
    description:
      'While the School Turf Field (west of P9 Exit) is 100% protected, we can add Proposed Lot 11 (+180 spaces at P12 in SE Parcel PID 01123122), Lot 12 (+110 west of Exit Lot 1), and Lot 13 (+70 outside Lot 4/P5)—bringing campus parking from ~450 to ~810 spaces.'
  }
]

export const phaseOptions = [
  {
    value: 'ingress',
    stepLabel: 'View 1 • Entry Flow',
    label: 'Entry Order (Lots 1 → 10)',
    color: 'info',
    badge: 'Viewing: View 1 • Entry Flow — Fill in Order (Lots 1 → 10)',
    title: 'Entry Flow (Light Blue Arrows): Fill Order 1 (Exit Lot 1) → Lots 2–4 → Lots 5–8 → 9 (Grass) → 10 (Brick Wall)',
    desc: 'Cars enter up University City Church Dr (Right Lane, Light Blue Arrows) past P1 → P12 (🚫) → P2. Following the Pastor\'s 1→10 sequence: ① Exit Lot 1 (~90 spaces) fills first via P10, then ② Lot 2, ③ Lot 3, ④ Lot 4 (~210 spaces via P5→P4/P3/P2), then ⑤ Lot 5, ⑥ Lot 6, ⑦ Lot 7, ⑧ Lot 8 (~150 spaces via P6→P7), ⑨ Grass Lot, and ⑩ Brick Wall.'
  },
  {
    value: 'swap',
    stepLabel: 'View 2 • 9:45 & 11:45',
    label: 'Fix P1/P11 Bottleneck',
    color: 'warning',
    badge: 'Viewing: View 2 • Solving the P1/P11 Bottleneck at 9:45 & 11:45 AM',
    title: 'Eliminating the P1 / P11 Bottleneck & P6 Crossover Between Services',
    desc: '1) Extend the center cone line 50 ft past P1 toward P12 (no left turns from P1 into P11) so Green Exit Flow (P11→P1) and Light Blue Entry Flow (P1→P12) never cross. 2) Flush ① Exit Lot 1 in the first 3 mins (9:45–9:48 AM), then hold P10 closed so P8→P9 Exit→P10→P11 runs non-stop. 3) Let P4/P3/P2 flush Lots 2, 3 & 4 South for 12 mins while closing the P6→G→P10 cut-through.'
  },
  {
    value: 'egress',
    stepLabel: 'View 3 • 1:45 PM',
    label: 'All-Lot Exit Flow',
    color: 'positive',
    badge: 'Viewing: View 3 • Final Exit Flow After 12:30 PM Service (1:45 PM)',
    title: 'Dual-Corridor Exit Flush: West Spine (Lots 1 & 5–10 via P9→P11→P1) + East Spine (Lots 2–4 via P2→P12→P1)',
    desc: 'After the 12:30 PM service dismisses at 1:45 PM (with zero incoming traffic), P2→P12→P1 flips to Green Exit Flow so ② Lot 2, ③ Lot 3 & ④ Lot 4 drain straight South while ① Exit Lot 1 and ⑤–⑩ (Lots 5–8, 9 Grass Lot, 10 Brick Wall) drain down P8→P9 Exit→P10→P11—clearing all ~450 spaces to Hwy 2145 in 15 minutes.'
  },
  {
    value: 'expand',
    stepLabel: 'View 4 • +360 Expansion',
    label: 'Proposed Lots 11–13',
    color: 'accent',
    badge: 'Viewing: View 4 • Proposed Lots 11, 12 & 13 (+360 New Spaces Inside Owned GIS Parcels)',
    title: 'Proposed Lots 11, 12 & 13 (+360 Spaces → 810 Total) 100% Inside Owned Parcels + Turf Field Protected',
    desc: 'Notice how ⑩ Brick Wall follows our exact eastern GIS property line with neighbor PID 01123102, and ⑨ Grass Lot sits inside our owned North Apex! Proposed expansion adds ⑪ Lot 11 (+180 spaces in owned SE Parcel PID 01123122 at P12, unlocking a 2nd exit to Hwy 2145), ⑫ Lot 12 (+110 spaces west of ① Exit Lot 1), and ⑬ Lot 13 (+70 spaces outside ④ Lot 4 & P5).'
  }
]

export const postData = {
  split: {
    id: 'split',
    code: 'P1 / P11',
    shortLabel: 'P1 / P11: Bottleneck',
    category: 'posts',
    badge: 'POTENTIAL BOTTLENECK • POSTS P1 & P11',
    title: 'Posts P1 & P11: Primary Bottleneck Junction (Bottom of ① Exit Lot 1)',
    metrics: ['2 Traffic Hosts (P1 & P11)', '50-ft Cone Extension', 'Zero Crossing Conflict'],
    week12:
      'Marked with the glowing orange/red "Potential bottleneck" icon on the Pastor\'s map because 100% of Green Exit Flow (P9 Exit → P10 → P11) meets Light Blue Entry Flow (P1 → P12) at a single T-junction.',
    week3Fix:
      'WEEK 3 FIX: Once ① Exit Lot 1 is full, extend the center cone line 50 ft past P1 toward P12 (blocking left turns from P1 into P11). P11 feeds the Left Outbound Lane while P1 feeds the Right Inbound Lane—streams never cross!',
    detail:
      'Located at the base of ① Exit Lot 1 where University City Church Dr splits toward P11 (Left) and P12 (Right). Extending the center cone line 50 ft past P1 keeps Green Exit Flow and Light Blue Entry Flow in two separate parallel lanes.'
  },
  lot1: {
    id: 'lot1',
    code: '① Lot 1 & P10',
    shortLabel: '① Exit Lot 1 & P10',
    category: 'lots',
    badge: 'FILL ORDER #1 • ① EXIT LOT 1 (~90 SPACES) & POST P10',
    title: '① Exit Lot 1 (~90 Spaces), Post P10 & Greeters (G)',
    metrics: ['~90 Paved Spaces', 'Filled #1 First', '3-Min Early Exit Flush'],
    week12:
      'Filled #1 first during Entry Flow: cars enter up the East side (P1→P12→P2→P5→P6), pass P10 at the top-left of the building, and load ① Exit Lot 1 facing South toward P11.',
    week3Fix:
      'WEEK 3 FIX: Because ① Exit Lot 1 sits closest to the exit facing South, P11 flushes ① Exit Lot 1 immediately in the first 3 minutes of dismissal (9:45–9:48 AM), then P10 cones off Lot 1 so P9 Exit → P10 → P11 becomes a fast express exit highway for Lots 5–10!',
    detail:
      'Spanning the West side of the building between Post P10 (top) and Post P11 (bottom), ① Exit Lot 1 holds ~90 paved spaces across double-loaded bays and serves as the primary West exit spine.'
  },
  east: {
    id: 'east',
    code: '②–④ Lots 2–4',
    shortLabel: '②–④ Lots 2–4 & P2–P5',
    category: 'lots',
    badge: 'FILL ORDER #2–#4 • ② LOT 2, ③ LOT 3, ④ LOT 4 (~210 SPACES)',
    title: '② Lot 2 (~65), ③ Lot 3 (~70), ④ Lot 4 (~75) & Posts P2, P3, P4, P5',
    metrics: ['~210 Paved Spaces Total', '4 Hosts (P2, P3, P4, P5)', '12-Min South Flush'],
    week12:
      'Light Blue Entry Flow climbs the outer East lane (P2 → P5) and loads ② Lot 2 (to P4), ③ Lot 3 (to P3), and ④ Lot 4 (to P2) North-to-South. Currently, exiting cars loop North through P6 → G → P10 → P11.',
    week3Fix:
      'WEEK 3 FIX: Because cars in ② Lot 2, ③ Lot 3, and ④ Lot 4 are already pointed South toward P4, P3, and P2, let P4/P3/P2 flush Lots 2–4 straight South out the inner East lane for the first 12 minutes of dismissal (9:45–9:57 AM) while arriving cars use the outer P2→P5 lane!',
    detail:
      'The three main East parking bays hold ~210 paved spaces: ② Lot 2 (~65 spaces closest to the building & Greeter G, ending at P4), ③ Lot 3 (~70 spaces in the middle bay, ending at P3), and ④ Lot 4 (~75 spaces in the outer bay between P5 and P2).'
  },
  north: {
    id: 'north',
    code: '⑤–⑧ Lots 5–8',
    shortLabel: '⑤–⑧ Lots 5–8 & P6–P9',
    category: 'lots',
    badge: 'FILL ORDER #5–#8 • ⑤ LOT 5, ⑥ LOT 6, ⑦ LOT 7, ⑧ LOT 8 (~150 SPACES)',
    title: '⑤ Lot 5, ⑥ Lot 6, ⑦ Lot 7, ⑧ Lot 8 (~150 Spaces) & Posts P6, P7, P8, P9 Exit',
    metrics: ['~150 Paved Spaces Total', '4 Hosts (P6, P7, P8, P9)', 'Drains via P9 Exit'],
    week12:
      'After Lots 1–4 fill, Light Blue Entry Flow continues past P6 and P7 to load the four horizontal North bays—⑤ Lot 5, ⑥ Lot 6, ⑦ Lot 7, and ⑧ Lot 8—from right to left toward P8. Green Exit Flow drains down the left side via P8 → P9 Exit → P10 → P11.',
    week3Fix:
      'WEEK 3 FIX: Close the P6 → G → P10 green cut-through behind the building during between-service swaps so exiting cars never cross in front of arriving Light Blue traffic at P5→P6. All of Lots 5–9 exit smoothly via P8 → P9 Exit → P10.',
    detail:
      'Four parallel double-loaded parking aisles north of the building holding ~150 paved spaces: ⑤ Lot 5 (~40 spaces), ⑥ Lot 6 (~40 spaces), ⑦ Lot 7 (~35 spaces), and ⑧ Lot 8 (~35 spaces).'
  },
  grass10: {
    id: 'grass10',
    code: '⑨ Grass & ⑩ Wall',
    shortLabel: '⑨ Grass Lot & ⑩ Brick Wall',
    category: 'lots',
    badge: 'FILL ORDER #9–#10 • ⑨ GRASS LOT & ⑩ BRICK WALL (~90 SPACES)',
    title: '⑨ Grass Lot (North Apex) & ⑩ Brick Wall (East Boundary Line)',
    metrics: ['⑨ Grass Lot (~55 Spaces)', '⑩ Brick Wall (~35 Spaces)', 'Dream Team & Overflow'],
    week12:
      '⑨ Grass Lot sits at the top apex between P8 and P7 (inside owned Main Parcel PID 01123101). ⑩ Brick Wall runs along the angled upper-right perimeter between P6 and P7, which is the exact GIS parcel boundary with neighbor PID 01123102.',
    week3Fix:
      'DREAM TEAM STRATEGY: Have all ~90 Dream Team volunteers and staff park in ⑨ Grass Lot and ⑩ Brick Wall at 7:30 AM—keeping 100% of paved spaces in ① Exit Lot 1 and ②–⑧ Lots 2–8 open for Sunday guests!',
    detail:
      '⑨ Grass Lot and ⑩ Brick Wall are listed as #9 and #10 in the Pastor\'s fill order, providing ~90 crucial spaces inside our northern/eastern property lines that feed directly out via P8 → P9 Exit.'
  },
  hpd: {
    id: 'hpd',
    code: 'P12🚫 / 2145',
    shortLabel: 'P12 (🚫) & Hwy 2145',
    category: 'posts',
    badge: 'HIGHWAY 2145 (SAM FURR RD) & POST P12 (🚫)',
    title: 'Post P12 (🚫 Blocked SE Road), University City Church Dr & Hwy 2145',
    metrics: ['2 Police Officers (Hwy 2145)', 'P12 Barricade Cones', 'Future 2nd Exit to 2145'],
    week12:
      'Cars enter from Hwy 2145 (Sam Furr Rd) onto University City Church Dr past P1 to P12 (🚫), where the unpaved Southeast road down to Hwy 2145 is currently blocked off.',
    week3Fix:
      'FUTURE EXPANSION ADVANTAGE: P12 (🚫) sits directly adjacent to our owned 3.67-acre SE Corner Parcel (PID 01123122). When ⑪ Proposed Lot 11 (+180 spaces) is built there, paving 180 ft from P12 to Hwy 2145 creates a dedicated 2nd campus exit!',
    detail:
      'At Hwy 2145 (Sam Furr Rd) & University City Church Dr, police hold highway traffic for 60–90s waves so Green Exit Flow flushes freely while Light Blue Entry Flow turns in smoothly.'
  },
  greeters: {
    id: 'greeters',
    code: 'G (Greeters)',
    shortLabel: 'G: 3 Greeter Posts & Canopy',
    category: 'posts',
    badge: '3 GREETER POSTS (G) • BUILDING DOORS & FRONT CANOPY',
    title: 'Three Greeter Stations (G): SW Door, SE Canopy & NE Gym/Kids Door',
    metrics: ['3 Greeter Posts (G)', '60s Pedestrian Batching', 'Passenger-Side Drop-Off'],
    week12:
      'Three white "G" circles on the Pastor\'s map mark key pedestrian & door zones: Bottom-Left (between ① Exit Lot 1 and front canopy), Bottom-Right (between ② Lot 2 / P4 and front canopy), and Top-Right (between ⑤ Lot 5 / ② Lot 2 and NE Gym/Kids entrance).',
    week3Fix:
      'WEEK 3 FIX: Greeters at the "G" crosswalks batch walkers into 15-second crossing waves every 60 seconds so a nonstop trickle of pedestrians never blocks cars moving past P4, P6, or P11.',
    detail:
      'In addition to welcoming families at the doors, the 3 "G" posts coordinate safe crosswalk pulses between Lots 2–4, Lots 5–8, Exit Lot 1, and the main auditorium.'
  },
  turf: {
    id: 'turf',
    code: 'Turf Field',
    shortLabel: 'School Turf Field',
    category: 'land',
    badge: '100% PROTECTED • AMBASSADOR CHRISTIAN SCHOOL',
    title: 'School Athletic Turf Field (West of P8 & P9 Exit — PID 01123101)',
    metrics: ['100% Preserved', 'Zero Parking Encroachment', 'West of P9 Exit'],
    week12:
      'Located on the Northwest side of campus immediately west of Post P8 and Post P9 Exit inside main parcel PID 01123101.',
    week3Fix:
      '100% PROTECTED: All proposed new parking lots (⑪ Lot 11, ⑫ Lot 12, ⑬ Lot 13) stay completely clear of the school\'s athletic turf field.',
    detail:
      'Located inside main parcel PID 01123101 immediately West/Northwest of P8 and P9 Exit. This is the school\'s dedicated athletic turf field and is 100% preserved.'
  },
  gis: {
    id: 'gis',
    code: 'GIS Lines',
    shortLabel: 'GIS Property Lines',
    category: 'land',
    badge: 'MECKLENBURG COUNTY GIS • 28.15 TOTAL ACRES OWNED',
    title: 'Official Campus Property Boundaries (4 Contiguous Parcels = 28.15 Acres)',
    metrics: ['PID 01123101 (21.90 Ac)', 'PID 01123122 (3.67 Ac SE)', 'PID 01123102 = Neighbor'],
    week12:
      'Notice how ⑩ Brick Wall on the Pastor\'s map follows the exact angled property line separating our campus (PID 01123101) from the private neighbor to the East (PID 01123102 — Paradis).',
    week3Fix:
      '100% IN-PARCEL VERIFIED: The campus owns 4 contiguous parcels totaling 28.15 acres, including the 3.67-acre SE Corner Parcel (PID 01123122, purchased July 2023 by Ambassador Christian School Inc) right next to P12 and P2.',
    detail:
      'Verified via Mecklenburg County GIS: Main Parcel PID 01123101 (21.90 ac, Workmanship LLC), SE Corner Parcel PID 01123122 (3.67 ac, Ambassador Christian School Inc), University City Church Dr Entry PID 01123131 (2.11 ac), and SW Spur PID 01123132 (0.47 ac).'
  },
  e1: {
    id: 'e1',
    code: '⑪ Lot 11 (+180)',
    shortLabel: '⑪ New Lot 11 (+180)',
    category: 'land',
    badge: 'PRIORITY #1 EXPANSION • ⑪ PROPOSED LOT 11 (PID 01123122)',
    title: '⑪ Proposed Lot 11: SE Corner Parcel at P12 & P2 (+180 Spaces)',
    metrics: ['+180 New Spaces', '1.48 Ac of 3.67 Ac Parcel', 'Unlocks P12 Exit to 2145'],
    week12:
      'Located immediately Southeast of Post P12 (🚫), Post P2, and ④ Lot 4 inside the school\'s owned 3.67-acre SE Corner Parcel (PID 01123122, 12015 Sam Furr Rd).',
    week3Fix:
      'EXPANSION PHASE 1: Builds +180 new paved spaces in double-loaded bays right next to P2/P12 and paves the 180-ft P12 corridor down to Hwy 2145 (Sam Furr Rd) as a dedicated 2nd exit!',
    detail:
      'Continues the Pastor\'s 1–10 lot numbering as ⑪ Lot 11 (+180 spaces). Sits 100% inside owned parcel PID 01123122 and gives ②–④ Lots 2–4 and ⑪ Lot 11 direct exit access via P12 to Hwy 2145.'
  },
  e2: {
    id: 'e2',
    code: '⑫ Lot 12 (+110)',
    shortLabel: '⑫ New Lot 12 (+110)',
    category: 'land',
    badge: 'PRIORITY #2 EXPANSION • ⑫ PROPOSED LOT 12 (PID 01123101)',
    title: '⑫ Proposed Lot 12: West of ① Exit Lot 1 (+110 Spaces)',
    metrics: ['+110 New Spaces', '0.95 Acres (410\' × 100\')', 'South of Turf Field'],
    week12:
      'Located inside the wooded Southwest section of Main Parcel PID 01123101 immediately West of ① Exit Lot 1 (between P10 and P11, south of the School Turf Field).',
    week3Fix:
      'EXPANSION PHASE 2: Adds two parallel double-loaded parking bays (+110 spaces) alongside ① Exit Lot 1 that feed directly into the fast-exiting P11 → P1 West spine while keeping 100% of the School Turf Field protected.',
    detail:
      'Continues the Pastor\'s lot numbering as ⑫ Lot 12 (+110 spaces). Sits 100% inside Main Parcel PID 01123101 and doubles the capacity of the fast-draining ① Exit Lot 1 corridor.'
  },
  e3: {
    id: 'e3',
    code: '⑬ Lot 13 (+70)',
    shortLabel: '⑬ New Lot 13 (+70)',
    category: 'land',
    badge: 'PRIORITY #3 EXPANSION • ⑬ PROPOSED LOT 13 (PID 01123101)',
    title: '⑬ Proposed Lot 13: East of ④ Lot 4 & Post P5 (+70 Spaces)',
    metrics: ['+70 New Spaces', '0.62 Acres (290\' × 93\')', 'Inside NE Property Line'],
    week12:
      'Located in the unbuilt square Northeast corner of Main Parcel PID 01123101 immediately outside ④ Lot 4 and Post P5.',
    week3Fix:
      'EXPANSION PHASE 3: Adds an outer parking bay (+70 spaces) parallel to ④ Lot 4 inside our existing property boundary without crossing into neighbor parcel PID 01123102.',
    detail:
      'Continues the Pastor\'s lot numbering as ⑬ Lot 13 (+70 spaces), bringing total campus capacity across Lots 1–13 to ~810 paved spaces.'
  }
}

export const attendancePresets = [
  {
    id: 'launch',
    title: '800 People / Service',
    subtitle: 'Fits Lots 1–8 (~364 cars)',
    color: 'positive',
    attendees: 800,
    occ: 2.2,
    vols: 80,
    shuttle: true,
    expand: false
  },
  {
    id: 'target',
    title: '1,000 People (Target)',
    subtitle: 'Fills Lots 1–10 (~455 cars)',
    color: 'primary',
    attendees: 1000,
    occ: 2.2,
    vols: 90,
    shuttle: true,
    expand: false
  },
  {
    id: 'easter',
    title: '1,350 People (Easter)',
    subtitle: 'Needs New Lot 11 (~587 cars)',
    color: 'warning',
    attendees: 1350,
    occ: 2.3,
    vols: 100,
    shuttle: true,
    expand: true
  },
  {
    id: 'full',
    title: '1,800+ Full Auditorium',
    subtitle: 'Lots 1–13 (~810 spaces)',
    color: 'accent',
    attendees: 1800,
    occ: 2.2,
    vols: 110,
    shuttle: true,
    expand: true
  }
]

export const roadmapPhases = [
  {
    phase: 'Phase 1: Week 3 Cone Tweaks on Lots 1–10 (~$2,500 Gear)',
    color: 'text-positive',
    icon: 'flag',
    desc: 'Extend the center cone line 50 ft past P1 toward P12 to eliminate the P1/P11 bottleneck, park 90 Dream Team cars in Lot 9 (Grass Lot) & Lot 10 (Brick Wall), flush Lots 2–4 South via P4/P3/P2 for 12 mins at dismissal, and close the P6→P10 cut-through.'
  },
  {
    phase: 'Phase 2: Proposed Lot 11 at P12 (+180 Spaces • PID 01123122)',
    color: 'text-info',
    icon: 'terrain',
    desc: 'Clear and pave 1.48 acres of the owned 3.67-acre SE Corner Parcel (PID 01123122) beside P12 (🚫) and P2 to create Lot 11 (+180 spaces) and open P12 as a second exit to Hwy 2145 (Sam Furr Rd).'
  },
  {
    phase: 'Phase 3: Proposed Lots 12 & 13 (+180 Spaces → 810 Total across Lots 1–13)',
    color: 'text-accent',
    icon: 'construction',
    desc: 'Add Proposed Lot 12 (+110 spaces immediately West of Exit Lot 1 inside PID 01123101) and Proposed Lot 13 (+70 spaces immediately East of Lot 4 & P5 inside PID 01123101) while keeping 100% of the School Turf Field untouched.'
  }
]

export const chickFilAPrinciples = [
  {
    num: '1',
    title: 'Separate P1 Entry Flow from P11 Exit Flow',
    color: 'positive',
    icon: 'call_split',
    desc: 'At the P1/P11 bottleneck, extending the center cones 50 ft past P1 toward P12 ensures Light Blue Entry Flow (Right Lane) and Green Exit Flow (Left Lane) never cross paths.'
  },
  {
    num: '2',
    title: 'Front Canopy Unloading Between Greeters (G)',
    color: 'info',
    icon: 'airline_stops',
    desc: 'Families enter the front portico from the East Greeter (G by P4) toward the West Greeter (G by P11) so kids step directly onto the curb, then either pull into Exit Lot 1 or exit past P11.'
  },
  {
    num: '3',
    title: 'Flush Lots 2–4 South While Loading Lots 5–8',
    color: 'warning',
    icon: 'swap_horiz',
    desc: 'At 9:45 & 11:45 AM, cars in Lots 2, 3 & 4 are already parked facing South toward P4, P3, and P2. Flushing them South for 12 minutes while early arrivals bypass up P2→P5→P6 into Lots 5–8 cuts exit wait times in half.'
  },
  {
    num: '4',
    title: 'Sequential 1 → 10 Row-by-Row Loading',
    color: 'accent',
    icon: 'view_column',
    desc: 'Following the Pastor\'s exact 1→10 sequence (① Exit Lot 1 → ② Lot 2 → ③ Lot 3 → ④ Lot 4 → ⑤–⑧ Lots 5–8 → ⑨ Grass Lot → ⑩ Brick Wall) eliminates aisle hunting so every car parks in seconds.'
  },
  {
    num: '5',
    title: 'Batch Pedestrian Crossings at the 3 "G" Posts',
    color: 'negative',
    icon: 'groups',
    desc: 'A nonstop trickle of walkers between Lots 2–4 and the building freezes traffic at P4 and P6. The 3 Greeters (G) hold walkers for 45 seconds while cars roll, then cross 30+ people together in 15 seconds.'
  },
  {
    num: '6',
    title: 'Close P6 → G → P10 Cut-Through During Swaps',
    color: 'primary',
    icon: 'rotate_left',
    desc: 'Keeping the P6→P10 back aisle closed to exiting cars during service swaps prevents Green Exit Flow from cutting across Light Blue Entry Flow heading to P6/P7. Lots 5–10 drain smoothly down P8 → P9 Exit → P10.'
  }
]

export const expansionZones = [
  {
    id: 'e1',
    name: '⑪ Proposed Lot 11: SE Corner Parcel at P12 (PID 01123122)',
    priority: '★ Priority #1 (100% Owned)',
    priorityColor: 'positive',
    location: '3.67-acre SE corner parcel (12015 Sam Furr Rd) owned by Ambassador Christian School Inc, immediately Southeast of Post P12 (🚫), Post P2, and ④ Lot 4',
    size: "420' × 155' (1.48 Acres of 3.67 ac)",
    spaces: '+180 Spaces',
    why: '100% owned by Ambassador Christian School Inc (Deed 38268/53, July 2023). Connects directly to ④ Lot 4 (at P2) and Post P12 (🚫), allowing P12 to open as a second paved exit to Hwy 2145 (Sam Furr Rd)!'
  },
  {
    id: 'e2',
    name: '⑫ Proposed Lot 12: West of ① Exit Lot 1 (PID 01123101)',
    priority: 'Priority #2 (100% Owned)',
    priorityColor: 'info',
    location: 'Inside the 8.81-acre wooded Southwest section of Main Parcel PID 01123101, immediately West of ① Exit Lot 1 between P10 and P11 (south of the School Turf Field)',
    size: "410' × 100' (0.95 Acres)",
    spaces: '+110 Spaces',
    why: '100% inside Main Campus Parcel PID 01123101 (Workmanship LLC). Adds two double-loaded parking bays right beside ① Exit Lot 1 with immediate egress to P11 → P1 while keeping 100% of the School Turf Field protected.'
  },
  {
    id: 'e3',
    name: '⑬ Proposed Lot 13: East of ④ Lot 4 & Post P5 (PID 01123101)',
    priority: 'Priority #3 (100% Owned)',
    priorityColor: 'grey-6',
    location: 'Unpaved square Northeast corner of Main Parcel PID 01123101 immediately outside ④ Lot 4 and Post P5 (below ⑩ Brick Wall)',
    size: "290' × 93' (0.62 Acres)",
    spaces: '+70 Spaces',
    why: 'Uses the unbuilt Northeast corner inside PID 01123101 right outside ④ Lot 4 and Post P5 up to (but never crossing) the neighbor property line (PID 01123102).'
  }
]

export const pastorMapTweaks = [
  {
    num: '1',
    postKey: 'split',
    phase: 'swap',
    badge: 'Fix #1 • P1 / P11 Bottleneck',
    title: 'Extend Center Cone Line 50 ft Past P1 (No Left Turns Into P11)',
    desc: 'On the Pastor\'s map, P1/P11 is marked as the #1 Potential Bottleneck because Green Exit Flow (P9 Exit→P10→P11) meets Light Blue Entry Flow (P1→P12). Once ① Exit Lot 1 is full, extend the center cone line 50 ft past P1 toward P12 so no arriving car turns left into P11 and no exiting car goes straight toward P12—turning P1/P11 into two non-crossing parallel lanes!'
  },
  {
    num: '2',
    postKey: 'east',
    phase: 'swap',
    badge: 'Fix #2 • Lots 2, 3 & 4 Exit',
    title: '12-Minute Southward Flush for ② Lot 2, ③ Lot 3 & ④ Lot 4 (P4/P3 → P2 → P1)',
    desc: 'Cars in ② Lot 2, ③ Lot 3, and ④ Lot 4 (~210 spaces) park facing South toward P4, P3, and P2. Forcing them to exit North via P5→P6→P10→P11 overloads the single West exit lane. Instead, for the first 12 minutes after dismissal (9:45–9:57 AM & 11:45–11:57 AM), let P4, P3 & P2 flush Lots 2–4 straight South out the inner lane while arriving cars bypass up the outer P2→P5→P6 lane!'
  },
  {
    num: '3',
    postKey: 'north',
    phase: 'swap',
    badge: 'Fix #3 • P6 Crossover',
    title: 'Close the P6 → G → P10 Cut-Through During Service Swaps',
    desc: 'On the Week 1–2 map, Green exit arrows run right-to-left behind the building (P6 → G → P10), cutting across Light Blue entry flow heading to P6/P7. Because ⑤–⑧ Lots 5–8, ⑨ Grass Lot, and ⑩ Brick Wall already drain into P8 → P9 Exit → P10, closing the P6→P10 cut-through during service swaps keeps arriving traffic 100% unobstructed.'
  },
  {
    num: '4',
    postKey: 'lot1',
    phase: 'swap',
    badge: 'Fix #4 • ① Exit Lot 1 Valve',
    title: 'Flush ① Exit Lot 1 in First 3 Minutes (9:45–9:48 AM), Then Hold P10 Closed',
    desc: 'Filling ① Exit Lot 1 first is ideal because those ~90 cars sit right above P11 facing South. At 9:45 AM & 11:45 AM, P11 flushes ① Exit Lot 1 immediately (9:45–9:48 AM) before the main crowd reaches P9/P10, then P10 holds Exit Lot 1 closed until 10:03 AM so P9 Exit→P10→P11 becomes an unobstructed express exit highway for Lots 5–10!'
  },
  {
    num: '5',
    postKey: 'e1',
    phase: 'expand',
    badge: 'Fix #5 • P12 (🚫) & New Lot 11',
    title: 'Build ⑪ Lot 11 (+180 Spaces) in SE Parcel & Open P12 as 2nd Exit to Hwy 2145',
    desc: 'P12 (🚫) sits at the top of the unpaved SE corridor bordering the school\'s owned 3.67-acre SE parcel (PID 01123122). When ⑪ Proposed Lot 11 (+180 spaces) is built in PID 01123122, paving the 180-ft P12 leg down to Hwy 2145 (Sam Furr Rd) gives Lots 2–4 & Lot 11 their own dedicated exit—cutting P1 traffic in half!'
  }
]

export const sundayTimeline = [
  {
    time: '7:15 AM',
    title: 'Cone Setup on University City Church Dr (P1 – P12)',
    color: 'positive',
    icon: 'traffic',
    desc: 'Place 45 cones down the center of University City Church Dr extending 50 ft past P1 toward P12 (Right Lane = Light Blue Entry Flow; Left Lane = Green Exit Flow), and set the road-closed cones at P12 (🚫).'
  },
  {
    time: '7:30 AM',
    title: 'Dream Team & Staff Arrival (⑨ Grass Lot & ⑩ Brick Wall)',
    color: 'positive',
    icon: 'groups',
    desc: 'All staff & Dream Team volunteers park first in ⑨ Grass Lot (between P8 & P7) and ⑩ Brick Wall (between P6 & P7)—saving 100% of close paved spaces in ① Exit Lot 1 and ②–⑧ Lots 2–8 for guests.'
  },
  {
    time: '8:00 – 8:35 AM',
    title: '8:30 AM Entry Flow: Fill Order ① → ② → ③ → ④ → ⑤–⑧',
    color: 'positive',
    icon: 'directions_car',
    desc: 'Follow the Pastor\'s 1→10 sequence: fill ① Exit Lot 1 first via P10, then ② Lot 2, ③ Lot 3, ④ Lot 4 (loaded North→South from P5 toward P4/P3/P2), then ⑤ Lot 5, ⑥ Lot 6, ⑦ Lot 7, ⑧ Lot 8 (loaded Right→Left from P6/P7 toward P8).'
  },
  {
    time: '9:45 – 10:25 AM',
    title: 'Turnaround Swap #1 (8:30 Out / 10:30 In — Zero P1/P11 Bottleneck)',
    color: 'warning',
    icon: 'sync_alt',
    desc: '9:45–9:48 AM: P11 flushes ① Exit Lot 1 first. 9:48–10:00 AM: Lots 5–10 drain down P8→P9 Exit→P10→P11→P1 (Left Lane) while P4/P3/P2 flush Lots 2–4 South. Meanwhile, early 10:30 AM arrivals climb the Right Lane (P1→P12→P2→P5→P6) directly into open North rows!'
  },
  {
    time: '11:45 AM – 12:25 PM',
    title: 'Turnaround Swap #2 (10:30 Out / 12:30 In)',
    color: 'warning',
    icon: 'sync_alt',
    desc: 'Repeat the exact between-service swap: P6→G→P10 cut-through stays closed, West side (P9 Exit→P10→P11→P1) flushes outbound in the Left Lane, and 12:30 PM arrivals climb the Right Lane (P1→P12→P2→P5).'
  },
  {
    time: '1:45 – 2:05 PM',
    title: '12:30 PM Final Dismissal (Both East & West Spines Outbound)',
    color: 'info',
    icon: 'outbound',
    desc: 'With no 4th service arriving, flip P2→P12→P1 to Green Exit Flow so ②–④ Lots 2–4 drain straight South via P2 while ① Exit Lot 1 & ⑤–⑩ Lots 5–10 drain down P9 Exit→P10→P11—clearing the campus to Hwy 2145 in ~15 minutes.'
  }
]

export const stationDutyCards = [
  {
    code: 'Posts P1 & P11',
    title: 'Bottleneck Junction & ① Exit Lot 1 Base (2 Hosts)',
    color: 'red-5',
    icon: 'call_split',
    desc: 'Manages the #1 Potential Bottleneck on the Pastor\'s map! Keeps the cone line closed between P1 and P12 once ① Exit Lot 1 is full so Light Blue Entry Flow never turns left into P11 and Green Exit Flow from P11 runs non-stop into the Left Outbound Lane.'
  },
  {
    code: 'Posts P2, P3, P4 & P5',
    title: '② Lot 2, ③ Lot 3 & ④ Lot 4 Team (4 Hosts)',
    color: 'teal-4',
    icon: 'local_parking',
    desc: 'P2 guides Light Blue Entry Flow up the outer East spine to P5. P5 loads ② Lot 2, ③ Lot 3, and ④ Lot 4 North-to-South down toward P4, P3, and P2. During dismissal (9:45 & 11:45), P4/P3/P2 flush Lots 2–4 South for 12 minutes.'
  },
  {
    code: 'Posts P6, P7, P8 & P9 Exit',
    title: '⑤–⑧ Lots 5–8, ⑨ Grass Lot & ⑩ Brick Wall Team (4 Hosts)',
    color: 'purple-4',
    icon: 'local_parking',
    desc: 'P6 & P7 load ⑤ Lot 5, ⑥ Lot 6, ⑦ Lot 7, ⑧ Lot 8 right-to-left plus ⑨ Grass Lot & ⑩ Brick Wall. P6 keeps the P6→G→P10 cut-through closed during service swaps so all North Lot cars exit via P8 → P9 Exit → P10.'
  },
  {
    code: 'Post P10 & ① Exit Lot 1',
    title: 'NW Building Corner & ① Exit Lot 1 Top (1 Host)',
    color: 'amber-5',
    icon: 'south',
    desc: 'Fills ① Exit Lot 1 first before each service, then holds Exit Lot 1 closed during the peak 15-minute egress window (9:48–10:03 AM) so P9 Exit → P10 → P11 functions as an express exit lane.'
  },
  {
    code: 'Post P12 (🚫) & Hwy 2145',
    title: 'SE Cut-Through Block & Hwy 2145 Police (2 Officers + Cones)',
    color: 'blue-5',
    icon: 'local_police',
    desc: 'P12 cones block the unpaved SE road (adjacent to ⑪ Proposed Lot 11), while 2 Huntersville Police officers at Hwy 2145 (Sam Furr Rd) & University City Church Dr hold highway traffic for 60–90s exit waves.'
  },
  {
    code: '3 Greeter Posts (G)',
    title: 'SW Door, SE Main Canopy & NE Gym/Kids Entrances (3 Greeters)',
    color: 'grey-4',
    icon: 'escalator_warning',
    desc: 'Stationed at the 3 white "G" circles around the building. Batches pedestrian crossings every 60 seconds so a trickle of walkers never freezes cars moving past P4, P6, or P11.'
  }
]
