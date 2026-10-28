<template>
  <section>
    <h3 class="font-black font-big text-xl pb-6">SELECTED WORK</h3>
    <div
      class="grid grid-cols-1 xl:gap-x-24 lg:gap-x-12 gap-x-6 gap-y-12 md:grid-cols-3"
    >
      <article v-for="project in projects" :key="project.client">
        <h4 class="text-xl">{{ project.client }}</h4>
        <div class="pb-4 text-gray-600">
          {{ project.title }} · {{ project.years }}
        </div>
        <div class="pb-2">{{ project.summary }}</div>
        <a
          v-if="project.link"
          :href="project.link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gray-600 transition-colors duration-200"
          >{{ project.link.label
          }}<span class="sr-only"> (opens in a new tab)</span></a
        >
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  client: string
  title: string
  years: string
  summary: string
  link?: { href: string; label: string }
}

const projects: Project[] = [
  {
    client: 'Alpine AI',
    title: 'SwissGPT relaunch',
    years: '2026',
    summary:
      'As Frontend Lead, I rebuilt the entire SwissGPT web app in three months as part of a product relaunch and rebranding.',
    link: {
      href: 'https://alpineai.swiss/en/product/',
      label: 'SwissGPT product description',
    },
  },
  {
    client: 'Swisslos',
    title: 'Shared component library',
    years: '2025–2026',
    summary:
      'I implemented a reusable design-system component library for the main website and its sub-brands as part of a rebranding, combining technical project management, solution architecture and hands-on implementation. The rebranding is not yet online.',
  },
  {
    client: 'FOCBS',
    title: 'Recruitment website',
    years: '2025',
    summary:
      'I led the solution architecture and full-stack development of the recruitment website for the Federal Office for Customs and Border Security, using the Swiss Confederation’s mandated CMS as a headless content source and Nuxt to generate the static site.',
    link: { href: 'https://zukunft-zoll.ch/de/', label: 'zukunft-zoll.ch' },
  },
]
</script>
