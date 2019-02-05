const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Remote Jobs BR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'lang', name: 'language', content: 'Portuguese' },
      { hid: 'author', name: 'author', content: 'Roberto Oliveira' },
      // Twitter
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description
      },
      // Open Graph
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://raw.githubusercontent.com/remotejobsbr/remote-jobs-client/master/assets/remote-jobs-social-media.png'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://remotejobsbr.com'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Remote Jobs BR'
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'pr_BR'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1e91c3' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/scrollto', { src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
