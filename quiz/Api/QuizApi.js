import {getAxiosInstance} from "./api";
export const fetchQuiz = (count,category,difficulty,callback) => {
    const a=`?type=multiple&amount=${count}&category=${category}&difficulty=${difficulty}`
  getAxiosInstance().get(a)
      .then(res=>{
          console.log(a)
        callback(true,res.data.results)
      }).catch(err=>{
      console.log(err)
          callback(false,err.message)
  })
}
