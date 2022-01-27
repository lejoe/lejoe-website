<template>
  <div class="pt-12 md:pt-16 lg:pt-32 px-6 md:px-8 md:px-12 font-sans">
    <div class="max-w-4xl mx-auto">
      <div class="min-h-90">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import ogImage from '~/assets/img/og-image.png'

export default {
  head() {
    return {
      meta: [
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
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.baseURL + ogImage,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
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
          content: this.$config.baseURL + ogImage,
        },
      ],
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: underline;
}
</style>


