import {getAxiosInstance} from "./api";

export const randomUserRequest = (callback) => {
  getAxiosInstance().get('')
      .then(res=>{
        callback(true,res.data.results[0])
      }).catch(err=>{
          callback(false,err.message)
  })
}