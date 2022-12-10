import React from 'react';
import CommonPages from '../commonPages/CommonPages';
import AboutUs from "../../../image/About.png";


const About = () => {
  return (
    <>
   
    
   <CommonPages title="This is our about us page"
       description="Please visit our app for good services"
       btnHome="Contact Us"
       imgSrc={AboutUs}
       visit="/contact"/>
   
    </>
  );
};

export default About;
