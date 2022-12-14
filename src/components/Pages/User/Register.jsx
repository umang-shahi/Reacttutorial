import React,{useState} from 'react';
import {useEffect} from 'react';



const Register = () => {
   
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("use effect runs!");

    const interval =setInterval(()=>{
      setCount((prev) => prev + 5);
    },1000);

    return()=>{
      clearInterval(interval);
      console.log("cleaning the effect!");
    }

    
  },[])
   
    
  return (
    <>
      <div>
        <h1>Counts:{count}cleaning return function</h1>
      </div>
      <br/>
    
    </>
  )}


export default Register;
