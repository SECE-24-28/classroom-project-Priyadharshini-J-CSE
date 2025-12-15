import React from "react";
import { Link } from "react-router-dom";
const FourOFourComponent = () => {
  return (
    <>
      <h1>404 Component</h1>
      <Link to="/leetcode/:1">Go to Home Page</Link>
      <br />
      <Link to="/our-promise">Our Promises</Link>
    </>
  );
};
export default FourOFourComponent;
