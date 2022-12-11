import React,{useState} from 'react'

const Register = () => {
    const [data, setData] = useState(0);

    

    const handleSubmit =()=>{
        
      setData(data + 1);
    };
        
    
  return (
    <>
    <div>
      <h1>{data}</h1>
      <button onClick={handleSubmit}>Click Me</button>
    </div>
    <br/>
    </>
  )
}

export default Register;
