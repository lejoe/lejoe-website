<template>
  <div>
    <section class="pt-12 pb-12">
      <h1 class="font-black font-big text-4xl pb-2">Joel Bez</h1>
      <div>Zürich, Switzerland</div>
    </section>

    <section v-for="section in sections" :key="section.title" class="py-12">
      <h3 class="font-black font-big text-xl pb-6">{{ section.title }}</h3>
      <div class="grid grid-cols-1 gap-y-10">
        <article
          v-for="item in section.items"
          :key="item.place + item.years"
          class="grid grid-cols-1 md:grid-cols-4 md:gap-x-6"
        >
          <div class="text-gray-600 pb-1">{{ item.years }}</div>
          <div class="md:col-span-3">
            <h4 class="text-xl">{{ item.role || item.place }}</h4>
            <div class="pb-2">
              <strong v-if="item.role">
                <a
                  v-if="item.url"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-gray-600 transition-colors duration-200"
                  >{{ item.place }}</a
                ><template v-else>{{ item.place }}</template>
              </strong>
              <span v-if="item.role && item.location"> · </span>
              <span v-if="item.location">{{ item.location }}</span>
            </div>
            <p v-if="item.description">{{ item.description }}</p>
            <p v-if="item.tags" class="pt-2 text-sm text-gray-600">
              {{ item.tags.join(' · ') }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Joel Bez | CV',
  description: 'Curriculum vitae of Joel Bez.',
})

interface CvItem {
  years: string
  role?: string
  place: string
  url?: string
  location?: string
  description?: string
  tags?: string[]
}

