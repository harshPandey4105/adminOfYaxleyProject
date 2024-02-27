import React from 'react';
import './DashboardNavbar.css';
// import 
const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar__logo">
      <img src="https://c.animaapp.com/0ReT5wt9/img/group-4034-1.png" alt="Logo" />
      </div>
      <div className="dashboard-navbar__signup">
        <span className="dashboard-signup__text">Don't have an account?</span>
        <button className="dashboard-signup__button">Sign Up</button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
