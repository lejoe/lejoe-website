<template>
  <section>
    <h2 class="font-black font-big text-xl pb-6">PROJECT HISTORY</h2>
    <ul class="grid grid-cols-1 gap-y-8">
      <li
        v-for="project in projects"
        :key="project.client"
        class="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-6 gap-y-1"
      >
        <div>
          <h3 class="text-xl">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-gray-600 transition-colors duration-200"
              >{{ project.client
              }}<span class="sr-only"> (opens in a new tab)</span></a
            >
            <template v-else>{{ project.client }}</template>
          </h3>
          <div class="text-gray-600">{{ project.years }}</div>
        </div>
        <div>
          <div>{{ project.project }}</div>
          <div>Role: {{ project.role }}</div>
          <div class="text-gray-600">{{ project.stack }}</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
interface Project {
  client: string
  years: string
  project: string
  role: string
  stack: string
  link?: string
}

const projects: Project[] = [
  {
    client: 'Alpine AI',
    years: '2026',
    project: 'Relaunch and rebranding of SwissGPT, an AI assistant.',
    role: 'Frontend Lead and Web Developer.',
    stack: 'Next.js, React, TypeScript, Tailwind, shadcn/ui, Storybook',
  },
  {
    client: 'Swisslos',
    years: '2025–2026',
    project:
      'A shared design-system component library for Swisslos’s main website and sub-brands, built as part of a rebranding (not yet online).',
    role: 'Technical Project Manager, Solutions Architect and Web Developer.',
    stack:
      'React, TypeScript, React Aria, Radix UI, Vite, Storybook, Vitest, Playwright',
  },
  {
    client: 'FOCBS',
    years: '2025',
    project:
      'A recruitment marketing website for the Federal Office for Customs and Border Security.',
    role: 'Solutions Architect and Full-Stack Developer.',
    stack: 'Nuxt, Vue, Tailwind, shadcn-vue (Reka UI), Storybook, Vitest',
    link: 'https://zukunft-zoll.ch/de/',
  },
  {
    client: 'Zeix',
    years: '2024',
    project: 'Relaunch of the Zeix company website.',
    role: 'Technical Project Manager, Solutions Architect and Web Developer.',
    stack: 'Craft CMS (PHP, Twig), Vite, TypeScript, Storybook',
    link: 'https://zeix.com',
  },
  {
    client: 'SEM / Campax',
    years: '2022',
    project: 'A tool for finding accommodation for Ukrainian asylum seekers.',
    role: 'Technical Project Manager and Solutions Architect, including implementation.',
    stack: 'Airtable, Softr, Integromat (Make), Typeform',
  },
  {
    client: 'Assura',
    years: '2020',
    project: 'Relaunch of the Assura.ch insurance portal.',
    role: 'Solutions Architect and Web Developer.',
    stack:
      'Next.js, React, TypeScript, styled-components, Cockpit CMS (headless, PHP/MongoDB)',
    link: 'https://assura.ch',
  },
  {
    client: 'Lizzy',
    years: '2018–2020',
    project:
      'A mobile application (Android and iOS) for reporting defects in rental properties (no longer online).',
    role: 'Solutions Architect and Mobile Developer.',
    stack: 'React Native, Expo, Redux Offline, i18next, Fastlane',
  },
  {
    client: 'Aroov (Flatfox)',
    years: '2019',
    project: 'Aroov, a digital platform for rental applications.',
    role: 'Product Owner and Solutions Architect.',
    stack: 'Next.js, React, TypeScript, Redux, Emotion, Cypress',
  },
  {
    client: 'iptiQ (Swiss Re)',
    years: '2018–2019',
    project:
      'Launch of iptiQ, a digital insurance platform enabling businesses to offer insurance to their customers.',
    role: 'Solutions Architect, Frontend Lead and Web Developer.',
    stack: 'React, TypeScript, styled-components, Formik, Webpack, Jest',
  },
  {
    client: 'Vontobel',
    years: '2017',
    project: 'Relaunch of Vontobel’s mobile application.',
    role: 'Solutions Architect and Mobile Developer.',
    stack: 'Ionic 3, Angular, Cordova, ngx-translate, Brandportal style guide',
  },
  {
    client: 'SIX',
    years: '2017',
    project: 'Relaunch of SIX’s web portal for merchants.',
    role: 'Frontend Lead and Web Developer.',
    stack: 'React, Redux, TypeScript, Sass, Webpack, Jest',
  },
  {
    client: 'Siroop',
    years: '2016–2017',
    project: 'Siroop, a Swiss online marketplace (no longer online).',
    role: 'Solutions Architect, Frontend Lead and Web Developer.',
    stack:
      'Fractal pattern library (Twig), Sass, jQuery, Gulp, Webpack, Django (resiroop shop)',
  },
  {
    client: 'Helsana',
    years: '2013–2015',
    project: 'Relaunch of Helsana’s insurance premium calculator.',
    role: 'Technical Project Manager, Solutions Architect and Web Developer.',
    stack: 'AngularJS, CoffeeScript, Sass, Grunt',
  },
  {
    client: 'local.ch',
    years: '2007–2011',
    project: 'The local.ch website.',
    role: 'Web Developer.',
    stack:
      'PHP, symfony, XML / XSLT, YUI JS library, unit and functional testing',
  },
]
</script>
