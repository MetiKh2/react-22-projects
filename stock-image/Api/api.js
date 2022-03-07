import axios from 'axios'

export const getAxiosInstance=()=>{
   return axios.create({
        baseURL:"https://api.unsplash.com/",
    });

}
