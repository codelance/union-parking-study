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
    label: 'Arrival & Drop-Off',
    color: 'positive',
    badge: 'Viewing: View 1 • Arrival & Family Drop-Off (8:00 AM)',
    title: 'How Guests Arrive, Drop Off Kids Safely, and Park (or Exit)',
    desc: 'Arriving cars (green arrows) come up the right lane of the entrance drive and turn RIGHT at V1. Families dropping off kids (blue arrows) loop through the front canopy with passenger doors facing the sidewalk, then either park in the West Lot or exit down the open left lane (gold arrows).'
  },
  {
    value: 'swap',
    stepLabel: 'View 2 • 9:45 & 11:45',
    label: 'Between-Service Swap',
    color: 'warning',
    badge: 'Viewing: View 2 • Between-Service Swap (9:45 AM & 11:45 AM)',
    title: 'Zero-Conflict "Ping-Pong" Between Departing & Arriving Services',
    desc: 'While the 8:30 AM service exits down the West back road and Left Outbound Lane (gold arrows), early 10:30 AM arrivals come up the Right Inbound Lane (green arrows), bypass the emptying East Lot, and park in the fresh North Lot—zero cars backing out in front of arriving guests!'
  },
  {
    value: 'egress',
    stepLabel: 'View 3 • 1:45 PM',
    label: 'Final Dismissal',
    color: 'info',
    badge: 'Viewing: View 3 • Final Dismissal After 12:30 PM Service (1:45 PM)',
    title: 'Both Entrance Lanes Flip Outbound to Empty Campus in 15 Minutes',
    desc: 'After the final 12:30 PM service finishes at 1:45 PM (with no 4th service arriving), hosts flip the entrance road so BOTH lanes go Outbound: the West side turns Left (Westbound NC-73) and the East side turns Right (Eastbound toward I-77).'
  },
  {
    value: 'expand',
    stepLabel: 'View 4 • Future',
    label: '+360 New Spaces',
    color: 'accent',
    badge: 'Viewing: View 4 • Future +360 Space Expansion (450 → 810 Spaces)',
    title: 'Adding +360 Spaces on the NE & East Side (Preserving the School Turf Field)',
    desc: 'Because the West side is the school\'s athletic turf field, all parking expansion happens on the Northeast & East side: New Lot E1 (+175 spaces in the NE Wedge), New Lot E2 (+125 spaces expanding the East Lot), and E3 (+60 perimeter stalls).'
  }
]

