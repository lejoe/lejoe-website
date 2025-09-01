<template>
  <div class="pt-12 md:pt-24 lg:pt-32 px-6 sm:px-12 md:px-12 font-sans">
    <div class="xl:max-w-5xl max-w-4xl mx-auto overflow-hidden">
      <main><NuxtPage /></main>
      <footer><TheFooter /></footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import ogImageCover from '~/assets/img/og-image-cover.png'
import ogImageAvatarFull from '~/assets/img/og-image-avatar-full.jpg'
import ogImageAvatarSquare from '~/assets/img/og-image-avatar-square.jpg'

const config = useRuntimeConfig()
const route = useRoute()

// SEO Meta tags
useSeoMeta({
  ogLocale: 'en_US',
  ogType: 'website',
  ogUrl: 'https://lejoe.com',
  ogTitle: 'Joel Bez | Technical project lead',
  ogDescription: 'I lead and coach multidisciplinary teams to build digital products with more impact.',
  ogImage: [
    {
      url: config.public.baseURL + ogImageAvatarFull,
      width: 1680,
      height: 1260,
      alt: "Joel Bez's profile picture",
    },
    {
      url: config.public.baseURL + ogImageCover,
    }
  ],
  profileFirstName: 'Joel',
  profileLastName: 'Bez',
  profileUsername: 'lejoe',
  twitterCard: 'summary',
  twitterSite: '@lejoe',
  twitterCreator: '@lejoe',
  twitterTitle: 'Joel Bez | Technical project lead',
  twitterDescription: 'I lead and coach multidisciplinary teams to build digital products with more impact.',
  twitterImage: config.public.baseURL + ogImageAvatarSquare,
  twitterImageAlt: "Joel Bez's profile picture",
})

// Canonical link
useHead({
  link: [
    {
      rel: 'canonical',
      href: config.public.baseURL + route.path,
    },
  ],
})
</script>
