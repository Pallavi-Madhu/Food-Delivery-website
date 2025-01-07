import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {                            //pass setshoelogin as prop,so wrap in curly braces

  const [currentState , setCurrentState] = useState("Login")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)}src={assets.cross_icon} alt=""/>
        </div>
        <div className="login-popup-inputs">
          {currentState==='Login'? <></>:<input type='text' id='signup' placeholder='Your name' required/>}
          
          <input type='email' id='email' placeholder='Your email' required/>
          <input type='password' id='password' placeholder='Password' required/> 
        </div>
        <button>{currentState === "Sign up"?"Create acccount":"Login"}</button> 
        <div className="login-popup-condition">
          <input type='checkbox' required/>
          <p>By continuing,I agree to the terms of use & privacy policy</p>
        </div>
        {currentState === 'Login' ? 
          <p>Create a new account? <span onClick = {() => setCurrentState('Sign up')}>Click here</span></p>
        : <p>Already have an acoount? <span onClick={() => setCurrentState('Login')}>Login here</span></p>}
       
        
      </form>
      
    </div>
  )
}

export default Login
