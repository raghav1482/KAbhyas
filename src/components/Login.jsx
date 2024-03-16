import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context';

const Login = () => {
  const nav = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();

  const handlelogin = ()=>{
    login();
    nav("/profile");
  }
  return (
    <div className='form'>
      <input type='text' placeholder='USERNAME'/>
      <input type='text' placeholder='PASSWORD'/>
      <button onClick={handlelogin}>LOGIN</button>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  )
}

export default Login
