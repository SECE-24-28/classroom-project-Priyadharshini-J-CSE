import React, { useEffect, useState } from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const [getDetails, setGetDetails] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("CHECK ENTRY 2381");

      // ----------- POST: USER SIGNUP -----------
      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          firstName: e.target.firstname.value,
          email: e.target.email.value,
        }
      );

      if (pushDetails.status === 200) {
        console.log("Signup Successful");
      } else {
        console.log("Signup failed");
      }

      // ----------- PUT: UPDATE EMAIL -----------
      const updateEmail = await axios.put(
        "http://localhost:21000/api/v1/User/modifyMail",
        {
          oldEmail: e.target.oldemail.value,
          newEmail: e.target.newemail.value,
        }
      );

      if (updateEmail.status === 200) {
        console.log("Email updated successfully");
      } else {
        console.log("Email update failed");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  // ----------- GET USERS LIST -----------
  const getDetailsFunction = async () => {
    try {
      const getDetails = await axios.get(
        "http://localhost:21000/api/v1/User/getUsers"
      );
      setGetDetails(getDetails.data.data);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    getDetailsFunction();
  }, []);

  console.log("The main data:", getDetails);

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* SIGNUP */}
        <h2>Signup</h2>

        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />

        {/* MODIFY EMAIL */}
        <h2>Modify Email</h2>

        <label htmlFor="oldemail">Old Email</label>
        <input type="text" id="oldemail" name="oldemail" />

        <label htmlFor="newemail">New Email</label>
        <input type="text" id="newemail" name="newemail" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupFormComponent;
