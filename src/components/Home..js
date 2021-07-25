import React from 'react';
// import {  useState,useEffect } from "react";
import './home.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Route,Switch } from "react-router";
import News from "./News";
import Newsfeed from "./Newsfeed";
// import Newsfeed from "./Newsfeed";
// import News from "./News";

function Home({removeAuth,userDetails,token,logout}) {


    return (
        <Router>
            <div className="home">
                <Navbar removeAuth={removeAuth} userDetails={userDetails} token={token} logout={logout}/>
                <div className='home__body'>
                    <Link to="/api">About</Link>
                </div>
                <Route exact path="/api" component={Newsfeed} />
            </div>
        </Router>
    );
}

export default Home;


