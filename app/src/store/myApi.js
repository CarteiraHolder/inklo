import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {},
    getters: {},
    actions: {
        getJson({ commit }, login) {
            window.location.assign(`http://127.0.0.1:8000/api/salvar-local/${login}`)
        },
    },
    mutations: {

    },
    modules: {},
})

export default store