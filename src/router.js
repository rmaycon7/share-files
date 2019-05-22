import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Download from './components/Download.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,

	linkActiveClass: 'active-page',
	linkExactActiveClass: 'current-page',
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/files/downloads',
			name: 'Downloads',
			component: Download
		}
	]
})