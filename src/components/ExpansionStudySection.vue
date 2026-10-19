<template>
  <q-card flat class="uc-card q-pa-md q-pa-md-lg">
    <div class="row items-center justify-between q-col-gutter-md q-pb-md" style="border-bottom: 1px solid rgba(148, 163, 184, 0.2)">
      <div class="col-12 col-md-8">
        <div class="text-caption text-uppercase text-weight-bold text-accent">
          Part 3 • Property Capacity &amp; Expansion Study
        </div>
        <div class="text-h5 text-weight-bold q-mt-xs">
          Why Our Auditorium Seats Don't Match the Lot—and Where to Add +400 Spaces
        </div>
        <div class="text-body2 q-mt-xs" style="opacity: 0.88">
          Because the campus was built as a K–12 school (high bus/drop-off ratio), only <strong>4.29 acres</strong> of the
          <strong>~22–28 acre property</strong> were paved. Here is where we can add
          <strong class="text-accent">+400 spaces</strong> on flat, dry land we already control.
        </div>
      </div>

      <div class="col-12 col-md-4 row justify-end no-print">
        <q-btn
          unelevated
          color="accent"
          icon="layers"
          label="Highlight New Lots E1–E3 on Map ↑"
          no-caps
          class="text-weight-bold"
          @click="$emit('show-expansion')"
        />
      </div>
    </div>

    <!-- 4 Summary GIS KPIs -->
    <div class="row q-col-gutter-md q-mt-sm q-mb-md">
      <div class="col-12 col-sm-6 col-md-3">
        <div class="uc-subcard q-pa-md full-height">
          <div class="text-caption" style="opacity: 0.75">Total Campus Land</div>
          <div class="text-h6 text-weight-bolder q-mt-xs">21.9 – 28.0 Acres</div>
          <div class="text-caption q-mt-xs" style="opacity: 0.8">Over 75% of the land is still unpaved</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="uc-subcard q-pa-md full-height">
          <div class="text-caption" style="opacity: 0.75">Current Paved Parking</div>
          <div class="text-h6 text-weight-bolder text-positive q-mt-xs">~450 Spaces (4.29 ac)</div>
          <div class="text-caption q-mt-xs" style="opacity: 0.8">Supports ~1,000 attendees/service max</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="uc-subcard q-pa-md full-height">
          <div class="text-caption" style="opacity: 0.75">Needed for 2,100 Seats</div>
          <div class="text-h6 text-weight-bolder text-warning q-mt-xs">750 – 850 Spaces</div>
          <div class="text-caption q-mt-xs" style="opacity: 0.8">Standard church ratio: 1 space per 2.5 seats</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <div class="uc-subcard q-pa-md full-height">
          <div class="text-caption" style="opacity: 0.75">Available Expansion Land</div>
          <div class="text-h6 text-weight-bolder text-accent q-mt-xs">+400 Spaces (3.18 ac)</div>
          <div class="text-caption q-mt-xs" style="opacity: 0.8">100% outside Ramah Creek flood buffer</div>
        </div>
      </div>
    </div>

    <!-- Quasar Markup Table for Expansion Zones -->
    <q-markup-table flat bordered wrap-cells class="rounded-borders" style="background: transparent">
      <thead>
        <tr>
          <th class="text-left text-weight-bold">New Parking Zone</th>
          <th class="text-left text-weight-bold">Where It Sits on Campus</th>
          <th class="text-left text-weight-bold">Size</th>
          <th class="text-left text-weight-bold">Spaces Added</th>
          <th class="text-left text-weight-bold">Why Leadership Should Prioritize It</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="zone in expansionZones" :key="zone.id">
          <td>
            <div class="text-weight-bold text-accent">{{ zone.name }}</div>
            <q-badge :color="zone.priorityColor" class="q-mt-xs text-weight-bold">
              {{ zone.priority }}
            </q-badge>
          </td>
          <td class="text-body2">{{ zone.location }}</td>
          <td class="text-caption text-weight-medium">{{ zone.size }}</td>
          <td>
            <span class="text-subtitle1 text-weight-bolder text-positive">{{ zone.spaces }}</span>
          </td>
          <td class="text-body2" style="line-height: 1.45">{{ zone.why }}</td>
        </tr>
        <tr style="background: rgba(168, 85, 247, 0.14)">
          <td class="text-weight-bolder">TOTAL EXPANDED CAMPUS</td>
          <td class="text-weight-bold">Existing 450 Spaces + 400 New Upland Spaces</td>
          <td class="text-weight-bold">7.47 Acres Total</td>
          <td class="text-subtitle1 text-weight-bolder text-accent">850 Total Spaces</td>
          <td class="text-weight-bold">
            Supports <span class="text-positive">1,850 to 2,100 attendees in a single service</span>!
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-banner rounded class="bg-amber-10 text-white q-mt-md q-pa-md">
      <template #avatar>
        <q-icon name="lightbulb" size="24px" />
      </template>
      <div class="text-body2">
        <strong>Fast-Track Permitting Tip for Leadership:</strong> Before pouring permanent asphalt (which requires Town of Huntersville stormwater detention review),
        <strong>Zone E1 (+175 spaces)</strong> and <strong>Zone E2 (+145 spaces)</strong> can be activated immediately as
        <strong>stabilized grass / geocell gravel overflow</strong> for Dream Team and dry-weather Sundays while civil engineering permits are processed.
      </div>
    </q-banner>
  </q-card>
</template>

<script setup>
import { expansionZones } from '../data/studyData'

defineEmits(['show-expansion'])
</script>
