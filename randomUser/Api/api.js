import axios from 'axios'

export const getAxiosInstance=()=>{
   return axios.create({
        baseURL:"https://randomuser.me/api/",
    });

}
