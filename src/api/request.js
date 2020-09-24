import axios from 'axios'

// 创建 axios 实例
const req = axios.create({
    baseURL: 'http://172.31.41.82:10010/idea',
    timeout: 6000
})

export default req