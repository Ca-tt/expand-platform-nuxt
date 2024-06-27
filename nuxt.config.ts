export default defineNuxtConfig({
  content: {
  },

  routeRules: {
    "/": { prerender: true },
  },

  modules: ["@nuxthq/studio", "@nuxt/content", "@nuxt/image"],
});