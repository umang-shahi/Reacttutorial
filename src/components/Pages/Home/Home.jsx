import React from 'react';
import CommonPages from '../commonPages/CommonPages';
import "./Home.css";
import Deliver from "../../../image/Cartoon.jpg";





const Home = () => {
  return (
   <>
       <CommonPages title="We started Our Startup With"
       description="We trust in our hard work"
       btnHome="Get Services"
       imgSrc={Deliver}
       visit="/services"/>
   
   </> 
  );
};


export default Home;
