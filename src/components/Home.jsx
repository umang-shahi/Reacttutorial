import React from 'react';
import umang from "../image/umang.jpg" ;
//import "./home.css";
   import About from "./About"


const Home = () => {
       

     const wakandasCss = {
      textAlign:"center",
      textTransform:"capitalize"
     }
  
  return (
  


    <>
     <h1  className="heading">Wakanda forever</h1>
     <About/>

     <p style={wakandasCss}> must watch</p>
    <diV className ="img_div">


      <img src={umang} alt= "umang" />
      <img src={umang} alt= "umang" />
      <img src={umang} alt= "umang" />

    </diV>

   
    </>


      
  )
}

export default Home;



