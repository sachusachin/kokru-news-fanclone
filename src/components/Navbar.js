import React from 'react';
import user from './img/user.png'
import { Offline, Online } from "react-detect-offline";
import './navbar.css';
// import {Route} from "react-router";
import {BrowserRouter as Router} from 'react-router-dom';
import Movies from "./Movies";
// import Logout from "./Logout";

function Navbar({userDetails,token,logout}) {
    const ltoken = window.localStorage.getItem("token");
    return (
        <Router>
            <div className="navbar">
                <div className='navbar__center'>
                    <div className='navbar__logo'>
                        <Online>
                            <img alt='profile'
                                 src={userDetails?.photoURL+"?fields=height,width&access_token="+(token || ltoken)}/>
                        </Online>
                        <Offline>
                            <img src={user} alt='user'/>
                        </Offline>
                    </div>
                    <div className='navbar__head'>
                        <p>{userDetails?.displayName}</p>
                    </div>
                    <div className='navbar__logout'>
                        <button onClick={logout}>logout</button>
                    </div>
                </div>
            </div>
        </Router>
    );
}
export default Navbar;
