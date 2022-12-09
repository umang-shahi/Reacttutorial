import React from 'react';
import CommonPages from '../commonPages/CommonPages';
import "./Home.css";
import Deliver from "../../../image/Cartoon.jpg";
import { dealData } from '../../constraints/Data';
import HomeCard from "./HomeCard";





const Home = () => {
  return (
   <>
       <CommonPages title="We started Our Startup With"
       description="We trust in our hard work"
       btnHome="Get Services"
       imgSrc={Deliver}
       visit="/services"/>


       <div className="my-0">
        <h2 className="text-center">Best Deal of the day</h2>
       </div>
       <div className="container-fluid mb-5">
        <div className="row gy-4">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              
              {dealData.map((curValue) => {
                return(
                  <HomeCard
                  key ={curValue.id}
                  title={curValue.title}
                  url={curValue.url}
                  />
                )
              })}


            </div>
          </div>
        </div>
       </div>
   
   </> 
  );
};


export default Home;
