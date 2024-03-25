// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL6Xeec9hYU1yhvXSvrM4pbp4i2zQNfXg",
  authDomain: "cloud-b7e7a.firebaseapp.com",
  projectId: "cloud-b7e7a",
  storageBucket: "cloud-b7e7a.appspot.com",
  messagingSenderId: "217197045251",
  appId: "1:217197045251:web:228a842fc6fcbd43fc9036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};