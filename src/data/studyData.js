export const executiveTakeaways = [
  {
    id: 1,
    badge: '1. Never Trap Cars Inside',
    badgeColor: 'warning',
    icon: 'swap_vert',
    title: 'Always Keep 1 Exit Lane Open',
    description:
      'If we make the entrance road 100% "In-Only," parents dropping off youth, Uber drivers, and the 8:30 AM congregation can\'t get out! Keeping 1 Lane In (Right) and 1 Lane Out (Left) all morning handles 1,500+ cars/hour with zero gridlock.'
  },
  {
    id: 2,
    badge: '2. Safe Family Drop-Off',
    badgeColor: 'info',
    icon: 'family_restroom',
    title: 'Chick-fil-A Style Canopy Loop',
    description:
      'Cars loop around the right side of the lot and enter the front portico from Northeast to Southwest so kids step out on the right-hand sidewalk (never into traffic). Unloaded cars either turn right to park or go straight out to Sam Furr Rd.'
  },
  {
    id: 3,
    badge: '3. Smooth 9:45 & 11:45 Swaps',
    badgeColor: 'positive',
    icon: 'sync_alt',
    title: '"Ping-Pong" the Two Main Lots',
    description:
      'Between services, arriving cars should never drive down aisles where cars are backing out. We park 8:30 AM in the East Lot, then send early 10:30 AM arrivals straight to the North Lot while the East Lot empties out the back way.'
  },
  {
    id: 4,
    badge: '4. Expand Without Touching Turf',
    badgeColor: 'accent',
    icon: 'add_road',
    title: '+360 New Spaces on East/NE Land',
    description:
      'While the West side is the school\'s athletic turf field (protected), we have 2.93 acres of flat upland on the Northeast Wedge and East side of campus to add +360 spaces—bringing total parking to ~810 spaces.'
  }
]

export const phaseOptions = [
  {
    value: 'ingress',
    stepLabel: 'View 1 • Arrival',
    label: 'Arrival (Lots 1–10)',
    color: 'positive',
    badge: 'Viewing: View 1 • Arrival & Fill Order (Lots 1 → 10)',
    title: 'Current Fill Order (Lots 1 → 10) + Safe Canopy Drop-Off',
    desc: 'Cars enter up University City Church Dr (Right Lane) past P1 → P12 (🚫) → P2. Following the Campus Pastor\'s 1→10 fill order: Exit Lot 1 fills first (via P10), then East Lots 2, 3, 4 (via P5→P4/P3), then North Lots 5, 6, 7, 8 (via P6→P7), Lot 9 (Grass Lot), and Lot 10 (Brick Wall).'
  },
  {
    value: 'swap',
    stepLabel: 'View 2 • 9:45 & 11:45',
    label: 'Fix P1/P11 Bottleneck',
    color: 'warning',
    badge: 'Viewing: View 2 • Solving the P1/P11 Bottleneck at 9:45 & 11:45 AM',
    title: 'How to Eliminate the P1 / P11 Bottleneck & P6 Crossover Between Services',
    desc: '1) Extend the center cone line 50 ft past P1 toward P12 (no left turns from P1 into P11) so P11 Green exits and P1 Blue arrivals never touch. 2) Let P4/P3/P2 flush Lots 2–4 South for 12 mins while early arrivals bypass up P2→P5→P6 into North Lots 5–8. 3) Close the P6→P10 cut-through so Lots 5–8 exit exclusively via P8→P9→P10.'
  },
  {
    value: 'egress',
    stepLabel: 'View 3 • 1:45 PM',
    label: 'Final Dismissal',
    color: 'info',
    badge: 'Viewing: View 3 • Final Dismissal After 12:30 PM Service (1:45 PM)',
    title: 'Dual-Corridor Flush: West Spine (P9→P11→P1) + East Spine (Lots 2–4→P2→P1)',
    desc: 'After the 12:30 PM service ends at 1:45 PM (with no incoming traffic), P2→P12→P1 flips Outbound so East Lots 2, 3, 4 drain straight South while Lots 1 & 5–9 drain down P9→P10→P11—emptying all ~450 spaces in 15 minutes instead of 30+.'
  },
  {
    value: 'expand',
    stepLabel: 'View 4 • Future',
    label: '+360 New Spaces',
    color: 'accent',
    badge: 'Viewing: View 4 • Parcel-Verified +360 Space Expansion (450 → 810 Spaces)',
    title: '100% Within Owned Parcels (PID 01123101 & PID 01123122) + Protects Turf Field',
    desc: 'Notice Lot 10 (Brick Wall) is the exact GIS parcel line with our neighbor (PID 01123102), and Lot 9 (Grass Lot) sits inside our owned North Apex! All +360 new spaces sit 100% inside owned parcels: E1 (+180 in SE Parcel PID 01123122 + unlocking P12 as a 2nd exit), E2 (+110 expanding Lot 1), and E3 (+70 at P5/NE corner).'
  }
]

