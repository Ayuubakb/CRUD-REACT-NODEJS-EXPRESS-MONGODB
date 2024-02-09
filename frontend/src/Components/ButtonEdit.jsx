import React, { useEffect, useState } from 'react'

const ButtonEdit = ({children,name}) => {
    const [clicked,setClicked]=useState(false);
    
    const handleClick=(e)=>{
        setClicked(!clicked)
    }
    useEffect(()=>{
        const input=document.querySelector("input[name='"+name+"']")
        if(clicked){
            input.disabled=false
            input.focus()
        }else{
            input.disabled=true
        }
    },[clicked])
  return (
    !clicked?
        <button name={name} className='editBtn' onClick={handleClick}>
            {children}
        </button>
    :
        <button name={name} style={{backgroundColor:'rgb(253, 253, 87)'}} className='editBtn' onClick={handleClick}>
            <i class="fa-solid fa-i-cursor"></i>
        </button>
  )
}

export default ButtonEdit