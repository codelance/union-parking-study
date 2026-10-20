<template>
  <div class="column q-gutter-y-lg">
    <!-- NEW: Campus Pastor's Week 1-2 Flow Map + 5 High-Impact Week 3 Tweaks -->
    <div class="uc-card q-pa-lg">
      <span class="uc-pill-black">Campus Pastor Feedback • Week 1–2 Live Review</span>
      <div class="text-h5 text-weight-bolder q-mt-sm">
        Current Sunday Flow Map (Lots 1–10 &amp; Posts P1–P12) + 5 Incremental Week 3 Tweaks
      </div>
      <p class="text-body1 uc-muted q-mt-sm q-mb-md" style="line-height: 1.65">
        The team has run this <strong>1 → 10 Fill Order</strong> two Sundays in a row with great momentum. Below is the exact Week 1–2 map alongside <strong>5 targeted, cone-only adjustments</strong> that solve the <strong>P1 / P11 Bottleneck</strong>, relieve the <strong>West Exit Spine (P9→P10→P11)</strong>, and stop exiting cars from crossing arriving traffic at <strong>P6</strong>.
      </p>

      <div class="row q-col-gutter-lg items-start">
        <!-- Left 5 Cols: Campus Pastor's Actual Handout Map -->
        <div class="col-12 col-md-5">
          <div class="uc-subcard q-pa-sm text-center">
            <img
              src="/pastor-flow-map.jpg"
              alt="Campus Pastor Week 1-2 Parking Flow Map (Lots 1-10 & P1-P12)"
              style="width: 100%; height: auto; border-radius: 8px; display: block"
            />
            <div class="text-caption uc-muted q-mt-sm q-px-xs">
              <strong>Current Week 1–2 Map:</strong> Fill Order 1 (Exit Lot 1) → 2–4 (East) → 5–8 (North) → 9 (Grass) → 10 (Brick Wall), with red bottleneck at <strong>P1 / P11</strong>.
            </div>
          </div>
        </div>

        <!-- Right 7 Cols: 5 High-Impact Incremental Tweaks for Week 3+ -->
        <div class="col-12 col-md-7 column q-gutter-y-sm">
          <div
            v-for="tweak in pastorMapTweaks"
            :key="tweak.num"
            class="uc-subcard q-pa-md"
          >
            <div class="row items-center justify-between q-mb-xs">
              <span class="uc-pill-outline">{{ tweak.badge }}</span>
            </div>
            <div class="text-subtitle1 text-weight-bold">
              {{ tweak.title }}
            </div>
            <div class="text-body2 uc-muted q-mt-xs" style="line-height: 1.58">
              {{ tweak.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>

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
          <span class="uc-pill-black">Rule #1 • The Exit Lane (P1 – P11)</span>
          <div class="text-h6 text-weight-bolder q-mt-sm">
            Why University City Church Dr Can Never Be 100% "In-Only"
          </div>
          <p class="text-body2 uc-muted q-mt-sm" style="line-height: 1.65">
            If we cone the entrance drive (<em>University City Church Dr / Ambassador Christian Way</em>) as 100% Inbound during arrivals,
            <strong>no vehicle can leave the property</strong>—trapping parents dropping off youth, Uber drivers, and the entire
            <strong>8:30 AM congregation</strong> when 10:30 AM guests start arriving at 9:45 AM.
          </p>
          <div class="uc-subcard q-pa-md q-mt-md column q-gutter-y-sm">
            <div class="text-body2">
              <strong>• Right Lane (Blue Arrows) = Always Inbound:</strong> One continuous lane moving past P1 → P12 → P2 without stopping brings in
              <strong>25–30 cars per minute</strong> (450 cars in 15–18 minutes).
            </div>
            <div class="text-body2">
              <strong>• Left Lane (Green Arrows) = Always Outbound:</strong> Separated by cones extending 50 ft past P1, the left lane stays open for P11 departures all morning (7:45 AM – 1:30 PM).
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="uc-card q-pa-lg full-height">
          <span class="uc-pill-black">Rule #2 • Family Drop-Off &amp; Greeters (G)</span>
          <div class="text-h6 text-weight-bolder q-mt-sm">
            Passenger-Side Unloading + Batching Pedestrians at "G" Posts
          </div>
          <p class="text-body2 uc-muted q-mt-sm" style="line-height: 1.65">
            Because the auditorium sits <strong>Northwest</strong> of the curved front canopy driveway, entering that loop from the East side (near P4 / SE Greeter <strong>G</strong>) puts the sidewalk on the
            <strong>passenger (right) side</strong> so children step directly onto the curb.
          </p>
          <div class="uc-subcard q-pa-md q-mt-md column q-gutter-y-sm">
            <div class="text-body2">
              <strong>• Batch Crosswalks at the 3 "G" Posts:</strong> A continuous trickle of walkers between Lot 2/3/4 and the building freezes cars at P4 and P6. Greeters hold walkers for 45s, then cross 30+ people together in 15s.
            </div>
            <div class="text-body2">
              <strong>• Park OR Exit Immediately:</strong> After unloading at the front canopy, drivers merge past P11 into the <strong>Left Outbound Lane</strong> at P1 or park in <strong>Exit Lot 1</strong>.
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
import { executiveTakeaways, chickFilAPrinciples, pastorMapTweaks } from '../data/studyData'
</script>
