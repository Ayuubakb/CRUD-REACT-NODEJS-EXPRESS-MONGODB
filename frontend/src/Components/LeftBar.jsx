import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const LeftBar = () => {
    const navigate=useNavigate()
    const delSession=async()=>{
        const res = await fetch('http://localhost:5000/authentification/logout',{
            method:'DELETE',
            credentials:'include'
        })
        const data = await res.json()

        res.status===301 ? navigate("/") :alert(data.message)
        
    }
    const handleClick=()=>{
        delSession()
    }
  return (
    <div className='leftBar'>
        <h1>Menu</h1>
        <div>
            <Link className='link' to=''><p>Personal Infos</p></Link>
        </div>
        <div>
            <Link className='link' to='edit'><p>Edit Infos</p></Link>
        </div>
        <div>
            <Link className='link' to='delete'><p>Delete Account</p></Link>
        </div>
        <div className='icons'>
            <div>
                <p onClick={handleClick}>LogOut</p>
            </div>
            <div>
                <p>Night Mode</p>
            </div>
        </div>
    </div>
  )
}

export default LeftBar