export const postData = {
  hpd: {
    id: 'hpd',
    code: 'P1',
    shortLabel: 'P1: Sam Furr Police',
    color: 'blue-8',
    title: 'P1: Sam Furr Rd Entrance (2 Huntersville Police Officers)',
    detail:
      'Stationed at the highway entrance. Ensures incoming cars turn into campus smoothly without backing up Sam Furr Rd, and holds highway traffic for 60–90 seconds at a time to let large waves of church cars exit between services.'
  },
  split: {
    id: 'split',
    code: 'V1',
    shortLabel: 'V1: Entrance Split',
    color: 'amber-8',
    title: 'V1: Entrance Split at Top of Creek Bridge (2 Dream Team Hosts)',
    detail:
      'The most important spot on campus! Cones separate the Right Lane (Arriving Cars turning right) from the Left Lane (Departing Cars heading straight out to Sam Furr Rd) so incoming and outgoing cars never cross paths.'
  },
  crosswalk: {
    id: 'crosswalk',
    code: 'V2',
    shortLabel: 'V2: Canopy Drop-Off',
    color: 'red-8',
    title: 'V2: Front Canopy Family Drop-Off Loop (NE → SW)',
    detail:
      'Runs Northeast-to-Southwest so children and seniors step out on the right-hand curb directly onto the covered sidewalk. An inner curb lane unloads 6–8 cars at once while an outer Chick-fil-A bypass lane lets unloaded cars exit immediately to park (West Lot) or leave campus.'
  },
  east: {
    id: 'east',
    code: 'V3',
    shortLabel: 'V3: East Lot',
    color: 'teal-8',
    title: 'V3: East Parking Lot (~210 Spaces) & Canopy Entry Split',
    detail:
      'Main lot for the 8:30 AM and 12:30 PM services. At the East Corner, hosts wave Family Drop-Offs and Seniors/ADA left into the Front Canopy Loop while guiding general parking row-by-row into the 3 East aisles.'
  },
  north: {
    id: 'north',
    code: 'V4',
    shortLabel: 'V4: North Lot',
    color: 'purple-8',
    title: 'V4: North Parking Lot (~150 Spaces)',
    detail:
      'Has 4 parallel rows plus curved west bays adjacent to the school turf field. During the 9:45 AM turnaround (while 8:30 AM is leaving the East Lot), early 10:30 AM arrivals are sent straight here so they park effortlessly.'
  },
  turf: {
    id: 'turf',
    code: 'TURF',
    shortLabel: 'School Turf Field',
    color: 'green-8',
    title: 'Ambassador Christian School Athletic Turf Field (Protected — Do Not Pave)',
    detail:
      'Located immediately West/Northwest of the building and NW parking bays. This is the school\'s dedicated athletic turf field and is 100% preserved in our expansion plan—all new parking is placed on the Northeast and East sides of campus instead.'
  },
  e1: {
    id: 'e1',
    code: 'E1',
    shortLabel: 'E1: +175 Spaces',
    color: 'purple-6',
    title: 'New Lot E1: North-East Wedge (+175 Spaces • Priority #1)',
    detail:
      '1.38-acre V-shaped grass area right between the East Lot and North Lot (on the opposite side of campus from the school turf field). Because it already touches our existing asphalt roads on two sides, gravelling or paving E1 adds +175 spaces AND connects the East and North lots into a complete outer loop!'
  },
  e2: {
    id: 'e2',
    code: 'E2',
    shortLabel: 'E2: +125 Spaces',
    color: 'purple-6',
    title: 'New Lot E2: East Lot Outer Expansion Bays (+125 Spaces • Priority #2)',
    detail:
      '1.05-acre upland corridor (480 ft × 95 ft) immediately East of the existing East Fan Lot. Adding two outer parking bays along the East side expands our closest lot by +125 spaces without touching the school\'s athletic turf field on the West side.'
  },
  e3: {
    id: 'e3',
    code: 'E3',
    shortLabel: 'E3: +60 Spaces',
    color: 'purple-6',
    title: 'New Lot E3: North Apex & Perimeter Shoulder Stalls (+60 Spaces • Priority #3)',
    detail:
      '0.50-acre perimeter expansion adding angled spaces around the North Lot apex and outer drive shoulders, yielding +60 fast-exit spaces with minimal grading.'
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
    desc: 'Place 45 cones to keep 1 Lane In / 1 Lane Out on the entrance drive, run the front canopy drop-off NE→SW, and park all 90 Dream Team cars on the North-East grass wedge (Zone E1).'
  },
  {
    phase: 'Phase 2: Quick Gravel/Geocell on NE Wedge (+175 Spaces)',
    color: 'text-info',
    icon: 'terrain',
    desc: 'Stabilize the 1.38-acre V-shaped grass notch between the East and North lots (Zone E1) with gravel/geocell so it works in rainy weather and connects both lots into a full loop.'
  },
  {
    phase: 'Phase 3: Pave East & NE Expansion (+360 Spaces → 810 Total)',
    color: 'text-accent',
    icon: 'construction',
    desc: 'Pave Zone E1 (+175 in NE Wedge), Zone E2 (+125 expanding East Lot), and Zone E3 (+60 perimeter stalls) while 100% preserving the school\'s athletic turf field on the West side.'
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
    name: 'Zone E1: North-East Wedge',
    priority: '★ Priority #1 (Best ROI)',
    priorityColor: 'positive',
    location: 'Open grass V-notch right between the East Lot and the North Lot (away from the school turf field)',
    size: "339' × 190' (1.38 Acres)",
    spaces: '+175 Spaces',
    why: 'Already bordered on 2 sides by our existing asphalt roads! Connecting this wedge links the East and North lots into a complete outer ring road and can be used immediately as grass/gravel overflow.'
  },
  {
    id: 'e2',
    name: 'Zone E2: East Lot Outer Expansion',
    priority: 'Priority #2',
    priorityColor: 'info',
    location: 'Upland corridor along the eastern curve of the East Fan Lot (preserving the West school turf field)',
    size: "480' × 95' (1.05 Acres)",
    spaces: '+125 Spaces',
    why: 'Extends our main East Lot outward by two double-loaded bays right next to the auditorium entrance while keeping 100% of the school\'s athletic turf field untouched.'
  },
  {
    id: 'e3',
    name: 'Zone E3: North Apex & Perimeter Bays',
    priority: 'Priority #3',
    priorityColor: 'grey-6',
    location: 'Angled perimeter bays around the North Lot apex and outer drive shoulders',
    size: "360' × 60' (0.50 Acres)",
    spaces: '+60 Spaces',
    why: 'Easy perimeter spaces along existing drive lanes requiring minimal grading and zero impact on athletic facilities.'
  }
]

