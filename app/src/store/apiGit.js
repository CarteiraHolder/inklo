import { createStore } from 'vuex'
import axios from '../libs/Axios'

// Create a new store instance.
const store = createStore({
    state: {
        filtered: "",
        listDevs: [
            "wallysonn", "diego3g", "filipedeschamps", "rmanguinho"
        ],
        listGitDevs: []
    },
    getters: {},
    actions: {
        getAllUsers({ commit }) {
            this.state.listGitDevs = []
            this.state.listDevs.forEach(async element => {
                this.state.listGitDevs.push(
                    await this.dispatch('getUser', element)
                )
            });
        },
        getUser({ commit }, dev) {
            return axios.get(`users/${dev}`)
                .then(({ data }) => data)
        },
        getReposUser({ commit }, dev) {
            return axios.get(`users/${dev}/repos`)
                .then(({ data }) => data)
        },
    },
    mutations: {

    },
    modules: {},
})

export default store