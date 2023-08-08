import React, { useContext, useRef, useState } from 'react'
import Sidebar from '../../componets/Sidebar/Sidebar'
import './Settings.css'
import axios from 'axios'
import {FaUser} from 'react-icons/fa'
import { Context } from '../../context/Context'

export default function Settings() {
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")
    const [success, setSuccess] = useState (false)

    const {user} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const updateUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if(file){
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePicture = filename;
            try{
                await axios.post("/upload", data)
            }catch(err){

            }
        }try{
            await axios.put("/users/" + user._id, updateUser)
            setSuccess(true)
        }catch(err){

        }
  
    }
  return (
    <div className='settings font-serif'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Your Account</span>
            </div>
            <form className='settingsForm' onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img src={user.profilePicture} alt='profile'/>
                    <label htmlFor='fileInput'>
                        <FaUser className='settingsPPIcon' />
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <label>UserName</label>
                <input type='text' placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type='email' placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)}/>
                <button className='settingsSubmit bg-[#ff1212] text-white font-bold rounded-3xl text-lg' type='submit'>Update</button>
                {success && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile has been updated...</span>}

            </form>
        </div>
        <Sidebar />
    </div>
  )
}
