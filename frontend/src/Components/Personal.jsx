import React,{useContext} from 'react'
import contextShare from '../Controllers/contextShare';

const Personal = () => {
    const contextCon=useContext(contextShare);
  return (
    <div className='personal'>
        <div className='header'>
            <div className='imgContainer'>
                <img src='/Admin.png'></img>
            </div>
            <div>
            <h1>{contextCon.inf.username}</h1>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <p>First Name :<span>{contextCon.inf.firstName}</span></p>
                <p>Last Name :<span>{contextCon.inf.lastName}</span></p>
                <p>E-Mail :<span>{contextCon.inf.email}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Personal