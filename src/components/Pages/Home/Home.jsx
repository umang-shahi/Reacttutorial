import React,{useEffect} from 'react';
import CommonPages from '../commonPages/CommonPages';
import "./Home.css";
import Deliver from "../../../image/Homepic.png";
// import { dealData } from '../../constraints/Data';
import HomeCard from "./HomeCard";
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [foodData,setFoodData]= useState([])

  useEffect(()=>{
    const cancelToken = axios.CancelToken.source()

    const foodFetchedData = async()=>{
      try {
        const res = await axios.get("http://localhost:5000/api/all/food",{
          cancelToken:cancelToken.token,
        })
        if(res.data.success === true){
          setFoodData(res.data.data)

        }
        
      } catch (error) {
        if(axios.isCancel(error)){
          console.log(`axios request is aborted!`)
        }else{
          console.error(error)
        }
        
      }
    }
    foodFetchedData()

    return()=>{
      cancelToken.cancel()
    }

  },[])
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
                
                {foodData && foodData.map((food)=> {
                  return(
                    <HomeCard key={food._id} food = {food}
                  
                    />

                  )
                })

                }

            </div>
          </div>
        </div>
       </div>
   
   </> 
  );
};


export default Home;
