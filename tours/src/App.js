import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import {useEffect, useState} from "react";
import data from "./data";
import Loading from "./Loading";
import Tours from "./Tours";
import {GetTours} from "./Api/ToursApi";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {

    const [loading,setLoading]=useState(true)
    const [tours,setTours]=useState([])
    const removeTour = (id) => {
        setTours(tours.filter(item=>item.id!=id))
    }
    const fetchTours = async () => {
      setLoading(true)
        GetTours((isOk,res)=>{
            if(isOk){
                setLoading(false)
                setTours(res)
            }
            else {
                setLoading(false)
                toast.error('خطایی رخ داده است')
            }
        })
    }
    useEffect(async ()=>{
           await fetchTours()
    },[])
    if (loading){
       return (
        <main className={'py-5'}>
            <section className={'container'}>
                <section className={`d-flex align-items-center justify-content-center flex-column`}>
                    <Loading/>
                </section>
            </section>
            <ToastContainer/>
        </main>
       )

    }
    else if(tours.length<=0){
        return (
            <main className={'py-5'}>
                <section className={'container'}>
                    <section className={`d-flex align-items-center justify-content-center flex-column`}>
                        <h1>No Tours left</h1>
                    <button className={'btn btn-primary'} onClick={()=>fetchTours()}>Refresh</button>
                    </section>
                </section>
                <ToastContainer/>
            </main>
        )
    }
  return (
    <main className={'py-5'}>
    <Tours removeTour={removeTour} tours={tours}/>
        <ToastContainer/>
    </main>
  );
}

export default App;
