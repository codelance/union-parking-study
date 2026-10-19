<template>
  <div id="campus-map-section" class="row q-col-gutter-lg items-start">
    <!-- Left 7 Columns: Interactive GIS Campus Map -->
    <div class="col-12 col-lg-7">
      <q-card flat class="uc-card q-pa-md">
        <!-- Map Header -->
        <div class="row items-center justify-between q-mb-sm">
          <div>
            <div class="row items-center q-gutter-sm">
              <div class="text-h6 text-weight-bold">Interactive Campus Traffic &amp; Parking Map</div>
              <q-badge color="positive" outline class="text-weight-bold">
                Real Satellite Layout • North ↑
              </q-badge>
            </div>
            <div class="text-caption q-mt-xs" style="opacity: 0.85; font-size: 13px">
              Click the <strong class="text-positive">4 Sunday Views</strong> below to see how cars move, or tap any
              <strong class="text-warning">numbered circle (P1, V1–V4)</strong> on the map.
            </div>
          </div>
        </div>

        <!-- 4 Guided Sunday View Selector Buttons -->
        <div class="row q-col-gutter-sm q-mb-md">
          <div
            v-for="opt in phaseOptions"
            :key="opt.value"
            class="col-6 col-sm-3"
          >
            <q-btn
              :unelevated="currentPhase === opt.value"
              :outline="currentPhase !== opt.value"
              :color="currentPhase === opt.value ? opt.color : 'grey-6'"
              no-caps
              class="full-width text-left q-pa-sm"
              style="border-radius: 10px"
              @click="setPhase(opt.value)"
            >
              <div class="full-width">
                <div class="text-caption text-uppercase text-weight-bold" style="font-size: 10px; opacity: 0.9">
                  {{ opt.stepLabel }}
                </div>
                <div class="text-body2 text-weight-bold" style="line-height: 1.2">
                  {{ opt.label }}
                </div>
              </div>
            </q-btn>
          </div>
        </div>

        <!-- Plain-English Explanation Banner Above Map -->
        <div class="uc-subcard q-pa-md q-mb-sm">
          <div class="row items-center justify-between no-wrap q-col-gutter-sm">
            <div class="col">
              <q-badge :color="activePhaseObj.color" class="text-weight-bold q-py-xs q-px-sm q-mb-xs">
                {{ activePhaseObj.badge }}
              </q-badge>
              <div class="text-subtitle1 text-weight-bold">
                {{ activePhaseObj.title }}
              </div>
              <div class="text-body2 q-mt-xs" style="opacity: 0.9; line-height: 1.5; font-size: 13px">
                {{ activePhaseObj.desc }}
              </div>
            </div>
            <div class="col-auto no-print">
              <q-btn
                unelevated
                color="primary"
                icon-right="arrow_forward"
                label="Next View"
                no-caps
                size="sm"
                class="text-weight-bold"
                @click="nextPhase"
              />
            </div>
          </div>
        </div>

        <!-- Color Legend Bar -->
        <div class="uc-subcard q-px-md q-py-sm q-mb-sm row items-center justify-between text-caption">
          <div class="row items-center q-gutter-md">
            <div class="row items-center no-wrap">
              <span style="width: 16px; height: 4px; background: #10b981; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span class="text-weight-medium">Arriving Cars (In)</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 16px; height: 4px; background: #38bdf8; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span class="text-weight-medium">Canopy Drop-Off Loop</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 16px; height: 4px; background: #f59e0b; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span class="text-weight-medium">Departing Cars (Out)</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 12px; height: 12px; background: rgba(168, 85, 247, 0.45); border: 1px solid #c084fc; border-radius: 3px; display: inline-block" class="q-mr-xs"></span>
              <span class="text-weight-medium">+400 New Spaces</span>
            </div>
          </div>
          <span class="gt-xs" style="opacity: 0.7">Tap any circle on map for details</span>
        </div>

        <!-- SVG Campus Map Viewport (Always dark satellite backdrop for high contrast) -->
        <div
          class="q-pa-sm flex flex-center overflow-hidden"
          style="background: #0b1120; border: 1px solid #1e293b; border-radius: 12px"
        >
          <svg
            viewBox="65 20 385 607"
            style="width: 100%; max-height: 540px; height: auto; user-select: none"
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

            <!-- 1. Surrounding Tree Canopy / Woodland Buffers -->
            <path d="M 372.3,2.1 L 318.4,36.4 L 298.9,107.5 L 244.6,94.6 L 223.1,25.9 L 146.3,-25.1 L 19.6,161.9 L 56.1,229.3 L 103.5,263.7 L 134.2,280.6 L 216.9,400.3 L 233.5,428.8 L 240.8,448.8 L 234.6,463.6 L 218.1,480.2 L 204.3,511.7 L 208.9,543.0 L 223.1,573.4 L 239.7,597.2 L 60,640 L 60,2.1 Z" fill="#064e3b" fill-opacity="0.35" stroke="#059669" stroke-opacity="0.25" stroke-width="1" />
            <path d="M 259.9,559.7 L 291.1,560.5 L 357.3,515.2 L 355.2,490.4 L 348.6,437.3 L 341.0,426.8 L 320.0,436.3 L 250.3,490.8 L 243.0,507.5 L 242.7,525.3 L 250.0,545.4 Z" fill="#064e3b" fill-opacity="0.45" stroke="#059669" stroke-opacity="0.35" stroke-width="1" />

            <!-- 2. Ramah Creek Stream & Culvert Bridge -->
            <path d="M 74.1,274.3 L 96.3,292.0 L 120.2,304.9 L 144.7,331.5 L 169.3,368.4 L 191.6,397.3 L 205.8,419.9 L 236.3,454.1" fill="none" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="3.5" />
            <path d="M 236.3,454.1 L 260.6,483.4" fill="none" stroke="#38bdf8" stroke-opacity="0.85" stroke-width="3" stroke-dasharray="3 3" />
            <path d="M 260.6,483.4 L 277.2,505.2 L 307.4,530.8 L 319.9,538.3 L 359.4,559.3 L 383.5,565.5 L 429.6,580.0 L 461.4,583.9" fill="none" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="3.5" />
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
            <path d="M 243.3,241.5 L 254.1,256.6 L 256.9,260.6 L 266.6,254.0 L 268.8,257.3 L 291.4,291.2 L 297.4,287.1 L 312.4,309.6 L 306.3,313.5 L 320.0,333.9 L 309.2,341.1 L 310.5,342.8 L 309.0,343.7 L 306.2,345.5 L 304.6,346.5 L 303.5,345.0 L 297.2,349.2 L 301.0,354.7 L 298.4,356.6 L 299.8,358.4 L 302.0,361.2 L 298.5,363.6 L 302.7,369.5 L 310.0,379.9 L 304.8,383.3 L 302.6,384.7 L 297.4,388.1 L 290.2,377.9 L 286.1,372.2 L 283.8,373.8 L 281.5,370.9 L 280.1,369.1 L 278.0,370.6 L 273.5,365.1 L 267.6,369.1 L 268.8,370.7 L 266.7,372.2 L 264.7,373.6 L 262.7,375.0 L 261.5,373.2 L 250.9,380.3 L 236.1,358.0 L 232.5,360.1 L 218.1,338.9 L 221.7,336.4 L 214.5,325.5 L 213.2,323.5 L 211.7,321.3 L 209.6,318.1 L 205.9,320.7 L 199.4,311.1 L 203.1,308.4 L 198.0,300.6 L 202.3,297.7 L 207.5,294.2 L 205.5,291.4 L 196.3,278.8 L 194.9,276.8 L 187.0,265.9 L 236.1,231.5 L 241.7,239.3 Z" fill="#1e3a8a" fill-opacity="0.88" stroke="#60a5fa" stroke-width="1.8" />
            <line x1="221.7" y1="336.4" x2="297.4" y2="287.1" stroke="#60a5fa" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="3 3" />
            <text x="245" y="286" text-anchor="middle" fill="#bfdbfe" font-size="9.5" font-weight="600" transform="rotate(-34 245 286)">GYM &amp; KIDS</text>
            <text x="272" y="336" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="700" transform="rotate(-34 272 336)">2,100-SEAT</text>
            <text x="280" y="348" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="700" transform="rotate(-34 280 348)">AUDITORIUM</text>

            <text x="150" y="315" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="700" transform="rotate(55 150 315)">WEST LOT (~90)</text>
            <text x="348" y="245" text-anchor="middle" fill="#34d399" font-size="10.5" font-weight="700" transform="rotate(56 348 245)">EAST LOT (~210)</text>
            <text x="168" y="82" text-anchor="middle" fill="#34d399" font-size="10.5" font-weight="700" transform="rotate(-55 168 82)">NORTH LOT (~150)</text>

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

            <!-- PHASE 4: +400 STALL EXPANSION ZONES (E1, E2, E3) -->
            <g v-show="currentPhase === 'expand'">
              <polygon points="210.5,30.9 250.6,160.6 322.7,175.7 348.0,145.0 298.9,85.0" fill="#a855f7" fill-opacity="0.36" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" class="marker-btn" @click="selectPost('e1')" />
              <path d="M 347.0,227.8 L 318.0,182.2 L 285.0,105.0 L 210.5,30.9" fill="none" stroke="#c084fc" stroke-width="3" class="flow-line" marker-end="url(#arr-purple)" />
              <text x="282" y="112" text-anchor="middle" fill="#f3e8ff" font-size="11" font-weight="700" style="pointer-events: none">NEW LOT E1</text>
              <text x="282" y="125" text-anchor="middle" fill="#e9d5ff" font-size="10" font-weight="600" style="pointer-events: none">+175 Spaces (1.38 ac)</text>

              <polygon points="145.4,111.9 169.8,153.6 139.6,193.2 123.4,232.0 138.8,243.7 103.5,263.7 72.0,205.0 95.0,140.0" fill="#a855f7" fill-opacity="0.36" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" class="marker-btn" @click="selectPost('e2')" />
              <text x="108" y="188" text-anchor="middle" fill="#f3e8ff" font-size="10.5" font-weight="700" transform="rotate(-55 108 188)" style="pointer-events: none">NEW LOT E2 (+145)</text>

              <polygon points="322.7,175.7 374.1,241.0 382.5,278.2 379.7,314.6 402.0,305.0 405.0,265.0 392.0,225.0 348.0,165.0" fill="#a855f7" fill-opacity="0.36" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" class="marker-btn" @click="selectPost('e3')" />
              <text x="392" y="248" text-anchor="middle" fill="#f3e8ff" font-size="10" font-weight="700" transform="rotate(56 392 248)" style="pointer-events: none">E3: +80</text>
            </g>

            <!-- CLICKABLE POLICE & VOLUNTEER POST MARKERS -->
            <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'hpd' }]" @click="selectPost('hpd')">
              <circle cx="276.8" cy="602.1" r="14" fill="#1d4ed8" stroke="#ffffff" stroke-width="2" />
              <text x="276.8" y="606.1" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">P1</text>
            </g>
            <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'split' }]" @click="selectPost('split')">
              <circle cx="274.1" cy="445.5" r="13.5" fill="#d97706" stroke="#ffffff" stroke-width="2" />
              <text x="274.1" y="449.5" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V1</text>
            </g>
            <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'crosswalk' }]" @click="selectPost('crosswalk')">
              <circle cx="305.0" cy="396.0" r="13.5" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
              <text x="305.0" y="400.0" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V2</text>
            </g>
            <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'east' }]" @click="selectPost('east')">
              <circle cx="362.0" cy="295.0" r="13.5" fill="#059669" stroke="#ffffff" stroke-width="2" />
              <text x="362.0" y="299.0" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V3</text>
            </g>
            <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'north' }]" @click="selectPost('north')">
              <circle cx="235.0" cy="145.0" r="13.5" fill="#7c3aed" stroke="#ffffff" stroke-width="2" />
              <text x="235.0" y="149.0" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="700">V4</text>
            </g>

            <!-- North Compass Badge -->
            <g transform="translate(92, 46)">
              <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#475569" stroke-width="1.2" />
              <path d="M 0 -9 L 4 5 L 0 2 L -4 5 Z" fill="#10b981" />
              <text x="0" y="11" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="700">N</text>
            </g>
          </svg>
        </div>

        <!-- Selected Map Station Inspector Box -->
        <div class="uc-subcard q-pa-md q-mt-sm">
          <div class="row items-center justify-between q-col-gutter-sm q-pb-sm" style="border-bottom: 1px solid rgba(148, 163, 184, 0.2)">
            <div class="text-caption text-uppercase text-weight-bold" style="opacity: 0.75">
              Selected Map Station (Click Any Badge to Inspect):
            </div>
            <div class="row q-gutter-xs">
              <q-btn
                v-for="key in ['hpd', 'split', 'crosswalk', 'east', 'north', 'e1', 'e2']"
                :key="key"
                size="sm"
                dense
                no-caps
                :unelevated="selectedPostKey === key"
                :outline="selectedPostKey !== key"
                :color="postData[key].color"
                :label="postData[key].shortLabel"
                class="q-px-sm text-weight-bold"
                @click="selectPost(key)"
              />
            </div>
          </div>
          <div class="q-pt-sm">
            <div class="text-subtitle1 text-weight-bold text-warning">
              {{ activePostObj.title }}
            </div>
            <div class="text-body2 q-mt-xs" style="opacity: 0.9; line-height: 1.5; font-size: 13px">
              {{ activePostObj.detail }}
            </div>
          </div>
        </div>
      </q-card>
    </div>

    <!-- Right 5 Columns: Interactive Sunday Attendance Calculator & Phased Roadmap -->
    <div class="col-12 col-lg-5 column q-gutter-y-md">
      <!-- Calculator Card -->
      <q-card flat class="uc-card q-pa-md">
        <div class="text-caption text-uppercase text-weight-bold text-positive">
          Interactive Sunday Calculator
        </div>
        <div class="text-h6 text-weight-bold">
          Test Different Sunday Attendance Scenarios
        </div>
        <div class="text-caption q-mb-sm" style="opacity: 0.85; font-size: 13px">
          Click a quick preset below or adjust the sliders to see how many cars will arrive and what leadership needs to do:
        </div>

        <!-- 1-Click Scenario Presets -->
        <div class="row q-col-gutter-sm q-mb-md">
          <div
            v-for="preset in attendancePresets"
            :key="preset.id"
            class="col-6"
          >
            <q-btn
              outline
              :color="preset.color"
              no-caps
              class="full-width text-left q-pa-sm"
              style="border-radius: 10px"
              @click="applyPreset(preset)"
            >
              <div class="full-width">
                <div class="text-body2 text-weight-bold">{{ preset.title }}</div>
                <div class="text-caption" style="font-size: 11px; opacity: 0.85">{{ preset.subtitle }}</div>
              </div>
            </q-btn>
          </div>
        </div>

        <!-- Plain-English Pastoral Recommendation Banner -->
        <q-banner
          rounded
          :class="takeawayBannerClass"
          class="q-mb-md q-pa-md"
        >
          <template #avatar>
            <q-icon :name="takeawayIcon" size="26px" />
          </template>
          <div class="text-body2" style="line-height: 1.5; font-size: 13px" v-html="takeawayHtml"></div>
        </q-banner>

        <!-- Sliders -->
        <div class="q-gutter-y-md">
          <div>
            <div class="row justify-between text-body2 text-weight-bold">
              <span>People in Peak Service (e.g., 10:30 AM)</span>
              <span class="text-positive">{{ attendees.toLocaleString() }} people</span>
            </div>
            <q-slider
              v-model="attendees"
              :min="400"
              :max="2100"
              :step="25"
              color="positive"
              label
              :label-value="`${attendees} ppl`"
            />
            <div class="row justify-between text-caption" style="opacity: 0.65; font-size: 11px">
              <span>400</span>
              <span>1,000 (Target)</span>
              <span>2,100 (Max Auditorium)</span>
            </div>
          </div>

          <div>
            <div class="row justify-between text-body2 text-weight-bold">
              <span>Average People per Car</span>
              <span class="text-positive">{{ occ.toFixed(1) }} people/car</span>
            </div>
            <q-slider
              v-model="occ"
              :min="1.6"
              :max="3.0"
              :step="0.1"
              color="info"
            />
          </div>

          <div>
            <div class="row justify-between text-body2 text-weight-bold">
              <span>Dream Team &amp; Staff Cars</span>
              <span class="text-warning">{{ vols }} cars</span>
            </div>
            <q-slider
              v-model="vols"
              :min="30"
              :max="160"
              :step="5"
              color="warning"
            />
          </div>

          <q-separator />

          <div class="column q-gutter-y-xs">
            <q-toggle
              v-model="shuttle"
              color="positive"
              label="Park Dream Team on North Grass / Off-Site? (Saves 90 paved spaces)"
              class="text-body2 text-weight-medium"
            />
            <q-toggle
              v-model="expand"
              color="accent"
              label="Include +400 New Expansion Spaces (Zones E1–E3)?"
              class="text-body2 text-weight-medium"
              @update:model-value="onToggleExpand"
            />
          </div>
        </div>

        <!-- Output Metric Cards -->
        <div class="row q-col-gutter-sm q-mt-sm">
          <div class="col-6">
            <div class="uc-subcard q-pa-md">
              <div class="text-caption" style="opacity: 0.75">Guest Cars vs. Spaces</div>
              <div class="text-h6 text-weight-bolder q-mt-xs">
                {{ pavedNeeded }} / {{ capacity }}
              </div>
              <q-linear-progress
                :value="Math.min(pavedNeeded / capacity, 1)"
                :color="statusColor"
                rounded
                size="8px"
                class="q-my-xs"
              />
              <div :class="`text-caption text-weight-bold text-${statusColor}`">
                {{ statusText }}
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="uc-subcard q-pa-md">
              <div class="text-caption" style="opacity: 0.75">Peak Arrival Flow Speed</div>
              <div class="text-h6 text-weight-bolder q-mt-xs">
                {{ carsPerMin }} cars/min
              </div>
              <div class="text-caption q-mt-sm" style="opacity: 0.85">
                1 car every <strong class="text-positive">{{ secPerCar }}s</strong> (Road cap: 28/min)
              </div>
            </div>
          </div>
        </div>
      </q-card>

      <!-- 3-Step Implementation Roadmap for Leadership -->
      <q-card flat class="uc-card q-pa-md">
        <div class="text-subtitle1 text-weight-bold q-mb-sm">
          3-Step Implementation Roadmap for Leadership
        </div>
        <div class="column q-gutter-y-sm">
          <div
            v-for="(step, idx) in roadmapPhases"
            :key="idx"
            class="uc-subcard q-pa-sm"
          >
            <div class="row items-center q-gutter-xs" :class="step.color">
              <q-icon :name="step.icon" size="18px" />
              <span class="text-body2 text-weight-bold">{{ step.phase }}</span>
            </div>
            <div class="text-caption q-mt-xs" style="opacity: 0.88; line-height: 1.45; font-size: 12.5px">
              {{ step.desc }}
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  phaseOptions,
  postData,
  attendancePresets,
  roadmapPhases
} from '../data/studyData'

