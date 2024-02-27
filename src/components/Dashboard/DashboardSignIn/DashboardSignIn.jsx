import React, { useState } from 'react';
import './DashboardSignIn.css';

const DashboardSignIn = () => {
  const [hoverd,setHoverd]=useState(false);
  const inputActive=()=>{
    setHoverd(!hoverd);
  }
  const [hoverd1,setHoverd1]=useState(false);
  const inputActive1=()=>{
    setHoverd1(!hoverd1);
  }
  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2 className="signin-heading">Sign In</h2>
        <div className="form-group">
          <i className={`fa-regular fa-user ${hoverd ? 'hover-input' : ''}`}></i>
          <input type="text" id="username" name="username" placeholder='Username' onClick={inputActive} />
        </div>
        <div className="form-group">
          <i className={`fa-solid fa-key ${hoverd1 ? 'hover-input' : ''}`}></i>
          <input type="password" id="password" name="password" placeholder='Password' onClick={inputActive1} />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <button className="signin-button">Sign In</button>
      </div>
    </div>
  );
};

export default DashboardSignIn;
