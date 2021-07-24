import React, {useState} from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import './login.css';
import fb from './img/fb.png';
import google from './img/google.ico';
// import {auth, googleProvider} from "../firebase";

function Login({googleLogin,fbLogin}) {
    // const [user,setUser] = useState(null);
    //
    // const googleLogin = async ()=>{
    //    try{
    //        await auth.signInWithPopup(googleProvider);
    //        setUser(await auth.currentUser);
    //        addAuth();
    //
    //    }catch (er) {
    //        console.log(er);
    //    }
    // }
    // console.log(user);
    return (
        <Router>
            <div className="login">
              <div className='login__container'>
                  <div className='login__container__head'>
                      <p className='one'>KOKRU</p>
                      <p className='two'>NEWS</p>
                      <p className='three'>2.0</p>
                  </div>
                  <div className='login__options'>
                      <div className='login__option google'>
                          <div className='image'>
                              <img  src={google} alt='google' />
                          </div>
                          <div className='text'>
                              <button onClick={googleLogin}>Sign in with Google</button>
                          </div>
                      </div>
                      <div className='login__option facebook'>
                          <div className='image'>
                              <img  src={fb} alt='facebook' />
                          </div>
                          <div className='text'>
                              <button onClick={fbLogin}>Sign in with Facebook</button>
                          </div>
                      </div>
                  </div>
              </div>
                <div className='login__help'>
                    <Link to={'/help'}><i className="fal fa-question-circle"> </i><span>Help</span></Link>
                </div>
            </div>
        </Router>
    );
}
export default Login;