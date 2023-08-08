import React, { useContext, useState } from 'react'
import {FaPlus} from "react-icons/fa"
import axios from "axios"
import {Context} from "../../context/Context"
import './Write.css'

const Write = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState (null)
    const {user} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        };
        if(file){
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try{
                await axios.post("/upload", data)

            }catch(err){

            }
        }try{
            const res = await axios.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id)
        }catch(err){

        }
       
    }

  return (
    <div className='form pt-16'>
        <div className='flex justify-center pt-8'>
            {file &&
                <img src={URL.createObjectURL(file)} 
                alt='Single Post' 
                className='writeImg h-72 rounded-lg'/>
            }
        </div>
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className='writeFormGroup flex ml-16'>
                <label htmlFor='fileInput' className='pt-6'>
                   <div className='border w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <FaPlus className='text-[#838383]'/>
                   </div>
                </label>
                <input type='file' id='fileInput' onChange={(e) => setFile(e.target.files[0])}/>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='writeFormGroup  ml-16'>
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>
            <button className='writeSubmit bg-[#ff1212] font-serif w-32 h-10 text-white font-bold rounded-3xl text-lg' type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default Write