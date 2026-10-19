<template>
  <q-card flat class="uc-card q-pa-md q-pa-md-lg">
    <div class="row items-center justify-between q-col-gutter-md q-pb-md" style="border-bottom: 1px solid rgba(148, 163, 184, 0.2)">
      <div class="col-12 col-lg-8">
        <div class="row items-center q-gutter-xs text-positive text-weight-bold text-caption text-uppercase">
          <q-icon name="verified" size="16px" />
          <span>Executive Summary for Pastoral &amp; Church Leadership</span>
        </div>
        <div class="text-h5 text-weight-bolder q-mt-xs">
          How We Welcome 1,000+ People Per Service Without Backing Up Sam Furr Rd
        </div>
        <p class="text-body2 q-mt-xs q-mb-none" style="opacity: 0.88; line-height: 1.55">
          Our new Huntersville building has a <strong>2,100-seat auditorium</strong>, but only
          <strong class="text-warning">~450 paved parking spaces</strong> and a
          <strong>single 2-lane entrance road</strong> over Ramah Creek. With three Sunday services
          (<strong class="text-positive">8:30 AM, 10:30 AM, 12:30 PM</strong>), here are the
          <strong>4 key solutions</strong> that make Sunday mornings effortless for families and guests:
        </p>
      </div>

      <div class="col-12 col-lg-4 row justify-end q-gutter-sm no-print">
        <q-btn
          unelevated
          color="primary"
          icon="map"
          label="Explore Interactive Map"
          no-caps
          class="text-weight-bold"
          @click="$emit('scroll-to', 'campus-map-section')"
        />
        <q-btn
          outline
          color="accent"
          icon="add_road"
          label="+400 Space Expansion"
          no-caps
          class="text-weight-bold"
          @click="$emit('show-expansion')"
        />
      </div>
    </div>

    <!-- 4 Key Pastoral Takeaways -->
    <div class="row q-col-gutter-md q-mt-sm">
      <div
        v-for="item in executiveTakeaways"
        :key="item.id"
        class="col-12 col-sm-6 col-lg-3"
      >
        <div class="uc-subcard q-pa-md full-height column justify-between">
          <div>
            <div class="row items-center justify-between q-mb-sm">
              <q-badge :color="item.badgeColor" class="text-weight-bold q-py-xs q-px-sm">
                {{ item.badge }}
              </q-badge>
              <q-icon :name="item.icon" size="22px" :color="item.badgeColor" />
            </div>
            <div class="text-subtitle1 text-weight-bold q-mb-xs">
              {{ item.title }}
            </div>
            <div class="text-caption" style="opacity: 0.88; line-height: 1.5; font-size: 13px">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { executiveTakeaways } from '../data/studyData'

defineEmits(['scroll-to', 'show-expansion'])
</script>
