<template>
  <div>
    <div class="pb-24">
      <VibeLead class="pt-12 pb-12" />
      <VibeProfessional class="pt-12 pb-12" />
    </div>
    <VibeNextTalk class="pt-12 pb-12" />
    <VibeContact class="pt-12 pb-12" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VibePage',
  head() {
    return {
      title: 'Joel Bez | Vibe Code Fest 2025',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Thanks for attending my talk at Vibe Code Fest! Download my slides and learn about my next speaking engagement.',
        },
      ],
    }
  },
})
</script>
</template>
