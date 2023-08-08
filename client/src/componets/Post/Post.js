import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

const Post = ({post}) => {
  const PF = "http://localhost:5000/images/"
  return (
    <div className='post'>
      <div className='flex justify-center items-center'>
        {post.photo && 
        <img  src={PF + post.photo} alt='post' className='rounded-md cursor-pointer' /> }
      </div>
      <div className='postInfo flex flex-col justify-center items-center'>
        <div className='postCats mt-4'>
          {post.categories.map((c) =>(
            <span className='postCat font-serif text-[#a7a4a4]'>{c.name}</span>
          ))}
          
        </div>
        
        <Link to={`/post/${post._id}`}> <span className='postTitle font-serif text-xl font-semibold cursor-pointer'>{post.title}</span></Link>
       
        <hr className='w-48 mt-4'/>
        <span className='postDate font-thin text-sm mt-2'>{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='postDesc p-4'>{post.desc}</p>

    </div>
  )
}

export default Post