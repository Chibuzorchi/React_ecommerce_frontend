import React from 'react'
import './register.css'
import { Link } from "react-router-dom"


const Register = () => {
  return (
    <>
      <div className="register">
       <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text"
         className="registerInput" placeholder="Enter Username"
         />

        <label>Email</label>
        <input type="text"
        className="registerInput"
        placeholder="Enter email address"
        />

        <label>Password</label>
        <input type="password"
        className="registerInput"
        placeholder="Enter Password"
        />

        <button className="registerButton" type="submit">Register</button>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
    </>
  )
}

export default Register
