import React, { useState } from "react";

export default function FormValidateComponent() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="form" onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            tabIndex={2}
          />
        </div>
        <button
          className="submit"
          disabled={!formData.username || !formData.password}
          tabIndex={3}
        >
          Login
        </button>
      </form>
    </div>
  );
}
