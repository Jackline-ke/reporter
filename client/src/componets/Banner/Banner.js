import React from 'react'
import './Banner.css'
import cor from "../../assets/cor.png"



const Banner = () => {
  return (
    <div className='row-container font-serif mb-20 mt-10'>
            <div className='row'>
                <div className='col-2'>
                <h1>CORRUPTION AND<br />UNETHICAL CONDUCT</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                   in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                
            </div>
            <div className='col-2'>
                <img src={cor} alt='banner' width={600} height={950}/>
            </div>
            
        </div>

        </div>
  )
}

export default Banner