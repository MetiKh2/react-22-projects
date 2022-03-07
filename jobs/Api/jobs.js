import {getAxiosInstance} from "./api";

export const getJobsRequest=(callback)=>{
    getAxiosInstance().get('react-tabs-project')
        .then(res=>{
            console.log(res)
            callback(true,res.data)
        })
        .catch(err=>{
            callback(false , err.message)
        })
}