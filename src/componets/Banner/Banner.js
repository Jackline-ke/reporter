import React from 'react'
import './Banner.css'
import cor1 from "../../assets/cor2.jpg"


const Banner = () => {
  return (
    <div className='banner'>
        <div className='bannerTitle'>
            <span className='bannerTitleSm'>Let's stop</span>
            <span className='bannerTitleLg'>Corruption</span>
        </div>
        <img className='bannerImage' src={cor1} alt="Banner"/>
    </div>
  )
}

export default Banner