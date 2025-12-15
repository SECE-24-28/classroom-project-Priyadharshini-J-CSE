import React from "react";
import { Link } from "react-router-dom";

const FourOFourComponent = () => {
  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "12px" }}>404 — Page Not Found</h1>
      <p style={{ fontSize: "1.125rem", color: "#444" }}>
        The page you are looking for doesn't exist.
      </p>
      <div style={{ marginTop: 16 }}>
        <Link to="/" style={{ marginRight: 12, textDecoration: "none" }}>
          <button style={{ padding: "8px 12px" }}>Home</button>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button style={{ padding: "8px 12px" }}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default FourOFourComponent;
