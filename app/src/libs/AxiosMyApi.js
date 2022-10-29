import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'locahost'
})

export default axiosClient