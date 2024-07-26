export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vuefire: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      appId: process.env.APP_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
  },
  modules: ["@nuxt/image", "nuxt-vuefire", "@pinia/nuxt"],
});
