import {getAxiosInstance} from "./api";
const clientID = `?client_id=t0WQtzEdxNa9cR9BPVqsHq75ttS_XhXz7tts5sg6Z5A`;
export const fetchPhotos = (page,callback) => {
  getAxiosInstance().get('photos/'+clientID+'&page='+page)
      .then(res=>{
        callback(true,res.data)
      }).catch(err=>{
          callback(false,err.message)
  })
}
export const searchPhotos = (page,query,callback) => {
  getAxiosInstance().get('search/photos'+clientID+'&query='+query+'&page='+page)
      .then(res=>{
          console.log(res)
        callback(true,res.data.results)
      }).catch(err=>{
          callback(false,err.message)
  })
}