import React from 'react'
import Posts from '../Posts/Posts'
import Sidebar from '../Sidebar/Sidebar'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing'>
        <Posts />
        <Sidebar />
    </div>
  )
}

export default Landing