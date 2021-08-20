import axios from './http'



// let reportupload= '/api/report/upload';
// export const reportUpload= (params) => {
//     return axios.get(reportupload, {
//         params: params
//     })
// }

// 获取文章列表
export const articleList= (data) => {
    return axios.post('/article/getArticleList', data)
}
