import React, { useEffect, useState,useContext } from 'react'
import LeftBar from '../Components/LeftBar'
import { Outlet } from 'react-router-dom'
import Unauthorized from '../Components/Unauthorized'
import Wait from '../Components/Wait'
import contextShare from '../Controllers/contextShare'

const Board = () => {
    const [flag,setFlag]=useState(null)
    const [flagVerify,setFlagVerify]=useState(false)
    const [data,setData]=useState({})
    const verify=async()=>{
        let res= await fetch("http://localhost:5000/board/",{credentials: "include"})
        await res.json().then(
            (data)=>{
                setTimeout(()=>{
                    setFlag(data.flag)
                    setData(data.inf)
                },1000)
            }
        )
    }
    useEffect(()=>{
        verify()
    },[flagVerify])
  return (
   flag?
       <section className='Board'>
            <LeftBar/>
            <div className='Main'>
                <contextShare.Provider value={{inf:data,setFlag:setFlagVerify}}>
                    <Outlet/>
                </contextShare.Provider>
            </div>
        </section>
        :(
            flag===null?<Wait/>:<Unauthorized/>
        )
       
  )
}

export default Board