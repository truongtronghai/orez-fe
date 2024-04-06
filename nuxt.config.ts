import path from 'path'

export default defineNuxtConfig({
	modules: ['@pinia/nuxt'],
	css: ['~/assets/css/main.css'],
	pinia: {
		storesDirs: ['./stores/**'],
	},
})
