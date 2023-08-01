import React from 'react'
import './SinglePost.css'
import {FaEdit, FaTrash} from "react-icons/fa"
import cor1 from '../../assets/cor1.jpeg'


const SinglePost = () => {
  return (
    <div className='singlepost'>
        <div className='singlePostWrapper'>
            <img src={cor1} alt='Single Post' className='singlePostImg w-full h-72 rounded-lg'/>
            <div className='singlePostHeader mt-4'>
                <h1 className='singlePostTitle font-serif text-4xl font-semibold'>Corruption</h1>
                <div className='singlePostEdit flex float-right'>
                    <FaEdit className='text-[#189614] font-thin cursor-pointer'/>
                    <FaTrash className='ml-4 text-[#ff3434] cursor-pointer'/>
                </div>
            </div>
            <div className='singlePostInfo mt-4 flex mb-2'>
                <span className='singlePostAuthor font-serif text-[#ff1212]'>Autor: <b>Jackline Adhiambo </b></span>
                <span className='singlePostDate ml-8 font-thin text-sm'> 1 hour ago</span>
            </div>
            <hr className='w-96'/>
            <p className='singlePostDesc mt-2 font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum d
                olor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default SinglePost