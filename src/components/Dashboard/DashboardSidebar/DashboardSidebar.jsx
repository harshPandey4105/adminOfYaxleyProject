import React from 'react';
import {Link} from "react-router-dom";
import './DashboardSidebar.css';

const DashboardSidebar = () => {
  return (
    <div className="sidebar">
      <div className="section">
        <li><Link to='/' className='sidebar-links'>Home</Link></li>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <li><Link to='/service' className='sidebar-links'>Services</Link></li>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <li><Link to='/countryInfo' className='sidebar-links'>Country Info</Link></li>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <li><Link to='/contactUs' className='sidebar-links'>Contact Us</Link></li>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <li><Link to='/events' className='sidebar-links'>Events</Link></li>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
      <div className="section">
        <li><Link to='/testPrep' className='sidebar-links'>Test Prep</Link></li>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
      </div>
    </div>
  );
};

export default DashboardSidebar;
