import {getAxiosInstance} from "./api";
const apiKey = `?apikey=372b4503`;
export const fetchMovies = (query,callback) => {
  getAxiosInstance().get(apiKey+'&s='+query)
      .then(res=>{
        callback(true,res.data.Error,res.data.Search)
      }).catch(err=>{
      console.log(err)
          callback(false,err.message)
  })
}
export const fetchMovieDetail = (id,callback) => {
  getAxiosInstance().get(apiKey+'&i='+id)
      .then(res=>{
        callback(true,res.data)
      }).catch(err=>{
          callback(false,err.message)
  })
}