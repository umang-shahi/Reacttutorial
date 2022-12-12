
import React,{ useEffect} from 'react';




const Login = (props) => {
   
   
    useEffect(()=>{
      alert(`Count number is:${props.count}`);
       

    },[props.count]);
    
  return (
    <>
    <div>
      <h1>{props.count}</h1>
      <h1>{props.data}</h1>
      </div>
    </>
  );
};

export default Login;
