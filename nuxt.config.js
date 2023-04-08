import * as faviconDescription from './realfavicongenerator.config.json'

const baseURL = process.env.BASE_URL
  ? process.env.BASE_URL
  : process.env.NUXT_ENV_VERCEL_URL
  ? 'https://' + process.env.NUXT_ENV_VERCEL_URL
  : 'http://localhost:3000'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Opt out of nuxt analytics https://nuxtjs.org/docs/configuration-glossary/configuration-telemetry/
  telemetry: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Joel Bez | Technical project lead',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I lead and coach multidisciplinary teams to build digital products with more impact.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://google-fonts.nuxtjs.org
    '@nuxtjs/google-fonts',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-rfg-icon',
      {
        static: true,
        staticPath: '_favicons/',
        masterPicture: 'static/favicon.png',
        rfg: faviconDescription,
      },
    ],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  publicRuntimeConfig: {
    baseURL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  googleFonts: {
    download: true,
    display: 'optional',
    families: {
      Prompt: [900],
      'Source+Sans+Pro': [400],
    },
  },

  sitemap: {
    hostname: baseURL,
  },

  robots: {
    sitemap: baseURL + '/sitemap.xml',
  },

  pwa: {
    meta: {
      ogSiteName: false,
      charset: false,
      favicon: false,
    },
    icon: {
      source: 'static/_favicons/android-chrome-512x512.png',
      fileName: 'icon.png',
      targetDir: '_pwaicons',
      pluginName: '$pwaicon',
    },
    manifest: {
      theme_color: '#000',
      background_color: '#fff',
      name: 'Joel Bez',
      short_name: 'lejoe.com',
      start_url: '/?standalone=true&utm_source=app',
      description:
        'I lead and coach multidisciplinary teams to build digital products with more impact.',
    },
  },
}
