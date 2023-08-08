import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post('http://localhost:5000/api/auth/register', {
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login")
    }catch(err){
      setError(true)
    }
  }
  return (
    <div className="register font-serif">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className='font-bold text-lg'>Username</label>
        <input className="registerInput" 
        type="text" 
        placeholder="Enter your username..." 
        onChange={e => setUsername(e.target.value)}/>
        <label className='font-bold text-lg'>Email</label>
        <input className="registerInput" t
        ype="text" 
        placeholder="Enter your email..." 
        onChange={e => setEmail(e.target.value)}/>
        <label className='font-bold text-lg'>Password</label>
        <input className="registerInput" 
        type="password" 
        placeholder="Enter your password..." 
        onChange={e => setPassword(e.target.value)}/>
        {/* <label className='font-bold text-lg'>Age</label>
        <input className="registerInput" type="number" placeholder="Enter your age..." />
        <label className='font-bold text-lg'>Gender</label>
        <select className="registerInput" placeholder="Select your gender...">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select> */}
        <button className="registerButton" type='submit'>Register</button>
      </form>
      <Link to='/login'> <button className="registerLoginButton">Login</button></Link>
      {/* {error && <span>Something went wrong!</span> } */}
    </div>
  )
}
