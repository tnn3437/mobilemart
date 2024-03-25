import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignIn = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = (e) => {
       e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
           console.log(userCredential);
           window.location.href= "mobilemart/src/home.js";
        }).catch((error) => {
           console.error(error);
        })
    }
    return (
        <div className="sign-in-container"> 
        <h1>Mobile Mart</h1>
        {/* Mobile Mart */}
        {/* Login button */}
        <form onSubmit={signIn}>
            <input 
                type="email" 
                placeholder='Enter e-mail' 
                value={email}
                onChange = {(e) =>setEmail(e.target.value)}>
            </input>
            <input 
                type="password" 
                placeholder='Enter password' 
                value={password}
                onChange = {(e) =>setPassword(e.target.value)}>
            </input>
            <button type = "submit">LOGIN</button>
        </form>
        

    </div>
  )
}

export default SignIn