import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCwsV8d69xsv1q3iuKdCSdkCvWyFYk3RvY",
    authDomain: "burguerqueen-mj.firebaseapp.com",
    projectId: "burguerqueen-mj",
    storageBucket: "burguerqueen-mj.appspot.com",
    messagingSenderId: "675124035210",
    appId: "1:675124035210:web:0c2578ca3bceb475caf773",
    measurementId: "G-4SLD98WBGW"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth }