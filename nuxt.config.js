export default {
  /*
  ** Rendering mode
  ** Doc: https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',

  /*
  ** Headers of the page
  ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
  */
  head: {
    title: 'Nuxt.js starter for CSB',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official Nuxt.js starter for CodeSandBox' }
    ],
    link: [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=3' },
  { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
],
    script: [
  { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
  { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
  { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
]
  },

  /*
  ** Global CSS
  ** Doc: https://nuxtjs.org/api/configuration-css
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  ** Doc: https://nuxtjs.org/guide/plugins
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  ** Doc: https://nuxtjs.org/guide/modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    // TODO: Remove it if you want to eject from codeSandbox
    './codesandbox'
  ],

  /*
  ** HTTP module configuration
  */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
  ** Build configuration
  ** Doc: https://nuxtjs.org/api/configuration-build
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
};
