import axios from 'axios'

export const getAxiosInstance=()=>{
   return axios.create({
        baseURL: "https://opentdb.com/api.php",
    });

}
