import axios from 'axios'
import qs from 'qs'
const service = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 7000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // console.log(config)
        // 在请求发送之前做一些处理
        if (!(config.headers['Content-Type'])) {
            if (config.method == 'post') {
                config.headers['Content-Type'] ='application/x-www-form-urlencoded;charset=UTF-8'
                for (var key in config.data) {
                    if (config.data[key] === '') {
                        delete config.data[key]
                    }
                }
                // 不用qs 用json.stringify效果一样
                config.data = qs.stringify(config.data)
            } else {
                config.headers['Content-Type'] ='application/x-www-form-urlencoded;charset=UTF-8'
                // config.params
            }
        }
        return config
    },
    (error) => {
        // 发送失败
        console.log('发送失败', error)
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const dataAxios = response.data
        // 这个状态码是和后端约定的
        return dataAxios
    },
    (error) => {
        // Message({
        //     message: error,
        //     type: 'error',
        //     duration: 3 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service

