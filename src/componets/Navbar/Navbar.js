import React, {useState} from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
function Navbar(){
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)

    return(
        <div id="navbar">
            <div className="flex justify-between items-center pt-4 font-serif">
            <div className="ml-16">
                <h1 className="logo">IReporter</h1>
            </div>
            
            {/* menu */}
            <div className="ml-32">
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>Posts</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div>
                <button className="bg-white text-black w-32 p-2 rounded-full hover:bg-black hover:text-white drop-shadow-2xl">Sign up</button>
            </div>

            {/* Humburger */}
            <div className="md:hidden z-10">
                <FaBars onClick={handleClick}/>
            </div>

            {/* mobile */}
            <div className="">
                <ul className= {!navbar ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#FF1212] flex flex-col justify-center items-center"}>
                    <li className="py-6 text-4xl">Home</li>
                    <li className="py-6 text-4xl">Posts</li>
                    <li className="py-6 text-4xl">Blogs</li>
                </ul>
            </div>
            <div className="border-t-2 border-gray-100 mt-8"></div>

        </div>
        <div className="w-full h-1 bg-[#ff1212] mt-6"></div>
        </div>
    )
}
export default Navbar