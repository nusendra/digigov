module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DigiGov',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DigiGov Company Profile' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/bootstrap.min.css' },
      // { rel: 'stylesheet', href: '/themify-icons.css' },
      // { rel: 'stylesheet', href: '/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/style.css' }
    ],
    script: [
      { src: '/jquery-3.2.1.min.js' },
      { src: '/bootstrap.bundle.min.js' },
      { src: '/owl.carousel.min.js' },
      { src: '/script.js' }
    ],
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    // Workbox options
  },
  meta: {
    // ...
  },
  manifest: {
    name: 'DIGIGOV'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

