import React from 'react';
import {NavLink} from 'react-router-dom';


const CommonPages = (props) => {
  return (
    <>
    <div>
      

    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                  <h1>
                   {props.title}
                    {/* {props.name} */}
                    <strong className="brand-name">HamroKhana</strong>
                  </h1>

                  <h5 className="my-3">
                   {props.description}
                  </h5>

                  <div className="mt-3">
                    <NavLink className="btn-get-started" to={props.visit}>

                      {props.btnHome}

                      {/* {props.btname} */}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                 
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CommonPages;
