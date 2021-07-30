import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Route,Switch } from "react-router";
import './App.css';
import Home from "./components/Home.";
import Login from "./components/Login";
import {auth, fbProvider, googleProvider} from "./firebase";
import firebase from "firebase";
import Movies from "./components/Movies";

function App() {
    const [token,setToken] = useState(null);
    const [user,setUser] = useState(false);
    const[localUser,setLocalUser] = useState(false);

    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(user){
            setUser(JSON.parse(user));
            console.log("user",user);
        }

    },[])

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user));
    })


    const logout = async ()=>{
        try {
            await firebase.auth().signOut();
            setUser(false);
            console.log('e');
            localStorage.clear();
            // signed out
        } catch (e){
            console.log(e);
        }
    }
    const googleLogin = async ()=>{
        try{
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() => { return auth.signInWithPopup(googleProvider)
                    .then(()=>{setLocalUser(true);setUser(auth.currentUser)})})

                .catch((error)=>console.log(error));

            // setUser(firebase.auth().currentUser);

        }catch (er) {
            console.log(er);
        }
    }
    const fbLogin = async ()=> {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return (auth.signInWithPopup(fbProvider).then((result) => {
                        /** @type {firebase.auth.OAuthCredential} */
                        var credential = result.credential;
                        setLocalUser(true);
                        // The signed-in user info.
                        var user = result.user;

                        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                        const accessToken = credential.accessToken;

                        // ...
                        // setUser(firebase.auth().currentUser);
                        setUser(user);

                        setToken(accessToken);
                        localStorage.setItem('token',accessToken);


                    })
                        .catch((error) => {

                            console.log(error.email);

                        })
                )
            }).catch((error)=>console.log(error))
    }

    if(user === false){
        return <div className="App"> <Login googleLogin={googleLogin} fbLogin={fbLogin}/> </div>
    }else{
        return (
           <Router>
               <div className="App">
                   <Home userDetails={user} token={token} logout={logout}/>
               </div>
           </Router>
        )
    }

}
export default App;