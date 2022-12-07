import React from 'react';
import CommonPages from '../commonPages/CommonPages';
import AboutUs from "../../../image/img_forest.jpg";


const About = () => {
  return (
    <>
   
    
   <CommonPages title="This is our about us page"
       description="Please visit our app for good services"
       btnHome="Contact us"
       imgSrc={AboutUs}
       visit="/contact"/>
   
    </>
  );
};

export default About;
