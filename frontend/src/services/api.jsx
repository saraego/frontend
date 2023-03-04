import axios from "axios"

const api = axios.create({
    baseURL:'http://localhost:3001'
})

//esse é para enviar o token
api.interceptors.request.use( async config =>{
    const userData = await localStorage.getItem('flex:userData')
    // console.log(userData);
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default api