const currentPhase = ref('ingress')
const selectedPostKey = ref('crosswalk')

// Calculator reactive state
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

const capacity = computed(() => (expand.value ? 850 : 450))
const guestCars = computed(() => Math.round(attendees.value / occ.value))
const pavedNeeded = computed(() =>
  shuttle.value ? guestCars.value : guestCars.value + vols.value
)
const pct = computed(() => Math.round((pavedNeeded.value / capacity.value) * 100))

const carsPerMin = computed(() => ((guestCars.value * 0.7) / 15).toFixed(1))
const secPerCar = computed(() => (60 / parseFloat(carsPerMin.value)).toFixed(1))

const statusColor = computed(() => {
  if (pavedNeeded.value <= capacity.value * 0.85) return 'positive'
  if (pavedNeeded.value <= capacity.value + 10) return 'warning'
  return 'negative'
})

const statusText = computed(() => {
  if (pavedNeeded.value <= capacity.value * 0.85) {
    return `${pct.value}% Full (Plenty of Room)`
  }
  if (pavedNeeded.value <= capacity.value + 10) {
    return `${pct.value}% Full (Near Capacity)`
  }
  return `${pct.value}% (Short by ${pavedNeeded.value - capacity.value} spaces)`
})

const takeawayIcon = computed(() => {
  if (statusColor.value === 'positive') return 'check_circle'
  if (statusColor.value === 'warning') return 'info'
  return 'warning'
})