export const postData = {
  split: {
    id: 'split',
    code: 'P1 / P11',
    shortLabel: 'P1/P11: Bottleneck Fix',
    color: 'red-8',
    title: 'P1 & P11: Primary Bottleneck Junction (Bottom of Exit Lot 1)',
    detail:
      'On the Campus Pastor\'s map, P1/P11 is marked as the #1 Potential Bottleneck because all Green exit flow (P9→P10→P11) meets all Blue entry flow (P1→P12). FIX: Extend the center cone line 50 ft past P1 toward P12 and prohibit left turns from P1 into P11 once Lot 1 is full—keeping Green (Out) and Blue (In) in two separate parallel lanes that never cross!'
  },
  east: {
    id: 'east',
    code: 'P2–P5',
    shortLabel: 'P2–P5: Lots 2, 3, 4',
    color: 'teal-8',
    title: 'P2, P3, P4, P5: East Lots 2, 3 & 4 (~210 Spaces) + P12 (🚫)',
    detail:
      'Loaded North-to-South from P5 down toward P4 (Lot 2), P3 (Lot 3), and P2 (Lot 4). WEEK 3 IMPROVEMENT: Because cars in Lots 2–4 are parked facing South (toward P4/P3/P2), forcing them to exit North via P6→P10→P11 overloads the West lane. Instead, during the first 12 minutes of dismissal (9:45–9:57 AM), let P4/P3/P2 flush Lots 2–4 South out the inner lane while arriving cars use the outer P2→P5 lane!'
  },
  north: {
    id: 'north',
    code: 'P6–P9',
    shortLabel: 'P6–P9: Lots 5–10',
    color: 'purple-8',
    title: 'P6, P7, P8, P9 Exit: North Lots 5–8, Lot 9 (Grass) & Lot 10 (Brick Wall)',
    detail:
      'P6 & P7 feed Lots 5, 6, 7, 8 right-to-left and Lot 9 (Grass Lot at North Apex), draining down P8 → P9 Exit → P10. WEEK 3 IMPROVEMENT: Close the P6 → G → P10 green exit cut-through behind the building during service swaps so exiting cars don\'t cross in front of arriving Blue traffic at P5→P6. All Lots 5–9 exit smoothly down the West side (P8→P9→P10).'
  },
  crosswalk: {
    id: 'crosswalk',
    code: 'P10 / G',
    shortLabel: 'P10 & G: Lot 1 & Greeters',
    color: 'amber-8',
    title: 'P10, P11 & G (Greeters): Exit Lot 1 (~90 Spaces) & Building Entrances',
    detail:
      'Exit Lot 1 (West side) is filled #1 first (facing South toward P11). At 9:45 AM dismissal, P11 flushes Exit Lot 1 first in under 3 minutes (9:45–9:48 AM) before the main crowd reaches P9/P10—turning Exit Lot 1 into an open 2-lane exit highway! Meanwhile, the 3 Greeters (G) batch pedestrians across the drive lanes.'
  },
  hpd: {
    id: 'hpd',
    code: 'P12 / 2145',
    shortLabel: 'P12 & Hwy 2145',
    color: 'blue-8',
    title: 'Hwy 2145 (Sam Furr Rd) & P12 (🚫 Blocked SE Cut-Through)',
    detail:
      'At Hwy 2145 (Sam Furr Rd) & University City Church Dr, police hold highway traffic for 60–90s waves so the green exit lane flushes freely. At P12 (🚫), the unpaved SE utility corridor borders our owned 3.67-acre SE parcel (PID 01123122)—paving this short 180-ft leg in the future creates a dedicated East Lot Exit to Hwy 2145!'
  },
  turf: {
    id: 'turf',
    code: 'TURF',
    shortLabel: 'School Turf Field',
    color: 'green-8',
    title: 'Ambassador Christian School Athletic Turf Field (PID 01123101 — Protected)',
    detail:
      'Located inside main parcel PID 01123101 immediately West/Northwest of P9/P10. This is the school\'s dedicated athletic turf field and is 100% preserved—zero parking expansion encroaches on the field.'
  },
  e1: {
    id: 'e1',
    code: 'E1',
    shortLabel: 'E1: +180 Spaces',
    color: 'purple-6',
    title: 'New Lot E1: Southeast Corner Parcel Near P12/P2 (+180 Spaces • PID 01123122)',
    detail:
      'Located 100% inside PID 01123122 (the 3.67-acre corner parcel at 12015 Sam Furr Rd owned by Ambassador Christian School Inc, right next to P12 and P2). Developing 1.48 acres adds +180 spaces and allows opening P12 as a second paved exit to Sam Furr Rd!'
  },
  e2: {
    id: 'e2',
    code: 'E2',
    shortLabel: 'E2: +110 Spaces',
    color: 'purple-6',
    title: 'New Lot E2: Exit Lot 1 Outer Expansion (+110 Spaces • PID 01123101)',
    detail:
      'Located 100% inside main campus parcel PID 01123101 immediately West of Exit Lot 1 (between P10 and P11, south of the protected School Turf Field). Adds two parallel parking bays (0.95 acres) that feed directly into the P11 fast-exit spine.'
  },
  e3: {
    id: 'e3',
    code: 'E3',
    shortLabel: 'E3: +70 Spaces',
    color: 'purple-6',
    title: 'New Lot E3: P5 / Lot 4 NE Corner Infill (+70 Spaces • PID 01123101)',
    detail:
      'Located 100% inside the square Northeast property corner of main parcel PID 01123101 right outside P5 and Lot 4 (0.62 acres), expanding the P5 turnaround and adding +70 spaces inside the existing property line.'
  }
}

