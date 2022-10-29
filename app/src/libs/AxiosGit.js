import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://api.github.com/'
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer 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`
    return config
})

export default axiosClient