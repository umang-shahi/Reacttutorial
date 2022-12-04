import React, {useState} from 'react';


const Home = () => {
  return (
     <>
     <div className="myHome">
        <h1>MY HOME</h1>
        <RedHOC cmp = {Counter}/>
        <GreenHOC cmp = {Counter}/>
        <PurpleHOC cmp = {Counter}/>
        


        

     </div>
     
     </>
  )
}

const RedHOC = (props) => {
   return(
      <>
      <div>
         <h1 style= {{ backgroundColor:"red", width:"100px"}}>
           <props.cmp/>
         </h1>
      </div>
      </>
   )
}


const GreenHOC = (props) => {
   return(
      <>
      <div>
         <h1 style= {{ backgroundColor:"green", width:"100px"}}>
           <props.cmp/>
         </h1>
      </div>
      </>
   )
}


const PurpleHOC = (props) => {
   return(
      <>
      <div>
         <h1 style= {{ backgroundColor:"Purple", width:"100px"}}>
           <props.cmp/>
         </h1>
      </div>
      </>
   )
}
 
const Counter =() => {
   const [count,setCount] = useState(0);
   return(
      <>
      <h1> {count}</h1>
      <button onClick={()=>setCount(count +1)}>Click me</button>
      </>
   )
}

export default Home;
