export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt'],
  googleFonts: {
    families: {
      Lobster: true
    }
  },
  runtimeConfig: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  }
})
