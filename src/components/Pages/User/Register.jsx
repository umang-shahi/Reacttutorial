import React  from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

const Register = (() => {

  const [myData,setMyData] = useState([])

  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>setMyData(res.data))
    .catch((error)=>console.log(error));
  },[])

  
 
   
 return (
    <>
      <div>
        {
          myData.map((curValue)=>{
            return(
              <div className="card" key ={curValue.id}>
              <h1>{curValue.title}</h1>
              <p>{curValue.body}</p>
              </div>
            )
          })
        }
       
      </div>

     
      
    
    </>
  )
})


export default Register;
