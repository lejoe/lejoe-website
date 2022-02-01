<template>
  <div class="container">
    <h1
      v-if="error.statusCode === 404"
      class="font-big text-3xl md:text-4xl font-black"
    >
      PAGE NOT FOUND
    </h1>
    <h1 v-else class="text-2xl md:text-3xl">An error occurred</h1>

    <h2 class="text-xl md:text-2xl font-black">
      Back to
      <NuxtLink to="/">Home page</NuxtLink>
    </h2>
  </div>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'

import { NuxtError } from '@nuxt/types'

export default {
  props: {
    error: {
      type: Object as PropType<NuxtError>,
      default: null,
    },
  },
}
</script>
