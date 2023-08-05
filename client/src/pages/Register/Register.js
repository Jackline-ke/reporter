import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="register font-serif">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className='font-bold text-lg'>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label className='font-bold text-lg'>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label className='font-bold text-lg'>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        {/* <label className='font-bold text-lg'>Age</label>
        <input className="registerInput" type="number" placeholder="Enter your age..." />
        <label className='font-bold text-lg'>Gender</label>
        <select className="registerInput" placeholder="Select your gender...">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select> */}
        <button className="registerButton ">Register</button>
      </form>
      <Link to='/login'> <button className="registerLoginButton">Login</button></Link>
    </div>
  )
}
