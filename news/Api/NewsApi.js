import {getAxiosInstance} from "./api";
export const fetchNews = (query,page,callback) => {
  getAxiosInstance().get('?query='+query+'&page='+page)
      .then(res=>{
        callback(true,res.data)
      }).catch(err=>{
      console.log(err)
          callback(false,err.message)
  })
}
