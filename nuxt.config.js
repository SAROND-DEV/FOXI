const isDev = process.env.NODE_ENV !== 'production';

export default {
	...(!isDev && {
		modern: 'universal'
	}),

    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'static',

    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
		title: 'FOXI',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
    },

    /*
    ** Global CSS
    */
    css: [
		'normalize.css',
		'aos/dist/aos.css',
		'@/assets/scss/global-styles.scss',
		'@/assets/scss/global-media.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
		// { src: '@/plugins/VueNotification.js', mode: 'client' }
    ],

    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
		"@nuxtjs/svg"
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/axios',
		'@nuxtjs/style-resources',
		'nuxt-webfontloader',
		'nuxt-ssr-cache',
		'nuxt-lazy-load',
		'vue-scrollto/nuxt'
	],

    webfontloader: {
		events: false,
		google: {
			families: ["Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"]
		},
		timeout: 5000
    },

    styleResources: {
		scss: ['~assets/scss/global-variables.scss'],
    },

    axios: {
		// baseURL: '',
		debug: isDev
	},

	// version: process.env.version,

	// ...(!isDev && {
	// 	cache: {
	// 		// if you're serving multiple host names (with differing
	// 		// results) from the same server, set this option to true.
	// 		// (cache keys will be prefixed by your host name)
	// 		// if your server is behind a reverse-proxy, please use
	// 		// express or whatever else that uses 'X-Forwarded-Host'
	// 		// header field to provide req.hostname (actual host name)
	// 		useHostPrefix: true,
	// 		pages: [
	// 			// these are prefixes of pages that need to be cached
	// 			// if you want to cache all pages, just include '/'
	// 			'/',
	// 		],

	// 		store: {
	// 			type: 'memory',

	// 			// maximum number of pages to store in memory
	// 			// if limit is reached, least recently used page
	// 			// is removed.
	// 			max: 100,

	// 			// number of seconds to store this page in cache
	// 			ttl: 60,
	// 		},
	// 	},
	// }),

    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {
        filenames: {
			app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
			chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
			css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
			img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
			font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
			video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
		},
    }
}
