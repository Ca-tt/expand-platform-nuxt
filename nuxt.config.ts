export default defineNuxtConfig({
  content: {
    navigation: {
      fields: ["title", "icon"],
    },
    experimental: {
      search: true,
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@nuxthq/studio", "@nuxt/content", "@nuxt/image"],
});
