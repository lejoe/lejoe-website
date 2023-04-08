<!-- eslint-disable no-console -->
<template>
  <div>
    <div class="pb-24">
      <HomeLead class="pt-12 pb-12" />
      <HomePurpose class="pt-12 pb-12" />
    </div>
    <HomeFocus class="pt-12 pb-12" />
    <HomeContact class="pt-12 pb-12" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    console.info("Hi! Wondering why there is no styles?")
    console.info("Well… it's…")
    console.info(`
   ____ ____ ____    _   _       _            _   ____
  / ___/ ___/ ___|  | \\ | | __ _| | _____  __| | |  _ \\  __ _ _   _
 | |   \\___ \\___ \\  |  \\| |/ _\` | |/ / _ \\/ _\` | | | | |/ _\` | | | |
 | |___ ___) |__) | | |\\  | (_| |   <  __/ (_| | | |_| | (_| | |_| |
  \\____|____/____/  |_| \\_|\\__,_|_|\\_\\___|\\__,_| |____/ \\__,_|\\__, |
                                                              |___/`)
    console.info("https://css-naked-day.github.io")
  }
})
</script>
