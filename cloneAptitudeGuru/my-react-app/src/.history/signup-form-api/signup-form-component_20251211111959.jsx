import React, { useEffect, useState } from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const [getDetails, setGetDetails] = useState([]);

  // ---------------- POST (Signup User) ----------------
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          firstName: e.target.firstname.value,
          email: e.target.email.value,
        }
      );

      if (pushDetails.status === 200) {
        console.log("User Signup Successful");
        getDetailsFunction(); // refresh list
      }
    } catch (error) {
      console.log("Signup Error:", error);
    }
  };

  // ---------------- PUT (Update Email) ----------------
  const handleEmailUpdate = async (e) => {
    e.preventDefault();

    try {
      const updateEmail = await axios.put(
        "http://localhost:21000/api/v1/User/modifyMail",
        {
          oldEmail: e.target.oldemail.value,
          newEmail: e.target.newemail.value,
        }
      );

      if (updateEmail.status === 200) {
        console.log("Email Updated Successfully");
        getDetailsFunction(); // refresh list
      }
    } catch (error) {
      console.log("PUT Error:", error);
    }
  };

  // ---------------- GET (Get All Users) ----------------
  const getDetailsFunction = async () => {
    try {
      const response = await axios.get(
        "http://localhost:21000/api/v1/User/getUsers"
      );
      setGetDetails(response.data.data);
    } catch (error) {
      console.log("GET Error:", error);
    }
  };

  useEffect(() => {
    getDetailsFunction();
  }, []);

  return (
    <div>
      {/* ---------------- SIGNUP FORM ---------------- */}
      <h2>Signup User</h2>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input type="text" name="email" />

        <label>First Name</label>
        <input type="text" name="firstname" />

        <button type="submit">Signup</button>
      </form>

      <br />

      {/* ---------------- UPDATE EMAIL FORM ---------------- */}
      <h2>Update Email</h2>
      <form onSubmit={handleEmailUpdate}>
        <label>Old Email</label>
        <input type="text" name="oldemail" />

        <label>New Email</label>
        <input type="text" name="newemail" />

        <button type="submit">Update Email</button>
      </form>

      <br />

      {/* ---------------- SHOW USERS FRONTEND ---------------- */}
      <h2>All Users</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {getDetails.length > 0 ? (
            getDetails.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No Users Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SignupFormComponent;
