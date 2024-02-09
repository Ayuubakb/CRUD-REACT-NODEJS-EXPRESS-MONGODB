import React, { useEffect, useState } from 'react'

const InputEdit = ({Value,Name,setTemp}) => {
    const [v,setV]=useState(Value);
    const handleBlur=(e)=>{
        if(e.target.value === '')
            setV(Value)
        e.target.disabled=true
        document.querySelector("button[name='"+Name+"']").click()
    }
    useEffect(()=>{
        if(v !== Value)
            setTemp((t)=>{ return {...t,[Name]:v}})
    },[v])
  return (
    <input
        name={Name}
        value={v}
        onChange={(e)=>{setV(e.target.value)}}
        onBlur={handleBlur}
        disabled
    />
  )
}

export default InputEdit