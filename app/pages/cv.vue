<template>
  <div>
    <section class="pt-12 pb-12 print:pt-0 print:pb-4">
      <h1 class="text-3xl sm:text-4xl font-black font-big pb-2">JOËL BEZ</h1>
      <div>Zürich, Switzerland</div>
      <div class="hidden print:block">contact@lejoe.com · lejoe.com</div>
    </section>

    <section
      v-for="section in sections"
      :key="section.title"
      class="py-12 print:py-3"
    >
      <h2 class="font-black font-big text-xl pb-6 print:pb-3">
        {{ section.title }}
      </h2>
      <div class="grid grid-cols-1 gap-y-10 print:gap-y-3">
        <article
          v-for="item in section.items"
          :key="item.place + item.years"
          class="grid grid-cols-1 md:grid-cols-4 md:gap-x-6 print:grid-cols-[7rem_1fr] print:gap-x-6"
        >
          <div class="text-gray-600 pb-1">{{ item.years }}</div>
          <div class="md:col-span-3 print:col-span-1">
            <h3 class="text-xl print:text-lg">
              {{ item.role || item.place }}
            </h3>
            <div class="pb-2">
              <strong v-if="item.role">
                <a
                  v-if="item.url"
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-gray-600 transition-colors duration-200"
                  >{{ item.place }}</a
                ><template v-else>{{ item.place }}</template
                ><template v-if="item.client">
                  for
                  <a
                    v-if="item.clientUrl"
                    :href="item.clientUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-gray-600 transition-colors duration-200"
                    >{{ item.client }}</a
                  ><template v-else>{{ item.client }}</template></template
                >
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
  client?: string
  clientUrl?: string
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
          'Designing and building software architectures and user interfaces for client projects, using the latest agentic coding tools.',
        tags: [
          'agentic-coding',
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
          'n8n',
        ],
      },
      {
        years: '2024 – Now',
        role: 'Agentic Coding Coach',
        place: 'Independent',
        location: 'Zürich',
        description:
          'Teaching developers and teams to work with agentic coding, from the fundamentals to advanced workflows.',
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
          'Leading and coaching multidisciplinary teams that build digital products.',
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
          "Built up Ginetta's engineering services, growing the team by more than 50 people and winning seven-figure projects. Introduced agile and DevOps practices. Front-end lead on several client projects.",
        tags: [
          'git',
          'html',
          'css',
          'accessibility',
          'angular',
          'vue',
          'react',
          'react-native',
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
          'Helped startups prioritize features, organize development and adopt agile practices.',
      },
      {
        years: '2012',
        place: 'Sabbatical',
        location: 'Paris, Whistler, San Francisco',
        description:
          'Lived in Paris, Whistler and San Francisco, and observed the startup culture in Silicon Valley.',
      },
      {
        years: '2011',
        role: 'Technical Product Owner',
        place: 'Liip',
        client: 'local.ch',
        clientUrl: 'https://www.local.ch',
        url: 'https://liip.ch',
        location: 'Zürich',
        description:
          'Took products from vision to launch, leading cross-functional teams (UX, data science, development). Products included map.local.ch.',
      },
      {
        years: '2009 – 2010',
        role: 'Senior Full-stack Software Engineer & Project Lead',
        place: 'Liip',
        client: 'local.ch',
        clientUrl: 'https://www.local.ch',
        url: 'https://www.liip.ch',
        location: 'Zürich',
        description:
          'Led the front-end team for local.ch, the Swiss Yellow Pages. Built new features and products using agile practices.',
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
        place: 'Liip',
        client: 'local.ch',
        clientUrl: 'https://www.local.ch',
        url: 'https://www.liip.ch',
        location: 'Zürich',
        description:
          'Built, deployed and maintained features for local.ch, then one of the three most visited Swiss websites, using TDD and Scrum. Worked closely with the UX and backend teams.',
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
          'Founded a web agency with classmates, building websites for small businesses such as restaurants, bands and associations. Handled requirements, information architecture and CMS-based implementation.',
        tags: ['php', 'svn', 'html', 'css', 'sql', 'jquery'],
      },
      {
        years: '2003 – 2006',
        role: 'Full-stack Software Engineer',
        place: 'Kesako',
        url: 'https://kesako.net',
        location: 'Lausanne',
        description:
          "Developed websites for clients and for Kesako's own projects, such as etudiants.ch, working with designers and developers.",
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
          "Spent the second year of my bachelor's studies in Finland.",
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
          'Organized two editions of the Swiss JavaScript conference.',
      },
      {
        years: '2011 – 2014',
        role: 'Co-Founder & Organizer',
        place: 'Front conference',
        url: 'https://frontconference.com',
        location: 'Zürich',
        description:
          "Co-founded and organized Switzerland's first front-end development conference, with international speakers, workshops and networking events.",
      },
      {
        years: '2011 – 2014',
        role: 'Organizer',
        place: 'Webtuesday meetups',
        url: 'https://twitter.com/webtuesday',
        location: 'Zürich',
        description:
          'Organized Webtuesday, a monthly meetup for web developers in Zürich. Chose speakers, handled logistics, moderated events and ran its social media.',
      },
    ],
  },
]
</script>
