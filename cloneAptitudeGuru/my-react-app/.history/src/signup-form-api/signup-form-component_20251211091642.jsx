import React from "react";
import axios from "axios";
const SignupFormComponent = () => {
  const onSubmit = (e) => {
    console.log("=>(The value:)>=", e);
  };
  return (
    <div>
      <form action={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignupFormComponent;
