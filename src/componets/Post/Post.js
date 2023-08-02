import React from 'react'
// import { Link } from 'react-scroll'
import cor1 from '../../assets/cor1.jpeg'
import './Post.css'

const Post = () => {
  return (
    <div className='post'>
      <div className='flex justify-center items-center'>
        <img  src={cor1} alt='post' className='rounded-md cursor-pointer' /> 
      </div>
      <div className='postInfo flex flex-col justify-center items-center'>
        <div className='postCats mt-4'>
          <span className='postCat font-serif text-[#ff1212]'>Fraud</span>
        </div>
        <span className='postTitle font-serif text-xl font-semibold cursor-pointer'>Corruption</span>
        <hr className='w-48'/>
        <span className='postDate font-thin text-sm'>1 hour ago</span>
      </div>
      <p className='postDesc p-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
      officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </div>
  )
}

export default Post