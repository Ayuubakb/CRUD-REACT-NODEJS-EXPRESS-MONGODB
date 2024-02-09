import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({setErr,Context,Dir,children,type}) => {
    const navigate= useNavigate()
    const sendData=async()=>{
        const res= await fetch("http://localhost:5000"+Dir,{
            headers:{
                "Content-type":"application/json"
            },
            method:"POST",
            credentials:"include",
            body:JSON.stringify(Context)
        })
       await res.json().then(
        (data)=>{
            if(res.status == 500 || res.status === 404 || res.status === 401){
                setErr(data.message)
            }else if(res.status == 200){
                navigate("/?s=t");
            }else if(res.status == 201){
                navigate("/Board");
            }
        }
       )
    }
    
    const handleClick=(e)=>{
        e.preventDefault();
        for(let c in Context){
            if(Context[c]===null || Context[c]===''){
                return setErr('You Left Empty Fields')
            }
        }
        sendData()
    }
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

export default Button