// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/google-fonts', '@sidebase/nuxt-auth', 'nuxt-icon'],
	googleFonts: {
		download: true,
		families: { Inter: true },
		useStylesheet: true,
	},
	auth: {
		enableGlobalAppMiddleware: true,
	},
	srcDir: 'src/',
	postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
	alias: { '~/*': './src/*' },
	css: ['~/assets/css/tailwind.css'],

	app: {
		head: {
			htmlAttrs: { class: 'dark' },
			bodyAttrs: { class: 'bg-background text-primary' },
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	runtimeConfig: { baseUrl: process.env.NUXT_BASE_URL },
	experimental: { typedPages: true },
})
