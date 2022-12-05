
import React,{useState, useEffect} from 'react';

import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email,setEmail]=useState("")
    const navigate = useNavigate()
    const handleLogin = () => {
       
        localStorage.setItem("login",true)
        navigate("/")
    }

    useEffect(()=>{
        let login = localStorage.getItem("login")
        if(login){
            navigate("/")
        }

    },[navigate])
    
  return (
    <>
    <div>
      <h1>My login page</h1>
      <input type ="text" placeholder="Enter your Email" value={email} onChange={(e) =>(setEmail(e.target.value)).target.value}/><br/>
      <input type ="number" placeholder="Enter your Password"/>
      <button onClick={handleLogin}>Login</button>
    </div>
    <h1> Value:{email}</h1>
    </>
  );
};

export default Login;
