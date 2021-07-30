import React from 'react';
// import {  useState,useEffect } from "react";
import './newsfeed.css';
import Movies from "./Movies";

function Newsfeed({removeAuth,userDetails,token,logout}) {

    return (
        <div className="newsfeed">
            <Movies />
        </div>
    );
}

export default Newsfeed;


