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

// 获取分类
export const getClassList= ()=> {
    return axios.get('/article/getClassList')
}

// 获取标签
export const getLabelList= () => {
    return axios.get('/article/getLabelList')
}

// 获取文章内容
export function editorArticle(data) {
    return axios.post('/article/EditorArticle', data)
}

