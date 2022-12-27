import React,{useState,useEffect} from 'react';
import Loader from "../../../loader/Loader"
import {FaPencilAlt, FaTrash} from "react-icons/fa";
import "./Profile.css";
import {toast} from "react-toastify";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [profileLoading, setProfileLoading] = useState(false);
  const { fullName, email, avatar, mobile } = profileData;

  const auth = localStorage.getItem("token");
  useEffect(() => {
    if (auth) {
      const cancelToken = axios.CancelToken.source();
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const fetchedData = async () => {
        try {
          setProfileLoading(true);
          const res = await axios.get("http://localhost:5000/api/me", config, {
            cancelToken: cancelToken.token,
          });
          setProfileData(res.data.data);
          setProfileLoading(false);
        } catch (error) {
          console.log(error);
          setProfileLoading(false);
          if (axios.isCancel(error)) {
            console.log("Axios cancel is aborted");
          } else {
            console.error(error);
          }
        }
      };

      fetchedData();
      return () => {
        cancelToken.cancel();
      };
    }
  }, [auth]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleDelete = async()=> {
    const config ={
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`

      }
    }

    try {
      
      const res =  await axios.delete("http://localhost:5000/api/profile/delete", config);
      if(res.data.success === true){
        toast.success( res.data.message)
        handleLogout()

      }
    } catch (error) {
      console.log(error)
      const msg =error.response.data.message;
      toast.error(msg)
    }
  }

  if(profileLoading){
    return <Loader />
  }
  return (
    <>
    <div className="myProfile">
        <div className="profileContainer">
          <img
            className="profile-image"
            src={`http://localhost:5000/gallery/${avatar}`}
            alt="avatar preview"
          />
          <div>
            <div className="profile-name">{fullName}</div>
            <div className="profile-description">{email}</div>
            <div className="profile-description">{mobile}</div>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/profile/update"
            >
              <FaPencilAlt style={{ color: "blue" }} />
            </Link>

            <Link
               onClick ={handleDelete}
              style={{ textDecoration: "none", color: "black" }}
            >
              <FaTrash style={{ color: "red" }} />
            </Link>
          </div>
        </div>
      </div>
    </>
    
      
    
  )
}

export default Profile
