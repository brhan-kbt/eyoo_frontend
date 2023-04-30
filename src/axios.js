import axios from'axios';
import router from './router';

const x='';
const axiosClient=axios.create({
    baseURL:`${process.env.REACT_APP_API_BASE_URL}/`
})


axiosClient.interceptors.request.use((config)=>{
    const token='123';//TODO
    config.headers.Authorization=`Bearer ${token}`;//
    return config;
});

axiosClient.interceptors.response.use(response=>{
    return response;
},error=>{
    if(error.error && error.response.status ===401){
        // localStorage.removeItem('survey_token')
        // window.location.reload();
        console.log(error);
        return error;
    }

    throw error;


})

export default axiosClient