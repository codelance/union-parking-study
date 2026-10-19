<template>
  <div class="column q-gutter-y-lg">
    <!-- Top Overview Card -->
    <div class="uc-card q-pa-lg">
      <div class="row items-center justify-between q-col-gutter-md">
        <div class="col-12 col-md-8">
          <span class="uc-pill-black">Mecklenburg County GIS Parcel &amp; Expansion Audit</span>
          <div class="text-h5 text-weight-bolder q-mt-sm">
            100% Within Owned Parcels (PID 01123101 &amp; PID 01123122) + Turf Field Protected
          </div>
          <p class="text-body1 uc-muted q-mt-sm q-mb-none" style="line-height: 1.65">
            Official Mecklenburg County GIS tax parcel records confirm the campus assemblage spans
            <strong>28.15 owned acres across 4 contiguous parcels</strong>: Main Campus
            <strong>PID 01123101 (21.90 ac)</strong>, SE Corner Tract
            <strong>PID 01123122 (3.67 ac, owned by Ambassador Christian School Inc)</strong>, and Entry/Exit parcels
            <strong>PID 01123131 &amp; 01123132 (2.58 ac)</strong>. Because the Northeast V-wedge
            (<strong>PID 01123102, 9.20 ac</strong>) is privately owned by a neighbor, all
            <strong>+360 new spaces</strong> are placed strictly inside owned parcels <strong>01123122</strong> and
            <strong>01123101</strong> while keeping the <strong>School Turf Field 100% untouched</strong>.
          </p>
        </div>
        <div class="col-12 col-md-4 row justify-end no-print">
          <q-btn
            unelevated
            :color="$q.dark.isActive ? 'white' : 'dark'"
            :text-color="$q.dark.isActive ? 'dark' : 'white'"
            icon="map"
            label="View GIS Parcels &amp; Lots on Map"
            no-caps
            class="text-weight-bold q-px-md q-py-sm"
            @click="$emit('show-expansion')"
          />
        </div>
      </div>

      <!-- 4 Key Land Metrics -->
      <div class="row q-col-gutter-md q-mt-md">
        <div class="col-6 col-md-3">
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold">Owned Campus Land</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">28.15 Acres</div>
            <div class="text-caption uc-muted q-mt-xs">PIDs 01123101, -122, -131, -132</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold">School Turf Field</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">100% Protected</div>
            <div class="text-caption uc-muted q-mt-xs">Preserved inside PID 01123101</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold">In-Parcel Expansion</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">+360 Spaces</div>
            <div class="text-caption uc-muted q-mt-xs">3.05 ac inside 01123122 &amp; 01123101</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold">Expanded Total</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">~810 Spaces</div>
            <div class="text-caption uc-muted q-mt-xs">Supports 1,800–2,000 ppl/service</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 Spacious Cards for Expansion Zones E1, E2, E3 -->
    <div class="row q-col-gutter-lg">
      <div
        v-for="zone in expansionZones"
        :key="zone.id"
        class="col-12 col-md-4"
      >
        <div class="uc-card q-pa-lg full-height column justify-between">
          <div>
            <div class="row items-center justify-between q-mb-sm">
              <span class="uc-pill-black">{{ zone.priority }}</span>
              <span class="text-caption uc-muted text-weight-bold">{{ zone.size }}</span>
            </div>
            <div class="text-h6 text-weight-bolder q-mt-xs">
              {{ zone.name }}
            </div>
            <div class="text-h4 text-weight-bolder q-my-sm">
              {{ zone.spaces }}
            </div>
            <div class="text-body2 text-weight-bold q-mb-xs">
              Location: {{ zone.location }}
            </div>
            <p class="text-body2 uc-muted q-mb-none" style="line-height: 1.6">
              {{ zone.why }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3-Phase Leadership Roadmap Card -->
    <div class="uc-card q-pa-lg">
      <span class="uc-pill-black">Phased Execution Plan</span>
      <div class="text-h6 text-weight-bolder q-mt-sm q-mb-md">
        3-Step Implementation Roadmap for Church Leadership
      </div>
      <div class="row q-col-gutter-md">
        <div
          v-for="(step, idx) in roadmapPhases"
          :key="idx"
          class="col-12 col-md-4"
        >
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-subtitle1 text-weight-bold q-mb-xs">
              {{ step.phase }}
            </div>
            <div class="text-body2 uc-muted" style="line-height: 1.6">
              {{ step.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { expansionZones, roadmapPhases } from '../data/studyData'

const $q = useQuasar()
defineEmits(['show-expansion'])
</script>
