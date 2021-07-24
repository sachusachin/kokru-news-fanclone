import React from 'react';
// import {  useState,useEffect } from "react";
import './home.css';
import Navbar from "./Navbar";
import Newsfeed from "./Newsfeed";
import News from "./News";

function Home({removeAuth,userDetails,token,logout}) {


    return (
        <div className="home">
            <Navbar removeAuth={removeAuth} userDetails={userDetails} token={token} logout={logout}/>
            <div className='home__body'>
                <Newsfeed />
                <News />
            </div>
        </div>
    );
}

export default Home;


