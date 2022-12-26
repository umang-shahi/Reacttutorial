import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from "react-bootstrap/Spinner";
import {toast} from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!email) {
      newErrors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Invalid email";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsLoading(true);
        const res = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });
        if (res.data.success === true) {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          navigate("/profile");
          setIsLoading(false);
        }
      } catch (error) {
        const msg = await error.response.data.message;
        toast.error(msg);
        setErrors("");
        setIsLoading(false);
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
            <h1>𝐿𝑜𝑔𝒾𝓃</h1>

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
              type="password"
              name="password"
              value={password}
              autoComplete="on"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password}</span>
            )}

            <div className="button" onClick={handleSubmit}>
              {isLoading && <Spinner animation="border" sm="size" />}
              Login
            </div>

            <div>
              <span>
                Don't have an account ?
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  Register
                </NavLink>
              </span>
            </div>
          </div>
        </form>
      </div>
      <br />
   </>
  )
}

export default Login;
