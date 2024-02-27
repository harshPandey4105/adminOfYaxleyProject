import React from 'react';
import { useState, useEffect } from 'react';
import './DashboardContactus.css';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import DashboardFAQS from '../DashboardFAQS/DashboardFAQS';
import PreviousQueAndAns from '../DashboardPreviousQueAndAns/DashboardPreviousQueAndAns';
const DashboardContactus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch('http://localhost:4000/dashboardContactUs');
    const result = await response.json();
    setData(result);
  };

  return (
    <div className='Dashboard-Home'>
      <div className='Dashboard-sidebar-section'>
        <DashboardSidebar />
      </div>
      <div className='Dashboard-contant-section'>
        <div className="Dashboard-home-heading">
          <h2>Contact Us</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
        </div>
        <DashboardFAQS heading='Contact Us' for='contactus' />
        <h3 className='previously-added'>Previously added FAQ questions</h3>
        {
          data.map((item) =>
            <PreviousQueAndAns
              heading={item.selectedState}
              question={item.inputValue}
              questionDescription="React.js is a JavaScript library for building user interfaces."
              answer={item.textAreaValue}
              answerDescription="It is maintained by Facebook and a community of individual developers and companies."
            />
          )
        }
      </div>
    </div>
  );
}

export default DashboardContactus;