export const attendancePresets = [
  {
    id: 'launch',
    title: '800 People / Service',
    subtitle: 'Comfortable Launch (~364 cars)',
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
    subtitle: 'Current Target (~455 cars)',
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
    subtitle: 'Needs New Lot E1 (~587 cars)',
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
    subtitle: 'With +360 Expansion (~810 cars)',
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
    phase: 'Phase 1: Day-One Sunday Launch (~$2,500 Gear)',
    color: 'text-positive',
    icon: 'flag',
    desc: 'Place 45 cones to keep 1 Lane In / 1 Lane Out on the entrance drive, run the front canopy drop-off NE→SW, and park Dream Team cars in the owned NE corner infill (PID 01123101) & SE tract (PID 01123122).'
  },
  {
    phase: 'Phase 2: SE Corner Parcel PID 01123122 (+180 Spaces)',
    color: 'text-info',
    icon: 'terrain',
    desc: 'Clear and stabilize 1.48 acres of the 3.67-acre SE Corner Parcel (PID 01123122, owned by Ambassador Christian School Inc) immediately SE of the East Fan Lot, adding +180 spaces on 100% owned land.'
  },
  {
    phase: 'Phase 3: Full In-Parcel Expansion (+360 Spaces → 810 Total)',
    color: 'text-accent',
    icon: 'construction',
    desc: 'Pave Zone E1 (+180 in SE Parcel PID 01123122), Zone E2 (+110 in SW Parcel PID 01123101), and Zone E3 (+70 in NE corner of PID 01123101) while 100% preserving the school\'s athletic turf field.'
  }
]

