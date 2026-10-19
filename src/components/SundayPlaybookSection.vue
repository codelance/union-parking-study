<template>
  <q-card flat class="uc-card q-pa-md q-pa-md-lg">
    <div class="row items-center justify-between q-col-gutter-md q-pb-md" style="border-bottom: 1px solid rgba(148, 163, 184, 0.2)">
      <div class="col-12 col-md-8">
        <div class="text-caption text-uppercase text-weight-bold text-positive">
          Part 4 • Sunday Morning Playbook
        </div>
        <div class="text-h5 text-weight-bold q-mt-xs">
          Minute-by-Minute Sunday Schedule &amp; Team Stations
        </div>
        <div class="text-body2 q-mt-xs" style="opacity: 0.88">
          Ready-to-print operational guide for our Facilities Director, Dream Team Parking Hosts, and Huntersville Police officers across all three services (8:30 AM, 10:30 AM, 12:30 PM).
        </div>
      </div>

      <div class="col-12 col-md-4 row justify-end no-print">
        <q-btn
          unelevated
          color="primary"
          icon="print"
          label="Print Sunday Playbook"
          no-caps
          class="text-weight-bold"
          @click="printPage"
        />
      </div>
    </div>

    <!-- Quasar Timeline + Station Duty Cards -->
    <div class="row q-col-gutter-lg q-mt-sm">
      <!-- Left 6 Columns: Quasar Timeline -->
      <div class="col-12 col-lg-6">
        <div class="text-h6 text-weight-bold q-mb-sm">
          Master 3-Service Sunday Timeline
        </div>
        <q-timeline color="primary" layout="dense">
          <q-timeline-entry
            v-for="(item, idx) in sundayTimeline"
            :key="idx"
            :title="item.title"
            :subtitle="item.time"
            :color="item.color"
            :icon="item.icon"
          >
            <div class="text-body2" style="opacity: 0.9; line-height: 1.5; font-size: 13.5px">
              {{ item.desc }}
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>

      <!-- Right 6 Columns: 6 Station Duty Cards -->
      <div class="col-12 col-lg-6">
        <div class="text-h6 text-weight-bold q-mb-sm">
          Police &amp; Dream Team Station Cards
        </div>
        <div class="row q-col-gutter-md">
          <div
            v-for="card in stationDutyCards"
            :key="card.code"
            class="col-12 col-sm-6"
          >
            <div class="uc-subcard q-pa-md full-height">
              <div class="row items-center justify-between q-mb-xs">
                <q-badge :color="card.color" text-color="dark" class="text-weight-bolder">
                  {{ card.code }}
                </q-badge>
                <q-icon :name="card.icon" size="20px" :color="card.color" />
              </div>
              <div class="text-subtitle2 text-weight-bold q-mb-xs">
                {{ card.title }}
              </div>
              <div class="text-body2" style="opacity: 0.88; line-height: 1.48; font-size: 13px">
                {{ card.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { sundayTimeline, stationDutyCards } from '../data/studyData'

function printPage() {
  window.print()
}
</script>
