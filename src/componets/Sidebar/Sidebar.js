import React from 'react'
import cor3 from '../../assets/cor3.jpeg'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>IReporter</span>
            <img src={cor3} alt="IReporter" />
            <p className='p-4 font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList font-serif grid grid-cols-2 gap-2'>
                <li className='sideListItem font-light'>Road</li>
                <li className='sideListItem font-light'>NYS</li>
                <li className='sideListItem font-light'>Fraud</li>
                <li className='sideListItem font-light'>Road</li>
                <li className='sideListItem font-light'>NYS</li>
                <li className='sideListItem font-light'>Fraud</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar