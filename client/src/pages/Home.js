import React from "react";
import Banner from "../componets/Banner/Banner";
// import Single from "./Single/Single";
import Landing from "../componets/Landing/Landing";
// import Login from "./Login/Login";
// import Register from "./Register/Register";
import Settings from "./Settings/Settings";

function Home(){
    
    return(
        <div className="home">
           <Banner />
           <Landing/>
           
        </div>
    )
}
export default Home