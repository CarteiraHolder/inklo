import { createStore } from 'vuex'
import axios from '../libs/AxiosMyApi'

// Create a new store instance.
const store = createStore({
    state: {},
    getters: {},
    actions: {
        getJson({ commit }, login) {
            return axios.get(`salvar-local/${login}`)
                .then(({ data }) => console.log(data))
        },
    },
    mutations: {

    },
    modules: {},
})

export default store