export const chickFilAPrinciples = [
  {
    num: '1',
    title: 'Pull Slow Tasks Out of the Main Line',
    color: 'positive',
    icon: 'call_split',
    desc: 'Just like Chick-fil-A separates mobile pickup from full orders, we pull Family Drop-Offs, Seniors/ADA, and First-Time Guests (hazards on) into the Canopy Loop so 80% of cars roll straight into the main lots without stopping.'
  },
  {
    num: '2',
    title: 'Unload 8 Cars at Once + Bypass Lane',
    color: 'info',
    icon: 'airline_stops',
    desc: 'Never let Car #1 stop at the middle door while 15 cars wait behind it. Split the wide canopy drive into an Inner Unloading Curb (8 cars unloading at once) and an Outer Escape Lane so unloaded cars can pull around immediately.'
  },
  {
    num: '3',
    title: '"Ping-Pong" Lots Between Services',
    color: 'warning',
    icon: 'swap_horiz',
    desc: 'At 9:45 AM, the 8:30 AM crowd is backing out of the East Lot. Instead of sending early 10:30 AM arrivals into those same aisles, we route them past the East Lot into the North Lot while the East Lot flushes!'
  },
  {
    num: '4',
    title: 'Disney-Style Row-by-Row Loading',
    color: 'accent',
    icon: 'view_column',
    desc: 'When drivers hunt for their own spots, a parking lot jams up at 80% full. By coning off closed aisles and pointing every car into the next exact stall front-to-back, cars park in 3 seconds instead of 15 seconds.'
  },
  {
    num: '5',
    title: 'Group Crosswalk Waves (Station V2)',
    color: 'negative',
    icon: 'groups',
    desc: 'A nonstop trickle of walkers freezes cars in the driveway. Two friendly hosts at the main crosswalk hold pedestrians for 45 seconds while cars flow, then pause traffic for 15 seconds to cross 30+ people together.'
  },
  {
    num: '6',
    title: 'One-Way Counter-Clockwise Loop',
    color: 'primary',
    icon: 'rotate_left',
    desc: 'Arriving traffic always stays on the East/Right side of campus, while departing traffic always drains down the West/Left side of campus. Paths never cross!'
  }
]

export const expansionZones = [
  {
    id: 'e1',
    name: 'Zone E1: SE Corner Parcel (PID 01123122)',
    priority: '★ Priority #1 (100% Owned)',
    priorityColor: 'positive',
    location: '3.67-acre corner parcel (12015 Sam Furr Rd) owned by Ambassador Christian School Inc, immediately SE of the East Fan Lot',
    size: "420' × 155' (1.48 Acres of 3.67 ac)",
    spaces: '+180 Spaces',
    why: '100% owned by Ambassador Christian School Inc (Deed 38268/53, July 2023). Directly contiguous with the East Fan Lot (PID 01123101) and South Entry Drive (PID 01123131), avoiding the privately owned NE neighbor parcel (PID 01123102).'
  },
  {
    id: 'e2',
    name: 'Zone E2: SW Perimeter Lot (PID 01123101)',
    priority: 'Priority #2 (100% Owned)',
    priorityColor: 'info',
    location: 'Inside the 8.81-acre wooded Southwest section of Main Parcel PID 01123101, parallel to the West Service Loop (south of the School Turf Field)',
    size: "410' × 100' (0.95 Acres)",
    spaces: '+110 Spaces',
    why: '100% inside Main Campus Parcel PID 01123101 (Workmanship LLC). Expands the West/SW Lot by two double-loaded bays with immediate egress to the West Service Road while keeping 100% of the School Turf Field protected.'
  },
  {
    id: 'e3',
    name: 'Zone E3: East Lot NE Corner & Apex Infill (PID 01123101)',
    priority: 'Priority #3 (100% Owned)',
    priorityColor: 'grey-6',
    location: 'Unpaved square NE corner of Main Parcel PID 01123101 (between curved East Fan Lot curb and property line) + North Lot apex',
    size: "290' × 93' (0.62 Acres)",
    spaces: '+70 Spaces',
    why: 'Uses the exact unbuilt Northeast corner triangle inside PID 01123101 right up to (but never crossing) the Paradis property boundary (PID 01123102 / 01123123).'
  }
]

