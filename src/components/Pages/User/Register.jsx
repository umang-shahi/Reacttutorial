import React ,{useState} from 'react';
import Login from "./Login";
import {useCallback} from "react";




const Register = (() => {
   
  const [count,setCount] = useState(0);
  const [todos,setTodo] =useState([]);
     


  const handleIncrement = () =>{
    setCount(count+1);
  }
  
   const AddTodo =useCallback(() => {
    setTodo((prev)=>[...prev,`new Entry`]);

   },[todos]);
    
  
   
    
  return (
    <>
      <div>
        <Login todos={todos} AddTodo={AddTodo} />
        <hr/>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
      </div>
      <br/>
    
    </>
  )
})


export default Register;
