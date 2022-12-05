import React from 'react';
import Cartoon from '../../../image/Cartoon.jpg';
import { NavLink } from 'react-router-dom';
import "./Home.css";



const Home = () => {
  return (
   <>
    
    <section id ="header" className="align-items-center">
      <div className= "container-fluid nav_bg">
         <div className="row">
            <div className="col-10-mx-aut0">
               <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center">
                     <h1>
                        We started our buisness width
                        <strong className= "brand-name">HamroKhana</strong>
                     </h1>
                     <h5 className="my-3">
                        We are the team
                     </h5>
                     <div className="mt-3">
                        <NavLink className ="bttn-get-started" to="/">
                           Get Started
                        </NavLink>

                     </div>

                   <div className="col-lg-6 order-1 order-lg-2 header-img">
                     <img 
                        src={Cartoon}
                        className = "img-fluid animated "
                        alt = "home img"
                        />

                   </div>

                  </div>

               </div>

            </div>
         </div>

      </div>
    </section>
   </> 
  );
};


export default Home;
