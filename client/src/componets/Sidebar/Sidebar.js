import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import cor3 from '../../assets/cor3.jpeg'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() =>{
        const getCats = async () =>{
            const res = await axios.get("http://localhost:5000/api/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
  return (
    <div className='sidebar h-fit'>
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
                {cats.map((c) =>{
                    <Link to={`/?cat=${c.name}`}><li className='sideListItem font-light'>{c.name}</li></Link>
                   
                })}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar