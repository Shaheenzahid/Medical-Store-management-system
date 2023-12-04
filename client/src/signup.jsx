// import React, { useState } from "react";
// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3005/"; // Your backend API base URL

// function SignUp() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cnic: "",
//     phoneNum: ""
//   });

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setUser({ ...user, image: e.target.files[0] });
//   };

//   // const handleSignUp = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const formData = new FormData();
//   //     formData.append("name", user.name);
//   //     formData.append("email", user.email);
//   //     formData.append("password", user.password);
//   //     formData.append("cnic", user.cnic);
//   //     formData.append("phoneno", user.phoneNum);

//   //     const response = await axios.post("/api/register", formData, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     if (response.data.success) {
//   //       // Redirect or show success message
//   //       navigate("/login");
//   //     } else {
//   //       // Handle signup failure
//   //       alert("User not created");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error signing up:", error);
//   //     // Handle error
//   //   }
//   // };
//   function submitForm() {

//             const firstName = document.getElementById('firstName').value;
//             const lastName = document.getElementById('lastName').value;
//             const dob = document.getElementById('DOB').value;
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;


//             // Email validation using regex
//             var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             if (!emailRegex.test(email)) {
//                 alert('Please enter a valid email address');
//                 return false;
//             }

//             // Prepare the data to be sent
//             const userData = {
//                 FirstName: firstName,
//                 LastName: lastName,
//                 DOB: dob,
//                 Email: email,
//                 Password: password
//             };

//             // Send data to the API endpoint
//             fetch('http://localhost:3005/api/addusers', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(userData)
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log('Success:', data);
//                     alert('User registered successfully!');
//                     window.location.href = 'signin.html';

//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                     alert('An error occurred while registering the user.');
//                 });

//             return false; // Prevent form submission
//         }

//   return (
//     <div className="signup-form">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             name="name"
//             value={user.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="CNIC"
//             name="cnic"
//             value={user.cnic}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Phone Number"
//             name="phoneNum"
//             value={user.phoneNum}
//             onChange={handleChange}
//             required
//           />
//         </div>
       
//         <div className="form-group">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// export default SignUp;
import React from 'react';

const SignUpForm = () => {
  const submitForm = async (e) => {
    e.preventDefault();

    const Name = e.target.elements.name.value;
    const Email = e.target.elements.email.value;
    const Password = e.target.elements.password.value;
    const Cnic = e.target.elements.cnic.value;
    const phoneno = e.target.elements.phoneno.value;

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Prepare the data to be sent
    const userData = {
     name: name,
      email: lastName,
     password: dob,
      cnic: email,
      phoneno: password,
    };

    try {
      const response = await fetch('http://localhost:3005/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        alert('User registered successfully!');
        window.location.href = 'signin.html'; // Redirect to signin page
      } else {
        throw new Error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user.');
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="text" name="DOB" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUpForm;
