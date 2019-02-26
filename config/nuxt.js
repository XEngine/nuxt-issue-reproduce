const {resolve} = require('path')
const pkg = require('../package')


module.exports = {
    mode: 'universal',

    srcDir: resolve(__dirname, '..', 'resources'),

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: "stylesheet", href: "https://use.typekit.net/iiw2urf.css"},
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Nunito:300,400,700"},
            {rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.2/css/solid.css"},
            {rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.2/css/regular.css"},
            {rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css"}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss',
        'swiper/dist/css/swiper.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '@/plugins/swiper', ssr: false}
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    router: {
        middleware: ['ssr-cookie']
    },
    /*
    ** Build configuration
    */
    build: {

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
}
