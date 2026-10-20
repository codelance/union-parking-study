<template>
  <div>
    <!-- Sleek Integrated Campus Metrics Ribbon (Keeps Interactive Map Above the Fold) -->
    <div class="uc-card q-px-md q-py-sm q-mb-md">
      <div class="row items-center justify-between q-col-gutter-sm">
        <div class="col-12 col-md-auto row items-center q-gutter-x-sm">
          <span class="uc-pill-black">Interactive Master Map</span>
          <span class="text-subtitle2 text-weight-bolder">
            Lots 1–10 Today (~450 Paved + ~90 Grass/Wall) • Posts P1–P12 &amp; G • Proposed Lots 11–13 (+360 Spaces)
          </span>
        </div>
        <div class="col-12 col-md-auto row items-center q-gutter-x-md text-caption">
          <div><strong>Auditorium:</strong> 2,100 Seats</div>
          <div><strong>Lots 1–8 (Paved):</strong> ~450 Spaces</div>
          <div><strong>Lots 9–10 (Grass/Wall):</strong> ~90 Spaces</div>
          <div><strong>Lots 11–13 (In-Parcel):</strong> +360 Spaces (810 Total)</div>
          <div><strong>Owned Land:</strong> 28.15 Ac (Turf Protected)</div>
        </div>
      </div>
    </div>

    <!-- Main Interactive Workspace: Large Map Canvas (8 cols or 12 cols Full-Width) + Inspector Panel (4 cols) -->
    <div class="row q-col-gutter-lg items-start">
      <!-- Left / Main Area: High-Emphasis Interactive Campus Parking Map -->
      <div :class="fullWidthMap ? 'col-12' : 'col-12 col-lg-8'">
        <div class="uc-card q-pa-md">
          <!-- Top Map Header & Interactive Toolbar -->
          <div class="row items-center justify-between q-mb-sm q-col-gutter-sm">
            <div class="col-12 col-sm">
              <div class="row items-center q-gutter-x-sm">
                <div class="text-h6 text-weight-bolder" style="letter-spacing: -0.01em">
                  Campus Parking &amp; Traffic Flow Map (Lots 1–13 &amp; Posts P1–P12)
                </div>
              </div>
              <div class="text-caption uc-muted">
                Click any numbered parking lot (<strong>①–⑩</strong> or proposed <strong>⑪–⑬</strong>) or post circle (<strong>P1–P12, G</strong>) to inspect parking spaces &amp; traffic flow.
              </div>
            </div>

            <!-- Map View & Zoom Controls -->
            <div class="col-12 col-sm-auto row items-center q-gutter-xs no-print">
              <q-btn
                outline
                dense
                no-caps
                size="sm"
                :color="$q.dark.isActive ? 'white' : 'dark'"
                :icon="uprightMode ? 'explore' : 'crop_portrait'"
                :label="uprightMode ? 'Aligned to Pastor Map' : 'True North GIS'"
                class="q-px-sm text-weight-bold"
                style="border-radius: 7px"
                title="Switch between Pastor Map upright alignment and True North GIS alignment"
                @click="uprightMode = !uprightMode"
              />
              <q-btn
                :unelevated="showPastorCompare"
                :outline="!showPastorCompare"
                dense
                no-caps
                size="sm"
                :color="$q.dark.isActive ? 'white' : 'dark'"
                :text-color="showPastorCompare ? ($q.dark.isActive ? 'dark' : 'white') : undefined"
                icon="compare"
                :label="showPastorCompare ? 'Hide Pastor Map' : 'Compare Pastor Map'"
                class="q-px-sm text-weight-bold"
                style="border-radius: 7px"
                @click="showPastorCompare = !showPastorCompare"
              />
              <q-btn
                outline
                dense
                no-caps
                size="sm"
                :color="$q.dark.isActive ? 'white' : 'dark'"
                :icon="fullWidthMap ? 'close_fullscreen' : 'open_in_full'"
                :label="fullWidthMap ? 'Split View' : 'Full-Width Map'"
                class="q-px-sm text-weight-bold gt-sm"
                style="border-radius: 7px"
                @click="fullWidthMap = !fullWidthMap"
              />
            </div>
          </div>

          <!-- 4-Step Flow Mode Selector Bar -->
          <div class="row q-col-gutter-sm q-mb-sm">
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
                class="full-width full-height q-py-xs q-px-sm"
                style="border-radius: 9px"
                @click="setPhase(opt.value)"
              >
                <div class="full-width text-left">
                  <div class="text-caption text-uppercase text-weight-bold" style="font-size: 10px; opacity: 0.75">
                    {{ opt.stepLabel }}
                  </div>
                  <div class="text-body2 text-weight-bold" style="line-height: 1.2">
                    {{ opt.label }}
                  </div>
                </div>
              </q-btn>
            </div>
          </div>

          <!-- Interactive Layer Toggles & Zoom Bar -->
          <div class="row items-center justify-between q-mb-sm q-px-xs q-col-gutter-xs no-print">
            <div class="row items-center q-gutter-xs">
              <span class="text-caption uc-muted text-weight-bold q-mr-xs">Map Layers:</span>
              <q-chip
                v-model:selected="layerLots"
                clickable
                dense
                 outline
                size="sm"
                :color="layerLots ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-6'"
                class="text-weight-bold"
              >
                ①–⑩ Lot #s &amp; Spaces
              </q-chip>
              <q-chip
                v-model:selected="layerPosts"
                clickable
                dense
                outline
                size="sm"
                :color="layerPosts ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-6'"
                class="text-weight-bold"
              >
                Posts P1–P12 &amp; G
              </q-chip>
              <q-chip
                v-model:selected="layerExpansion"
                clickable
                dense
                outline
                size="sm"
                :color="layerExpansion || currentPhase === 'expand' ? 'purple-4' : 'grey-6'"
                class="text-weight-bold"
              >
                ⑪–⑬ New Lots (+360)
              </q-chip>
              <q-chip
                v-model:selected="layerGis"
                clickable
                dense
                outline
                size="sm"
                :color="layerGis ? 'teal-4' : 'grey-6'"
                class="text-weight-bold"
              >
                GIS Property Lines
              </q-chip>
            </div>

            <!-- Zoom Controls -->
            <div class="row items-center q-gutter-xs">
              <span class="text-caption uc-muted">Zoom:</span>
              <q-btn flat dense round size="sm" icon="remove" @click="adjustZoom(-0.2)" :disable="zoomLevel <= 1" />
              <span class="text-caption text-weight-bold" style="min-width: 36px; text-align: center">{{ Math.round(zoomLevel * 100) }}%</span>
              <q-btn flat dense round size="sm" icon="add" @click="adjustZoom(0.2)" :disable="zoomLevel >= 1.8" />
              <q-btn v-if="zoomLevel > 1" flat dense size="xs" no-caps label="Reset" @click="resetZoom" />
            </div>
          </div>

          <!-- Map Viewport (Supports Side-by-Side Comparison with Pastor's Map) -->
          <div class="row q-col-gutter-md">
            <div :class="showPastorCompare ? 'col-12 col-md-7' : 'col-12'">
              <div
                class="q-pa-xs flex flex-center overflow-hidden relative-position"
                style="background: #090d16; border: 1px solid #27272a; border-radius: 12px"
              >
                <!-- Floating Map Legend Overlay (Top-Left, Matching Pastor's Map Style) -->
                <div
                  class="q-pa-sm gt-xs"
                  style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    z-index: 2;
                    background: rgba(9, 9, 11, 0.88);
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    border-radius: 10px;
                    color: #fafafa;
                    font-size: 11px;
                    line-height: 1.45;
                    max-width: 195px;
                    backdrop-filter: blur(4px);
                  "
                >
                  <div class="text-weight-bolder text-uppercase" style="font-size: 10px; letter-spacing: 0.05em; color: #93c5fd">
                    Entry Flow — Fill Order
                  </div>
                  <div class="row q-col-gutter-x-sm q-mt-xs" style="font-size: 10.5px">
                    <div class="col-6">
                      <div><span class="lot-mini-badge">1</span> Exit Lot 1</div>
                      <div><span class="lot-mini-badge">2</span> Lot 2</div>
                      <div><span class="lot-mini-badge">3</span> Lot 3</div>
                      <div><span class="lot-mini-badge">4</span> Lot 4</div>
                      <div><span class="lot-mini-badge">5</span> Lot 5</div>
                    </div>
                    <div class="col-6">
                      <div><span class="lot-mini-badge">6</span> Lot 6</div>
                      <div><span class="lot-mini-badge">7</span> Lot 7</div>
                      <div><span class="lot-mini-badge">8</span> Lot 8</div>
                      <div><span class="lot-mini-badge">9</span> Grass Lot</div>
                      <div><span class="lot-mini-badge">10</span> Brick Wall</div>
                    </div>
                  </div>
                  <div
                    v-if="layerExpansion || currentPhase === 'expand'"
                    class="q-mt-xs q-pt-xs"
                    style="border-top: 1px solid rgba(255, 255, 255, 0.14); font-size: 10.5px"
                  >
                    <div class="text-weight-bolder text-uppercase" style="font-size: 9.5px; color: #d8b4fe">
                      +360 In-Parcel Expansion
                    </div>
                    <div><span class="lot-mini-badge" style="background: #9333ea">11</span> Lot 11 (+180 at P12)</div>
                    <div><span class="lot-mini-badge" style="background: #9333ea">12</span> Lot 12 (+110 by Lot 1)</div>
                    <div><span class="lot-mini-badge" style="background: #9333ea">13</span> Lot 13 (+70 by Lot 4)</div>
                  </div>
                </div>

                <!-- Interactive SVG Campus Map -->
                <svg
                  :viewBox="computedViewBox"
                  :style="{
                    width: '100%',
                    height: 'auto',
                    maxHeight: fullWidthMap ? '800px' : '670px',
                    userSelect: 'none'
                  }"
                  role="img"
                  aria-label="Interactive Campus Parking Map (Lots 1-13 and Posts P1-P12)"
                >
                  <defs>
                    <!-- Light Blue = Entry Flow (Matches Pastor's Map) -->
                    <marker id="arr-entry-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
                    </marker>
                    <!-- Bright Green = Exit Flow (Matches Pastor's Map) -->
                    <marker id="arr-exit-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#22c55e" />
                    </marker>
                    <!-- Gold = Canopy Drop-Off Loop -->
                    <marker id="arr-canopy-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#facc15" />
                    </marker>
                    <!-- Purple = Expansion Flow -->
                    <marker id="arr-expand-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
                    </marker>
                  </defs>

                  <!-- MASTER ROTATABLE CAMPUS GROUP: +33.6° aligns Lots 1-10 vertically/horizontally exactly like Pastor's Map -->
                  <g :transform="uprightMode ? 'rotate(33.6, 260, 310)' : ''">
                    <!-- 1. Surrounding Tree Canopy -->
                    <path d="M 372.3,2.1 L 318.4,36.4 L 298.9,107.5 L 244.6,94.6 L 223.1,25.9 L 146.3,-25.1 L 19.6,161.9 L 56.1,229.3 L 103.5,263.7 L 134.2,280.6 L 216.9,400.3 L 233.5,428.8 L 240.8,448.8 L 234.6,463.6 L 218.1,480.2 L 204.3,511.7 L 208.9,543.0 L 223.1,573.4 L 239.7,597.2 L 60,640 L 60,2.1 Z" fill="#064e3b" fill-opacity="0.28" stroke="#059669" stroke-opacity="0.18" stroke-width="1" />
                    <path d="M 259.9,559.7 L 291.1,560.5 L 357.3,515.2 L 355.2,490.4 L 348.6,437.3 L 341.0,426.8 L 320.0,436.3 L 250.3,490.8 L 243.0,507.5 L 242.7,525.3 L 250.0,545.4 Z" fill="#064e3b" fill-opacity="0.32" stroke="#059669" stroke-opacity="0.22" stroke-width="1" />

                    <!-- 1A. Official Mecklenburg County GIS Parcel Boundaries -->
                    <g v-show="layerGis" class="marker-btn" @click="selectPost('gis')">
                      <!-- Neighboring Private Parcel PID 01123102 (9.20 ac - Paradis - NOT OWNED) East of 10: Brick Wall -->
                      <polygon
                        points="219.0,10.0 266.1,154.4 404.1,168.0 412.0,10.0"
                        fill="#7f1d1d"
                        fill-opacity="0.14"
                        stroke="#f87171"
                        stroke-opacity="0.6"
                        stroke-width="1.3"
                        stroke-dasharray="4 3"
                      />
                      <g :transform="uprightMode ? 'rotate(-33.6, 325, 95)' : ''">
                        <text x="325" y="92" text-anchor="middle" fill="#fca5a5" opacity="0.9" font-size="8" font-weight="700">NEIGHBOR PARCEL (PID 01123102)</text>
                        <text x="325" y="102" text-anchor="middle" fill="#fecaca" opacity="0.8" font-size="7">Private — Outside 10: Brick Wall</text>
                      </g>

                      <!-- Campus-Owned Main Parcel PID 01123101 (21.90 ac) + Entry Drive PID 01123131 (2.11 ac) -->
                      <path
                        d="M 110.0,12.0 L 219.0,12.0 L 266.1,154.4 L 385.2,166.1 L 404.1,168.0 L 394.8,267.6 L 386.7,353.9 L 383.5,388.0 L 376.1,467.8 L 413.0,478.3 L 282.3,573.5 L 268.5,571.8 L 239.5,521.9 L 258.7,479.6 L 138.6,535.9 L 50.0,450.0 L 50.0,100.0 Z"
                        fill="none"
                        stroke="#34d399"
                        stroke-opacity="0.65"
                        stroke-width="1.5"
                        stroke-dasharray="6 4"
                      />

                      <!-- Campus-Owned SE Corner Parcel PID 01123122 (3.67 ac - Ambassador Christian School Inc) -->
                      <polygon
                        points="394.8,267.6 472.0,267.6 472.0,439.5 450.5,453.3 413.0,478.3 376.1,467.8 383.5,388.0 386.7,353.9"
                        fill="#065f46"
                        fill-opacity="0.18"
                        stroke="#34d399"
                        stroke-opacity="0.75"
                        stroke-width="1.5"
                        stroke-dasharray="6 4"
                      />
                    </g>

                    <!-- 1B. Ambassador Christian School Athletic Turf Field (Protected inside PID 01123101) -->
                    <g class="marker-btn" @click="selectPost('turf')">
                      <polygon
                        points="135.0,108.0 162.0,126.5 112.0,200.5 85.0,182.0"
                        fill="#065f46"
                        fill-opacity="0.82"
                        stroke="#34d399"
                        stroke-opacity="0.9"
                        stroke-width="1.6"
                      />
                      <line x1="110.0" y1="145.0" x2="137.0" y2="163.5" stroke="#a7f3d0" stroke-opacity="0.55" stroke-width="1" />
                      <circle cx="123.5" cy="154.2" r="6" fill="none" stroke="#a7f3d0" stroke-opacity="0.55" stroke-width="1" />
                      <g :transform="uprightMode ? 'rotate(-33.6, 123, 154)' : 'rotate(-56, 123, 154)'">
                        <text x="123" y="151" text-anchor="middle" fill="#ecfdf5" font-size="7.5" font-weight="800">SCHOOL TURF</text>
                        <text x="123" y="160" text-anchor="middle" fill="#a7f3d0" font-size="6.5" font-weight="700">FIELD (PROTECTED)</text>
                      </g>
                    </g>

                    <!-- 2. Ramah Creek Stream & Culvert Bridge -->
                    <path d="M 74.1,274.3 L 96.3,292.0 L 120.2,304.9 L 144.7,331.5 L 169.3,368.4 L 191.6,397.3 L 205.8,419.9 L 236.3,454.1" fill="none" stroke="#0ea5e9" stroke-opacity="0.45" stroke-width="3.2" />
                    <path d="M 236.3,454.1 L 260.6,483.4" fill="none" stroke="#38bdf8" stroke-opacity="0.85" stroke-width="3" stroke-dasharray="3 3" />
                    <path d="M 260.6,483.4 L 277.2,505.2 L 307.4,530.8 L 319.9,538.3 L 359.4,559.3 L 383.5,565.5 L 429.6,580.0 L 461.4,583.9" fill="none" stroke="#0ea5e9" stroke-opacity="0.45" stroke-width="3.2" />

                    <!-- 3. Actual Paved Parking Lot Surface (~450 Paved Spaces Across Lots 1–8 + Lots 9–10) -->
                    <path d="M 308.9,171.7 L 265.2,166.1 L 250.6,160.6 L 210.5,30.9 L 149.0,121.6 L 169.8,153.6 L 139.6,193.2 L 139.6,236.1 L 155.7,254.5 L 235.2,205.7 L 332.9,336.3 L 360.0,333.0 L 372.1,322.5 L 379.7,314.6 L 382.5,278.2 L 374.1,241.0 L 322.7,175.7 Z" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
                    <!-- Lot 1 Paved Surface -->
                    <path d="M 160.5,257.2 L 150.5,264.0 L 205.3,349.5 L 216.5,339.9 Z" fill="#1e293b" stroke="#38bdf8" stroke-opacity="0.65" stroke-width="1.2" />
                    <!-- Lot 9 Grass Lot Surface (North Apex between P8 and P7) -->
                    <polygon points="150.0,92.0 205.0,32.0 216.0,45.0 162.0,104.0" fill="#14532d" fill-opacity="0.55" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.2" stroke-dasharray="3 2" />
                    <!-- Lot 10 Brick Wall Surface (Along Eastern Property Boundary between P6 and P7) -->
                    <polygon points="246.0,155.0 218.0,63.0 229.0,59.0 258.0,151.0" fill="#1e293b" fill-opacity="0.85" stroke="#60a5fa" stroke-opacity="0.7" stroke-width="1.2" />

                    <!-- 4. Actual Paved Campus Roads & Parking Aisles -->
                    <!-- University City Church Dr (Main Entrance/Exit Road) -->
                    <path d="M 276.8,602.1 L 235.0,549.6 L 229.8,538.3 L 226.5,526.1 L 224.8,514.0 L 225.1,501.8 L 228.5,489.4 L 235.5,477.4 L 243.7,468.2 L 257.7,457.1 L 274.1,445.5" fill="none" stroke="#334155" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M 276.8,602.1 L 235.0,549.6 L 229.8,538.3 L 226.5,526.1 L 224.8,514.0 L 225.1,501.8 L 228.5,489.4 L 235.5,477.4 L 243.7,468.2 L 257.7,457.1 L 274.1,445.5" fill="none" stroke="#475569" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" />
                    <!-- Unpaved SE Cut-Through Road from P12 to Hwy 2145 -->
                    <path d="M 341.7,405.8 L 365.0,455.0 L 385.0,515.0" fill="none" stroke="#3f3f46" stroke-width="9" stroke-dasharray="4 3" />

                    <!-- Campus Drive Aisles -->
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

                    <!-- 4B. VISIBLE INDIVIDUAL PARKING SPACES (STALL STRIPES) ACROSS ALL LOTS 1–10 -->
                    <!-- Paved Stalls in Lots 1, 2, 3, 4, 5, 6, 7, 8 -->
                    <path d="M 168.4,126.7 L 180.2,132.0 M 170.9,121.2 L 182.7,126.5 M 176.2,110.2 L 186.6,118.0 M 179.8,105.4 L 190.2,113.2 M 183.4,100.6 L 193.8,108.4 M 187.0,95.8 L 197.4,103.6 M 190.6,91.0 L 201.0,98.8 M 194.2,86.2 L 204.6,94.0 M 197.8,81.4 L 208.2,89.2 M 201.4,76.6 L 211.8,84.4 M 205.0,71.8 L 215.4,79.6 M 208.6,67.0 L 219.0,74.8 M 178.4,137.8 L 185.6,148.6 M 183.4,134.5 L 190.6,145.3 M 188.4,131.1 L 195.6,141.9 M 193.4,127.8 L 200.6,138.6 M 198.4,124.5 L 205.6,135.3 M 203.4,121.2 L 210.6,132.0 M 208.4,117.8 L 215.6,128.6 M 213.4,114.5 L 220.6,125.3 M 218.4,111.2 L 225.6,122.0 M 196.5,162.3 L 203.6,173.2 M 201.5,159.0 L 208.6,169.9 M 206.6,155.8 L 213.7,166.7 M 211.6,152.5 L 218.7,163.4 M 216.6,149.2 L 223.7,160.1 M 221.7,146.0 L 228.8,156.9 M 226.7,142.7 L 233.8,153.6 M 231.8,139.5 L 238.9,150.4 M 212.8,184.5 L 219.7,195.6 M 217.9,181.4 L 224.8,192.5 M 223.0,178.3 L 229.9,189.4 M 228.1,175.1 L 235.0,186.2 M 233.3,172.0 L 240.2,183.1 M 367.9,302.3 L 353.8,307.5 M 365.9,296.7 L 351.8,301.9 M 365.3,295.9 L 352.8,304.1 M 362.0,290.9 L 349.5,299.1 M 358.7,285.9 L 346.2,294.1 M 355.4,280.9 L 342.9,289.1 M 352.1,275.9 L 339.6,284.1 M 348.8,270.9 L 336.3,279.1 M 345.5,265.9 L 333.0,274.1 M 342.2,260.9 L 329.7,269.1 M 338.9,255.9 L 326.4,264.1 M 335.6,250.9 L 323.1,259.1 M 326.1,236.4 L 313.6,244.6 M 322.8,231.4 L 310.3,239.6 M 319.5,226.4 L 307.0,234.6 M 316.2,221.4 L 303.7,229.6 M 312.9,216.4 L 300.4,224.6 M 309.6,211.4 L 297.1,219.6 M 306.3,206.4 L 293.8,214.6 M 303.0,201.4 L 290.5,209.6 M 299.7,196.4 L 287.2,204.6 M 293.1,186.4 L 280.6,194.6 M 289.8,181.4 L 277.3,189.6 M 349.3,324.8 L 337.7,332.5 M 346.0,319.8 L 334.4,327.5 M 342.6,314.8 L 331.0,322.5 M 339.3,309.8 L 327.7,317.5 M 336.0,304.8 L 324.4,312.5 M 332.7,299.8 L 321.1,307.5 M 329.4,294.8 L 317.8,302.5 M 326.0,289.8 L 314.4,297.5 M 322.7,284.8 L 311.1,292.5 M 319.4,279.8 L 307.8,287.5 M 316.1,274.8 L 304.5,282.5 M 312.8,269.8 L 301.2,277.5 M 306.1,259.8 L 294.5,267.5 M 302.8,254.8 L 291.2,262.5 M 299.5,249.8 L 287.9,257.5 M 296.1,244.8 L 284.5,252.5 M 292.8,239.8 L 281.2,247.5 M 289.5,234.8 L 277.9,242.5 M 286.2,229.8 L 274.6,237.5 M 282.9,224.8 L 271.3,232.5 M 279.5,219.8 L 267.9,227.5 M 276.2,214.8 L 264.6,222.5 M 272.9,209.8 L 261.3,217.5 M 269.6,204.8 L 258.0,212.5 M 266.3,199.8 L 254.7,207.5 M 263.0,194.8 L 251.4,202.5 M 259.6,189.8 L 248.0,197.5 M 256.3,184.8 L 244.7,192.5 M 161.0,264.6 L 166.5,261.0 M 164.0,269.2 L 169.5,265.6 M 167.1,273.8 L 172.6,270.2 M 170.1,278.4 L 175.6,274.8 M 173.1,283.0 L 178.6,279.4 M 176.1,287.6 L 181.6,284.0 M 179.1,292.1 L 184.6,288.5 M 182.1,296.7 L 187.6,293.1 M 185.2,301.3 L 190.7,297.7 M 188.2,305.9 L 193.7,302.3 M 191.2,310.5 L 196.7,306.9 M 194.2,315.1 L 199.7,311.5 M 197.2,319.7 L 202.7,316.1 M 200.2,324.3 L 205.7,320.7 M 203.3,328.9 L 208.8,325.3 M 206.3,333.5 L 211.8,329.9 M 209.3,338.1 L 214.8,334.5 M 256.9,191.6 L 247.1,198.4 M 261.3,197.8 L 251.5,204.7 M 265.7,204.1 L 255.8,210.9 M 270.0,210.3 L 260.2,217.2 M 274.4,216.6 L 264.6,223.4 M 278.8,222.8 L 269.0,229.7 M 283.2,229.1 L 273.3,235.9 M 287.5,235.3 L 277.7,242.2 M 291.9,241.6 L 282.1,248.4 M 296.3,247.8 L 286.5,254.7 M 300.7,254.1 L 290.8,260.9 M 305.0,260.3 L 295.2,267.2 M 309.4,266.6 L 299.6,273.4 M 313.8,272.8 L 304.0,279.7 M 318.2,279.1 L 308.3,285.9 M 322.5,285.3 L 312.7,292.2 M 326.9,291.6 L 317.1,298.4" stroke="#cbd5e1" stroke-opacity="0.72" stroke-width="1.15" />

                    <!-- Grass Lot 9 & Brick Wall Lot 10 Stall Markings -->
                    <path d="M 153.4,91.2 L 162.6,98.8 M 157.3,86.4 L 166.5,94.1 M 161.2,81.7 L 170.5,89.3 M 165.1,76.9 L 174.4,84.6 M 169.0,72.2 L 178.3,79.8 M 173.0,67.4 L 182.2,75.1 M 176.9,62.7 L 186.1,70.3 M 180.8,57.9 L 190.0,65.6 M 184.7,53.2 L 194.0,60.8 M 188.6,48.4 L 197.9,56.1 M 192.5,43.7 L 201.8,51.3 M 196.5,38.9 L 205.7,46.6 M 200.4,34.2 L 209.6,41.8" stroke="#86efac" stroke-opacity="0.7" stroke-width="1.1" />
                    <path d="M 254.0,152.0 L 247.4,154.3 M 251.9,145.8 L 245.2,148.1 M 249.7,139.6 L 243.1,141.9 M 247.6,133.4 L 241.0,135.6 M 245.4,127.1 L 238.8,129.4 M 243.3,120.9 L 236.7,123.2 M 241.1,114.7 L 234.5,117.0 M 239.0,108.5 L 232.4,110.8 M 236.9,102.3 L 230.2,104.6 M 234.7,96.1 L 228.1,98.4 M 232.6,89.9 L 226.0,92.1 M 230.4,83.6 L 223.8,85.9 M 228.3,77.4 L 221.7,79.7 M 226.1,71.2 L 219.5,73.5 M 224.0,65.0 L 217.4,67.3" stroke="#93c5fd" stroke-opacity="0.75" stroke-width="1.1" />

                    <!-- 5. Hwy 2145 / Sam Furr Rd (NC-73) 4-Lane Highway -->
                    <path d="M 190.0,673.0 L 251.7,622.5 L 276.8,602.1 L 314.2,572.2 L 352.8,543.1 L 475.0,458.0" fill="none" stroke="#334155" stroke-width="28" />
                    <path d="M 190.0,673.0 L 251.7,622.5 L 276.8,602.1 L 314.2,572.2 L 352.8,543.1 L 475.0,458.0" fill="none" stroke="#475569" stroke-width="24" />
                    <path d="M 190.0,673.0 L 251.7,622.5 L 276.8,602.1 L 314.2,572.2 L 352.8,543.1 L 475.0,458.0" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" />
                    <!-- Hwy 2145 Shield Badge (Matching Pastor's Map) -->
                    <g transform="translate(338, 554)" :transform="uprightMode ? 'translate(338, 554) rotate(-33.6)' : 'translate(338, 554) rotate(-36)'">
                      <rect x="-48" y="-9" width="96" height="17" rx="4" fill="#ffffff" stroke="#09090b" stroke-width="1.5" />
                      <text x="0" y="3" text-anchor="middle" fill="#09090b" font-size="9" font-weight="800">2145 • SAM FURR RD</text>
                    </g>
                    <!-- University City Church Dr Label -->
                    <text x="242" y="518" text-anchor="middle" fill="#e2e8f0" font-size="8" font-weight="700" transform="rotate(-78 242 518)">University City Church Dr</text>

                    <!-- 6. Actual Building Footprint (80,081 sq ft • 2,100-Seat Auditorium) -->
                    <path d="M 243.3,241.5 L 254.1,256.6 L 256.9,260.6 L 266.6,254.0 L 268.8,257.3 L 291.4,291.2 L 297.4,287.1 L 312.4,309.6 L 306.3,313.5 L 320.0,333.9 L 309.2,341.1 L 310.5,342.8 L 309.0,343.7 L 306.2,345.5 L 304.6,346.5 L 303.5,345.0 L 297.2,349.2 L 301.0,354.7 L 298.4,356.6 L 299.8,358.4 L 302.0,361.2 L 298.5,363.6 L 302.7,369.5 L 310.0,379.9 L 304.8,383.3 L 302.6,384.7 L 297.4,388.1 L 290.2,377.9 L 286.1,372.2 L 283.8,373.8 L 281.5,370.9 L 280.1,369.1 L 278.0,370.6 L 273.5,365.1 L 267.6,369.1 L 268.8,370.7 L 266.7,372.2 L 264.7,373.6 L 262.7,375.0 L 261.5,373.2 L 250.9,380.3 L 236.1,358.0 L 232.5,360.1 L 218.1,338.9 L 221.7,336.4 L 214.5,325.5 L 213.2,323.5 L 211.7,321.3 L 209.6,318.1 L 205.9,320.7 L 199.4,311.1 L 203.1,308.4 L 198.0,300.6 L 202.3,297.7 L 207.5,294.2 L 205.5,291.4 L 196.3,278.8 L 194.9,276.8 L 187.0,265.9 L 236.1,231.5 L 241.7,239.3 Z" fill="#e4e4e7" fill-opacity="0.95" stroke="#18181b" stroke-width="1.6" />
                    <!-- Front Blue Canopy Roof (Matching Pastor's Aerial Map) -->
                    <polygon points="273.5,365.1 290.2,377.9 299.6,402.4 280.5,388.6" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1" />
                    <g :transform="uprightMode ? 'rotate(-33.6, 258, 315)' : 'rotate(-34, 258, 315)'">
                      <text x="258" y="302" text-anchor="middle" fill="#27272a" font-size="8.5" font-weight="800">GYM &amp; KIDS</text>
                      <text x="258" y="322" text-anchor="middle" fill="#09090b" font-size="10" font-weight="900">2,100-SEAT</text>
                      <text x="258" y="333" text-anchor="middle" fill="#18181b" font-size="9" font-weight="800">AUDITORIUM</text>
                    </g>

                    <!-- ====================================================================== -->
                    <!-- PROPOSED LOTS 11, 12, 13 (+360 NEW SPACES WITH VISIBLE PARKING STALLS) -->
                    <!-- ====================================================================== -->
                    <g v-show="layerExpansion || currentPhase === 'expand'">
                      <!-- ⑪ Proposed Lot 11: SE Corner Parcel PID 01123122 (+180 Spaces at P12/P2) -->
                      <g class="marker-btn" @click="selectPost('e1')">
                        <polygon points="395.5,272.0 462.0,272.0 462.0,425.0 413.0,462.0 381.0,452.0 386.5,386.0 389.5,352.0" fill="#581c87" fill-opacity="0.52" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" />
                        <!-- Visible Parking Spaces inside Lot 11 -->
                        <path d="M 420.0,282.4 L 404.0,281.6 M 419.6,290.9 L 403.6,290.1 M 419.2,299.4 L 403.2,298.6 M 418.8,307.9 L 402.8,307.1 M 418.4,316.4 L 402.5,315.6 M 418.0,324.9 L 402.1,324.1 M 417.7,333.4 L 401.7,332.6 M 417.3,341.9 L 401.3,341.1 M 416.9,350.4 L 400.9,349.6 M 416.5,358.9 L 400.5,358.1 M 416.1,367.4 L 400.1,366.6 M 415.7,375.9 L 399.7,375.1 M 415.3,384.4 L 399.3,383.6 M 414.9,392.9 L 399.0,392.1 M 414.5,401.4 L 398.6,400.6 M 414.2,409.9 L 398.2,409.1 M 413.8,418.4 L 397.8,417.6 M 413.4,426.9 L 397.4,426.1 M 413.0,435.4 L 397.0,434.6 M 450.0,282.4 L 434.0,281.6 M 449.6,290.8 L 433.6,290.0 M 449.2,299.2 L 433.2,298.4 M 448.8,307.6 L 432.8,306.8 M 448.3,316.0 L 432.4,315.3 M 447.9,324.4 L 432.0,323.7 M 447.5,332.9 L 431.5,332.1 M 447.1,341.3 L 431.1,340.5 M 446.7,349.7 L 430.7,348.9 M 446.3,358.1 L 430.3,357.3 M 445.9,366.5 L 429.9,365.7 M 445.5,374.9 L 429.5,374.1 M 445.0,383.3 L 429.1,382.6 M 444.6,391.7 L 428.7,391.0 M 444.2,400.2 L 428.2,399.4 M 443.8,408.6 L 427.8,407.8 M 443.4,417.0 L 427.4,416.2 M 443.0,425.4 L 427.0,424.6" stroke="#e9d5ff" stroke-opacity="0.7" stroke-width="1.1" />
                        <!-- P12 2nd Exit Flow Arrow to Hwy 2145 -->
                        <path d="M 422.0,285.0 L 422.0,380.0 L 348.0,412.0 L 382.0,510.0" fill="none" stroke="#22c55e" stroke-width="2.8" class="flow-line" marker-end="url(#arr-exit-green)" />
                        <g :transform="uprightMode ? 'rotate(-33.6, 425, 352)' : ''">
                          <circle cx="425" cy="336" r="10" fill="#9333ea" stroke="#ffffff" stroke-width="1.5" />
                          <text x="425" y="339.5" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="800">11</text>
                          <rect x="392" y="348" width="66" height="22" rx="4" fill="#18181b" fill-opacity="0.88" stroke="#c084fc" stroke-width="1" />
                          <text x="425" y="358" text-anchor="middle" fill="#f3e8ff" font-size="7.5" font-weight="800">LOT 11 (+180)</text>
                          <text x="425" y="366.5" text-anchor="middle" fill="#d8b4fe" font-size="6.5">PID 01123122</text>
                        </g>
                      </g>

                      <!-- ⑫ Proposed Lot 12: West of Exit Lot 1 inside PID 01123101 (+110 Spaces) -->
                      <g class="marker-btn" @click="selectPost('e2')">
                        <polygon points="132.0,248.0 153.0,265.0 208.0,350.0 165.0,385.0 96.0,280.0" fill="#581c87" fill-opacity="0.52" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" />
                        <!-- Visible Parking Spaces inside Lot 12 -->
                        <path d="M 143.5,261.5 L 132.5,268.5 M 147.2,267.3 L 136.2,274.3 M 150.9,273.1 L 140.0,280.1 M 154.6,278.8 L 143.7,285.9 M 158.3,284.6 L 147.4,291.7 M 162.0,290.4 L 151.1,297.4 M 165.8,296.2 L 154.8,303.2 M 169.5,302.0 L 158.5,309.0 M 173.2,307.8 L 162.2,314.8 M 176.9,313.6 L 166.0,320.6 M 180.6,319.3 L 169.7,326.4 M 184.3,325.1 L 173.4,332.2 M 188.0,330.9 L 177.1,337.9 M 191.8,336.7 L 180.8,343.7 M 195.5,342.5 L 184.5,349.5 M 123.5,275.5 L 112.5,282.5 M 127.2,281.3 L 116.2,288.3 M 130.9,287.1 L 120.0,294.1 M 134.6,292.8 L 123.7,299.9 M 138.3,298.6 L 127.4,305.7 M 142.0,304.4 L 131.1,311.4 M 145.8,310.2 L 134.8,317.2 M 149.5,316.0 L 138.5,323.0 M 153.2,321.8 L 142.2,328.8 M 156.9,327.6 L 146.0,334.6 M 160.6,333.3 L 149.7,340.4 M 164.3,339.1 L 153.4,346.2 M 168.0,344.9 L 157.1,351.9 M 171.8,350.7 L 160.8,357.7 M 175.5,356.5 L 164.5,363.5" stroke="#e9d5ff" stroke-opacity="0.7" stroke-width="1.1" />
                        <g :transform="uprightMode ? 'rotate(-33.6, 148, 318)' : ''">
                          <circle cx="148" cy="306" r="10" fill="#9333ea" stroke="#ffffff" stroke-width="1.5" />
                          <text x="148" y="309.5" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="800">12</text>
                          <rect x="115" y="318" width="66" height="20" rx="4" fill="#18181b" fill-opacity="0.88" stroke="#c084fc" stroke-width="1" />
                          <text x="148" y="328" text-anchor="middle" fill="#f3e8ff" font-size="7.5" font-weight="800">LOT 12 (+110)</text>
                          <text x="148" y="335.5" text-anchor="middle" fill="#d8b4fe" font-size="6.2">West of Exit Lot 1</text>
                        </g>
                      </g>

                      <!-- ⑬ Proposed Lot 13: East of Lot 4 & P5 inside PID 01123101 (+70 Spaces) -->
                      <g class="marker-btn" @click="selectPost('e3')">
                        <polygon points="322.7,163.0 401.0,170.0 393.5,266.0 381.0,266.0 374.1,241.0 322.7,175.7" fill="#581c87" fill-opacity="0.52" stroke="#c084fc" stroke-width="2" stroke-dasharray="5 3" />
                        <!-- Visible Parking Spaces inside Lot 13 -->
                        <path d="M 353.7,170.9 L 342.3,177.1 M 357.1,177.1 L 345.6,183.3 M 360.4,183.2 L 348.9,189.4 M 363.7,189.4 L 352.3,195.6 M 367.1,195.6 L 355.6,201.8 M 370.4,201.7 L 358.9,207.9 M 373.7,207.9 L 362.3,214.1 M 377.1,214.1 L 365.6,220.3 M 380.4,220.2 L 368.9,226.4 M 383.7,226.4 L 372.3,232.6 M 387.1,232.6 L 375.6,238.8 M 390.4,238.7 L 378.9,244.9 M 393.7,244.9 L 382.3,251.1" stroke="#e9d5ff" stroke-opacity="0.7" stroke-width="1.1" />
                        <g :transform="uprightMode ? 'rotate(-33.6, 376, 206)' : ''">
                          <circle cx="376" cy="195" r="9.5" fill="#9333ea" stroke="#ffffff" stroke-width="1.5" />
                          <text x="376" y="198.5" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="800">13</text>
                          <rect x="347" y="206" width="58" height="14" rx="3.5" fill="#18181b" fill-opacity="0.88" stroke="#c084fc" stroke-width="1" />
                          <text x="376" y="215.5" text-anchor="middle" fill="#f3e8ff" font-size="7.2" font-weight="800">LOT 13 (+70)</text>
                        </g>
                      </g>
                    </g>

                    <!-- ====================================================================== -->
                    <!-- ANIMATED TRAFFIC FLOW ARROWS (MATCHING PASTOR'S COLORS: BLUE IN / GREEN OUT) -->
                    <!-- ====================================================================== -->
                    <!-- VIEW 1: ENTRY FLOW (Lots 1 -> 10 Fill Order in Light Blue + Green Exit Lane) -->
                    <g v-show="currentPhase === 'ingress'">
                      <!-- Light Blue Entry Flow: Hwy 2145 -> University City Church Dr -> P1 -> P12 -> P2 -> P5 -> P6 -> P7 -->
                      <path d="M 350.0,541.0 L 279.8,599.7 L 238.1,547.3 L 233.4,537.0 L 230.2,525.3 L 228.6,513.8 L 228.9,502.4 L 232.0,490.9 L 238.6,479.6 L 246.3,471.0 L 260.0,460.1 L 276.3,448.6 L 361.5,383.8 L 364.5,373.6 L 379.8,303.5 L 376.7,274.4 L 347.0,227.8 L 313.3,178.7 L 249.7,166.8 L 231.4,110.3 L 213.9,45.6" fill="none" stroke="#38bdf8" stroke-width="3.2" class="flow-line" marker-end="url(#arr-entry-blue)" />
                      <!-- Light Blue Entry into Lots 2, 3, 4 (North-to-South down toward P4, P3, P2) -->
                      <path d="M 313.3,178.7 L 276.0,174.6 L 323.1,245.6 L 362.4,304.9" fill="none" stroke="#38bdf8" stroke-width="2.4" class="flow-line" marker-end="url(#arr-entry-blue)" />
                      <path d="M 262.6,173.2 L 241.1,174.8 L 299.5,262.6 L 342.0,326.0" fill="none" stroke="#38bdf8" stroke-width="2.4" class="flow-line" marker-end="url(#arr-entry-blue)" />
                      <!-- Light Blue Entry into Lot 1 (via P6 -> P10 -> Exit Lot 1) -->
                      <path d="M 241.1,174.8 L 211.2,193.1 L 155.0,232.0 L 162.0,262.0 L 208.0,335.0" fill="none" stroke="#38bdf8" stroke-width="2.4" class="flow-line" marker-end="url(#arr-entry-blue)" />
                      <!-- Front Canopy Drop-Off Loop (G -> G) -->
                      <path d="M 346.8,333.6 L 324.3,354.0 L 318.8,364.2 L 325.3,383.1 L 299.6,402.4 L 280.5,388.6 L 243.3,402.8" fill="none" stroke="#facc15" stroke-width="2.6" class="flow-line" marker-end="url(#arr-canopy-gold)" />
                      <!-- Green Exit Flow down P8 -> P9 Exit -> P10 -> P11 -> P1 -> Hwy 2145 -->
                      <path d="M 195.7,38.5 L 145.4,111.9 L 137.0,178.3 L 138.8,243.7 L 201.6,346.8 L 243.3,402.8 L 271.9,442.4 L 255.4,454.1 L 241.1,465.4 L 232.4,475.2 L 225.0,487.9 L 221.3,501.2 L 221.0,514.2 L 222.8,526.9 L 226.2,539.6 L 231.9,551.9 L 273.8,604.5 L 222.0,645.0" fill="none" stroke="#22c55e" stroke-width="2.8" class="flow-line" marker-end="url(#arr-exit-green)" />
                    </g>

                    <!-- VIEW 2: 9:45 & 11:45 TURNAROUND SWAP (Eliminating the P1/P11 Bottleneck) -->
                    <g v-show="currentPhase === 'swap'">
                      <!-- Green Exit #1: West Spine (Lots 1 & 5-10 via P8 -> P9 Exit -> P10 -> P11 -> Left Lane at P1) -->
                      <path d="M 195.7,38.5 L 145.4,111.9 L 137.0,178.3 L 138.8,243.7 L 201.6,346.8 L 243.3,402.8 L 271.9,442.4 L 255.4,454.1 L 241.1,465.4 L 232.4,475.2 L 225.0,487.9 L 221.3,501.2 L 221.0,514.2 L 222.8,526.9 L 226.2,539.6 L 231.9,551.9 L 273.8,604.5 L 222.0,645.0" fill="none" stroke="#22c55e" stroke-width="3.4" class="flow-line" marker-end="url(#arr-exit-green)" />
                      <!-- Green Exit #2: 12-Minute Southward Flush of Lots 2, 3, 4 via P4/P3/P2 -->
                      <path d="M 299.5,262.6 L 346.8,333.6 L 358.0,375.0 L 272.0,440.0" fill="none" stroke="#22c55e" stroke-width="2.8" class="flow-line" marker-end="url(#arr-exit-green)" />
                      <!-- Light Blue Entry Bypass up Outer East Lane (P1 -> P12 -> P2 -> P5 -> P6 -> Lots 5-8) -->
                      <path d="M 350.0,541.0 L 279.8,599.7 L 238.1,547.3 L 233.4,537.0 L 230.2,525.3 L 228.6,513.8 L 228.9,502.4 L 232.0,490.9 L 238.6,479.6 L 246.3,471.0 L 260.0,460.1 L 276.3,448.6 L 361.5,383.8 L 364.5,373.6 L 380.8,287.5 L 347.0,227.8 L 313.3,178.7 L 249.7,166.8 L 231.4,110.3 L 206.5,35.5" fill="none" stroke="#38bdf8" stroke-width="3.2" class="flow-line" marker-end="url(#arr-entry-blue)" />
                      <!-- 50-ft Orange Cone Extension Line past P1 toward P12 -->
                      <g fill="#f97316" stroke="#ffffff" stroke-width="0.6">
                        <circle cx="255.0" cy="575.0" r="3" /><circle cx="235.0" cy="549.6" r="3" /><circle cx="224.8" cy="514.0" r="3" /><circle cx="235.5" cy="477.4" r="3" /><circle cx="257.7" cy="457.1" r="3.2" /><circle cx="274.1" cy="445.5" r="3.5" /><circle cx="292.0" cy="433.0" r="3.5" /><circle cx="308.0" cy="421.0" r="3.5" />
                      </g>
                      <!-- Red X showing P6 -> G -> P10 cut-through closed during service swap -->
                      <line x1="215" y1="188" x2="227" y2="200" stroke="#ef4444" stroke-width="2.5" />
                      <line x1="227" y1="188" x2="215" y2="200" stroke="#ef4444" stroke-width="2.5" />
                    </g>

                    <!-- VIEW 3: 1:45 PM ALL-LOT EXIT FLOW (Both West & East Spines Outbound in Green) -->
                    <g v-show="currentPhase === 'egress'">
                      <!-- West Exit Spine (Lots 1 & 5-10) -->
                      <path d="M 206.5,35.5 L 145.4,111.9 L 137.0,178.3 L 138.8,243.7 L 201.6,346.8 L 243.3,402.8 L 271.9,442.4 L 255.4,454.1 L 241.1,465.4 L 232.4,475.2 L 225.0,487.9 L 221.3,501.2 L 221.0,514.2 L 222.8,526.9 L 226.2,539.6 L 231.9,551.9 L 273.8,604.5 L 218.0,648.0" fill="none" stroke="#22c55e" stroke-width="3.4" class="flow-line" marker-end="url(#arr-exit-green)" />
                      <!-- East Exit Spine (Lots 2, 3, 4 drain straight South via P4/P3/P2 -> P12 -> P1) -->
                      <path d="M 276.0,174.6 L 323.1,245.6 L 367.1,317.8 L 346.8,333.6 L 364.5,373.6 L 361.5,383.8 L 276.3,448.6 L 260.0,460.1 L 246.3,471.0 L 238.6,479.6 L 232.0,490.9 L 228.9,502.4 L 228.6,513.8 L 230.2,525.3 L 233.4,537.0 L 238.1,547.3 L 279.8,599.7 L 365.0,536.0" fill="none" stroke="#22c55e" stroke-width="3.4" class="flow-line" marker-end="url(#arr-exit-green)" />
                    </g>

                    <!-- ====================================================================== -->
                    <!-- CLICKABLE LOT NUMBER BADGES ① THROUGH ⑩ (MATCHING PASTOR'S LOT #s)    -->
                    <!-- ====================================================================== -->
                    <g v-show="layerLots">
                      <!-- ① Exit Lot 1 -->
                      <g class="marker-btn" @click="selectPost('lot1')" :transform="uprightMode ? 'rotate(-33.6, 188, 302)' : ''">
                        <rect x="163" y="294" width="52" height="15" rx="4" fill="#09090b" fill-opacity="0.86" stroke="#38bdf8" stroke-width="1.2" />
                        <circle cx="171" cy="301.5" r="6.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.2" />
                        <text x="171" y="304.2" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="900">1</text>
                        <text x="196" y="304.2" text-anchor="middle" fill="#ffffff" font-size="7" font-weight="800">Exit Lot 1</text>
                      </g>

                      <!-- ② Lot 2 (Inner East Bay) -->
                      <g class="marker-btn" @click="selectPost('east')" :transform="uprightMode ? 'rotate(-33.6, 298, 249)' : ''">
                        <circle cx="298" cy="249" r="8.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.4" />
                        <text x="298" y="252" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="900">2</text>
                      </g>

                      <!-- ③ Lot 3 (Middle East Bay) -->
                      <g class="marker-btn" @click="selectPost('east')" :transform="uprightMode ? 'rotate(-33.6, 320, 234)' : ''">
                        <circle cx="320" cy="234" r="8.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.4" />
                        <text x="320" y="237" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="900">3</text>
                      </g>

                      <!-- ④ Lot 4 (Outer East Bay) -->
                      <g class="marker-btn" @click="selectPost('east')" :transform="uprightMode ? 'rotate(-33.6, 342, 220)' : ''">
                        <circle cx="342" cy="220" r="8.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.4" />
                        <text x="342" y="223" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="900">4</text>
                      </g>

                      <!-- ⑤ Lot 5 -->
                      <g class="marker-btn" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 220, 168)' : ''">
                        <rect x="202" y="161" width="38" height="14" rx="4" fill="#09090b" fill-opacity="0.84" stroke="#60a5fa" stroke-width="1" />
                        <circle cx="210" cy="168" r="6.2" fill="#2563eb" stroke="#ffffff" stroke-width="1.2" />
                        <text x="210" y="170.5" text-anchor="middle" fill="#ffffff" font-size="7.2" font-weight="900">5</text>
                        <text x="228" y="170.5" text-anchor="middle" fill="#ffffff" font-size="6.8" font-weight="800">Lot 5</text>
                      </g>

                      <!-- ⑥ Lot 6 -->
                      <g class="marker-btn" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 205, 146)' : ''">
                        <rect x="187" y="139" width="38" height="14" rx="4" fill="#09090b" fill-opacity="0.84" stroke="#60a5fa" stroke-width="1" />
                        <circle cx="195" cy="146" r="6.2" fill="#2563eb" stroke="#ffffff" stroke-width="1.2" />
                        <text x="195" y="148.5" text-anchor="middle" fill="#ffffff" font-size="7.2" font-weight="900">6</text>
                        <text x="213" y="148.5" text-anchor="middle" fill="#ffffff" font-size="6.8" font-weight="800">Lot 6</text>
                      </g>

                      <!-- ⑦ Lot 7 -->
                      <g class="marker-btn" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 191, 125)' : ''">
                        <rect x="173" y="118" width="38" height="14" rx="4" fill="#09090b" fill-opacity="0.84" stroke="#60a5fa" stroke-width="1" />
                        <circle cx="181" cy="125" r="6.2" fill="#2563eb" stroke="#ffffff" stroke-width="1.2" />
                        <text x="181" y="127.5" text-anchor="middle" fill="#ffffff" font-size="7.2" font-weight="900">7</text>
                        <text x="199" y="127.5" text-anchor="middle" fill="#ffffff" font-size="6.8" font-weight="800">Lot 7</text>
                      </g>

                      <!-- ⑧ Lot 8 -->
                      <g class="marker-btn" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 177, 103)' : ''">
                        <rect x="159" y="96" width="38" height="14" rx="4" fill="#09090b" fill-opacity="0.84" stroke="#60a5fa" stroke-width="1" />
                        <circle cx="167" cy="103" r="6.2" fill="#2563eb" stroke="#ffffff" stroke-width="1.2" />
                        <text x="167" y="105.5" text-anchor="middle" fill="#ffffff" font-size="7.2" font-weight="900">8</text>
                        <text x="185" y="105.5" text-anchor="middle" fill="#ffffff" font-size="6.8" font-weight="800">Lot 8</text>
                      </g>

                      <!-- ⑨ Grass Lot (North Apex) -->
                      <g class="marker-btn" @click="selectPost('grass10')" :transform="uprightMode ? 'rotate(-33.6, 178, 65)' : ''">
                        <rect x="152" y="57" width="54" height="15" rx="4" fill="#09090b" fill-opacity="0.88" stroke="#4ade80" stroke-width="1.2" />
                        <circle cx="160" cy="64.5" r="6.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.2" />
                        <text x="160" y="67.2" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="900">9</text>
                        <text x="186" y="67.2" text-anchor="middle" fill="#86efac" font-size="7" font-weight="800">Grass Lot</text>
                      </g>

                      <!-- ⑩ Brick Wall (Eastern Parcel Line) -->
                      <g class="marker-btn" @click="selectPost('grass10')" :transform="uprightMode ? 'rotate(-33.6, 250, 110)' : ''">
                        <rect x="223" y="102" width="54" height="15" rx="4" fill="#09090b" fill-opacity="0.88" stroke="#60a5fa" stroke-width="1.2" />
                        <circle cx="231" cy="109.5" r="6.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.2" />
                        <text x="231" y="112.2" text-anchor="middle" fill="#ffffff" font-size="7" font-weight="900">10</text>
                        <text x="257" y="112.2" text-anchor="middle" fill="#93c5fd" font-size="7" font-weight="800">Brick Wall</text>
                      </g>
                    </g>

                    <!-- ====================================================================== -->
                    <!-- CLICKABLE WHITE POST CIRCLES P1–P12 & GREETERS G (PASTOR'S MAP STYLE)  -->
                    <!-- ====================================================================== -->
                    <g v-show="layerPosts">
                      <!-- Glowing Orange/Red "Potential Bottleneck" Icon between P11 and P1 -->
                      <g class="marker-btn" @click="selectPost('split')" :transform="uprightMode ? 'rotate(-33.6, 256, 427)' : ''">
                        <circle cx="256" cy="427" r="11.5" fill="#ef4444" fill-opacity="0.35" />
                        <circle cx="256" cy="427" r="8" fill="#f59e0b" stroke="#ef4444" stroke-width="2.5" />
                      </g>

                      <!-- P1 (Bottom Main Entry Split) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'split' }]" @click="selectPost('split')" :transform="uprightMode ? 'rotate(-33.6, 277, 444)' : ''">
                        <circle cx="277" cy="444" r="11.5" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="277" y="447.5" text-anchor="middle" fill="#09090b" font-size="8.5" font-weight="900">P1</text>
                      </g>

                      <!-- P11 (Bottom of Exit Lot 1) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'split' }]" @click="selectPost('split')" :transform="uprightMode ? 'rotate(-33.6, 233, 403)' : ''">
                        <circle cx="233" cy="403" r="11.5" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="233" y="406.5" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">P11</text>
                      </g>

                      <!-- P12 (🚫 Blocked SE Corridor) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'hpd' }]" @click="selectPost('hpd')" :transform="uprightMode ? 'rotate(-33.6, 342, 406)' : ''">
                        <circle cx="342" cy="406" r="12" fill="#ffffff" stroke="#ef4444" stroke-width="2" />
                        <text x="342" y="409" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">P12</text>
                        <circle cx="342" cy="421" r="5.5" fill="#ffffff" stroke="#dc2626" stroke-width="1.8" />
                        <line x1="338.5" y1="417.5" x2="345.5" y2="424.5" stroke="#dc2626" stroke-width="1.8" />
                      </g>

                      <!-- P2 (Bottom-Right of Lot 4) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'east' }]" @click="selectPost('east')" :transform="uprightMode ? 'rotate(-33.6, 382, 342)' : ''">
                        <circle cx="382" cy="342" r="11" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="382" y="345.5" text-anchor="middle" fill="#09090b" font-size="8.5" font-weight="900">P2</text>
                      </g>

                      <!-- P3 (Bottom of Lot 3) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'east' }]" @click="selectPost('east')" :transform="uprightMode ? 'rotate(-33.6, 360, 305)' : ''">
                        <circle cx="360" cy="305" r="10.5" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="360" y="308.5" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">P3</text>
                      </g>

                      <!-- P4 (Bottom of Lot 2) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'east' }]" @click="selectPost('east')" :transform="uprightMode ? 'rotate(-33.6, 336, 315)' : ''">
                        <circle cx="336" cy="315" r="10.5" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="336" y="318.5" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">P4</text>
                      </g>

                      <!-- P5 (Top-Right of Lots 3 & 4) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'east' }]" @click="selectPost('east')" :transform="uprightMode ? 'rotate(-33.6, 313, 178)' : ''">
                        <circle cx="313" cy="178" r="11" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="313" y="181.5" text-anchor="middle" fill="#09090b" font-size="8.5" font-weight="900">P5</text>
                      </g>

                      <!-- P6 (Right End of Lot 5 / Below Lot 10 Brick Wall) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'north' }]" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 258, 160)' : ''">
                        <circle cx="258" cy="160" r="11" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="258" y="163.5" text-anchor="middle" fill="#09090b" font-size="8.5" font-weight="900">P6</text>
                      </g>

                      <!-- P7 (Top-Right by Lot 9 Grass Lot & Lot 10 Brick Wall) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'north' }]" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 224, 52)' : ''">
                        <circle cx="224" cy="52" r="11" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="224" y="55.5" text-anchor="middle" fill="#09090b" font-size="8.5" font-weight="900">P7</text>
                      </g>

                      <!-- P8 (Top-Left by Lot 9 Grass Lot & Lot 8) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'north' }]" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 144, 114)' : ''">
                        <circle cx="144" cy="114" r="11" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="144" y="117.5" text-anchor="middle" fill="#09090b" font-size="8.5" font-weight="900">P8</text>
                      </g>

                      <!-- P9 Exit (West Exit Spine beside Lots 5-7 & Turf Field) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'north' }]" @click="selectPost('north')" :transform="uprightMode ? 'rotate(-33.6, 138, 188)' : ''">
                        <circle cx="138" cy="188" r="12.5" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="138" y="186.5" text-anchor="middle" fill="#09090b" font-size="7.5" font-weight="900">P9</text>
                        <text x="138" y="194" text-anchor="middle" fill="#16a34a" font-size="6.2" font-weight="900">Exit</text>
                      </g>

                      <!-- P10 (Top-Left of Building / Top of Exit Lot 1) -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'lot1' }]" @click="selectPost('lot1')" :transform="uprightMode ? 'rotate(-33.6, 160, 238)' : ''">
                        <circle cx="160" cy="238" r="11.5" fill="#ffffff" stroke="#09090b" stroke-width="2" />
                        <text x="160" y="241.5" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">P10</text>
                      </g>

                      <!-- 3 Greeter Stations (G) around Building -->
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'greeters' }]" @click="selectPost('greeters')" :transform="uprightMode ? 'rotate(-33.6, 248, 368)' : ''">
                        <circle cx="248" cy="368" r="9.5" fill="#ffffff" stroke="#09090b" stroke-width="1.8" />
                        <text x="248" y="371.2" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">G</text>
                      </g>
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'greeters' }]" @click="selectPost('greeters')" :transform="uprightMode ? 'rotate(-33.6, 315, 336)' : ''">
                        <circle cx="315" cy="336" r="9.5" fill="#ffffff" stroke="#09090b" stroke-width="1.8" />
                        <text x="315" y="339.2" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">G</text>
                      </g>
                      <g :class="['marker-btn', { 'marker-active': selectedPostKey === 'greeters' }]" @click="selectPost('greeters')" :transform="uprightMode ? 'rotate(-33.6, 232, 202)' : ''">
                        <circle cx="232" cy="202" r="9.5" fill="#ffffff" stroke="#09090b" stroke-width="1.8" />
                        <text x="232" y="205.2" text-anchor="middle" fill="#09090b" font-size="8" font-weight="900">G</text>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <!-- Optional Side-by-Side Comparison: Campus Pastor's Reference Map -->
            <div v-if="showPastorCompare" class="col-12 col-md-5">
              <div
                class="q-pa-sm full-height column justify-between"
                style="background: #090d16; border: 1px solid #27272a; border-radius: 12px"
              >
                <div>
                  <div class="row items-center justify-between q-mb-xs">
                    <span class="uc-pill-black">Pastor's Week 1–2 Reference Map</span>
                    <q-btn flat dense round size="sm" color="white" icon="close" @click="showPastorCompare = false" />
                  </div>
                  <img
                    src="/pastor-flow-map.jpg"
                    alt="Campus Pastor Parking Flow Map (Lots 1-10 and P1-P12)"
                    style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #3f3f46"
                  />
                </div>
                <div class="text-caption text-grey-4 q-mt-sm">
                  Notice how the Interactive Map on the left matches the exact <strong>①–⑩ Lot #s</strong>, <strong>P1–P12 &amp; G Posts</strong>, <strong>Light Blue Entry Flow</strong>, and <strong>Green Exit Flow</strong> while showing the underlying parking spaces and GIS property lines.
                </div>
              </div>
            </div>
          </div>

          <!-- Legend Bar Below Map (Aligned 100% with Pastor's Map Colors) -->
          <div class="row items-center q-gutter-md q-mt-sm q-px-xs text-caption uc-muted">
            <div class="row items-center no-wrap">
              <span style="width: 16px; height: 4px; background: #38bdf8; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span><strong>Light Blue Arrows:</strong> Entry Flow (Lots 1→10)</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 16px; height: 4px; background: #22c55e; border-radius: 2px; display: inline-block" class="q-mr-xs"></span>
              <span><strong>Green Arrows:</strong> Exit Flow</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 11px; height: 11px; background: #f59e0b; border: 2px solid #ef4444; border-radius: 50%; display: inline-block" class="q-mr-xs"></span>
              <span><strong>P1 / P11:</strong> Potential Bottleneck</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 12px; height: 12px; background: rgba(147, 51, 234, 0.55); border: 1px solid #c084fc; border-radius: 3px; display: inline-block" class="q-mr-xs"></span>
              <span><strong>⑪–⑬ Proposed Lots:</strong> +360 Spaces (In-Parcel)</span>
            </div>
            <div class="row items-center no-wrap">
              <span style="width: 14px; height: 0px; border-top: 2px dashed #34d399; display: inline-block" class="q-mr-xs"></span>
              <span><strong>Green Dashed:</strong> Owned GIS Property Line</span>
            </div>
          </div>

          <!-- Active View Summary Bar + 5 Clickable Week 3 Tweaks Directly Below the Map -->
          <div class="uc-subcard q-pa-md q-mt-md">
            <div class="row items-center justify-between no-wrap q-col-gutter-md">
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
                  label="Next Map View"
                  no-caps
                  class="text-weight-bold"
                  @click="nextPhase"
                />
              </div>
            </div>

            <!-- Quick-Jump Buttons for the 5 Week 3+ Map Improvements -->
            <div class="q-mt-md q-pt-sm" style="border-top: 1px solid rgba(113, 113, 122, 0.2)">
              <div class="text-caption text-uppercase text-weight-bold uc-muted q-mb-xs" style="letter-spacing: 0.04em">
                Click any Week 3+ Improvement to Highlight on Map:
              </div>
              <div class="row q-gutter-xs">
                <q-btn
                  v-for="tweak in pastorMapTweaks"
                  :key="tweak.num"
                  size="sm"
                  no-caps
                  :unelevated="selectedPostKey === tweak.postKey && currentPhase === tweak.phase"
                  :outline="!(selectedPostKey === tweak.postKey && currentPhase === tweak.phase)"
                  :color="selectedPostKey === tweak.postKey && currentPhase === tweak.phase ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-7'"
                  :text-color="selectedPostKey === tweak.postKey && currentPhase === tweak.phase ? ($q.dark.isActive ? 'dark' : 'white') : undefined"
                  :label="tweak.badge"
                  class="text-weight-bold"
                  style="border-radius: 7px"
                  @click="focusTweak(tweak)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right 4 Columns (or Full Width Below when Expanded): Station/Lot Inspector + Capacity Simulator -->
      <div :class="fullWidthMap ? 'col-12 row q-col-gutter-lg' : 'col-12 col-lg-4 column q-gutter-y-lg'">
        <!-- Card 1: Interactive Map Inspector (Lots 1-13 & Posts P1-P12) -->
        <div :class="fullWidthMap ? 'col-12 col-md-6' : ''">
          <div class="uc-card q-pa-md q-pa-md-lg full-height">
            <div class="row items-center justify-between q-mb-xs">
              <span class="uc-pill-black">{{ activePostObj.badge }}</span>
            </div>
            <div class="text-h6 text-weight-bolder q-mt-sm q-mb-xs" style="line-height: 1.3">
              {{ activePostObj.title }}
            </div>

            <!-- Key Metric Pills for Selected Lot/Post -->
            <div v-if="activePostObj.metrics" class="row q-gutter-xs q-mb-md">
              <span
                v-for="(m, idx) in activePostObj.metrics"
                :key="idx"
                class="uc-pill-outline"
              >
                {{ m }}
              </span>
            </div>

            <!-- Structured Comparison: Week 1-2 Operation vs. Week 3+ Optimization -->
            <div class="uc-subcard q-pa-sm q-mb-sm">
              <div class="text-caption text-uppercase text-weight-bold uc-muted" style="font-size: 10px">
                Current Map Setup (Lots 1–10 &amp; P1–P12)
              </div>
              <div class="text-body2 q-mt-xs" style="line-height: 1.5">
                {{ activePostObj.week12 }}
              </div>
            </div>

            <div class="uc-subcard q-pa-sm q-mb-md" style="border-left: 3px solid #22c55e">
              <div class="text-caption text-uppercase text-weight-bold" style="font-size: 10px; color: #16a34a">
                Recommended Action / GIS Verification
              </div>
              <div class="text-body2 q-mt-xs" style="line-height: 1.5">
                {{ activePostObj.week3Fix }}
              </div>
            </div>

            <!-- Categorized Quick-Select Directory for All Lots & Posts -->
            <div class="text-caption uc-muted text-uppercase text-weight-bold q-mb-xs" style="font-size: 10px; letter-spacing: 0.05em">
              Inspect Lots 1–10 &amp; Posts P1–P12:
            </div>
            <div class="row q-gutter-xs q-mb-sm">
              <q-btn
                v-for="key in ['split', 'lot1', 'east', 'north', 'grass10', 'hpd', 'greeters']"
                :key="key"
                size="sm"
                dense
                no-caps
                :unelevated="selectedPostKey === key"
                :outline="selectedPostKey !== key"
                :color="selectedPostKey === key ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-7'"
                :text-color="selectedPostKey === key ? ($q.dark.isActive ? 'dark' : 'white') : undefined"
                :label="postData[key].shortLabel"
                class="q-px-sm text-weight-bold"
                style="border-radius: 7px"
                @click="selectPost(key)"
              />
            </div>

            <div class="text-caption uc-muted text-uppercase text-weight-bold q-mb-xs" style="font-size: 10px; letter-spacing: 0.05em">
              Inspect Proposed Lots 11–13 (+360 Spaces) &amp; GIS Land:
            </div>
            <div class="row q-gutter-xs">
              <q-btn
                v-for="key in ['e1', 'e2', 'e3', 'turf', 'gis']"
                :key="key"
                size="sm"
                dense
                no-caps
                :unelevated="selectedPostKey === key"
                :outline="selectedPostKey !== key"
                :color="selectedPostKey === key ? ($q.dark.isActive ? 'white' : 'dark') : 'grey-7'"
                :text-color="selectedPostKey === key ? ($q.dark.isActive ? 'dark' : 'white') : undefined"
                :label="postData[key].shortLabel"
                class="q-px-sm text-weight-bold"
                style="border-radius: 7px"
                @click="selectPost(key)"
              />
            </div>
          </div>
        </div>

        <!-- Card 2: Sunday Attendance & Lot Capacity Simulator -->
        <div :class="fullWidthMap ? 'col-12 col-md-6' : ''">
          <div class="uc-card q-pa-md q-pa-md-lg full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold" style="letter-spacing: 0.05em">
              Sunday Capacity Simulator (Lots 1–13)
            </div>
            <div class="text-h6 text-weight-bold q-mt-xs">
              Test Attendance vs. Lot Capacity
            </div>
            <div class="text-body2 uc-muted q-mt-xs q-mb-md">
              Select a Sunday attendance scenario to see how Lots 1–10 and Proposed Lots 11–13 fill:
            </div>

            <!-- 4 Scenario Buttons -->
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
                  style="border-radius: 9px"
                  @click="applyPreset(preset)"
                >
                  <div class="full-width">
                    <div class="text-body2 text-weight-bold">{{ preset.title }}</div>
                    <div class="text-caption" style="font-size: 11px; opacity: 0.8">{{ preset.subtitle }}</div>
                  </div>
                </q-btn>
              </div>
            </div>

            <!-- Attendance Slider -->
            <div class="q-mb-sm">
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

            <!-- Toggles Aligned with Pastor's Lot Numbers -->
            <div class="column q-gutter-y-xs q-mb-md">
              <q-toggle
                v-model="shuttle"
                :color="$q.dark.isActive ? 'white' : 'dark'"
                label="Park 90 Dream Team cars in ⑨ Grass Lot & ⑩ Brick Wall (saves Lots 1–8 for guests)"
                class="text-body2"
              />
              <q-toggle
                v-model="expand"
                :color="$q.dark.isActive ? 'white' : 'dark'"
                label="Include +360 New Spaces: Proposed Lots 11, 12 & 13 (Turf Field Preserved)"
                class="text-body2"
                @update:model-value="onToggleExpand"
              />
            </div>

            <!-- Result Summary Box -->
            <div class="uc-subcard q-pa-md">
              <div class="row items-baseline justify-between">
                <div class="text-caption uc-muted text-uppercase text-weight-bold">
                  {{ expand ? 'Lots 1–8 + Lots 11–13' : 'Lots 1–8 Paved Capacity' }}
                </div>
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { phaseOptions, postData, attendancePresets, pastorMapTweaks } from '../data/studyData'

const $q = useQuasar()

// Map Display & Emphasis State
const uprightMode = ref(true) // Default true: aligns Lots 1-10 vertically/horizontally to match Pastor's Map
const showPastorCompare = ref(false)
const fullWidthMap = ref(false)
const zoomLevel = ref(1)

// Interactive Map Layer Toggles
const layerLots = ref(true)
const layerPosts = ref(true)
const layerExpansion = ref(false)
const layerGis = ref(true)

const currentPhase = ref('ingress')
const selectedPostKey = ref('split')

const attendees = ref(1000)
const occ = ref(2.2)
const vols = ref(90)
const shuttle = ref(true)
const expand = ref(false)

const computedViewBox = computed(() => {
  const baseX = 55
  const baseY = 18
  const baseW = 425
  const baseH = 595
  if (zoomLevel.value <= 1) {
    return `${baseX} ${baseY} ${baseW} ${baseH}`
  }
  const newW = baseW / zoomLevel.value
  const newH = baseH / zoomLevel.value
  const cx = baseX + baseW / 2
  const cy = baseY + baseH / 2 - 20
  return `${(cx - newW / 2).toFixed(1)} ${(cy - newH / 2).toFixed(1)} ${newW.toFixed(1)} ${newH.toFixed(1)}`
})

function adjustZoom(delta) {
  zoomLevel.value = Math.min(1.8, Math.max(1, +(zoomLevel.value + delta).toFixed(2)))
}

function resetZoom() {
  zoomLevel.value = 1
}

const activePhaseObj = computed(() => {
  return phaseOptions.find(p => p.value === currentPhase.value) || phaseOptions[0]
})

const activePostObj = computed(() => {
  return postData[selectedPostKey.value] || postData.split
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
    return `<strong>Comfortable Fit in ${expand.value ? 'Lots 1–13' : 'Lots 1–8'}:</strong> At ${att} people, the paved lots are ${pct.value}% full with <strong>${spare} open spaces</strong> to spare.`
  }
  if (pavedNeeded.value <= capacity.value + 10) {
    return `<strong>Right at Capacity (100% of Lots 1–8):</strong> Works smoothly as long as <strong>all ${vols.value} Dream Team cars park in ⑨ Grass Lot &amp; ⑩ Brick Wall</strong> and hosts load rows sequentially 1 → 10.`
  }
  const over = pavedNeeded.value - capacity.value
  const advice = expand.value
    ? 'Balance attendance across the 8:30, 10:30, and 12:30 services.'
    : 'Turn on <strong>"Include +360 New Spaces: Proposed Lots 11, 12 &amp; 13"</strong> above to see how adding Lots 11–13 inside our owned parcels solves this.'
  return `<strong>Exceeds Lots 1–8 by +${over} Cars:</strong> ${advice}`
})

function setPhase(phase) {
  currentPhase.value = phase
  if (phase === 'expand') {
    layerExpansion.value = true
    selectedPostKey.value = 'e1'
  } else if (phase === 'swap') {
    selectedPostKey.value = 'split'
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
    layerExpansion.value = true
    currentPhase.value = 'expand'
  }
}

function focusTweak(tweak) {
  currentPhase.value = tweak.phase
  selectedPostKey.value = tweak.postKey
  if (tweak.phase === 'expand') {
    layerExpansion.value = true
  }
}

function applyPreset(preset) {
  attendees.value = preset.attendees
  occ.value = preset.occ
  vols.value = preset.vols
  shuttle.value = preset.shuttle
  expand.value = preset.expand
  layerExpansion.value = preset.expand
  setPhase(preset.expand ? 'expand' : 'ingress')
}

function onToggleExpand(val) {
  layerExpansion.value = val
  setPhase(val ? 'expand' : 'ingress')
}

function activateExpansionView() {
  expand.value = true
  layerExpansion.value = true
  setPhase('expand')
}

defineExpose({
  activateExpansionView,
  setPhase
})
</script>
