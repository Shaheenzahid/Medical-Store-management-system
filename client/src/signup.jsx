import React, { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/"; // Your backend API base URL

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnic: "",
    phoneNum: "",
    image: null,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setUser({ ...user, image: e.target.files[0] });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("cnic", user.cnic);
      formData.append("phoneNum", user.phoneNum);
      formData.append("image", user.image);

      const response = await axios.post("/api/User/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        // Redirect or show success message
        navigate("/login");
      } else {
        // Handle signup failure
        alert("User not created");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="CNIC"
            name="cnic"
            value={user.cnic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            name="phoneNum"
            value={user.phoneNum}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
