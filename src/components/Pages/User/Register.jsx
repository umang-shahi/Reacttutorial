import React , {useState} from 'react';
import Spinner from "react-bootstrap/Spinner";
import {NavLink,useNavigate} from "react-router-dom";
import "./Register.css";
import {toast } from "react-toastify";
import axios from "axios";


const Register = (() => {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setAvatar(e.target.files[0]);
  };

  const validForm = () => {
    let newErrors = {};
    if (!fullName) {
      newErrors.fullName = "fullName is required";
    }
    if (!email) {
      newErrors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Invalid email";
    }
    if (!mobile) {
      newErrors.mobile = "mobile is required";
    } else if (mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digit";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 10 ){
      newErrors.password = "password must be 10 characters";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "confirmPassword is required";
    } else if (confirmPassword.length < 10 ){
      newErrors.confirmPassword = "confirmPassword must be 10 characters";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "password must be match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const registerData = new FormData();
    registerData.append("fullName", fullName);
    registerData.append("mobile", mobile);
    registerData.append("email", email);
    registerData.append("password", password);
    registerData.append("confirmPassword", confirmPassword);
    registerData.append("avatar", avatar);

    if (validForm()) {
      try {
        setIsLoading(true);
        const res = await axios.post(
          "http://localhost:5000/api/register",
          registerData,
          config
        );
        if (res.data.success === true) {
          toast.success(res.data.message);
          setInterval(() => {
            navigate("/login");
          }, 2000);
          setIsLoading(false);
        }
      } catch (error) {
        const msg = await error.response.data.message;
        toast.error(msg);
        setIsLoading(false);
        setErrors("");
      }
    } else {
      return toast.error("Invalid form!");
    }
  };

 
 return (
    <>
     <div className="myRegister">
        <form>
          <div className="register">
            <h1>𝓡𝓮𝓰𝓲𝓼𝓽𝓮𝓻</h1>
            <input
              type="text"
              name="fullName"
              value={fullName}
              placeholder="Your fullName"
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <span style={{ color: "red" }}>{errors.fullName}</span>
            )}

            <input
              type="text"
              name="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}

            <input
              type="number"
              name="mobile"
              value={mobile}
              placeholder="Your mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <span style={{ color: "red" }}>{errors.mobile}</span>
            )}

            <input
              type="password"
              name="password"
              autoComplete="on"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}

            <input
              type="password"
              name="confirmPassword"
              autoComplete="on"
              placeholder="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <span style={{ color: "red" }}>{errors.confirmPassword}</span>
            )}

            {avatar && (
              <div>
                <img
                  alt="my gallery"
                  width={"250px"}
                  src={URL.createObjectURL(avatar)}
                />
                <br />
              </div>
            )}

            <input type="file" name="avatar" onChange={handleChange} />
            <div className="button" onClick={handleSubmit}>
              {isLoading && <Spinner animation="border" size="sm" />}Register
            </div>
            <div>
              <span>
                Already have an account ?
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  Login
                </NavLink>
              </span>
            </div>
          </div>
        </form>
      </div>
      <br />
    
    </>
  )
})


export default Register;
