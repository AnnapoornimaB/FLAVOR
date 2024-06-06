import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css"



const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); // New state variable
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email contains "@gmail.com"
    if (!email || !email.includes('@gmail.com')) {
      // Show the error message
      setShowError(true);
      return;
    }

    axios.post('http://localhost:3001/register', { "name": name, "email": email, "password": password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  const signupContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height: '100vh',
    backgroundImage: `url("background.jpg")`, // Set background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width:'25vw',
    // Add opacity to the background color
    padding: '1.5em',
    borderRadius: '0.5em',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={signupContainerStyle}>
      <div style={formStyle} className="bg-white p-3 rounded w-25">
        <h2 className='Register'>Register</h2>
        {showError && (
          <div className="error-popup">
            <p>Please enter a valid Gmail address.</p>
            <button onClick={() => setShowError(false)}>Close</button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link to="/login">
          <strong>Login</strong>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
