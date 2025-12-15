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

    // -----------------------------
    // VALIDATIONS
    // -----------------------------

    // Check empty fields
    if (!email || !firstname || !secondname || !mobile || !password) {
      toast.error("Please fill all the fields!");
      return;
    }

    // Email validation (simple)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      toast.error("Enter a valid email address!");
      return;
    }

    // Password validation
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
    <div>
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

      <div>
        {getDetails?.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.firstName}</h1>
              <h2>{item.secondName}</h2>
              <h2>{item.email}</h2>
              
              <div
                style={{ cursor: "pointer" }}
                onClick={() => deleteFunction(item._id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SignupFormComponent;
