import axios from 'axios'

export const getAxiosInstance=()=>{
   return axios.create({
        baseURL: "https://www.omdbapi.com/",
    });

}
