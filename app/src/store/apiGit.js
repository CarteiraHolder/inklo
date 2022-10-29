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
        getUsers({ commit }) {
            this.state.listDevs.forEach(element => {
                axios.get(`users/${element}`)
                    .then(({ data }) => {
                        console.log(data);
                        this.state.listGitDevs.push(data)
                    })
            });

        },
    },
    mutations: {
    },
    modules: {},
})

export default store