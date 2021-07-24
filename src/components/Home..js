import React from 'react';
// import {  useState,useEffect } from "react";
import './home.css';
import Navbar from "./Navbar";
import Newsfeed from "./Newsfeed";

function Home({removeAuth,userDetails,token,logout}) {

    return (
        <div className="home">
            <Navbar removeAuth={removeAuth} userDetails={userDetails} token={token} logout={logout}/>
            <Newsfeed />
        </div>
    );
}

export default Home;


