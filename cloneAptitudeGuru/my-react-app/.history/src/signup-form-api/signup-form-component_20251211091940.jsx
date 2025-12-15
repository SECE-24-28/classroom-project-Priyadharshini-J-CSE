import React, { useState } from "react";

const SignupFormComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstname: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="firstname">First name</label>
        <input 
          type="text" 
          id="firstname" 
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupFormComponent;