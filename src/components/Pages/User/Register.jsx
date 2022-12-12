import React,{useState} from 'react'
import {useEffect} from 'react';
import Login from './Login';


const Register = () => {
    const [count,setCount] = useState(0);
    const [data,setData] = useState(10);

    useEffect(()=>{
      alert(`count number is:${count}`);
    },[count,data]);

    useEffect(()=>{
      alert(`count number is:${count}`);
    },[count]);
    
  return (
    <>
    <div>
    <Login count={count} data={data}/>
     <button onClick={()=>setCount(count+1)}> Update count</button>
     <button onClick={()=>setData(data+1)}> Update data</button>
    </div>
    
    </>
  )}


export default Register;
