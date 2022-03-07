import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {TextField} from "@mui/material";
import data from './data'
const App = () => {
    const [lorems,setLorems]=useState([])
    const [loremCount,setLoremCount]=useState(1)
    const showLorems = (e) => {
        e.preventDefault()
        let amount=parseInt(loremCount)
        if(amount<=0)return  setLorems([]);
        setLorems(data.slice(0,amount))
    }
    return (
        <section className={'container'}>
        <section className={'d-flex justify-content-center flex-column align-items-center mt-5'}>
              <div className={'title mb-3'}>
                  <h3 className={'fw-bold'}>TIRED OF BORING LOREM IPSUM?</h3>
              </div>
              <div className={'d-flex flex-wrap align-items-center'}>
                  <h4 className={'m-0 mr-1rem'}>Paragraphs : </h4>
               <form onSubmit={showLorems}>
                   <TextField className={'counter-lorem'}
                              label="Count"
                              type="number"
                              value={loremCount}
                              onChange={(e)=>setLoremCount(e.target.value)}
                              InputLabelProps={{
                                  shrink: true,
                              }}
                   />
                   <button type={"submit"} className={'btn btn-primary ms-2'}>GENERATE</button>
               </form>
              </div>
              <div className={'mt-5'}>
                  {lorems.map((item,index)=><p key={index} className={'text-center mt-5'}>{item}</p>)}
              </div>
          </section>
        </section>
    );
};

export default App;