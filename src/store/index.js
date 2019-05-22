import Vue from 'vue'
import Vuex from 'vuex'
import files from './files'
import user from './user'
import local from './local'
// import vuexPersist from 'vuex-persist'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
// const vuexLocal = new vuexPersist({
//   storage: window.localStorage
// })
const store = new Vuex.Store({
	state: {
		version: 0
	},
	modules: {
		files,
		user,
		local
	},
	mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			let store = localStorage.getItem('store')
			try {
				console.log({
					store: store
				})
				let data = JSON.parse(store)
				if (data.version != undefined && data.version != null) {
					// Replace the state object with the stored item
					this.replaceState(
						Object.assign(state, JSON.parse(store))
					);
				}
			} catch (error) {
				let a = 0;
			}
		},
		syncStore(state) {
			// Check if the ID exists
			let store = localStorage.getItem('store')
			try {
				console.log({
					store: store
				})
				let data = JSON.parse(store)
				if (data.version != undefined && data.version != null) {
					// Replace the state object with the stored item
					this.replaceState(
						Object.assign(state, JSON.parse(store))
					);
				}
			} catch (error) {
				let a = 0;
			}
		},
		changeVersion(state) {
			state.version++
		}
	},
	getters: {
		get_version(state) {
			return state.version
		}
	}

})

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	// state.version++
	localStorage.setItem('store', JSON.stringify(state));
})

export default store