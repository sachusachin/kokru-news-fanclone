import firebase from "firebase/app";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFBYXdXoxbbrZYs6-zz_8UDggLUfu00NU",
    authDomain: "kokru-news.firebaseapp.com",
    projectId: "kokru-news",
    storageBucket: "kokru-news.appspot.com",
    messagingSenderId: "122426426212",
    appId: "1:122426426212:web:efc47ba7102c05ecbef071",
    measurementId: "G-YS6H5HBKRB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

export {auth,googleProvider,fbProvider}
export default firebase;