import React, {useState } from 'react'
import Input from '../Components/Input'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

const Login = () => {
    let params=new URL(document.location).searchParams
    let s=params.get("s");
    const [loginInputs,setLoginInputs] = useState({email:null,password:null})
    const [err,setErr]=useState('');
  return (
    <div className='loginPage'>
        <form action='' method='POST'>
            <h1>LOGIN</h1>
            {(err !== '')?<p className='err'>{err}</p>:null}
            {(s !== null)?<p className='aff'>SignedUp Succesfully </p>:null}
            <Input
                Type='email'
                Name='email'
                Placeholder='E-mail...'
                Label='E-mail'
                Context={loginInputs}
                setContext={setLoginInputs}
            />
            <Input
                Type='password'
                Name='password'
                Placeholder='Password...'
                Label='Password'
                Context={loginInputs}
                setContext={setLoginInputs}
            />
            <Button
                setErr={setErr}
                Context={loginInputs}
                Dir='/authentification/login'
                type='login'
            >
                Login
            </Button>
            <Link to='/Signup' className='link'><p>Don't have an account?<span> SignUp</span></p></Link>
        </form>
    </div>
  )
}

export default Login