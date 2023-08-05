import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {FaBars, FaSearch} from "react-icons/fa"
import profile from "../../assets/pro.jpg"
function Navbar(){
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)
    const user = false;

    return(
        <div id="navbar">
            <div className="flex justify-between items-center pt-4 font-serif bg-gray-500 text-black h-20">
            <div className="ml-16">
                <h1 className="logo">IReporter</h1>
            </div>
            
            {/* menu */}
            <div className="ml-32">
                <ul className="hidden md:flex">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/write'>Write</Link></li>
                    <Link to='/aboutUs'> <li>About Us</li></Link>
                    <li>{user && "Logout"}</li>
                </ul>
            </div>
            <div className="navRight flex justify-center items-center">
               {
                user ? ( 
                <img className="navImage cursor-pointer " src={profile} alt="Profile"/>
                ) :(
                    <>
                        <Link to='/login' className="font-bold">Login</Link>
                        <Link to='/register' className="ml-8 font-bold">Register</Link>
                    </>
                )
               }
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