import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Input'
import Button from '../Components/Button';

const Signup = () => {
    const [signupInputs, setSignupInputs]= useState({userName:null,email:null,password:null,fn:null,ln:null,pic:null});
    const [err,setErr]=useState('');
  return (
    <div className='loginPage'>
        <form action='' method='POST'>
            <h1>SignUp</h1>
            {(err !== '')?<p className='err'>{err}</p>:null}
            <Input
                Type='text'
                Name='userName'
                Placeholder='User Name...'
                Label='User Name'
                Context={signupInputs}
                setContext={setSignupInputs}
            />
            <Input
                Type='text'
                Name='fn'
                Placeholder='First Name...'
                Label='First Name'
                Context={signupInputs}
                setContext={setSignupInputs}
            />
            <Input
                Type='text'
                Name='ln'
                Placeholder='Last Name...'
                Label='Last Name'
                Context={signupInputs}
                setContext={setSignupInputs}
            />
            <Input
                Type='email'
                Name='email'
                Placeholder='E-mail...'
                Label='E-mail'
                Context={signupInputs}
                setContext={setSignupInputs}
            />
            <Input
                Type='file'
                Name='pic'
                Placeholder=''
                Label='Picture'
                Context={signupInputs}
                setContext={setSignupInputs}
            />
            <Input
                Type='password'
                Name='password'
                Placeholder='Password...'
                Label='Password'
                Context={signupInputs}
                setContext={setSignupInputs}
            />
            <Button 
                setErr={setErr}
                Context={signupInputs}
                Dir='/authentification/signup'
                type='signup'
            >
                SignUp
            </Button>
            <Link to='/' className='link'><p>You have an account?<span> Login</span></p></Link>
        </form>
    </div>
  )
}

export default Signup