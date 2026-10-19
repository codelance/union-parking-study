<template>
  <div>
    <!-- Slim Top Key Numbers Bar (Monochrome Black & White) -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-6 col-md-3">
        <div class="uc-card q-pa-md">
          <div class="text-caption uc-muted text-uppercase text-weight-bold" style="letter-spacing: 0.05em">Auditorium Capacity</div>
          <div class="text-h5 text-weight-bolder q-mt-xs">2,100 Seats</div>
          <div class="text-caption uc-muted">80,081 sq ft building</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="uc-card q-pa-md">
          <div class="text-caption uc-muted text-uppercase text-weight-bold" style="letter-spacing: 0.05em">Paved Spaces Today</div>
          <div class="text-h5 text-weight-bolder q-mt-xs">~450 Spaces</div>
          <div class="text-caption uc-muted">4.29 acres paved</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="uc-card q-pa-md">
          <div class="text-caption uc-muted text-uppercase text-weight-bold" style="letter-spacing: 0.05em">East/NE Expansion</div>
          <div class="text-h5 text-weight-bolder q-mt-xs">+360 Spaces</div>
          <div class="text-caption uc-muted">810 total (Turf field preserved)</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="uc-card q-pa-md">
          <div class="text-caption uc-muted text-uppercase text-weight-bold" style="letter-spacing: 0.05em">Sunday Gatherings</div>
          <div class="text-h5 text-weight-bolder q-mt-xs">8:30 • 10:30 • 12:30</div>
          <div class="text-caption uc-muted">45-min turnaround window</div>
        </div>
      </div>
    </div>

    <!-- Main 2-Column Workspace: Map (Left 7 cols) + Controls (Right 5 cols) -->
    <div class="row q-col-gutter-lg items-start">
      <!-- Left 7 Columns: Interactive Campus Map -->
      <div class="col-12 col-md-7">
        <div class="uc-card q-pa-md q-pa-md-lg">
          <div class="row items-center justify-between q-mb-md">
            <div>
              <div class="text-h6 text-weight-bolder">Campus Traffic &amp; Parking Map</div>
              <div class="text-body2 uc-muted">
                Select a Sunday phase below or click any numbered circle (<strong>P1, V1–V4</strong>) on the map.
              </div>
            </div>
            <span class="uc-pill-outline gt-xs">North ↑ • Satellite Geometry</span>
          </div>

          <!-- Clean Monochrome 4-Step Segmented Selector -->
          <div class="row q-col-gutter-sm q-mb-md">
            <div
              v-for="opt in phaseOptions"
              :key="opt.value"
              class="col-6 col-sm-3"
            >
              <q-btn
                :unelevated="currentPhase === opt.value"
                :outline="currentPhase !== opt.value"
                :color="currentPhase === opt.value ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-7'"
                :text-color="currentPhase === opt.value ? ($q.dark.isActive ? 'dark' : 'white') : undefined"
                no-caps
                class="full-width full-height q-py-sm"
                style="border-radius: 10px"
                @click="setPhase(opt.value)"
              >
                <div class="full-width text-left">
                  <div class="text-caption text-uppercase text-weight-bold" style="font-size: 10px; opacity: 0.75">
                    {{ opt.stepLabel }}
                  </div>
                  <div class="text-body2 text-weight-bold" style="line-height: 1.25">
                    {{ opt.label }}
                  </div>
                </div>
              </q-btn>
            </div>
          </div>

          <!-- SVG Map Viewport -->
          <div
            class="q-pa-sm flex flex-center overflow-hidden"
            style="background: #0b1120; border: 1px solid #27272a; border-radius: 12px"
          >
            <svg
              viewBox="55 15 395 612"
              style="width: 100%; max-height: 510px; height: auto; user-select: none"
              role="img"
              aria-label="Campus Map of 11901 Sam Furr Rd"
            >
              <defs>
                <marker id="arr-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
                </marker>
                <marker id="arr-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
                </marker>
                <marker id="arr-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
                </marker>
                <marker id="arr-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
                </marker>
              </defs>

              <!-- 1. Surrounding Tree Canopy -->
              <path d="M 372.3,2.1 L 318.4,36.4 L 298.9,107.5 L 244.6,94.6 L 223.1,25.9 L 146.3,-25.1 L 19.6,161.9 L 56.1,229.3 L 103.5,263.7 L 134.2,280.6 L 216.9,400.3 L 233.5,428.8 L 240.8,448.8 L 234.6,463.6 L 218.1,480.2 L 204.3,511.7 L 208.9,543.0 L 223.1,573.4 L 239.7,597.2 L 60,640 L 60,2.1 Z" fill="#064e3b" fill-opacity="0.3" stroke="#059669" stroke-opacity="0.2" stroke-width="1" />
              <path d="M 259.9,559.7 L 291.1,560.5 L 357.3,515.2 L 355.2,490.4 L 348.6,437.3 L 341.0,426.8 L 320.0,436.3 L 250.3,490.8 L 243.0,507.5 L 242.7,525.3 L 250.0,545.4 Z" fill="#064e3b" fill-opacity="0.35" stroke="#059669" stroke-opacity="0.25" stroke-width="1" />

              <!-- 1B. Ambassador Christian School Athletic Turf Field (NW Side — Protected) -->
              <g class="marker-btn" @click="selectPost('turf')">
                <polygon
                  points="135.0,108.0 162.0,126.5 112.0,200.5 85.0,182.0"
                  fill="#065f46"
                  fill-opacity="0.75"
                  stroke="#34d399"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                />
                <!-- Midfield line & markings on turf field -->
                <line x1="110.0" y1="145.0" x2="137.0" y2="163.5" stroke="#a7f3d0" stroke-opacity="0.55" stroke-width="1" />
                <circle cx="123.5" cy="154.2" r="6" fill="none" stroke="#a7f3d0" stroke-opacity="0.55" stroke-width="1" />
                <text x="123" y="152" text-anchor="middle" fill="#ecfdf5" font-size="7.5" font-weight="700" transform="rotate(-56 123 152)">SCHOOL TURF</text>
                <text x="131" y="158" text-anchor="middle" fill="#a7f3d0" font-size="6.8" font-weight="600" transform="rotate(-56 131 158)">FIELD (PROTECTED)</text>
              </g>

              <!-- 2. Ramah Creek Stream & Culvert Bridge -->
              <path d="M 74.1,274.3 L 96.3,292.0 L 120.2,304.9 L 144.7,331.5 L 169.3,368.4 L 191.6,397.3 L 205.8,419.9 L 236.3,454.1" fill="none" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="3.5" />
              <path d="M 236.3,454.1 L 260.6,483.4" fill="none" stroke="#38bdf8" stroke-opacity="0.85" stroke-width="3" stroke-dasharray="3 3" />
              <path d="M 260.6,483.4 L 277.2,505.2 L 307.4,530.8 L 319.9,538.3 L 359.4,559.3 L 383.5,565.5 L 429.6,580.0 L 461.4,583.9" fill="none" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="3.5" />
              <text x="155" y="390" fill="#38bdf8" opacity="0.85" font-size="10" font-style="italic" transform="rotate(48 155 390)">Ramah Creek &amp; Bridge</text>

              <!-- 3. Actual Paved Parking Lot Polygons (~450 Spaces Today) -->
              <path d="M 308.9,171.7 L 265.2,166.1 L 250.6,160.6 L 210.5,30.9 L 149.0,121.6 L 169.8,153.6 L 139.6,193.2 L 139.6,236.1 L 155.7,254.5 L 235.2,205.7 L 332.9,336.3 L 360.0,333.0 L 372.1,322.5 L 379.7,314.6 L 382.5,278.2 L 374.1,241.0 L 322.7,175.7 Z" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
              <path d="M 160.5,257.2 L 155.5,262.7 L 210.3,346.2 L 215.3,339.9 Z" fill="#1e293b" stroke="#38bdf8" stroke-opacity="0.6" stroke-width="1.2" />

              <!-- 4. Actual Paved Campus Roads & Parking Aisles -->
              <path d="M 276.8,602.1 L 235.0,549.6 L 229.8,538.3 L 226.5,526.1 L 224.8,514.0 L 225.1,501.8 L 228.5,489.4 L 235.5,477.4 L 243.7,468.2 L 257.7,457.1 L 274.1,445.5" fill="none" stroke="#334155" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M 276.8,602.1 L 235.0,549.6 L 229.8,538.3 L 226.5,526.1 L 224.8,514.0 L 225.1,501.8 L 228.5,489.4 L 235.5,477.4 L 243.7,468.2 L 257.7,457.1 L 274.1,445.5" fill="none" stroke="#475569" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" />
              <line x1="230" y1="471" x2="242" y2="459" stroke="#94a3b8" stroke-width="2" />
              <line x1="241" y1="481" x2="253" y2="469" stroke="#94a3b8" stroke-width="2" />

              <path d="M 257.7,457.1 L 274.1,445.5 L 361.5,383.8 L 363.8,378.3 L 364.5,373.6 L 363.6,368.5 L 346.8,333.6 L 299.5,262.6 L 241.1,174.8 L 249.7,166.8 L 241.3,146.7 L 240.0,141.9 L 236.1,127.8 L 231.4,110.3 L 217.9,60.0 L 213.9,45.6 L 212.3,41.2 L 209.5,37.2 L 206.5,35.5 L 199.1,35.4 L 195.7,38.5 L 145.4,111.9 L 144.0,114.5 L 143.3,117.7 L 143.7,120.9 L 145.2,124.0 L 165.3,137.9 L 167.2,139.0 L 174.8,143.4 L 177.0,146.5 L 192.8,168.0 L 195.0,171.0 L 211.2,193.1 L 138.8,243.7 L 201.6,346.8 L 230.1,384.5 L 243.3,402.8 L 274.1,445.5" fill="none" stroke="#334155" stroke-width="11" stroke-linejoin="round" />
              <path d="M 243.3,402.8 L 259.0,394.1 L 280.5,388.6 L 285.8,395.6 L 290.3,400.6 L 294.5,402.4 L 299.6,402.4 L 322.5,387.1 L 325.3,383.1 L 325.3,378.9 L 323.8,373.8 L 318.8,364.2 L 324.3,354.0 L 335.2,341.3 L 346.8,333.6" fill="none" stroke="#334155" stroke-width="9.5" stroke-linejoin="round" />
              <path d="M 138.8,243.7 L 132.4,242.7 L 128.1,240.4 L 125.0,236.4 L 123.4,232.0 L 123.9,227.3 L 125.8,222.8 L 130.3,216.3 L 135.9,208.8 L 140.3,203.9 L 140.5,203.8 L 192.8,168.0" fill="none" stroke="#334155" stroke-width="8" stroke-linejoin="round" />
              <path d="M 140.5,203.8 L 135.1,195.3 L 133.5,190.2 L 134.0,185.4 L 137.0,178.3 L 152.2,156.6 L 167.2,139.0" fill="none" stroke="#334155" stroke-width="8" stroke-linejoin="round" />
              <path d="M 165.3,137.9 L 173.1,120.4 L 217.9,60.0" fill="none" stroke="#334155" stroke-width="7.5" />
              <path d="M 177.0,146.5 L 231.4,110.3" fill="none" stroke="#334155" stroke-width="7.5" />
              <path d="M 195.0,171.0 L 240.0,141.9" fill="none" stroke="#334155" stroke-width="7.5" />
              <path d="M 211.2,193.1 L 241.1,174.8" fill="none" stroke="#334155" stroke-width="7.5" />
              <path d="M 249.7,166.8 L 262.6,173.2 L 276.0,174.6 L 306.6,177.8 L 313.3,178.7 L 318.0,182.2 L 347.0,227.8 L 376.7,274.4 L 379.3,280.0 L 380.8,287.5 L 381.4,295.4 L 379.8,303.5 L 376.5,309.2 L 367.1,317.8 L 346.8,333.6" fill="none" stroke="#334155" stroke-width="9" stroke-linejoin="round" />
              <path d="M 367.1,317.8 L 362.4,304.9 L 323.1,245.6 L 276.0,174.6" fill="none" stroke="#334155" stroke-width="8" stroke-linejoin="round" />
              <path d="M 347.0,227.8 L 323.1,245.6 L 299.5,262.6" fill="none" stroke="#334155" stroke-width="7.5" />

              <!-- Painted White Parking Stall Stripes -->
              <path d="M 168.4,126.7 L 180.2,132.0 M 170.9,121.2 L 182.7,126.5 M 176.2,110.2 L 186.6,118.0 M 179.8,105.4 L 190.2,113.2 M 183.4,100.6 L 193.8,108.4 M 187.0,95.8 L 197.4,103.6 M 190.6,91.0 L 201.0,98.8 M 194.2,86.2 L 204.6,94.0 M 197.8,81.4 L 208.2,89.2 M 201.4,76.6 L 211.8,84.4 M 205.0,71.8 L 215.4,79.6 M 208.6,67.0 L 219.0,74.8 M 178.4,137.8 L 185.6,148.6 M 183.4,134.5 L 190.6,145.3 M 188.4,131.1 L 195.6,141.9 M 193.4,127.8 L 200.6,138.6 M 198.4,124.5 L 205.6,135.3 M 203.4,121.2 L 210.6,132.0 M 208.4,117.8 L 215.6,128.6 M 213.4,114.5 L 220.6,125.3 M 218.4,111.2 L 225.6,122.0 M 196.5,162.3 L 203.6,173.2 M 201.5,159.0 L 208.6,169.9 M 206.6,155.8 L 213.7,166.7 M 211.6,152.5 L 218.7,163.4 M 216.6,149.2 L 223.7,160.1 M 221.7,146.0 L 228.8,156.9 M 226.7,142.7 L 233.8,153.6 M 231.8,139.5 L 238.9,150.4 M 212.8,184.5 L 219.7,195.6 M 217.9,181.4 L 224.8,192.5 M 223.0,178.3 L 229.9,189.4 M 228.1,175.1 L 235.0,186.2 M 233.3,172.0 L 240.2,183.1 M 367.9,302.3 L 353.8,307.5 M 365.9,296.7 L 351.8,301.9 M 365.3,295.9 L 352.8,304.1 M 362.0,290.9 L 349.5,299.1 M 358.7,285.9 L 346.2,294.1 M 355.4,280.9 L 342.9,289.1 M 352.1,275.9 L 339.6,284.1 M 348.8,270.9 L 336.3,279.1 M 345.5,265.9 L 333.0,274.1 M 342.2,260.9 L 329.7,269.1 M 338.9,255.9 L 326.4,264.1 M 335.6,250.9 L 323.1,259.1 M 326.1,236.4 L 313.6,244.6 M 322.8,231.4 L 310.3,239.6 M 319.5,226.4 L 307.0,234.6 M 316.2,221.4 L 303.7,229.6 M 312.9,216.4 L 300.4,224.6 M 309.6,211.4 L 297.1,219.6 M 306.3,206.4 L 293.8,214.6 M 303.0,201.4 L 290.5,209.6 M 299.7,196.4 L 287.2,204.6 M 293.1,186.4 L 280.6,194.6 M 289.8,181.4 L 277.3,189.6 M 349.3,324.8 L 337.7,332.5 M 346.0,319.8 L 334.4,327.5 M 342.6,314.8 L 331.0,322.5 M 339.3,309.8 L 327.7,317.5 M 336.0,304.8 L 324.4,312.5 M 332.7,299.8 L 321.1,307.5 M 329.4,294.8 L 317.8,302.5 M 326.0,289.8 L 314.4,297.5 M 322.7,284.8 L 311.1,292.5 M 319.4,279.8 L 307.8,287.5 M 316.1,274.8 L 304.5,282.5 M 312.8,269.8 L 301.2,277.5 M 306.1,259.8 L 294.5,267.5 M 302.8,254.8 L 291.2,262.5 M 299.5,249.8 L 287.9,257.5 M 296.1,244.8 L 284.5,252.5 M 292.8,239.8 L 281.2,247.5 M 289.5,234.8 L 277.9,242.5 M 286.2,229.8 L 274.6,237.5 M 282.9,224.8 L 271.3,232.5 M 279.5,219.8 L 267.9,227.5 M 276.2,214.8 L 264.6,222.5 M 272.9,209.8 L 261.3,217.5 M 269.6,204.8 L 258.0,212.5 M 266.3,199.8 L 254.7,207.5 M 263.0,194.8 L 251.4,202.5 M 259.6,189.8 L 248.0,197.5 M 256.3,184.8 L 244.7,192.5 M 161.0,264.6 L 166.5,261.0 M 164.0,269.2 L 169.5,265.6 M 167.1,273.8 L 172.6,270.2 M 170.1,278.4 L 175.6,274.8 M 173.1,283.0 L 178.6,279.4 M 176.1,287.6 L 181.6,284.0 M 179.1,292.1 L 184.6,288.5 M 182.1,296.7 L 187.6,293.1 M 185.2,301.3 L 190.7,297.7 M 188.2,305.9 L 193.7,302.3 M 191.2,310.5 L 196.7,306.9 M 194.2,315.1 L 199.7,311.5 M 197.2,319.7 L 202.7,316.1 M 200.2,324.3 L 205.7,320.7 M 203.3,328.9 L 208.8,325.3 M 206.3,333.5 L 211.8,329.9 M 209.3,338.1 L 214.8,334.5" stroke="#94a3b8" stroke-opacity="0.45" stroke-width="1" />

              <!-- 5. Sam Furr Rd (NC-73) 4-Lane Highway -->
              <path d="M 190.0,673.0 L 251.7,622.5 L 276.8,602.1 L 314.2,572.2 L 352.8,543.1 L 445.0,479.0" fill="none" stroke="#334155" stroke-width="28" />
              <path d="M 190.0,673.0 L 251.7,622.5 L 276.8,602.1 L 314.2,572.2 L 352.8,543.1 L 445.0,479.0" fill="none" stroke="#475569" stroke-width="24" />
              <path d="M 190.0,673.0 L 251.7,622.5 L 276.8,602.1 L 314.2,572.2 L 352.8,543.1 L 445.0,479.0" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" />
              <text x="345" y="562" fill="#e2e8f0" font-size="11" font-weight="700" transform="rotate(-36 345 562)">Sam Furr Rd (NC-73)</text>

              <!-- 6. Actual Building Footprint -->
              <path d="M 243.3,241.5 L 254.1,256.6 L 256.9,260.6 L 266.6,254.0 L 268.8,257.3 L 291.4,291.2 L 297.4,287.1 L 312.4,309.6 L 306.3,313.5 L 320.0,333.9 L 309.2,341.1 L 310.5,342.8 L 309.0,343.7 L 306.2,345.5 L 304.6,346.5 L 303.5,345.0 L 297.2,349.2 L 301.0,354.7 L 298.4,356.6 L 299.8,358.4 L 302.0,361.2 L 298.5,363.6 L 302.7,369.5 L 310.0,379.9 L 304.8,383.3 L 302.6,384.7 L 297.4,388.1 L 290.2,377.9 L 286.1,372.2 L 283.8,373.8 L 281.5,370.9 L 280.1,369.1 L 278.0,370.6 L 273.5,365.1 L 267.6,369.1 L 268.8,370.7 L 266.7,372.2 L 264.7,373.6 L 262.7,375.0 L 261.5,373.2 L 250.9,380.3 L 236.1,358.0 L 232.5,360.1 L 218.1,338.9 L 221.7,336.4 L 214.5,325.5 L 213.2,323.5 L 211.7,321.3 L 209.6,318.1 L 205.9,320.7 L 199.4,311.1 L 203.1,308.4 L 198.0,300.6 L 202.3,297.7 L 207.5,294.2 L 205.5,291.4 L 196.3,278.8 L 194.9,276.8 L 187.0,265.9 L 236.1,231.5 L 241.7,239.3 Z" fill="#18181b" fill-opacity="0.95" stroke="#ffffff" stroke-width="1.6" />
              <line x1="221.7" y1="336.4" x2="297.4" y2="287.1" stroke="#a1a1aa" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="3 3" />
              <text x="245" y="286" text-anchor="middle" fill="#d4d4d8" font-size="9.5" font-weight="600" transform="rotate(-34 245 286)">GYM &amp; KIDS</text>
              <text x="272" y="336" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700" transform="rotate(-34 272 336)">2,100-SEAT</text>
              <text x="280" y="348" text-anchor="middle" fill="#e4e4e7" font-size="10" font-weight="700" transform="rotate(-34 280 348)">AUDITORIUM</text>

              <text x="150" y="315" text-anchor="middle" fill="#f4f4f5" font-size="10" font-weight="700" transform="rotate(55 150 315)">WEST LOT (~90)</text>
              <text x="348" y="245" text-anchor="middle" fill="#f4f4f5" font-size="10.5" font-weight="700" transform="rotate(56 348 245)">EAST LOT (~210)</text>
              <text x="172" y="75" text-anchor="middle" fill="#f4f4f5" font-size="10.5" font-weight="700" transform="rotate(-55 172 75)">NORTH LOT (~150)</text>

              <!-- PHASE 1: ARRIVAL + PASSENGER-SIDE DROP-OFF + ESCAPE LANE -->
              <g v-show="currentPhase === 'ingress'">
                <polygon points="244.6,94.6 298.9,107.5 345.0,155.0 250.6,160.6 228.0,95.0" fill="#f59e0b" fill-opacity="0.16" stroke="#f59e0b" stroke-opacity="0.7" stroke-width="1.2" stroke-dasharray="4 3" />
                <text x="292" y="128" text-anchor="middle" fill="#fcd34d" font-size="10.5" font-weight="700">VOLUNTEER GRASS LOT</text>
                <text x="292" y="140" text-anchor="middle" fill="#fde68a" font-size="9.5">Dream Team (+90–100 Cars)</text>

                <path d="M 350.0,541.0 L 279.8,599.7 L 238.1,547.3 L 233.4,537.0 L 230.2,525.3 L 228.6,513.8 L 228.9,502.4 L 232.0,490.9 L 238.6,479.6 L 246.3,471.0 L 260.0,460.1 L 276.3,448.6 L 361.5,383.8 L 364.5,373.6 L 346.8,333.6 L 367.1,317.8 L 380.8,287.5 L 347.0,227.8 L 313.3,178.7 L 249.7,166.8" fill="none" stroke="#10b981" stroke-width="3.2" class="flow-line" marker-end="url(#arr-green)" />
                <path d="M 367.1,317.8 L 323.1,245.6 L 282.0,183.0" fill="none" stroke="#10b981" stroke-width="2.5" class="flow-line" marker-end="url(#arr-green)" />
                <path d="M 346.8,333.6 L 324.3,354.0 L 318.8,364.2 L 325.3,383.1 L 299.6,402.4 L 280.5,388.6 L 243.3,402.8" fill="none" stroke="#38bdf8" stroke-width="3" class="flow-line" marker-end="url(#arr-blue)" />
                <path d="M 243.3,402.8 L 201.6,346.8 L 145.0,255.0" fill="none" stroke="#38bdf8" stroke-width="2.5" class="flow-line" marker-end="url(#arr-blue)" />
                <path d="M 243.3,402.8 L 271.9,442.4 L 255.4,454.1 L 241.1,465.4 L 232.4,475.2 L 225.0,487.9 L 221.3,501.2 L 221.0,514.2 L 222.8,526.9 L 226.2,539.6 L 231.9,551.9 L 273.8,604.5 L 222.0,645.0" fill="none" stroke="#f59e0b" stroke-width="2.6" class="flow-line" marker-end="url(#arr-amber)" />
                <g fill="#f97316">
                  <circle cx="255.0" cy="575.0" r="3" /><circle cx="235.0" cy="549.6" r="3" /><circle cx="228.0" cy="532.0" r="3" /><circle cx="224.8" cy="514.0" r="3" /><circle cx="226.8" cy="495.5" r="3" /><circle cx="235.5" cy="477.4" r="3" /><circle cx="257.7" cy="457.1" r="3" /><circle cx="274.1" cy="445.5" r="3.5" />
                </g>
              </g>

              <!-- PHASE 2: 9:45 & 11:45 TURNAROUND SWAP -->
              <g v-show="currentPhase === 'swap'">
                <path d="M 249.7,166.8 L 211.2,193.1 L 138.8,243.7 L 201.6,346.8 L 243.3,402.8 L 271.9,442.4 L 255.4,454.1 L 241.1,465.4 L 232.4,475.2 L 225.0,487.9 L 221.3,501.2 L 221.0,514.2 L 222.8,526.9 L 226.2,539.6 L 231.9,551.9 L 273.8,604.5 L 222.0,645.0" fill="none" stroke="#f59e0b" stroke-width="3.2" class="flow-line" marker-end="url(#arr-amber)" />
                <path d="M 350.0,541.0 L 279.8,599.7 L 238.1,547.3 L 233.4,537.0 L 230.2,525.3 L 228.6,513.8 L 228.9,502.4 L 232.0,490.9 L 238.6,479.6 L 246.3,471.0 L 260.0,460.1 L 276.3,448.6 L 361.5,383.8 L 364.5,373.6 L 346.8,333.6 L 367.1,317.8 L 380.8,287.5 L 347.0,227.8 L 313.3,178.7 L 249.7,166.8 L 231.4,110.3 L 206.5,35.5" fill="none" stroke="#10b981" stroke-width="3.2" class="flow-line" marker-end="url(#arr-green)" />
                <path d="M 346.8,333.6 L 318.8,364.2 L 299.6,402.4 L 243.3,402.8" fill="none" stroke="#38bdf8" stroke-width="2.6" class="flow-line" marker-end="url(#arr-blue)" />
                <g fill="#f97316">
                  <circle cx="255.0" cy="575.0" r="3" /><circle cx="235.0" cy="549.6" r="3" /><circle cx="224.8" cy="514.0" r="3" /><circle cx="235.5" cy="477.4" r="3" /><circle cx="257.7" cy="457.1" r="3" /><circle cx="274.1" cy="445.5" r="3.5" /><circle cx="290.0" cy="434.0" r="3.5" />
                </g>
              </g>

              <!-- PHASE 3: 1:45 PM FINAL EGRESS -->
              <g v-show="currentPhase === 'egress'">
                <path d="M 206.5,35.5 L 145.4,111.9 L 192.8,168.0 L 138.8,243.7 L 201.6,346.8 L 243.3,402.8 L 271.9,442.4 L 255.4,454.1 L 241.1,465.4 L 232.4,475.2 L 225.0,487.9 L 221.3,501.2 L 221.0,514.2 L 222.8,526.9 L 226.2,539.6 L 231.9,551.9 L 273.8,604.5 L 218.0,648.0" fill="none" stroke="#f59e0b" stroke-width="3.2" class="flow-line" marker-end="url(#arr-amber)" />
                <path d="M 276.0,174.6 L 323.1,245.6 L 367.1,317.8 L 346.8,333.6 L 364.5,373.6 L 361.5,383.8 L 276.3,448.6 L 260.0,460.1 L 246.3,471.0 L 238.6,479.6 L 232.0,490.9 L 228.9,502.4 L 228.6,513.8 L 230.2,525.3 L 233.4,537.0 L 238.1,547.3 L 279.8,599.7 L 365.0,536.0" fill="none" stroke="#38bdf8" stroke-width="3.2" class="flow-line" marker-end="url(#arr-blue)" />
                <g fill="#f97316">
                  <circle cx="255.0" cy="575.0" r="3" /><circle cx="235.0" cy="549.6" r="3" /><circle cx="224.8" cy="514.0" r="3" /><circle cx="235.5" cy="477.4" r="3" /><circle cx="257.7" cy="457.1" r="3" />
                </g>
              </g>

              <!-- PHASE 4: +360 STALL EXPANSION ZONES ON NE & EAST SIDE (PRESERVING TURF FIELD) -->
              <g v-show="currentPhase === 'expand'">
                <!-- E1: NE Infill Wedge (+175 Spaces) -->
                <polygon points="210.5,30.9 250.6,160.6 322.7,175.7 348.0,145.0 298.9,85.0" fill="#a855f7" fill-opacity="0.38" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" class="marker-btn" @click="selectPost('e1')" />
                <path d="M 347.0,227.8 L 318.0,182.2 L 285.0,105.0 L 210.5,30.9" fill="none" stroke="#c084fc" stroke-width="3" class="flow-line" marker-end="url(#arr-purple)" />
                <text x="282" y="112" text-anchor="middle" fill="#f3e8ff" font-size="11" font-weight="700" style="pointer-events: none">NEW LOT E1</text>
                <text x="282" y="125" text-anchor="middle" fill="#e9d5ff" font-size="10" font-weight="600" style="pointer-events: none">+175 Spaces (1.38 ac)</text>

                <!-- E2: East Lot Outer Expansion Bays (+125 Spaces) -->
                <polygon points="322.7,175.7 374.1,241.0 382.5,278.2 379.7,314.6 360.0,333.0 398.0,342.0 426.0,305.0 428.0,255.0 408.0,210.0 355.0,152.0" fill="#a855f7" fill-opacity="0.38" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" class="marker-btn" @click="selectPost('e2')" />
                <text x="398" y="250" text-anchor="middle" fill="#f3e8ff" font-size="10.5" font-weight="700" transform="rotate(56 398 250)" style="pointer-events: none">NEW LOT E2 (+125)</text>

                <!-- E3: North Apex & Perimeter Shoulder Bays (+60 Spaces) -->
                <polygon points="185.0,45.0 210.5,30.9 298.9,85.0 310.0,70.0 215.0,18.0 172.0,32.0" fill="#a855f7" fill-opacity="0.38" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" class="marker-btn" @click="selectPost('e3')" />
                <text x="245" y="42" text-anchor="middle" fill="#f3e8ff" font-size="9.5" font-weight="700" transform="rotate(30 245 42)" style="pointer-events: none">E3: +60</text>
              </g>

              <!-- CLICKABLE POLICE & VOLUNTEER POST MARKERS -->
              <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'hpd' }]" @click="selectPost('hpd')">
                <circle cx="276.8" cy="602.1" r="14" fill="#18181b" stroke="#ffffff" stroke-width="2" />
                <text x="276.8" y="606.1" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">P1</text>
              </g>
              <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'split' }]" @click="selectPost('split')">
                <circle cx="274.1" cy="445.5" r="13.5" fill="#18181b" stroke="#ffffff" stroke-width="2" />
                <text x="274.1" y="449.5" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V1</text>
              </g>
              <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'crosswalk' }]" @click="selectPost('crosswalk')">
                <circle cx="305.0" cy="396.0" r="13.5" fill="#18181b" stroke="#ffffff" stroke-width="2" />
                <text x="305.0" y="400.0" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V2</text>
              </g>
              <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'east' }]" @click="selectPost('east')">
                <circle cx="362.0" cy="295.0" r="13.5" fill="#18181b" stroke="#ffffff" stroke-width="2" />
                <text x="362.0" y="299.0" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V3</text>
              </g>
              <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'north' }]" @click="selectPost('north')">
                <circle cx="235.0" cy="145.0" r="13.5" fill="#18181b" stroke="#ffffff" stroke-width="2" />
                <text x="235.0" y="149.0" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V4</text>
              </g>

              <!-- North Compass Badge -->
              <g transform="translate(82, 42)">
                <circle cx="0" cy="0" r="14" fill="#18181b" stroke="#71717a" stroke-width="1.2" />
                <path d="M 0 -9 L 4 5 L 0 2 L -4 5 Z" fill="#ffffff" />
                <text x="0" y="11" text-anchor="middle" fill="#e4e4e7" font-size="8.5" font-weight="700">N</text>
              </g>
            </svg>
          </div>

          <!-- Simple Color Key + Active View Description Below Map -->
          <div class="row items-center q-gutter-md q-mt-sm q-px-xs text-caption uc-muted">
            <div class="row items-center no-wrap">
              <span style="width: 14px; height: 4px; background: #10b981; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span>Arriving (In)</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 14px; height: 4px; background: #38bdf8; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span>Canopy Drop-Off</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 14px; height: 4px; background: #f59e0b; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span>Departing (Out)</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 12px; height: 12px; background: rgba(168, 85, 247, 0.45); border: 1px solid #c084fc; border-radius: 3px; display: inline-block" class="q-mr-xs"></span>
              <span>+360 New Spaces</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 12px; height: 12px; background: rgba(6, 95, 70, 0.85); border: 1px solid #34d399; border-radius: 3px; display: inline-block" class="q-mr-xs"></span>
              <span>School Turf Field (Protected)</span>
            </div>
          </div>

          <div class="uc-subcard q-pa-md q-mt-md row items-center justify-between no-wrap q-col-gutter-md">
            <div class="col">
              <span class="uc-pill-black q-mb-xs">{{ activePhaseObj.stepLabel }}</span>
              <div class="text-subtitle1 text-weight-bold q-mt-xs">
                {{ activePhaseObj.title }}
              </div>
              <div class="text-body2 uc-muted q-mt-xs" style="line-height: 1.55">
                {{ activePhaseObj.desc }}
              </div>
            </div>
            <div class="col-auto no-print">
              <q-btn
                unelevated
                :color="$q.dark.isActive ? 'white' : 'dark'"
                :text-color="$q.dark.isActive ? 'dark' : 'white'"
                icon-right="arrow_forward"
                label="Next View"
                no-caps
                class="text-weight-bold"
                @click="nextPhase"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Right 5 Columns: Two Clean, Focused Cards (Station Inspector + Capacity Check) -->
      <div class="col-12 col-md-5 column q-gutter-y-lg">
        <!-- Card 1: Map Station Inspector -->
        <div class="uc-card q-pa-md q-pa-md-lg">
          <div class="text-caption uc-muted text-uppercase text-weight-bold" style="letter-spacing: 0.05em">
            Map Station Details
          </div>
          <div class="text-h6 text-weight-bold q-mt-xs q-mb-sm">
            {{ activePostObj.title }}
          </div>
          <p class="text-body2 uc-muted q-mb-md" style="line-height: 1.6">
            {{ activePostObj.detail }}
          </p>
          <div class="row q-gutter-xs">
            <q-btn
              v-for="key in ['hpd', 'split', 'crosswalk', 'east', 'north', 'turf', 'e1', 'e2']"
              :key="key"
              size="sm"
              no-caps
              :unelevated="selectedPostKey === key"
              :outline="selectedPostKey !== key"
              :color="selectedPostKey === key ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-7'"
              :text-color="selectedPostKey === key ? ($q.dark.isActive ? 'dark' : 'white') : undefined"
              :label="postData[key].shortLabel"
              class="text-weight-bold"
              style="border-radius: 8px"
              @click="selectPost(key)"
            />
          </div>
        </div>

        <!-- Card 2: Simplified Sunday Attendance & Capacity Check -->
        <div class="uc-card q-pa-md q-pa-md-lg">
          <div class="text-caption uc-muted text-uppercase text-weight-bold" style="letter-spacing: 0.05em">
            Sunday Capacity Simulator
          </div>
          <div class="text-h6 text-weight-bold q-mt-xs">
            Test Sunday Attendance Scenarios
          </div>
          <div class="text-body2 uc-muted q-mt-xs q-mb-md">
            Choose a service attendance size below to see how many cars arrive:
          </div>

          <!-- 4 Clean Monochrome Scenario Buttons -->
          <div class="row q-col-gutter-sm q-mb-md">
            <div
              v-for="preset in attendancePresets"
              :key="preset.id"
              class="col-6"
            >
              <q-btn
                :unelevated="attendees === preset.attendees && expand === preset.expand"
                :outline="!(attendees === preset.attendees && expand === preset.expand)"
                :color="attendees === preset.attendees && expand === preset.expand ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-7'"
                :text-color="attendees === preset.attendees && expand === preset.expand ? ($q.dark.isActive ? 'dark' : 'white') : undefined"
                no-caps
                class="full-width text-left q-pa-sm"
                style="border-radius: 10px"
                @click="applyPreset(preset)"
              >
                <div class="full-width">
                  <div class="text-body2 text-weight-bold">{{ preset.title }}</div>
                  <div class="text-caption" style="font-size: 11px; opacity: 0.8">{{ preset.subtitle }}</div>
                </div>
              </q-btn>
            </div>
          </div>

          <!-- Single Clean Slider for Attendance -->
          <div class="q-mb-md">
            <div class="row justify-between text-body2 text-weight-bold q-mb-xs">
              <span>People in Service</span>
              <span>{{ attendees.toLocaleString() }} people (~{{ guestCars }} guest cars)</span>
            </div>
            <q-slider
              v-model="attendees"
              :min="400"
              :max="2100"
              :step="25"
              :color="$q.dark.isActive ? 'white' : 'dark'"
            />
          </div>

          <!-- Key Toggles -->
          <div class="column q-gutter-y-xs q-mb-md">
            <q-toggle
              v-model="shuttle"
              :color="$q.dark.isActive ? 'white' : 'dark'"
              label="Park 90 Dream Team cars on NE grass wedge (saves paved spaces)"
              class="text-body2"
            />
            <q-toggle
              v-model="expand"
              :color="$q.dark.isActive ? 'white' : 'dark'"
              label="Include +360 Expansion Spaces (Zones E1–E3, preserving Turf Field)"
              class="text-body2"
              @update:model-value="onToggleExpand"
            />
          </div>

          <!-- Clean Result Summary Box -->
          <div class="uc-subcard q-pa-md">
            <div class="row items-baseline justify-between">
              <div class="text-caption uc-muted text-uppercase text-weight-bold">Cars Needing Paved Spaces</div>
              <div class="text-h6 text-weight-bolder">{{ pavedNeeded }} / {{ capacity }} Spaces ({{ pct }}%)</div>
            </div>
            <q-linear-progress
              :value="Math.min(pavedNeeded / capacity, 1)"
              :color="statusColor"
              rounded
              size="10px"
              class="q-my-sm"
            />
            <div class="text-body2 q-mt-xs" style="line-height: 1.55" v-html="takeawayHtml"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { phaseOptions, postData, attendancePresets } from '../data/studyData'

