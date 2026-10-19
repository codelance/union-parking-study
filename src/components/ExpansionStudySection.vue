<template>
  <div class="column q-gutter-y-lg">
    <!-- Top Overview Card -->
    <div class="uc-card q-pa-lg">
      <div class="row items-center justify-between q-col-gutter-md">
        <div class="col-12 col-md-8">
          <span class="uc-pill-black">Campus Land &amp; Expansion Study</span>
          <div class="text-h5 text-weight-bolder q-mt-sm">
            Why Our Auditorium Seats Don't Match the Lot—and Where to Add +400 Spaces
          </div>
          <p class="text-body1 uc-muted q-mt-sm q-mb-none" style="line-height: 1.65">
            Because the campus was originally designed as a K–12 school (heavy bus and parent drop-off usage), only
            <strong>4.29 acres</strong> of our <strong>~22–28 acre property</strong> were paved. We have
            <strong>3.18 acres of flat, dry land</strong> outside the Ramah Creek buffer to add
            <strong>+400 spaces</strong>—bringing total campus parking to <strong>~850 spaces</strong>.
          </p>
        </div>
        <div class="col-12 col-md-4 row justify-end no-print">
          <q-btn
            unelevated
            :color="$q.dark.isActive ? 'white' : 'dark'"
            :text-color="$q.dark.isActive ? 'dark' : 'white'"
            icon="map"
            label="View New Lots E1–E3 on Map"
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
            <div class="text-caption uc-muted text-uppercase text-weight-bold">Total Deeded Land</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">21.9 – 28.0 ac</div>
            <div class="text-caption uc-muted q-mt-xs">Over 75% is still unpaved</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold">Paved Lot Today</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">~450 Spaces</div>
            <div class="text-caption uc-muted q-mt-xs">4.29 acres (186,875 sq ft)</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold">New Upland Infill</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">+400 Spaces</div>
            <div class="text-caption uc-muted q-mt-xs">3.18 acres outside creek buffer</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-uppercase text-weight-bold">Expanded Total</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">~850 Spaces</div>
            <div class="text-caption uc-muted q-mt-xs">Supports 1,850–2,100 ppl/service</div>
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
