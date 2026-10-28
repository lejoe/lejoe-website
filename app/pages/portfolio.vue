<template>
  <div>
    <PortfolioLead class="pt-12 pb-12 print:pt-0 print:pb-4" />
    <PortfolioProjects class="pt-12 pb-12 print:py-4" />
    <PortfolioAllProjects class="pt-12 pb-12 print:py-4" />
    <PortfolioContact class="pt-12 pb-12 print:py-4" />
  </div>
</template>

<script setup lang="ts">
// Page SEO
useSeoMeta({
  title: 'Joel Bez | Portfolio',
  description:
    'Selected frontend and design-system projects by Joel Bez: Alpine AI, Swisslos and Zukunft-Zoll.',
})
</script>
