import React from 'react'
import Sidebar from '../../componets/Sidebar/Sidebar'
import './Settings.css'
import {FaUser} from 'react-icons/fa'
import profile from "../../assets/pro.jpg"

export default function Settings() {
  return (
    <div className='settings font-serif'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Your Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img src={profile} alt='profile'/>
                    <label htmlFor='fileInput'>
                        <FaUser className='settingsPPIcon' />
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}}/>
                </div>
                <label>UserName</label>
                <input type='text' placeholder='Group3'/>
                <label>Email</label>
                <input type='email' placeholder='group3@gmail.com'/>
                <label>Password</label>
                <input type='password'/>
                <button className='settingsSubmit bg-[#ff1212] text-white font-bold rounded-3xl text-lg'>Update</button>

            </form>
        </div>
        <Sidebar />
    </div>
  )
}
