// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    app: {
        head: {
        title: 'Open5e',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'The truly open source for 5e rules and resources'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:700'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i'}
        ]
    },
    buildModules: ['@nuxtjs/eslint-module'],
    eslint: {
      fix: true
    }
},
}