const $q = useQuasar()
const currentPhase = ref('ingress')
const selectedPostKey = ref('crosswalk')

const attendees = ref(1000)
const occ = ref(2.2)
const vols = ref(90)
const shuttle = ref(true)
const expand = ref(false)

const activePhaseObj = computed(() => {
  return phaseOptions.find(p => p.value === currentPhase.value) || phaseOptions[0]
})

const activePostObj = computed(() => {
  return postData[selectedPostKey.value] || postData.crosswalk
})

const capacity = computed(() => (expand.value ? 810 : 450))
const guestCars = computed(() => Math.round(attendees.value / occ.value))
const pavedNeeded = computed(() =>
  shuttle.value ? guestCars.value : guestCars.value + vols.value
)
const pct = computed(() => Math.round((pavedNeeded.value / capacity.value) * 100))

const statusColor = computed(() => {
  if (pavedNeeded.value <= capacity.value * 0.85) return 'positive'
  if (pavedNeeded.value <= capacity.value + 10) return 'warning'
  return 'negative'
})

const takeawayHtml = computed(() => {
  const att = attendees.value.toLocaleString()
  if (pavedNeeded.value <= capacity.value * 0.85) {
    const spare = capacity.value - pavedNeeded.value
    return `<strong>Comfortable Fit:</strong> At ${att} people, the lot is ${pct.value}% full with <strong>${spare} open spaces</strong> to spare.`
  }
  if (pavedNeeded.value <= capacity.value + 10) {
    return `<strong>Right at Capacity (100%):</strong> Works on Day 1 as long as <strong>all ${vols.value} Dream Team cars park on the NE grass wedge</strong> and hosts park cars row-by-row.`
  }
  const over = pavedNeeded.value - capacity.value
  const advice = expand.value
    ? 'Spread attendance across the 8:30, 10:30, and 12:30 services.'
    : 'Turn on <strong>"Include +360 Expansion Spaces"</strong> above to see how adding Zones E1–E3 (on the NE & East sides) solves this.'
  return `<strong>Over Capacity by +${over} Cars:</strong> ${advice}`
})

function setPhase(phase) {
  currentPhase.value = phase
  if (phase === 'expand') {
    selectedPostKey.value = 'e1'
  }
}

function nextPhase() {
  const order = phaseOptions.map(p => p.value)
  const idx = order.indexOf(currentPhase.value)
  const next = order[(idx + 1) % order.length]
  setPhase(next)
}

function selectPost(key) {
  selectedPostKey.value = key
  if (['e1', 'e2', 'e3'].includes(key)) {
    currentPhase.value = 'expand'
  }
}

function applyPreset(preset) {
  attendees.value = preset.attendees
  occ.value = preset.occ
  vols.value = preset.vols
  shuttle.value = preset.shuttle
  expand.value = preset.expand
  setPhase(preset.expand ? 'expand' : 'ingress')
}

function onToggleExpand(val) {
  setPhase(val ? 'expand' : 'ingress')
}

function activateExpansionView() {
  expand.value = true
  setPhase('expand')
}

defineExpose({
  activateExpansionView,
  setPhase
})
</script>
