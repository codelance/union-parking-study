<template>
  <q-layout view="hHh lpR fFf">
    <!-- Sticky Quasar Top Header & Navigation Bar -->
    <q-header
      elevated
      :class="$q.dark.isActive ? 'bg-slate-950 text-white' : 'bg-white text-dark'"
      style="border-bottom: 1px solid rgba(148, 163, 184, 0.2)"
    >
      <div class="uc-container q-px-md q-py-sm">
        <div class="row items-center justify-between q-col-gutter-sm">
          <!-- Brand Title -->
          <div class="col-12 col-md-auto row items-center no-wrap">
            <q-avatar
              rounded
              color="primary"
              text-color="white"
              font-size="16px"
              size="40px"
              class="text-weight-bolder q-mr-sm shadow-2"
            >
              UC
            </q-avatar>
            <div>
              <div class="row items-center q-gutter-x-sm">
                <span class="text-subtitle1 text-weight-bolder" style="line-height: 1.2">
                  Union Church CLT — Huntersville Campus Parking Plan
                </span>
                <q-badge color="positive" class="text-weight-bold q-py-xs q-px-sm">
                  Sundays: 8:30 • 10:30 • 12:30
                </q-badge>
              </div>
              <div class="text-caption" style="opacity: 0.75">
                11901 Sam Furr Rd (NC-73) / 2520 Ambassador Christian Way, Huntersville, NC 28078
              </div>
            </div>
          </div>

          <!-- Quasar Navigation & Utility Buttons -->
          <div class="col-12 col-md-auto row items-center q-gutter-xs no-print">
            <q-btn
              :unelevated="activeNav === 'overview'"
              :flat="activeNav !== 'overview'"
              :color="activeNav === 'overview' ? 'primary' : undefined"
              icon="map"
              label="1. Campus Map"
              no-caps
              dense
              class="q-px-sm text-weight-bold"
              @click="scrollToSection('sec-overview', 'overview')"
            />
            <q-btn
              :unelevated="activeNav === 'engineering'"
              :flat="activeNav !== 'engineering'"
              :color="activeNav === 'engineering' ? 'primary' : undefined"
              icon="alt_route"
              label="2. Drop-Off & Swaps"
              no-caps
              dense
              class="q-px-sm text-weight-bold"
              @click="scrollToSection('sec-engineering', 'engineering')"
            />
            <q-btn
              :unelevated="activeNav === 'expansion'"
              :flat="activeNav !== 'expansion'"
              :color="activeNav === 'expansion' ? 'accent' : undefined"
              icon="add_road"
              label="3. +400 Spaces"
              no-caps
              dense
              class="q-px-sm text-weight-bold"
              @click="scrollToSection('sec-expansion', 'expansion')"
            />
            <q-btn
              :unelevated="activeNav === 'playbook'"
              :flat="activeNav !== 'playbook'"
              :color="activeNav === 'playbook' ? 'primary' : undefined"
              icon="schedule"
              label="4. Sunday Schedule"
              no-caps
              dense
              class="q-px-sm text-weight-bold"
              @click="scrollToSection('sec-playbook', 'playbook')"
            />

            <q-separator vertical inset class="q-mx-xs gt-xs" />

            <!-- Light / Dark Theme Toggle for Clergy Readability -->
            <q-btn
              outline
              dense
              no-caps
              :color="$q.dark.isActive ? 'amber-4' : 'slate-8'"
              :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
              :label="$q.dark.isActive ? 'Light Mode' : 'Dark Mode'"
              class="q-px-sm text-weight-bold"
              @click="toggleDarkMode"
            />

            <!-- Print / PDF Handout Button -->
            <q-btn
              outline
              dense
              no-caps
              color="primary"
              icon="print"
              label="Print PDF"
              class="q-px-sm text-weight-bold gt-xs"
              @click="printPage"
            />
          </div>
        </div>
      </div>
    </q-header>

    <!-- Main Quasar Page Container -->
    <q-page-container>
      <q-page class="q-py-lg q-px-md">
        <div class="uc-container column q-gutter-y-xl">
          <!-- Section 1: Executive Briefing + Interactive GIS Campus Map & Simulator -->
          <section id="sec-overview" class="column q-gutter-y-lg">
            <ExecutiveBriefing
              @scroll-to="scrollToElement"
              @show-expansion="handleShowExpansion"
            />
            <CampusMapSimulator ref="mapSimRef" />
          </section>

          <!-- Section 2: Chick-fil-A Drop-Off & 3-Service Turnaround Engineering -->
          <section id="sec-engineering">
            <TrafficEngineeringSection />
          </section>

          <!-- Section 3: Total Parcel GIS & +400 Stall Expansion Study -->
          <section id="sec-expansion">
            <ExpansionStudySection @show-expansion="handleShowExpansion" />
          </section>

          <!-- Section 4: Sunday Morning Playbook, Timeline & Station Duty Cards -->
          <section id="sec-playbook">
            <SundayPlaybookSection />
          </section>
        </div>
      </q-page>
    </q-page-container>

    <!-- Quasar Footer -->
    <q-footer
      bordered
      :class="$q.dark.isActive ? 'bg-slate-950 text-grey-5' : 'bg-grey-2 text-grey-8'"
      class="q-py-md q-px-md text-center text-caption no-print"
    >
      Union Church CLT • Huntersville Campus Traffic, Parking &amp; Expansion Study (11901 Sam Furr Rd / 2520 Ambassador Christian Way) • Built with Vue 3 &amp; Quasar Framework
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import ExecutiveBriefing from './components/ExecutiveBriefing.vue'
import CampusMapSimulator from './components/CampusMapSimulator.vue'
import TrafficEngineeringSection from './components/TrafficEngineeringSection.vue'
import ExpansionStudySection from './components/ExpansionStudySection.vue'
import SundayPlaybookSection from './components/SundayPlaybookSection.vue'

const $q = useQuasar()
const activeNav = ref('overview')
const mapSimRef = ref(null)

function toggleDarkMode() {
  $q.dark.toggle()
}

function printPage() {
  window.print()
}

function scrollToElement(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function scrollToSection(sectionId, navKey) {
  activeNav.value = navKey
  scrollToElement(sectionId)
}

function handleShowExpansion() {
  activeNav.value = 'overview'
  if (mapSimRef.value) {
    mapSimRef.value.activateExpansionView()
  }
  scrollToElement('campus-map-section')
}
</script>
