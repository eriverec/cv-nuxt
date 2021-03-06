//import client from './plugins/contentful'

require('dotenv').config()

export default {

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cv-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'google-site-verification',
        content: 'rQ1gW0dtlxhf7KN_YaFnojE1DV9hmxjZsRfjJ-WW5Lc'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Nunito+Sans:wght@600&family=Nunito:wght@200;700&family=Oswald:wght@200;300;400;500;600;700&display=swap'
      },

    ]
  },
  script: [{
    //src: 'https://www.googletagmanager.com/gtag/js?id=249732089',
    src: 'https://www.googletagmanager.com/gtag/js?id=G-6SZ1KQ3M7B',
    async: true
  }],


  loading: { color: 'black', height: '3px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/contentful'
    },
    //{
    //src: '~/plugins/ga',
    //mode: 'client'
    //},

    //{ src: "@/plugins/aos", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],



  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma',
    '@nuxtjs-ext/bulma-extensions',
    '@neneos/nuxt-animate.css',
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
 
  ],

  googleAnalytics: {
    id: '2117395357'
  },



  gtm: {
    enabled: true,
    id: 'G-6SZ1KQ3M7B',
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },

  markdownit: {
    injected: true,
    html: true,
    quotes: '“”‘’',
    linkify: true,
    typographer: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { }
  },
}