export const sundayTimeline = [
  {
    time: '7:15 AM',
    title: 'Cone & Sign Setup',
    color: 'positive',
    icon: 'traffic',
    desc: 'Place 45 cones down the center of the S-Curve entrance drive (Ambassador Christian Way) so the Right Lane is Inbound and the Left Lane is Outbound.'
  },
  {
    time: '7:30 AM',
    title: 'Dream Team & Staff Arrival',
    color: 'positive',
    icon: 'groups',
    desc: 'All staff & volunteers park on the North-East Grass Wedge (Zone E1) or off-site shuttle lot—saving 100% of paved spaces for guests.'
  },
  {
    time: '8:00 – 8:35 AM',
    title: '8:30 AM Service Arrival',
    color: 'positive',
    icon: 'directions_car',
    desc: 'Guests turn Right at V1 and park row-by-row in the East Lot (Zone B). Family drop-offs use the Front Canopy Loop (NE→SW) and either park in the West Lot or exit down the Left Outbound Lane.'
  },
  {
    time: '9:40 – 10:25 AM',
    title: 'Turnaround Swap #1 (8:30 Out / 10:30 In)',
    color: 'warning',
    icon: 'sync_alt',
    desc: '8:30 AM exits around the North/West back road and down the Left Outbound Lane to Sam Furr Rd. Early 10:30 AM arrivals (9:45–10:10 AM) drive up the Right Inbound Lane, go past the emptying East Lot, and park in the fresh North Lot (Zone C). At 10:10 AM, hosts reopen the East Lot.'
  },
  {
    time: '11:40 AM – 12:25 PM',
    title: 'Turnaround Swap #2 (10:30 Out / 12:30 In)',
    color: 'warning',
    icon: 'sync_alt',
    desc: '10:30 AM departures drain down the West Perimeter Road and Left Outbound Lane while 12:30 PM arrivals climb the Right Inbound Lane and park in the first-cleared lot.'
  },
  {
    time: '1:40 – 2:05 PM',
    title: '12:30 PM Final Dismissal (Dual Outbound Flush)',
    color: 'info',
    icon: 'outbound',
    desc: 'Because no 4th service is arriving, hosts flip the entrance drive to 2 Outbound Lanes (Left lane turns West onto Sam Furr Rd; Right lane turns East toward I-77) to empty the entire campus in under 18 minutes.'
  }
]

export const stationDutyCards = [
  {
    code: 'Station P1',
    title: 'Sam Furr Rd Entrance (2 Police Officers)',
    color: 'blue-5',
    icon: 'local_police',
    desc: 'Positioned at Sam Furr Rd (NC-73). Keeps incoming cars turning into campus smoothly without backing up the highway, and lets departing groups out every 60–90 seconds between services.'
  },
  {
    code: 'Station V1',
    title: 'Bottom of Entrance Drive (2 Hosts)',
    color: 'amber-5',
    icon: 'call_split',
    desc: 'Waves every arriving car to the RIGHT at 15 mph (no stopping or asking questions) while keeping the cone line closed so departing cars on the West side flow straight out to Sam Furr Rd.'
  },
  {
    code: 'Station V2',
    title: 'Front Canopy & Crosswalk (2 Hosts)',
    color: 'red-5',
    icon: 'escalator_warning',
    desc: 'Motions drop-off cars all the way forward along the sidewalk so 6–8 families unload at once, keeps the outer bypass lane clear, and crosses pedestrians in groups every 60 seconds.'
  },
  {
    code: 'Station V3',
    title: 'East Parking Lot Team (3 Hosts)',
    color: 'teal-4',
    icon: 'local_parking',
    desc: 'Directs drop-offs & VIPs left into the Canopy Loop at the East Corner and parks the East Lot (~210 spaces) row-by-row. Closes the East Lot from 9:45–10:10 AM while 8:30 AM cars exit.'
  },
  {
    code: 'Station V4',
    title: 'North Parking Lot Team (3 Hosts)',
    color: 'purple-4',
    icon: 'local_parking',
    desc: 'Parks the 4 North ladder rows (~150 spaces) front-to-back. Serves as the main receiving lot for early 10:30 AM arrivals (9:45–10:10 AM) while the East Lot empties out.'
  },
  {
    code: 'Supply Kit',
    title: 'Sunday Morning Equipment Checklist',
    color: 'grey-4',
    icon: 'inventory_2',
    desc: '• 45x 28" orange traffic cones • 6x A-Frame directional signs • 14x High-visibility vests & LED wands • 6x Walkie-talkies (Channel 3)'
  }
]
