<template>
  <q-card flat class="uc-card q-pa-md q-pa-md-lg">
    <div class="q-pb-md" style="border-bottom: 1px solid rgba(148, 163, 184, 0.2)">
      <div class="text-caption text-uppercase text-weight-bold text-positive">
        Part 2 • Traffic Flow &amp; Chick-fil-A Best Practices
      </div>
      <div class="text-h5 text-weight-bold q-mt-xs">
        How We Handle 3 Services (8:30, 10:30, 12:30) &amp; Family Drop-Offs
      </div>
      <div class="text-body2 q-mt-xs" style="opacity: 0.88">
        Why traditional church parking stalls out—and how applying <strong>Chick-fil-A drive-thru principles</strong> keeps cars moving smoothly during our 45-minute turnarounds at 9:45 AM and 11:45 AM.
      </div>
    </div>

    <!-- The 2 Core Rules in Plain English -->
    <div class="row q-col-gutter-md q-mt-sm">
      <div class="col-12 col-md-6">
        <div class="uc-subcard q-pa-md full-height">
          <div class="text-caption text-uppercase text-weight-bold text-warning">
            Question #1: "If we have drop-offs, how do cars get out?"
          </div>
          <div class="text-h6 text-weight-bold q-mt-xs">
            The Always-Open Outbound Escape Lane
          </div>
          <p class="text-body2 q-mt-xs" style="opacity: 0.9; line-height: 1.55">
            If we cone the entrance road (<em>Ambassador Christian Way</em>) as 100% Inbound during arrivals,
            <strong class="text-negative">no car can leave the campus</strong>. Parents dropping off middle/high schoolers, Rideshare drivers, and the entire
            <strong>8:30 AM service</strong> (dismissing at 9:45 AM while 10:30 AM guests are already arriving) would be trapped head-on!
          </p>
          <q-list dense bordered separator class="rounded-borders q-mt-sm">
            <q-item class="q-py-sm">
              <q-item-section avatar>
                <q-icon name="check_circle" color="positive" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-positive">Right Lane = Always Inbound</q-item-label>
                <q-item-label caption style="color: inherit; opacity: 0.85">
                  One continuous lane moving at 15 mph without stopping brings in <strong>25 to 30 cars per minute</strong> (450 cars in just 15–18 minutes).
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-py-sm">
              <q-item-section avatar>
                <q-icon name="outbound" color="warning" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-warning">Left Lane = Always Outbound</q-item-label>
                <q-item-label caption style="color: inherit; opacity: 0.85">
                  Separated by cones, the left lane stays open for departures all morning (7:45 AM – 1:30 PM). Only after the final 12:30 PM service (1:45 PM) do we flip both lanes outbound.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="uc-subcard q-pa-md full-height">
          <div class="text-caption text-uppercase text-weight-bold text-info">
            Question #2: "How does the front canopy drop-off work?"
          </div>
          <div class="text-h6 text-weight-bold q-mt-xs">
            Passenger-Side Unloading + Chick-fil-A Bypass Lane
          </div>
          <p class="text-body2 q-mt-xs" style="opacity: 0.9; line-height: 1.55">
            Because our building sits <strong>Northwest</strong> of the curved front canopy driveway, entering that loop from the bottom puts the sidewalk on the
            <strong class="text-negative">driver's (left) side</strong>—forcing kids to step out into moving traffic.
          </p>
          <q-list dense bordered separator class="rounded-borders q-mt-sm">
            <q-item class="q-py-sm">
              <q-item-section avatar>
                <q-icon name="escalator_warning" color="info" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-info">Enter from the East Corner (NE → SW)</q-item-label>
                <q-item-label caption style="color: inherit; opacity: 0.85">
                  All arriving cars turn Right at V1. Families dropping off turn left into the canopy loop at the East Corner (V3) so <strong>passenger doors open right onto the sidewalk</strong>.
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-py-sm">
              <q-item-section avatar>
                <q-icon name="alt_route" color="info" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-info">Park OR Leave Immediately</q-item-label>
                <q-item-label caption style="color: inherit; opacity: 0.85">
                  At the end of the canopy loop, drivers either turn <strong>Right into the West Lot</strong> to park OR go <strong>Straight down the Left Outbound Lane</strong> to exit onto Sam Furr Rd.
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <!-- 6 Chick-fil-A & Disney Parking Best Practices -->
    <div class="q-mt-lg">
      <div class="text-h6 text-weight-bold q-mb-sm">
        6 Industry Best Practices (Chick-fil-A &amp; Disney Parking Operations)
      </div>
      <div class="row q-col-gutter-md">
        <div
          v-for="item in chickFilAPrinciples"
          :key="item.num"
          class="col-12 col-sm-6 col-md-4"
        >
          <div class="uc-subcard q-pa-md full-height">
            <div class="row items-center q-gutter-xs q-mb-xs">
              <q-badge :color="item.color" class="text-weight-bold">
                #{{ item.num }}
              </q-badge>
              <span :class="`text-subtitle2 text-weight-bold text-${item.color}`">
                {{ item.title }}
              </span>
            </div>
            <div class="text-body2" style="opacity: 0.88; line-height: 1.5; font-size: 13px">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { chickFilAPrinciples } from '../data/studyData'
</script>
