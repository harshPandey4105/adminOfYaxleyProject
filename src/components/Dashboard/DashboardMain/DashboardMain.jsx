import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import DashboardHome from '../DashboardHome/DashboardHome';
import DashboardServices from '../DashboardServices/DashboardServices';
import DashboardContactus from '../DashboardContactus/DashboardContactus';
import DashboardCountryInfo from '../DashboardCountryInfo/DashboardCountryInfo';
import DashboardEvents from '../DashboardEvent/DashboardEvent';
import DashboardTestPrep from '../DashboardTestPrep/DashboardTestPrep';

const Dashboard = () => {
  return (
    <BrowserRouter>
      <DashboardNavbar />
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path='/service' element={<DashboardServices/>} />
        <Route path="/countryInfo" element={<DashboardCountryInfo/>} />
        <Route path="/contactUs" element={<DashboardContactus/>} />
        <Route path="/events" element={<DashboardEvents/>} />
        <Route path="/testPrep" element={<DashboardTestPrep/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Dashboard;
