import React, {useState} from 'react';
import Values from "values.js";
import './style.css'
import rgbToHex from "./Utils";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    const [color,setColor]=useState('')
    const [error,setError]=useState(false)
    const [list,setList]=useState(new Values('#60DBFB').all(10))
    const handleSubmit = (e) => {
      e.preventDefault()
try {
    setList(new Values(color).all(10))
    console.log(list)
    setError(false)
}
catch {
          setError(true)
}
    }
    const copyColor = (hexColor) => {
        navigator.clipboard.writeText(hexColor);
        toast.success('Copied To Clipboard',{
            icon:'🚀'
        });
    }
    console.log('app')
    return (
      <>
          <section className={'container'}>
                <h3>Color generator</h3>
              <form onSubmit={handleSubmit}>
                  <input type={'text'} value={color} className={` ${error?'error':''}`} placeholder={'#071D58'} onChange={e=>{setColor(e.target.value)}}/>
                  <button className={`btn`} type={'submit'}>submit</button>
              </form>
          </section>
          <section className={'colors'}>
            <h4>List goes here</h4>
              <div className={'colors-list'}>
                  {

                      list.map((color,index)=> {
                          const hexColor = rgbToHex(color.rgb[0], color.rgb[1], color.rgb[2]);
                          return <div onClick={()=>copyColor(hexColor)} key={index} style={{backgroundColor:hexColor}} className={'myColor'}>
                                    <p className={color.type=='shade'?'text-white':'text-dark'}>{color.weight}%</p>
                                    <p className={color.type=='shade'?'text-white':'text-dark'}>{hexColor}</p>
                          </div>
                      })
                  }
              </div>
              <ToastContainer autoClose={2000}></ToastContainer>
          </section>
      </>
    );
};

export default App;