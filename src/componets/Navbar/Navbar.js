import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {FaBars, FaSearch} from "react-icons/fa"
import profile from "../../assets/pro.jpg"
function Navbar(){
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)

    return(
        <div id="navbar">
            <div className="flex justify-between items-center pt-4 font-serif bg-black text-white h-20">
            <div className="ml-16">
                <h1 className="logo">IReporter</h1>
            </div>
            
            {/* menu */}
            <div className="ml-32">
                <ul className="hidden md:flex">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/write'><li>Write</li></Link>
                    <Link to='/aboutUs'> <li>About Us</li></Link>
                    <Link to='/logout'> <li>Logout</li></Link>
                </ul>
            </div>
            <div className="navRight flex justify-center items-center">
                <img className="navImage cursor-pointer " src={profile} alt="Profile"/>
                <FaSearch className="navSearch ml-8 cursor-pointer" />
            </div>

            {/* Humburger */}
            <div className="md:hidden z-10">
                <FaBars onClick={handleClick}/>
            </div>

            {/* mobile */}
            <div className="">
                <ul className= {!navbar ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#FF1212] flex flex-col justify-center items-center"}>
                    <li className="py-6 text-4xl">Home</li>
                    <li className="py-6 text-4xl">Write</li>
                    <li className="py-6 text-4xl">About Us</li>
                    <li className="py-6 text-4xl">Logout</li>
                </ul>
            </div>
            <div className="border-t-2 border-gray-100 mt-8"></div>

        </div>
        </div>
    )
}
export default Navbar