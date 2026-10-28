<template>
  <section>
    <h3 class="font-black font-big text-xl pb-6">SELECTED WORK</h3>
    <div class="grid grid-cols-1 gap-y-16">
      <article
        v-for="project in projects"
        :key="project.client"
        :aria-labelledby="`project-${project.id}`"
      >
        <h4 :id="`project-${project.id}`" class="text-2xl">
          {{ project.client }} — {{ project.title }}
        </h4>
        <div class="pb-6 text-gray-600">{{ project.years }}</div>
        <dl
          class="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-6 gap-y-1 md:gap-y-4"
        >
          <dt class="font-black font-big text-sm pt-2 md:pt-0.5">CONTEXT</dt>
          <dd>{{ project.context }}</dd>
          <dt class="font-black font-big text-sm pt-2 md:pt-0.5">ROLE</dt>
          <dd>{{ project.role }}</dd>
          <dt class="font-black font-big text-sm pt-2 md:pt-0.5">
            CONTRIBUTION
          </dt>
          <dd>{{ project.contribution }}</dd>
          <dt class="font-black font-big text-sm pt-2 md:pt-0.5">STACK</dt>
          <dd>
            <ul class="flex flex-wrap gap-x-4 gap-y-1">
              <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
            </ul>
          </dd>
          <dt class="font-black font-big text-sm pt-2 md:pt-0.5">OUTCOME</dt>
          <dd>
            {{ project.outcome }}
            <template v-if="project.link">
              <a
                :href="project.link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-gray-600 transition-colors duration-200"
                >{{ project.link.label
                }}<span class="sr-only"> (opens in a new tab)</span></a
              >
            </template>
          </dd>
        </dl>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: string
  client: string
  title: string
  years: string
  context: string
  role: string
  contribution: string
  stack: string[]
  outcome: string
  link?: { href: string; label: string }
}

const projects: Project[] = [
  {
    id: 'swisslos',
    client: 'Swisslos',
    title: 'Shared component library',
    years: '2025–2026',
    context:
      'A rebranding of the Swisslos main website and its sub-brands, built on one shared design-system component library.',
    role: 'Technical Project Manager, Solutions Architect and Web Developer.',
    contribution:
      'Implemented the reusable component library used across the main website and sub-brands. Combined technical project management, solution architecture and hands-on implementation.',
    stack: [
      'React',
      'TypeScript',
      'React Aria',
      'Radix UI',
      'Vite',
      'Storybook',
      'Vitest',
      'Playwright',
    ],
    outcome: 'The rebranding is not yet online.',
  },
  {
    id: 'focbs',
    client: 'FOCBS',
    title: 'Recruitment website',
    years: '2025',
    context:
      'A recruitment marketing website for the Federal Office for Customs and Border Security.',
    role: 'Solutions Architect and Full-Stack Developer.',
    contribution:
      'Led the solution architecture and full-stack development. Used the Swiss Confederation’s mandated CMS as a headless content source and Nuxt to generate the static website.',
    stack: [
      'Nuxt',
      'Vue',
      'Tailwind',
      'shadcn-vue (Reka UI)',
      'Storybook',
      'Vitest',
    ],
    outcome: 'Delivered and live at',
    link: { href: 'https://zukunft-zoll.ch/de/', label: 'zukunft-zoll.ch' },
  },
  {
    id: 'alpine-ai',
    client: 'Alpine AI',
    title: 'SwissGPT relaunch',
    years: '2026',
    context:
      'A product relaunch and rebranding of SwissGPT, an AI assistant by Alpine AI.',
    role: 'Frontend Lead and Web Developer.',
    contribution:
      'Led the frontend and developed the web application with Next.js, React and TypeScript.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'shadcn/ui',
      'Storybook',
    ],
    outcome: 'Rebuilt the entire app in three months as part of the relaunch.',
    link: {
      href: 'https://alpineai.swiss/en/product/',
      label: 'SwissGPT product description',
    },
  },
]
</script>
