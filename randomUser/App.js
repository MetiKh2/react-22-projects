import React, {useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonIcon from '@mui/icons-material/Person';
import DraftsIcon from '@mui/icons-material/Drafts';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import './style.css'
import {randomUserRequest} from "./Api/RandomUserApi";
import {toast, ToastContainer} from "react-toastify";
import Loading from "./Loading";
const App = () => {
    const [human,setHuman]=useState(null)
    const [value,setValue]=useState('')
    const [title,setTitle]=useState('')
    const [loading,setLoading]=useState(true)
    const [reFetch,setReFetch]=useState(false)

    useEffect(()=>{
        console.log('wefwe')
        randomUserRequest((isOk,data)=>{
            if(isOk)  {
                const person = data
                const { phone, email } = person
                const { large: image } = person.picture
                const { password } = person.login
                const { first, last } = person.name
                const {
                    dob: { age },
                } = person
                const {
                    street: { number, name },
                } = person.location

                const newPerson = {
                    image,
                    phone,
                    email,
                    password,
                    age,
                    street: `${number} ${name}`,
                    name: `${first} ${last}`,
                }
                setHuman(newPerson)
                setLoading(false)
                setValue(newPerson.name)
                setTitle('my name is :')
            }
            else {
                toast.error(data);
            }
        })

    },[reFetch])
    if(loading){
        return (
<>
    <ToastContainer/>
    <Loading/>
</>
        )
    }
    //
    return (
        <main>
            <section className={'block bcg-block'}>

            </section>
            <section className={'block'}>
                <div className="container">
                    <img src={human.image} alt="random user" className="user-img"/>
                    <p className="user-title">{title}</p>
                    <p className="user-value">{value}</p>
                    <div className="values-list">
                        <button onMouseOver={()=>{setValue(human.name);setTitle('my name is :')}} className={'icon'}>
                            <PersonIcon style={{fontSize:'2.5rem'}}/>
                        </button>
                        <button onMouseOver={()=>{setValue(human.email);setTitle('my email is :')}} className={'icon'}>
                            <DraftsIcon style={{fontSize:'2.5rem'}}/>
                        </button>
                        <button  onMouseOver={()=>{setValue(human.age);setTitle('my age is :')}} className={'icon'}>
                            <DateRangeIcon style={{fontSize:'2.5rem'}}/>
                        </button>
                        <button  onMouseOver={()=>{setValue(human.street);setTitle('my street is :')}} className={'icon'}>
                            <MapIcon style={{fontSize:'2.5rem'}}/>
                        </button>
                        <button  onMouseOver={()=>{setValue(human.phone);setTitle('my phone is :')}} className={'icon'}>
                            <CallIcon style={{fontSize:'2.5rem'}}/>
                        </button>
                        <button  onMouseOver={()=>{setValue(human.password);setTitle('my password is :')}} className={'icon'}>
                            <LockIcon style={{fontSize:'2.5rem'}}/>
                        </button>
                    </div>
                    <button onClick={()=>{setReFetch(!reFetch)}} className="btn" type="button">random user</button>
                </div>
            </section>
        </main>
    );
};

export default App;