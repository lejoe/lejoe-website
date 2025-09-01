const baseURL = process.env.BASE_URL
  ? process.env.BASE_URL
  : process.env.NUXT_ENV_VERCEL_URL
  ? 'https://' + process.env.NUXT_ENV_VERCEL_URL
  : 'http://localhost:3000'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Opt out of nuxt analytics
  telemetry: false,

  devtools: { enabled: true },

  // Global CSS
  css: ['~/assets/css/main.css'],

  // Modules
  modules: [
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/eslint'
  ],

  // Runtime config
  runtimeConfig: {
    public: {
      baseURL
    }
  },

  // App configuration (replaces head in Nuxt 2)
  app: {
    head: {
      title: 'Joel Bez | Technical project lead',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'I lead and coach multidisciplinary teams to build digital products with more impact.',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/_favicons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/_favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/_favicons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/_favicons/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/_favicons/safari-pinned-tab.svg', color: '#000000' },
      ],
    }
  },

  // PostCSS configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Google Fonts configuration
  googleFonts: {
    families: {
      Prompt: [900],
      'Source+Sans+Pro': [400],
    },
    download: true,
    display: 'optional',
  },

  // Site configuration for sitemap
  site: {
    url: baseURL,
  },

  // Robots configuration
  robots: {
    sitemap: baseURL + '/sitemap.xml',
  },

  // PWA configuration
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Joel Bez',
      short_name: 'lejoe.com',
      theme_color: '#000',
      background_color: '#fff',
      start_url: '/?standalone=true&utm_source=app',
      description:
        'I lead and coach multidisciplinary teams to build digital products with more impact.',
    },
  },
})
