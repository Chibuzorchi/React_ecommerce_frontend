import React from 'react'
import { Link } from "react-router-dom"
import './login.css'


const Login = () => {
  return (

    
    <>
      <div className="login1">
        <span className="loginTitle">Login</span>
      <form className="loginForm" >
        <label>Username</label>
        <input type="text" className="loginInput"
         placeholder="Enter Username"
         
         />
        <label>Password</label>
        <input type="password" className="loginInput"
         placeholder="Enter password"
        
         />
        <button className="loginButton" type="submit" >
          Login
          </button>
      </form>

      <button className="loginRegisterButton">       
        <Link className="link" to="/register">REGISTER</Link>
      </button>
    </div>
    </>
  )
}

export default Login
