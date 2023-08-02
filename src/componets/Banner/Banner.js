import React from 'react'
import './Banner.css'
// import cor6 from "../../assets/cor6.png"


const Banner = () => {
  return (
    <div className='banner'>
        <div className='relative bg-gradient-to-tr from-purple-600 to-green-600 w-full h-screen'>
          <img src='https://i.pinimg.com/564x/c7/f9/33/c7f933ad7d6f7c0d7b1e5ec28d7a7255.jpg' className='absolute mix-blend-overlay h-full w-full object-cover'/>
          
        </div>
    </div>
  )
}

export default Banner