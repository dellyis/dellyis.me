export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dellyis.me',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'description',
        content:
          "Hey there! I'm a fullstack developer and moderator. I'm interested in development, moderation, and building thriving online communities. I work on random projects in my free time, a lot involving Discord!.",
      },
      {
        name: 'og:description',
        content:
          "Hey there! I'm a fullstack developer and moderator. I'm interested in development, moderation, and building thriving online communities. I work on random projects in my free time, a lot involving Discord!.",
      },
      { name: 'og:title', content: 'Dellyis [he/they]' },
      { name: 'og:image', content: '/favicon.png' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/font.css', '@assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/icons'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  colorMode: {
    classSuffix: '',
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
}
