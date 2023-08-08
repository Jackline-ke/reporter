import React from 'react'
import Post from '../Post/Post'
import './Posts.css'

const Posts = ({ posts }) => {
  return (
    <div className='posts mt-8 ml-16'>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  )
}

export default Posts