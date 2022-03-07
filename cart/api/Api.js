import axios from 'axios'

export const getAxiosInstance=()=>{
    return axios.create({
        baseURL:"https://course-api.com/",
    });

}