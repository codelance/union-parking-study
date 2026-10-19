<template>
  <div class="column q-gutter-y-lg">
    <!-- Header Card -->
    <div class="uc-card q-pa-lg">
      <div class="row items-center justify-between q-col-gutter-md">
        <div class="col-12 col-md-8">
          <span class="uc-pill-black">Sunday Operations Manual</span>
          <div class="text-h5 text-weight-bolder q-mt-sm">
            Minute-by-Minute Sunday Schedule &amp; Team Stations
          </div>
          <p class="text-body1 uc-muted q-mt-sm q-mb-none" style="line-height: 1.65">
            Ready-to-print operational schedule for our Facilities Director, Dream Team Parking Hosts, and Huntersville Police officers across all three services (<strong>8:30 AM, 10:30 AM, 12:30 PM</strong>).
          </p>
        </div>
        <div class="col-12 col-md-4 row justify-end no-print">
          <q-btn
            unelevated
            :color="$q.dark.isActive ? 'white' : 'dark'"
            :text-color="$q.dark.isActive ? 'dark' : 'white'"
            icon="print"
            label="Print Sunday Playbook"
            no-caps
            class="text-weight-bold q-px-md q-py-sm"
            @click="printPage"
          />
        </div>
      </div>
    </div>

    <!-- 2-Column Layout: Sunday Timeline (Left) + Team Station Cards (Right) -->
    <div class="row q-col-gutter-lg">
      <!-- Left 6 Columns: Clean Step-by-Step Schedule -->
      <div class="col-12 col-md-6">
        <div class="uc-card q-pa-lg full-height">
          <div class="text-h6 text-weight-bolder q-mb-md">
            Sunday Morning Master Timeline
          </div>
          <div class="column q-gutter-y-md">
            <div
              v-for="(item, idx) in sundayTimeline"
              :key="idx"
              class="uc-subcard q-pa-md"
            >
              <div class="row items-center justify-between q-mb-xs">
                <span class="uc-pill-black">{{ item.time }}</span>
                <q-icon :name="item.icon" size="20px" class="uc-muted" />
              </div>
              <div class="text-subtitle1 text-weight-bold q-mt-xs">
                {{ item.title }}
              </div>
              <div class="text-body2 uc-muted q-mt-xs" style="line-height: 1.6">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right 6 Columns: 6 Police & Volunteer Station Cards -->
      <div class="col-12 col-md-6">
        <div class="uc-card q-pa-lg full-height">
          <div class="text-h6 text-weight-bolder q-mb-md">
            Police &amp; Dream Team Station Cards
          </div>
          <div class="column q-gutter-y-md">
            <div
              v-for="card in stationDutyCards"
              :key="card.code"
              class="uc-subcard q-pa-md"
            >
              <div class="row items-center justify-between q-mb-xs">
                <span class="uc-pill-outline">{{ card.code }}</span>
                <q-icon :name="card.icon" size="20px" class="uc-muted" />
              </div>
              <div class="text-subtitle1 text-weight-bold q-mt-xs">
                {{ card.title }}
              </div>
              <div class="text-body2 uc-muted q-mt-xs" style="line-height: 1.6">
                {{ card.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { sundayTimeline, stationDutyCards } from '../data/studyData'

const $q = useQuasar()

function printPage() {
  window.print()
}
</script>
