import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

const Admin = () => {
  const navigate = useNavigate();
  const [foodTitle, setFoodTitle] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    e.preventDefault();
    setFoodImage(e.target.files[0]);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!foodTitle) {
      newErrors.foodTitle = "foodTitle is required";
    } else if (!foodDescription) {
      newErrors.foodDescription = "foodDescription is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const addForm = new FormData();
    addForm.append("foodTitle", foodTitle);
    addForm.append("foodDescription", foodDescription);
    addForm.append("foodImage", foodImage);

    if (validateForm()) {
      try {
        setIsLoading(true);
        const res = await axios.post(
          "http://localhost:5000/api/add/food",
          addForm,
          config
        );
        console.log(res);
        if (res.data.success === true) {
          toast.success(res.data.message);
          navigate("/");
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setErrors("");
        const msg = error.response.data.message;
        toast.error(msg);
      }
    } else {
      toast.error("Invalid form!");
    }
  };

  return (
    <>
      <div className="myRegister">
        <form>
          <div className="register">
            <h1>Add food Details</h1>
            <input
              type="text"
              name="foodTitle"
              placeholder="Your foodTitle"
              value={foodTitle}
              onChange={(e) => setFoodTitle(e.target.value)}
            />
            {errors.foodTitle && (
              <span style={{ color: "red" }}>{errors.foodTitle}</span>
            )}

            <input
              type="text"
              name="foodDescription"
              value={foodDescription}
              placeholder="Your foodDescription"
              onChange={(e) => setFoodDescription(e.target.value)}
            />
            {errors.foodDescription && (
              <span style={{ color: "red" }}>{errors.foodDescription}</span>
            )}
            {foodImage && (
              <div>
                <img
                  alt="food details"
                  width={"250px"}
                  src={URL.createObjectURL(foodImage)}
                />
                <br />
              </div>
            )}
            <input type="file" name="avatar" onChange={handleFileChange} />

            <div className="button" onClick={handleAdd}>
              {isLoading && <Spinner animation="border" size="sm" />}Add food
            </div>
          </div>
        </form>
      </div>
      <br />
    </>
  );
};

export default Admin;