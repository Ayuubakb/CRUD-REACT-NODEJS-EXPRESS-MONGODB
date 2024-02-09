import React, { useState,useContext } from 'react'
import ButtonEdit from './ButtonEdit'
import InputEdit from './InputEdit'
import contextShare from '../Controllers/contextShare'

const Edit = () => {
    const contextCon=useContext(contextShare)
    const [temp,setTemp]=useState({
        pic:contextCon.inf.pic,
        username:contextCon.inf.username,
        firstName:contextCon.inf.firstName,
        lastName:contextCon.inf.lastName,
        email:contextCon.inf.email
    });
    const [msg,setMsg]=useState('')
    const saveFetch=async()=>{
        const res=await fetch("http://localhost:5000/board/edit",{
            body:JSON.stringify(temp),
            headers:{
                "Content-type":"application/json"
            },
            method:'POST',
            credentials:'include'
        })
        const data=await res.json()
        contextCon.setFlag(f=>!f)
        res.status===200?setMsg(data.message):setMsg("An Error Accured From Our Part : "+data.msg)
    }
    const handleClick=()=>{ 
        saveFetch()
    }
  return (
    <div className='personal'>
        <div className='header'>
            <div className='imgContainer'>
                <img src='/Admin.png'></img>
                <span><i class="fa-solid fa-user-pen"></i></span>
            </div>
            <div>
            <h1>{contextCon.inf.username}</h1>
            </div>
        </div>
    
        <div className='bottom edit'>
        {msg!==''?<p className='err' style={{color:'red',backgroundColor:'beige'}}>{msg}</p>:null}
            <div>
                <p>First Name :<InputEdit Value={contextCon.inf.firstName} Name='firstName' setTemp={setTemp}></InputEdit></p>
                <ButtonEdit name='firstName'><i class="fa-regular fa-pen-to-square"></i></ButtonEdit>
            </div>
            <div>
                <p>Last Name :<InputEdit Value={contextCon.inf.lastName} Name='lastName' setTemp={setTemp}></InputEdit></p>
                <ButtonEdit name='lastName'><i class="fa-regular fa-pen-to-square"></i></ButtonEdit>
            </div>
            <div>
                <p>E-Mail :<InputEdit Value={contextCon.inf.email} Name='email' setTemp={setTemp}></InputEdit></p>
                <ButtonEdit name='email'><i class="fa-regular fa-pen-to-square"></i></ButtonEdit>
            </div>
            <button className='editBtn save' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default Edit