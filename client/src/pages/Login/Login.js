import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './Login.css'
import axios from "axios"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("http://localhost:5000/api/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    }catch(err){
      dispatch({type: "LOGIN_FAILURE"})
    }
  };
  
  return (
    <div className="login font-serif">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className='font-bold text-lg'>Username</label>
        <input className="loginInput" 
        type="text" 
        placeholder="Enter your username..." 
        ref ={userRef}
        />
        <label className='font-bold text-lg'>Password</label>
        <input className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        ref={passwordRef}
        />
        <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
      </form>
        <Link to='/register'><button className="loginRegisterButton">Register</button></Link>
    </div>
   
  )
}
