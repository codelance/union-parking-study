<template>
  <div class="column q-gutter-y-lg">
    <!-- Top Overview Card -->
    <div class="uc-card q-pa-lg">
      <div class="row items-center justify-between q-col-gutter-md">
        <div class="col-12 col-md-8">
          <span class="uc-pill-black">Campus Land &amp; Expansion Study</span>
          <div class="text-h5 text-weight-bolder q-mt-sm">
            Adding +360 Spaces on the East &amp; NE Sides (While Preserving the School Turf Field)
          </div>
          <p class="text-body1 uc-muted q-mt-sm q-mb-none" style="line-height: 1.65">
            Because the campus was built as a K–12 school, only <strong>4.29 acres</strong> are paved parking today (~450 spaces), and the cleared area on the West side is the
            <strong>school's dedicated athletic turf field</strong>. By focusing expansion exclusively on the
            <strong>2.93 acres of open land on the Northeast and East sides</strong>, we can add
            <strong>+360 spaces</strong> (~810 total spaces) without touching the school turf field or Ramah Creek buffer.
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
            <div class="text-caption uc-muted text-uppercase text-weight-bold">West Athletic Turf</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">100% Protected</div>
            <div class="text-caption uc-muted q-mt-xs">Preserved for school athletics</div>
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
            <div class="text-caption uc-muted text-uppercase text-weight-bold">East &amp; NE Infill</div>
            <div class="text-h5 text-weight-bolder q-mt-xs">+360 Spaces</div>
            <div class="text-caption uc-muted q-mt-xs">2.93 acres on East &amp; NE sides</div>
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
