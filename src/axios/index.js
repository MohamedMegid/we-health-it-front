import axios from 'axios';
import { urls } from "@/backend/urls";
axios.defaults.baseURL = urls.auth.baseUrl;

if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) 
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;

let refresh = false;
let refreshToken = localStorage.getItem("refreshToken")
axios.interceptors.response.use(
    resp => resp, 
    async error => {
    if (error.response.status === 401 && !refresh && refreshToken) {
        refresh = true;
        const {status, data} = await axios.post('/token/refresh/',{refresh:refreshToken});

        if (status === 200) {
            console.log(data)
            localStorage.setItem("accessToken", data.access)
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
            return axios(error.config);
        }
        else {
            let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";
            localStorage.clear();
            localStorage.setItem("lang", lang);
            window.location.href = "/"
        }
    }
    refresh = false;
    return Promise.reject(error.response);
});
