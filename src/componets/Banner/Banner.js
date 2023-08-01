import React from 'react'
import './Banner.css'
import cor6 from "../../assets/cor6.png"


const Banner = () => {
  return (
    <div className='banner'>
        <div className='bannerTitle'>
            <span className='bannerTitleSm'>Let's stop</span>
            <span className='bannerTitleLg'>Corruption</span>
        </div>
        <img className='bannerImage' src={cor6} alt="Banner"/>
    </div>
  )
}

export default Banner