export const pastorMapTweaks = [
  {
    num: '1',
    badge: 'Fix #1 • P1 / P11 Bottleneck',
    title: 'Extend Center Cone Line 50 ft Past P1 (No Left Turns Into P11)',
    desc: 'On the current map, P1/P11 is marked as the #1 Potential Bottleneck because Green exits (P9→P10→P11) meet Blue arrivals (P1→P12). Once Exit Lot 1 is full, cone off the center line 50 ft past P1 toward P12 so no arriving car can turn left into P11 and no exiting car can go straight toward P12—turning P1/P11 into two smooth, non-crossing parallel lanes!'
  },
  {
    num: '2',
    badge: 'Fix #2 • Lots 2, 3 & 4 Exit',
    title: '12-Minute Southward Flush for Lots 2, 3 & 4 (P4/P3 → P2 → P1)',
    desc: 'Cars in East Lots 2, 3, and 4 (~210 spaces) park facing South toward P4, P3, and P2. Forcing them to exit North via P5→P6→P10→P11 overloads the single West exit lane. Instead, for the first 12 minutes after service dismissal (9:45–9:57 AM & 11:45–11:57 AM), let P4, P3 & P2 flush Lots 2–4 straight South out the inner lane while arriving cars bypass up the outer P2→P5→P6 lane!'
  },
  {
    num: '3',
    badge: 'Fix #3 • P6 Crossover',
    title: 'Close the P6 → G → P10 Cut-Through During Service Swaps',
    desc: 'Right now, Green exit arrows run right-to-left behind the building (P6 → G → P10), cutting across Blue entry flow heading to P6/P7. Because North Lots 5, 6, 7, 8 and Lot 9 (Grass) already push right-to-left into P8 → P9 Exit → P10, closing the P6→P10 crossover during service swaps keeps arriving traffic 100% unobstructed.'
  },
  {
    num: '4',
    badge: 'Fix #4 • Exit Lot 1 Valve',
    title: 'Flush Exit Lot 1 in First 3 Minutes (9:45–9:48 AM), Then Hold Closed',
    desc: 'Filling Exit Lot 1 (#1) first is great because those ~90 cars sit right above P11 facing South. At 9:45 AM & 11:45 AM, P11 flushes Exit Lot 1 immediately (9:45–9:48 AM) before the main crowd reaches P9/P10, then P10 holds Exit Lot 1 closed until 10:05 AM so P9→P10→P11 becomes an unobstructed express exit highway for Lots 5–9!'
  },
  {
    num: '5',
    badge: 'Fix #5 • P12 (🚫) Future Exit',
    title: 'Unlock P12 Corridor as a Dedicated East Exit to Hwy 2145',
    desc: 'P12 (🚫) sits at the top of the unpaved SE corridor bordering the school\'s owned 3.67-acre SE parcel (PID 01123122). When New Lot E1 (+180 spaces in PID 01123122) is built, paving the 180-ft P12 leg down to Hwy 2145 (Sam Furr Rd) gives East Lots 2–4 & E1 their own dedicated exit—cutting P1 traffic in half!'
  }
]

