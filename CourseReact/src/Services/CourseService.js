import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7081/api/Course'
})

export default axiosInstance