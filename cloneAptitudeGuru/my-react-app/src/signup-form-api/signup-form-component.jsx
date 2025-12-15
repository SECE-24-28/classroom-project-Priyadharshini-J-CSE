import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";

const SignupFormComponent = () => {
  const [getDetails, setGetDetails] = useState([]);
  const [change, setChange] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const firstname = e.target.firstname.value.trim();
    const secondname = e.target.secondname.value.trim();
    const mobile = e.target.mobile.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !firstname || !secondname || !mobile || !password) {
      toast.error("Please fill all the fields!");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      toast.error("Enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    try {
      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userRegister",
        {
          firstName: firstname,
          email: email,
          secondName: secondname,
          mobile: mobile,
          password: password,
        }
      );

      if (pushDetails.data.success === true) {
        toast.success("User Registered Successfully!");
        setChange(!change);
        e.target.reset();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.response?.data ||
        "Backend Error Occurred!";
      toast.error(msg);
    }
  };

  const getDetailsFunction = async () => {
    try {
      const getDetails = await axios.get(
        "http://localhost:21000/api/v1/User/getUsers"
      );
      setGetDetails(getDetails.data.getUsers);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const deleteFunction = async (id) => {
    try {
      const getDetails = await axios.delete(
        `http://localhost:21000/api/v1/User/deleteUsers/${id}`
      );

      if (getDetails.data.success === true) {
        toast.success("User Deleted!");
        setChange(!change);
      } else {
        toast.error("Delete Failed!");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    getDetailsFunction();
  }, [change]);

  return (
    <>
      {/* ---------- CSS INSIDE JSX FILE ---------- */}
      <style>
        {`
          .container {
            width: 80%;
            margin: auto;
            margin-top: 40px;
            font-family: Arial, sans-serif;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: #f8f8f8;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
          }

          label {
            font-weight: bold;
            margin-bottom: 3px;
          }

          input {
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 15px;
          }

          input:focus {
            outline: none;
            border-color: #0066ff;
          }

          button {
            margin-top: 10px;
            padding: 12px;
            background: #0066ff;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
          }

          button:hover {
            background: #0047c2;
          }

          .user-card {
            margin-top: 20px;
            background: #ffffff;
            padding: 18px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 0 5px rgba(0,0,0,0.1);
          }

          .user-info h1 {
            font-size: 20px;
            margin: 0;
          }

          .user-info h2 {
            font-size: 16px;
            margin: 3px 0;
            color: #444;
          }

          .delete-icon {
            font-size: 22px;
            color: red;
            cursor: pointer;
            transition: 0.2s;
          }

          .delete-icon:hover {
            transform: scale(1.2);
          }
        `}
      </style>

      {/* ---------- UI ---------- */}
      <div className="container">
        <form onSubmit={onSubmit}>
          <label>Email</label>
          <input type="text" id="email" name="email" />

          <label>First name</label>
          <input type="text" id="firstname" name="firstname" />

          <label>Second name</label>
          <input type="text" id="secondname" name="secondname" />

          <label>Mobile number</label>
          <input type="number" id="mobile" name="mobile" />

          <label>Password</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Submit</button>
        </form>

        {/* USER LIST */}
        <div>
          {getDetails?.map((item, index) => {
            return (
              <div key={index} className="user-card">
                <div className="user-info">
                  <h1>{item.firstName}</h1>
                  <h2>{item.secondName}</h2>
                  <h2>{item.email}</h2>
                </div>

                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete-icon"
                  onClick={() => deleteFunction(item._id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SignupFormComponent;
