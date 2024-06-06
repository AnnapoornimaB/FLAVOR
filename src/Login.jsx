import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email: email, password: password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
           // Update authentication status
          navigate('/'); // Redirect to the home page
        } else {
          setShowError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
      });
  };

  const loginContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '1.5em',
    width:'25vw',
    borderRadius: '0.5em',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const errorPopupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    zIndex: '1000',
    textAlign: 'center',
  };

  const closeErrorPopup = () => {
    setShowError(false);
  };

  return (
    <div>
      {showError && (
        <div style={errorPopupStyle}>
          <p>Invalid credentials. Please try again.</p>
          <button onClick={closeErrorPopup}>Close</button>
        </div>
      )}
      <div style={loginContainerStyle} className="login-container">
        <div style={formStyle}>
          <h2 className='Login'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className='btn' id="loginButton">
              Login
            </button>
          </form>
          <p>Don't have an account?</p>
          <Link to="/Signup" >
            <strong >Sign Up</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
