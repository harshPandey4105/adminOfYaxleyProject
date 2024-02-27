import React from 'react';
import { useState, useEffect } from 'react';
import './DashboardServices.css';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import DashboardFAQS from '../DashboardFAQS/DashboardFAQS';
import PreviousQueAndAns from '../DashboardPreviousQueAndAns/DashboardPreviousQueAndAns';
const DashboardServices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch('http://localhost:4000/dashboardServices');
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
          <h2>Services</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
        </div>
        <DashboardFAQS heading='Services' for='service' />
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

export default DashboardServices;
