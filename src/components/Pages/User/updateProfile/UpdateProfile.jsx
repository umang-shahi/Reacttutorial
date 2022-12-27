import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const UpdateProfile = () => {


    const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(false);

  const auth = localStorage.getItem("token");

  const handleChange = (e) => {
    e.preventDefault();
    setAvatar(e.target.files[0]);
  };
  useEffect(() => {
    if (auth) {
      const cancelToken = axios.CancelToken.source();
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const updateFetched = async () => {
        try {
          setLazyLoading(true);
          const res = await axios.get("http://localhost:5000/api/me", config, {
            cancelToken: cancelToken.token,
          });
          setFullName(res.data.data.fullName);
          setEmail(res.data.data.email);
          setAvatar(res.data.data.avatar);
          setMobile(res.data.data.mobile);

          setLazyLoading(false);
        } catch (error) {
          setLazyLoading(false);
          if (axios.isCancel(error)) {
            console.log("axios request is aborted");
          } else {
            console.error(error);
          }
        }
      };

      updateFetched();
      return () => {
        cancelToken.cancel();
      };
    }
  }, [auth]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:  `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const updateData = new FormData();
    updateData.append("fullName", fullName);
    updateData.append("mobile", mobile);
    updateData.append("email", email);
    updateData.append("avatar", avatar);

    const logout = () => {
      localStorage.clear();
      navigate("/login");
    };

    try {
      setUpdateLoading(true);
      const res = await axios.put(
        "http://localhost:5000/api/update/profile",
        updateData,
        config
      );
      if (res.data.success === true) {
        toast.success(res.data.message);
        setUpdateLoading(false);
        logout();
        // setInterval(() => {
        //   navigate("/profile");
        // }, 2000);
      }
    } catch (error) {
      setUpdateLoading(false);
      const msg = await error.response.data.message;
      toast.error(msg);
    }
  };

  if (lazyLoading) {
    return <h1>Loading......</h1>;
  }

   

  return (
    <>
    <div className="myRegister">
        <form>
          <div className="register">
            <h3>Update profile</h3>
            <input
              type="text"
              name="fullName"
              value={fullName}
              placeholder="Your fullName"
              onChange={(e) => setFullName(e.target.value)}
            />

            <input
              type="text"
              name="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="number"
              name="mobile"
              value={mobile}
              placeholder="Your mobile"
              onChange={(e) => setMobile(e.target.value)}
            />

            {avatar && (
              <div>
                <img
                  alt="my profile"
                  width={"250px"}
                  src={`http://localhost:5000/gallery/${avatar}`}
                />
                <br />
              </div>
            )}

            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
            />

            {/* <div id="updateProfileImage">
              <img src={avatar} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
              />
            </div> */}
            <div className="button" onClick={handleUpdate}>
              {updateLoading && <Spinner animation="boreder" size="sm" />}Save
              Changes
            </div>
          </div>
        </form>
      </div>
      <br />
    </>
  )
}

export default UpdateProfile
