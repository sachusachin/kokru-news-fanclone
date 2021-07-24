import React from 'react';
// import dp from './img/dp1.ico'
import './navbar.css';
// import Logout from "./Logout";

function Navbar({userDetails,token,logout}) {
    const ltoken = window.localStorage.getItem("token");
    return (
        <div className="navbar">
           <div className='navbar__logo'>
               <img alt='profile'
                    src={
                        userDetails?.photoURL+"?fields=height,width&access_token="+(token || ltoken)}/>
           </div>
            <div className='navbar__head'>
                 <p>{userDetails?.displayName}</p>
            </div>
            <button onClick={logout}>logout</button>

        </div>
    );
}
export default Navbar;
