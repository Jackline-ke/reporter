import React from 'react'
import {FaPlus} from "react-icons/fa"
import cor1 from '../../assets/cor1.jpeg'
import './Write.css'

const Write = () => {
  return (
    <div className='form pt-16'>
        <div className='flex justify-center pt-8'>
            <img src={cor1} alt='Single Post' className='writeImg h-72 rounded-lg'/>
        </div>
        <form className='writeForm'>
            <div className='writeFormGroup flex ml-16'>
                <label htmlFor='fileInput' className='pt-6'>
                   <div className='border w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <FaPlus className='text-[#838383]'/>
                   </div>
                </label>
                <input type='file' id='fileInput'/>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className='writeFormGroup  ml-16'>
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit bg-[#ff1212] font-serif w-32 h-10 text-white font-bold rounded-3xl text-lg'>Publish</button>
        </form>
    </div>
  )
}

export default Write