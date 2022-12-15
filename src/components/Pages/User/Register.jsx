import React ,{useState} from 'react';

const Register = (() => {

  let purple="purple";

    const [bg,setBg] = useState(purple);
    const [name,setName] = useState("Click me");

  const handleClick =()=>{
    let newBg ="gray";
    setBg(newBg);
    setName("Ops!");

  };

  const handleDouble =() =>{
    setBg(purple);
    setName("oh really");

  } 

  const handleChange =(e)=>{
    console.log(e.target.value);
  }
   
 return (
    <>
      <div style={{ backgroundColor: bg }}>
       <button onClick={handleClick}  onDoubleClick={handleDouble}>{name}</button>

       
      </div>

      <br/>
      <input type="text" onChange={handleChange}/>
      <br/>
      
    
    </>
  )
})


export default Register;
