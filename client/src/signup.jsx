import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function Signup() {

  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [secondname, setSecondname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dob, setDob] = useState();
  const [role, setRole] = useState();
  const navigate = useNavigate()
 

  

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:3001/register', { username, firstname, secondname, email, password, dob, role })
    .then(result => {console.log(result)
      navigate('/login')})
    .catch(err => console.log(err));
}


  return (

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              Sign Up
            </div>
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="first-name">First Name</label>
                    <input type="text" class="form-control" id="first-name" placeholder="Enter your first name"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="last-name">Last Name</label>
                    <input type="text" class="form-control" id="last-name" placeholder="Enter your last name"
                      onChange={(e) => setSecondname(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="dob">Date of Birth</label>
                  <input type="date" class="form-control" id="dob"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="role">Role</label>
                  <select class="form-control" id="role">
                    <option value="Admin">Admin</option>
                    <option value="Super User">Super User</option>
                    onChange={(e) => setRole(e.target.value)}
                  </select>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </form>
              <p>Already Have an Account?</p>
              <Link to="/login" type="submit" class="btn btn-primary">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Signup;