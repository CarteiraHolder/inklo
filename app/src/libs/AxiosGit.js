import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://api.github.com/'
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer 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`
    return config
})

export default axiosClient