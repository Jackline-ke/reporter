import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div className="login font-serif">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label className='font-bold text-lg'>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label className='font-bold text-lg'>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <Link to='/register'><button className="loginRegisterButton">Register</button></Link>
    </div>
   
  )
}