export const sundayTimeline = [
  {
    time: '7:15 AM',
    title: 'Cone Setup on University City Church Dr (P1 – P12)',
    color: 'positive',
    icon: 'traffic',
    desc: 'Place 45 cones down the center of University City Church Dr extending 50 ft past P1 toward P12 (Right Lane = Blue Inbound; Left Lane = Green Outbound), and place the road-closed sign/cones at P12 (🚫).'
  },
  {
    time: '7:30 AM',
    title: 'Dream Team & Staff Arrival (Lots 9 & 10)',
    color: 'positive',
    icon: 'groups',
    desc: 'All staff & volunteers park first in Lot 9 (North Apex Grass Lot) and Lot 10 (Brick Wall)—saving 100% of close paved spaces in Lots 1–8 for guests.'
  },
  {
    time: '8:00 – 8:35 AM',
    title: '8:30 AM Arrival: Fill Order 1 → 2 → 3 → 4 → 5–8',
    color: 'positive',
    icon: 'directions_car',
    desc: 'Follow the 1→10 sequence: fill 1 (Exit Lot 1) first via P10, then 2, 3, 4 (East Lots loaded North→South from P5 toward P4/P3), then 5, 6, 7, 8 (North Lots loaded Right→Left from P6/P7 toward P8).'
  },
  {
    time: '9:45 – 10:25 AM',
    title: 'Turnaround Swap #1 (8:30 Out / 10:30 In — Zero P1 Bottleneck)',
    color: 'warning',
    icon: 'sync_alt',
    desc: '9:45–9:48 AM: P11 flushes Exit Lot 1 first. 9:48–10:00 AM: Lots 5–9 drain down P8→P9 Exit→P10→P11→P1 (Left Lane) while P4/P3/P2 flush Lots 2–4 South. Meanwhile, early 10:30 AM arrivals come up the Right Lane (P1→P12→P2→P5→P6) directly into fresh North rows!'
  },
  {
    time: '11:45 AM – 12:25 PM',
    title: 'Turnaround Swap #2 (10:30 Out / 12:30 In)',
    color: 'warning',
    icon: 'sync_alt',
    desc: 'Repeat the exact between-service swap: P6→P10 crossover stays closed, West side (P9→P10→P11→P1) flushes outbound in the Left Lane, and 12:30 PM arrivals climb the Right Lane (P1→P12→P2→P5).'
  },
  {
    time: '1:45 – 2:05 PM',
    title: '12:30 PM Final Dismissal (Both East & West Spines Outbound)',
    color: 'info',
    icon: 'outbound',
    desc: 'With no 4th service arriving, flip P2→P12→P1 Outbound so East Lots 2, 3, 4 drain straight South via P2 while Lots 1 & 5–10 drain down P9→P10→P11—clearing the entire campus to Hwy 2145 in ~15 minutes.'
  }
]

export const stationDutyCards = [
  {
    code: 'Posts P1 & P11',
    title: 'Bottleneck Junction & Exit Lot 1 Base (2 Hosts)',
    color: 'red-5',
    icon: 'call_split',
    desc: 'Manages the #1 bottleneck on the map! Keeps the cone line closed between P1 and P12 so arriving Blue traffic never turns left into P11 and exiting Green traffic from P11 flows non-stop into the Left Outbound Lane.'
  },
  {
    code: 'Posts P2, P3, P4 & P5',
    title: 'East Lots 2, 3 & 4 Team (4 Hosts)',
    color: 'teal-4',
    icon: 'local_parking',
    desc: 'P2 guides arriving traffic up the outer East spine to P5. P5 loads Lot 2, Lot 3, and Lot 4 North-to-South down toward P4 and P3. During dismissal (9:45 & 11:45), P4/P3/P2 flush Lots 2–4 South for 12 minutes.'
  },
  {
    code: 'Posts P6, P7, P8 & P9',
    title: 'North Lots 5–8, Lot 9 (Grass) & Lot 10 (Brick Wall) (4 Hosts)',
    color: 'purple-4',
    icon: 'local_parking',
    desc: 'P6 & P7 load Lots 5, 6, 7, 8 right-to-left and Lot 9 (Grass Lot). P6 keeps the P6→P10 cut-through closed during service swaps so all North Lot cars exit via P8 → P9 Exit → P10.'
  },
  {
    code: 'Post P10 & Exit Lot 1',
    title: 'NW Building Corner & Exit Lot 1 Top (1 Host)',
    color: 'amber-5',
    icon: 'south',
    desc: 'Fills 1 (Exit Lot 1) first before each service, then holds Exit Lot 1 closed during the peak 15-minute egress window (9:48–10:03 AM) so P9 → P10 → P11 functions as an express exit lane.'
  },
  {
    code: 'Post P12 (🚫) & Hwy 2145',
    title: 'SE Cut-Through Block & Hwy 2145 Police (2 Officers + Cones)',
    color: 'blue-5',
    icon: 'local_police',
    desc: 'P12 cones block the unpaved SE cut-through road, while 2 Huntersville Police officers at Hwy 2145 (Sam Furr Rd) & University City Church Dr hold highway traffic for 60–90s exit waves.'
  },
  {
    code: '3 Greeter Posts (G)',
    title: 'SW Door, SE Main Canopy & NE Gym/Kids Entrances (3 Greeters)',
    color: 'grey-4',
    icon: 'escalator_warning',
    desc: 'Stationed at the 3 "G" circles around the building. Batches pedestrian crossings every 60 seconds so a trickle of walkers never freezes cars moving past P4, P6, or P11.'
  }
]