const sections: { title: string; items: CvItem[] }[] = [
  {
    title: 'WORK EXPERIENCE',
    items: [
      {
        years: '2024 – Now',
        role: 'Senior User Interface Developer',
        place: 'Zeix AG',
        url: 'https://zeix.com',
        location: 'Zürich · Part-time',
        description:
          'Designing and building scalable software architectures and user interfaces that bridge technical requirements and user experience, using the latest AI coding tools.',
        tags: [
          'react',
          'nextjs',
          'vue',
          'nuxt',
          'typescript',
          'tailwind',
          'storybook',
          'vite',
          'vitest',
          'playwright',
          'craft-cms',
        ],
      },
      {
        years: '2024 – Now',
        role: 'Agentic Coding Coach',
        place: 'Independent',
        location: 'Zürich',
        description:
          'Helping developers and teams make agentic coding their advantage, from the fundamentals to advanced workflows.',
        tags: [
          'agentic-coding',
          'claude-code',
          'codex',
          'cursor',
          'skills',
          'mcp',
          'agentic-loops',
        ],
      },
      {
        years: '2021 – 2024',
        role: 'Technical Project Lead',
        place: 'Independent',
        location: 'Zürich',
        description:
          'Leading and coaching multidisciplinary teams to develop impactful digital products.',
        tags: [
          'git',
          'docker',
          'ansible',
          'terraform',
          'no-code',
          'selfhosting',
          'devops',
          'vuejs',
        ],
      },
      {
        years: '2013 – 2021',
        role: 'Tech Lead',
        place: 'Ginetta',
        url: 'https://ginetta.net',
        location: 'Zürich',
        description:
          'Led engineering service expansion at Ginetta AG, growing the team by 50+ and acquiring seven-figure projects. Established Agile & DevOps practices for efficient delivery. Served as front-end lead on several key client projects.',
        tags: [
          'git',
          'html',
          'css',
          'accessibility',
          'angular',
          'vue',
          'react',
          'nextjs',
          'typescript',
          'devops',
          'openshift',
          'docker',
        ],
      },
      {
        years: '2013',
        role: 'Technical Product Owner and Scrum Master',
        place: 'Independent',
        location: 'Zürich & Silicon Valley',
        description:
          'Empowered startups to deliver impactful products by streamlining development, prioritizing features, and fostering agile practices for efficient execution.',
      },
      {
        years: '2012',
        place: 'Sabbatical',
        location: 'Paris, Whistler, San Francisco',
        description:
          'Explored lifestyles in other cities and their surroundings. Observation of the startup culture in Silicon Valley.',
      },
      {
        years: '2011',
        role: 'Technical Product Owner',
        place: 'Liip for Local.ch',
        url: 'https://liip.ch',
        location: 'Zürich',
        description:
          'Drove product development from vision to launch as Technical Product Owner. Led cross-functional teams (UX, data science, development) to deliver successful products like map.local.ch.',
      },
      {
        years: '2009 – 2010',
        role: 'Senior Full-stack Software Engineer & Project Lead',
        place: 'Liip for Local.ch',
        url: 'https://www.liip.ch',
        location: 'Zürich',
        description:
          'Led a team of expert front-end engineers for the Swiss Yellow Pages. Implemented new features & products following agile best practices and using cutting-edge web technologies.',
        tags: [
          'git',
          'tdd',
          'accessibility',
          'php',
          'javascript',
          'yui',
          'css',
          'html',
          'nodejs',
        ],
      },
      {
        years: '2007 – 2009',
        role: 'Full-stack Software Engineer',
        place: 'Liip for Local.ch',
        url: 'https://www.liip.ch',
        location: 'Zürich',
        description:
          'Built, deployed, and maintained features for local.ch (top 3 Swiss website) following TDD & Scrum practices. Collaborated with UX & backend to deliver a seamless user experience.',
        tags: [
          'git',
          'tdd',
          'accessibility',
          'php',
          'javascript',
          'yui',
          'css',
          'html',
        ],
      },
      {
        years: '2004 – 2007',
        role: 'Founder, Full-stack Software Engineer',
        place: 'Lesscode',
        location: 'Lausanne',
        description:
          'Bootstrapped a web agency with classmates, building custom websites for SMBs (restaurants, music bands, associations). Led client requirements gathering, information architecture, and crafted CMS-based solutions.',
        tags: ['php', 'svn', 'html', 'css', 'sql', 'jquery'],
      },
      {
        years: '2003 – 2006',
        role: 'Full-stack Software Engineer',
        place: 'Kesako',
        url: 'https://kesako.net',
        location: 'Lausanne',
        description:
          "Developed websites for companies and Kesako's internal projects (etudiants.ch), collaborating with design & development teams.",
        tags: ['php', 'svn', 'html', 'css', 'sql'],
      },
    ],
  },
  {
    title: 'EDUCATION',
    items: [
      {
        years: '2004 – 2008',
        role: 'Bachelor of Science in Communication, Management & Engineering',
        place: 'HEIG-VD',
        url: 'https://heig-vd.ch/',
        location: 'Lausanne & Yverdon',
      },
      {
        years: '2005 – 2006',
        role: 'Exchange student (ERASMUS)',
        place: 'EVTEK Institute of Technology',
        url: 'https://www.metropolia.fi/en',
        location: 'Helsinki',
        description:
          'Exchange student program (ERASMUS) in Finland for my second year.',
      },
      {
        years: '1998 – 2001',
        role: 'High School Degree (Baccalauréat/Maturité)',
        place: 'Gymnase de Morges',
        url: 'https://www.gymnase-morges.ch/',
        location: 'Morges',
        description: 'Major in Physics and Applied Maths',
      },
    ],
  },
  {
    title: 'VOLUNTEERING',
    items: [
      {
        years: '2014 – 2015',
        role: 'Organizer',
        place: 'SwissJS conf',
        url: 'https://www.swissjs.com',
        location: 'Bern',
        description:
          'Organized two editions of the JS conference for the Swiss community.',
      },
      {
        years: '2011 – 2014',
        role: 'Co-Founder & Organizer',
        place: 'Front conference',
        url: 'https://frontconference.com',
        location: 'Zürich',
        description:
          "Co-founded and organized Switzerland's first front-end development conference. Attracted internationally renowned speakers and fostered a vibrant developer community through workshops and networking events.",
      },
      {
        years: '2011 – 2014',
        role: 'Organizer',
        place: 'Webtuesday meetups',
        url: 'https://twitter.com/webtuesday',
        location: 'Zürich',
        description:
          'Organized Webtuesday Zürich meetups, a leading monthly event for web developers. Curated engaging speakers, managed logistics, and fostered a vibrant community through social media and event moderation.',
      },
    ],
  },
]
</script>
