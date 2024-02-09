import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Delete = () => {
  const [credentials,setCredentials]=useState({passwordOne:'', passwordTwo:''})
  const [msg,setMsg]=useState('');
  const navigate=useNavigate();
  const deletAcc=async()=>{
    const response=await fetch(
      "http://localhost:5000/board/delete",
      {credentials:'include',
       method:'DELETE',
       headers:{
        'Content-type':'application/json'
       },
       body:JSON.stringify(credentials)
      }
    )
    const data=await response.json();
    response.status === 301 ? navigate('/') : setMsg(data.message) ;
  }
  const handleChange=(e)=>{
    setCredentials(c=>({...c,[e.target.name]:e.target.value}));
  }
  const handleClick=()=>{
    if(credentials.passwordOne===credentials.passwordTwo)
      deletAcc()
    else
      setMsg('First and Second Passwords Doesn\'t Match')
  }
  useEffect(()=>{
    if(credentials.passwordOne===null ||credentials.passwordTwo===null || credentials.passwordTwo==="" || credentials.passwordOne==="" )
      document.getElementById('deleteBtn').disabled=true;
    else
      document.getElementById('deleteBtn').disabled=false;
  },[credentials])
  return (
    <div className='delete'>
        {msg!==''?<p  className='err' style={{color:'red',backgroundColor:'beige',fontSize:'20px'}}>{msg}</p>:null}
        <div>
            <input type='password' name='passwordOne' placeholder='Password...' value={credentials.passwordOne} onChange={handleChange}></input>
        </div>
        <div>
            <input type='password' name='passwordTwo' placeholder='Retype Password...' value={credentials.passwordTwo} onChange={handleChange}></input>
        </div>
        <button  id='deleteBtn' onClick={handleClick}>Delete</button>
    </div>
  )
}
