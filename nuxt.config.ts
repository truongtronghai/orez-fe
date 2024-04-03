import path from "path"

export default defineNuxtConfig({
  modules: ["nuxt-primevue"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, "./assets/presets/lara/") },
    components: {
      exclude: ["Editor", "Chart"]
    }
  }
})
