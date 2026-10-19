<template>
  <q-layout view="hHh lpR fFf">
    <!-- Union Church CLT Monochrome Black Header -->
    <q-header class="uc-header">
      <div class="uc-container q-px-md q-py-sm">
        <div class="row items-center justify-between q-col-gutter-sm">
          <!-- Brand Identity -->
          <div class="col-12 col-md-auto row items-center no-wrap">
            <div
              class="row items-center justify-center q-mr-md"
              style="background: #ffffff; color: #09090b; font-weight: 900; font-size: 13px; letter-spacing: 0.08em; padding: 8px 12px; border-radius: 6px"
            >
              UNION
            </div>
            <div>
              <div class="row items-center q-gutter-x-sm">
                <span class="text-subtitle1 text-weight-bolder text-white" style="letter-spacing: -0.01em">
                  Huntersville Campus Parking &amp; Traffic Plan
                </span>
                <span
                  style="background: #27272a; color: #fafafa; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px"
                >
                  8:30 • 10:30 • 12:30
                </span>
              </div>
              <div class="text-caption" style="color: #a1a1aa">
                11901 Sam Furr Rd (NC-73) / 2520 Ambassador Christian Way, Huntersville, NC
              </div>
            </div>
          </div>

          <!-- Clean Monochrome Tab Bar + Theme Toggle -->
          <div class="col-12 col-md-auto row items-center q-gutter-xs no-print">
            <q-btn
              v-for="tab in navTabs"
              :key="tab.id"
              :unelevated="activeTab === tab.id"
              :flat="activeTab !== tab.id"
              :style="activeTab === tab.id ? 'background: #ffffff; color: #09090b' : 'color: #d4d4d8'"
              :label="tab.label"
              no-caps
              dense
              class="q-px-md q-py-xs text-weight-bold"
              style="border-radius: 8px"
              @click="switchTab(tab.id)"
            />

            <q-separator dark vertical inset class="q-mx-xs gt-xs" />

            <q-btn
              flat
              dense
              round
              color="white"
              :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
              :title="$q.dark.isActive ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
              @click="toggleDarkMode"
            />
            <q-btn
              flat
              dense
              round
              color="white"
              icon="print"
              title="Print Full Study"
              class="gt-xs"
              @click="printFullStudy"
            />
          </div>
        </div>
      </div>
    </q-header>

    <!-- Main Page Content -->
    <q-page-container>
      <q-page class="q-py-lg q-px-md">
        <div class="uc-container">
          <!-- TAB 1: INTERACTIVE CAMPUS MAP & SIMULATOR (ON LOAD) -->
          <div v-show="activeTab === 'map' || activeTab === 'all'" class="q-mb-xl">
            <CampusMapSimulator ref="mapSimRef" />
            <div v-if="activeTab === 'map'" class="row justify-end q-mt-lg no-print">
              <q-btn
                unelevated
                :color="$q.dark.isActive ? 'white' : 'dark'"
                :text-color="$q.dark.isActive ? 'dark' : 'white'"
                icon-right="arrow_forward"
                label="Next: 2. Traffic & Drop-Off Strategy"
                no-caps
                class="text-weight-bold q-px-lg q-py-sm"
                style="border-radius: 10px"
                @click="switchTab('engineering')"
              />
            </div>
          </div>

          <!-- TAB 2: TRAFFIC & DROP-OFF PLAN -->
          <div v-show="activeTab === 'engineering' || activeTab === 'all'" class="q-mb-xl">
            <TrafficEngineeringSection />
            <div v-if="activeTab === 'engineering'" class="row justify-between q-mt-lg no-print">
              <q-btn
                outline
                :color="$q.dark.isActive ? 'white' : 'dark'"
                icon="arrow_back"
                label="Back to Campus Map"
                no-caps
                class="text-weight-bold q-px-md q-py-sm"
                style="border-radius: 10px"
                @click="switchTab('map')"
              />
              <q-btn
                unelevated
                :color="$q.dark.isActive ? 'white' : 'dark'"
                :text-color="$q.dark.isActive ? 'dark' : 'white'"
                icon-right="arrow_forward"
                label="Next: 3. +400 Space Expansion Plan"
                no-caps
                class="text-weight-bold q-px-lg q-py-sm"
                style="border-radius: 10px"
                @click="switchTab('expansion')"
              />
            </div>
          </div>

          <!-- TAB 3: +400 SPACE EXPANSION STUDY -->
          <div v-show="activeTab === 'expansion' || activeTab === 'all'" class="q-mb-xl">
            <ExpansionStudySection @show-expansion="handleShowExpansion" />
            <div v-if="activeTab === 'expansion'" class="row justify-between q-mt-lg no-print">
              <q-btn
                outline
                :color="$q.dark.isActive ? 'white' : 'dark'"
                icon="arrow_back"
                label="Back to Traffic & Drop-Off Plan"
                no-caps
                class="text-weight-bold q-px-md q-py-sm"
                style="border-radius: 10px"
                @click="switchTab('engineering')"
              />
              <q-btn
                unelevated
                :color="$q.dark.isActive ? 'white' : 'dark'"
                :text-color="$q.dark.isActive ? 'dark' : 'white'"
                icon-right="arrow_forward"
                label="Next: 4. Sunday Team Playbook"
                no-caps
                class="text-weight-bold q-px-lg q-py-sm"
                style="border-radius: 10px"
                @click="switchTab('playbook')"
              />
            </div>
          </div>

          <!-- TAB 4: SUNDAY TEAM PLAYBOOK -->
          <div v-show="activeTab === 'playbook' || activeTab === 'all'" class="q-mb-xl">
            <SundayPlaybookSection />
            <div v-if="activeTab === 'playbook'" class="row justify-between q-mt-lg no-print">
              <q-btn
                outline
                :color="$q.dark.isActive ? 'white' : 'dark'"
                icon="arrow_back"
                label="Back to +400 Space Expansion"
                no-caps
                class="text-weight-bold q-px-md q-py-sm"
                style="border-radius: 10px"
                @click="switchTab('expansion')"
              />
              <q-btn
                outline
                :color="$q.dark.isActive ? 'white' : 'dark'"
                icon="visibility"
                label="View All Sections on One Page"
                no-caps
                class="text-weight-bold q-px-md q-py-sm"
                style="border-radius: 10px"
                @click="switchTab('all')"
              />
            </div>
          </div>

          <!-- Subtle Bottom Footer (Non-Sticky) -->
          <div class="text-center text-caption uc-muted q-pt-lg q-pb-md no-print" style="border-top: 1px solid rgba(113, 113, 122, 0.2)">
            Union Church CLT • Huntersville Campus Traffic, Parking &amp; Expansion Study (11901 Sam Furr Rd / 2520 Ambassador Christian Way)
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import CampusMapSimulator from './components/CampusMapSimulator.vue'
import TrafficEngineeringSection from './components/TrafficEngineeringSection.vue'
import ExpansionStudySection from './components/ExpansionStudySection.vue'
import SundayPlaybookSection from './components/SundayPlaybookSection.vue'

const $q = useQuasar()
const activeTab = ref('map')
const mapSimRef = ref(null)

const navTabs = [
  { id: 'map', label: '1. Campus Map' },
  { id: 'engineering', label: '2. Traffic & Drop-Off' },
  { id: 'expansion', label: '3. +400 Expansion' },
  { id: 'playbook', label: '4. Sunday Playbook' },
  { id: 'all', label: 'Full Report' }
]

function toggleDarkMode() {
  $q.dark.toggle()
}

function switchTab(tabId) {
  activeTab.value = tabId
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleShowExpansion() {
  activeTab.value = 'map'
  if (mapSimRef.value) {
    mapSimRef.value.activateExpansionView()
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

async function printFullStudy() {
  activeTab.value = 'all'
  await nextTick()
  window.print()
}
</script>
