import {getAxiosInstance} from "./api";

export const GetTours = (callback) => {
  getAxiosInstance().get('react-tours-project')
      .then(res=>{
        callback(true,res.data)
      }).catch(err=>{
          callback(false,err.message)
  })
}