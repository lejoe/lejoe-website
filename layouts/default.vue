<template>
  <div class="pt-12 md:pt-24 lg:pt-32 px-6 sm:px-12 md:px-12 font-sans">
    <div class="xl:max-w-5xl max-w-4xl mx-auto overflow-hidden">
      <main><Nuxt /></main>
      <footer><TheFooter /></footer>
    </div>
  </div>
</template>

<script>
import ogImageCover from '~/assets/img/og-image-cover.png'
import ogImageAvatarFull from '~/assets/img/og-image-avatar-full.jpg'
import ogImageAvatarSquare from '~/assets/img/og-image-avatar-square.jpg'

export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: this.$config.baseURL + this.$route.path,
        },
      ],
      meta: [
        {
          hid: 'fb:admins',
          name: 'fb:admins',
          content: '502175715',
        },
        {
          hid: 'og:locale',
          name: 'og:locale',
          content: 'en_US',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://lejoe.com',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Joel Bez | Technical project lead',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'I lead and coach multidisciplinary teams to build digital products with more impact.',
        },
        {
          hid: 'og:image1',
          property: 'og:image',
          content: this.$config.baseURL + ogImageAvatarFull,
        },
        {
          hid: 'og:image1:width',
          property: 'og:image:width',
          content: '1680',
        },
        {
          hid: 'og:image1:height',
          property: 'og:image:height',
          content: '1260',
        },
        {
          hid: 'og:image1:alt',
          property: 'og:image:alt',
          content: "Joel Bez's profile picture",
        },
        {
          hid: 'og:image2',
          property: 'og:image',
          content: this.$config.baseURL + ogImageCover,
        },
        {
          hid: 'profile:first_name',
          property: 'profile:first_name',
          content: 'Joel',
        },
        {
          hid: 'profile:last_name',
          property: 'profile:last_name',
          content: 'Bez',
        },
        {
          hid: 'profile:username',
          property: 'profile:username',
          content: 'lejoe',
        },
        {
          hid: 'profile:last_name',
          property: 'profile:last_name',
          content: 'Bez',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@lejoe',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@lejoe',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://lejoe.com',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Joel Bez | Technical project lead',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'I lead and coach multidisciplinary teams to build digital products with more impact.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.$config.baseURL + ogImageAvatarSquare,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: "Joel Bez's profile picture",
        },
      ],
    }
  },
}
</script>
