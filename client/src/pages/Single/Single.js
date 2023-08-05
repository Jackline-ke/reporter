import React from 'react'
import Sidebar from '../../componets/Sidebar/Sidebar'
import SinglePost from '../../componets/SinglePost/SinglePost'
import './Single.css'
 
const Single = () => {
  return (
    <div className='single'>
      <SinglePost />
      <Sidebar />
    </div>
  )
} 

export default Single