const takeawayBannerClass = computed(() => {
  if (statusColor.value === 'positive') return 'bg-positive text-white'
  if (statusColor.value === 'warning') return 'bg-amber-10 text-white'
  return 'bg-negative text-white'
})

const takeawayHtml = computed(() => {
  const att = attendees.value.toLocaleString()
  if (pavedNeeded.value <= capacity.value * 0.85) {
    const spare = capacity.value - pavedNeeded.value
    return `<strong>At ${att} people (${pavedNeeded.value} paved cars needed):</strong> The parking lot is at <strong>${pct.value}% capacity</strong> (${spare} spare spaces). Traffic will flow smoothly using standard cone lanes and sequential parking.`
  }
  if (pavedNeeded.value <= capacity.value + 10) {
    return `<strong>At ${att} people (${pavedNeeded.value} cars vs. ${capacity.value} spaces):</strong> Our paved lot is right at <strong>100% capacity</strong>. Make sure <strong>all ${vols.value} Dream Team cars park on the North grass wedge (Zone D)</strong> and hosts guide every car row-by-row so no empty gaps are left.`
  }
  const over = pavedNeeded.value - capacity.value
  const advice = expand.value
    ? 'Consider balancing attendance across the 8:30, 10:30, and 12:30 services or running an off-site shuttle.'
    : 'Toggle <strong>"Include +400 New Expansion Spaces"</strong> below (or click <em>View 4: +400 New Spaces</em> on the map) to see how adding Zones E1–E3 solves this!'
  return `<strong>At ${att} people (${pavedNeeded.value} cars needed):</strong> We exceed current paved spaces by <strong>+${over} cars</strong>. ${advice}`
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
