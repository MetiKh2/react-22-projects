import axios from 'axios'

export const getAxiosInstance=()=>{
   return axios.create({
        baseURL: "https://hn.algolia.com/api/v1/search",
    });

}
