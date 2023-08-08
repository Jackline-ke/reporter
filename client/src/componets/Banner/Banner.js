import React from 'react'
import './Banner.css'
import {banner} from "../../assets/banner.png"



const Banner = () => {
  return (
    <div className='row-container font-serif'>
            <div className='row'>
                <div className='col-2'>
                <h1>Lorem ipsum dolor sit amet <br />Consectetur adipiscing elit</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                   in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                
            </div>
            <div className='col-2'>
                <img src={banner} alt='image' width={400} height={440}/>
            </div>
            
        </div>

        </div>
  )
}

export default Banner