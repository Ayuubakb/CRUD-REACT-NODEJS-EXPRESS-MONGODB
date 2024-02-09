import React,{useState} from 'react';

const Input = ({Type,Name,Placeholder,Label,Context,setContext}) => {
  return (
    <div className='inputContainer'>
        <label for={Name}>{Label}</label>
        <input 
            type= {Type}
            name= {Name}
            placeholder={Placeholder}
            id= {Name}
            value={Context.Name}
            onChange={(e)=>{setContext((l)=>({...l,[Name]:e.target.value}))}}
        />
    </div>
  )
}

export default Input