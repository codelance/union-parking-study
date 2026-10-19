<template>
  <div class="column q-gutter-y-lg">
    <!-- Top Executive Overview Card -->
    <div class="uc-card q-pa-lg">
      <span class="uc-pill-black">Executive Summary</span>
      <div class="text-h5 text-weight-bolder q-mt-sm">
        How We Welcome 1,000+ People Per Service Without Backing Up Sam Furr Rd
      </div>
      <p class="text-body1 uc-muted q-mt-sm q-mb-none" style="max-width: 880px; line-height: 1.65">
        Our new Huntersville building has a <strong>2,100-seat auditorium</strong>, but only
        <strong>~450 paved spaces</strong> and a <strong>single 2-lane entrance road</strong> over Ramah Creek.
        With three Sunday gatherings (<strong>8:30 AM, 10:30 AM, 12:30 PM</strong>), these four operational principles keep Sunday mornings effortless for families and guests.
      </p>

      <div class="row q-col-gutter-md q-mt-md">
        <div
          v-for="item in executiveTakeaways"
          :key="item.id"
          class="col-12 col-sm-6 col-md-3"
        >
          <div class="uc-subcard q-pa-md full-height">
            <span class="uc-pill-outline">{{ item.badge }}</span>
            <div class="text-subtitle1 text-weight-bold q-mt-sm q-mb-xs">
              {{ item.title }}
            </div>
            <div class="text-body2 uc-muted" style="line-height: 1.55">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The 2 Core Rules Side by Side -->
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6">
        <div class="uc-card q-pa-lg full-height">
          <span class="uc-pill-black">Rule #1 • The Exit Lane</span>
          <div class="text-h6 text-weight-bolder q-mt-sm">
            Why the Entrance Road Can Never Be 100% "In-Only"
          </div>
          <p class="text-body2 uc-muted q-mt-sm" style="line-height: 1.65">
            If we cone the entrance drive (<em>Ambassador Christian Way</em>) as 100% Inbound during arrivals,
            <strong>no vehicle can leave the property</strong>—trapping parents dropping off youth, Uber drivers, and the entire
            <strong>8:30 AM congregation</strong> when 10:30 AM guests start arriving at 9:45 AM.
          </p>
          <div class="uc-subcard q-pa-md q-mt-md column q-gutter-y-sm">
            <div class="text-body2">
              <strong>• Right Lane = Always Inbound:</strong> One continuous lane moving at 15 mph without stopping brings in
              <strong>25–30 cars per minute</strong> (450 cars in 15–18 minutes).
            </div>
            <div class="text-body2">
              <strong>• Left Lane = Always Outbound:</strong> Separated by cones, the left lane stays open for departures all morning (7:45 AM – 1:30 PM). We only flip to 2 outbound lanes at 1:45 PM after the final service.
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="uc-card q-pa-lg full-height">
          <span class="uc-pill-black">Rule #2 • Family Drop-Off</span>
          <div class="text-h6 text-weight-bolder q-mt-sm">
            Passenger-Side Unloading + Chick-fil-A Bypass Lane
          </div>
          <p class="text-body2 uc-muted q-mt-sm" style="line-height: 1.65">
            Because the auditorium sits <strong>Northwest</strong> of the curved front canopy driveway, entering that loop from the bottom puts the sidewalk on the
            <strong>driver's (left) side</strong>—forcing children to step out into moving traffic.
          </p>
          <div class="uc-subcard q-pa-md q-mt-md column q-gutter-y-sm">
            <div class="text-body2">
              <strong>• Enter from the East Corner (NE → SW):</strong> All arriving cars turn Right at V1. Families dropping off turn left into the canopy loop at the East Corner (V3) so <strong>passenger doors open directly onto the sidewalk</strong>.
            </div>
            <div class="text-body2">
              <strong>• Park OR Exit Immediately:</strong> At the end of the canopy loop, drivers either turn <strong>Right into the West Lot</strong> to park OR go <strong>Straight down the Left Outbound Lane</strong> to Sam Furr Rd.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6 Chick-fil-A & Disney Best Practices -->
    <div class="uc-card q-pa-lg">
      <span class="uc-pill-black">Industry Best Practices</span>
      <div class="text-h6 text-weight-bolder q-mt-sm q-mb-md">
        6 Chick-fil-A &amp; Disney Parking Principles Applied to Union Church
      </div>
      <div class="row q-col-gutter-md">
        <div
          v-for="item in chickFilAPrinciples"
          :key="item.num"
          class="col-12 col-sm-6 col-md-4"
        >
          <div class="uc-subcard q-pa-md full-height">
            <div class="text-caption uc-muted text-weight-bold">PRINCIPLE 0{{ item.num }}</div>
            <div class="text-subtitle1 text-weight-bold q-mt-xs q-mb-xs">
              {{ item.title }}
            </div>
            <div class="text-body2 uc-muted" style="line-height: 1.6">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { executiveTakeaways, chickFilAPrinciples } from '../data/studyData'
</script>
