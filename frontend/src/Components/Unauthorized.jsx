import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <section className='Unauthorized'>
        <div className='topUn'>
           <h1>401 : Unauthorized !!</h1> 
           <div className='imgContainer'>
                <img src="/5206817.jpg" alt="error" />
           </div>
           <div className='bottomUn'>
                <Link to='/'><button className='log'>LogIn</button></Link>
                <Link to='/Signup'><button>SignUp</button></Link>
           </div>
        </div>
    </section>
  )
}

export default Unauthorized