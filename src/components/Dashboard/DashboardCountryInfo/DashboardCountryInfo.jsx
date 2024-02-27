import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './DashboardCountryInfo.css';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import DashboardFAQS from '../DashboardFAQS/DashboardFAQS';
import PreviousQueAndAns from '../DashboardPreviousQueAndAns/DashboardPreviousQueAndAns';
import CountryInfoForCountryImg from '../DashboardImages/CountryInfoForCountryImg.png';
import PreviouslyAddedcountries from '../PreviouslyAddedcountries/PreviouslyAddedcountries';

const DashboardCountryInfo = () => {
  useEffect(() => {
    fetchData();
    fetchData2();
  });
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [image, setImage] = useState('');
  const inputRef = useRef(null);

  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [p3, setP3] = useState('');
  const [p4, setP4] = useState('');
  const [avgCourseFee, setAvgCourseFee] = useState('');
  const [partTime, setPartTime] = useState('');
  const [avgLivingExpense, setAvgLivingExpense] = useState('');
  const [dependentsAllowed, setDependentsAllowed] = useState('');
  const [languageRequirements, setLanguageRequirements] = useState('');
  const [postStudyWorks, setPostStudyWorks] = useState('');
  const [financialRequirements, setFinancialRequirements] = useState('');
  const [englishLanguageWaiver, setEnglishLanguageWaiver] = useState('');
  const [lt1, setLt1] = useState('');
  const [lt2, setLt2] = useState('');
  const [lt3, setLt3] = useState('');
  const [lt4, setLt4] = useState('');
  const [pu1, setPu1] = useState('');
  const [pu2, setPu2] = useState('');
  const [pu3, setPu3] = useState('');
  const [pu4, setPu4] = useState('');


  const fetchData = async () => {
    const response = await fetch('http://localhost:4000/dashboardCountryInfo');
    const result = await response.json();
    setData(result);
  };
  const fetchData2 = async () => {;
    const response2 = await fetch('http://localhost:4000/dashboardCountryInfoFaqs');
    const result2 = await response2.json();
    setData2(result2);
  };

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('country', country);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('suvHeading', subHeading);
    formData.append('p1', p1);
    formData.append('p2', p2);
    formData.append('p3', p3);
    formData.append('p4', p4);
    formData.append('avgCourseFee', avgCourseFee);
    formData.append('partTime', partTime);
    formData.append('avgLivingExpense', avgLivingExpense);
    formData.append('dependentsAllowed', dependentsAllowed);
    formData.append('languageRequirements', languageRequirements);
    formData.append('postStudyWorks', postStudyWorks);
    formData.append('financialRequirements', financialRequirements);
    formData.append('englishLanguageWaiver', englishLanguageWaiver);
    formData.append('lt1', lt1);
    formData.append('lt2', lt2);
    formData.append('lt3', lt3);
    formData.append('lt4', lt4);
    formData.append('pu1', pu1);
    formData.append('pu2', pu2);
    formData.append('pu3', pu3);
    formData.append('pu4', pu4);

    try {
      const res = await axios.post('http://localhost:4000/dashboardCountryInfo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div className='Dashboard-Home'>
      <div className='Dashboard-sidebar-section'>
        <DashboardSidebar />
      </div>

      <div className='Dashboard-contant-section'>
        <div className="Dashboard-home-heading">
          <h2>Country Info</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adip</p> */}
        </div>
        <div className='destination-add-country-heading-section'>
          <h3>Destination Countries</h3>
          <span>+ Add Question</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="section-first-name-description-image">
            <div className="section-first-block">
              <input type="text" placeholder='Country Name' value={country} onChange={(e) => setCountry(e.target.value)} />
              <textarea name="" id="" cols="30" rows="10" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </div>
            <div className="section-second-block" onClick={handleImageClick}>
              {
                image ? <img src={URL.createObjectURL(image)} alt="upload-img" /> : <img src={CountryInfoForCountryImg} alt="upload-img" />
              }
              <input type="file"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={(event) => setImage(event.target.files[0])}
              />
            </div>
          </div>

          <div className="section-second-text-inputs">
            <input type="text" className='second-section-inputs' placeholder='Sub Heading' value={subHeading} onChange={(e) => setSubHeading(e.target.value)} />
            <div className='pointers-heading'>Pointers</div>
            <input type="text" className='second-section-inputs pointers-input' placeholder='Point 1' value={p1} onChange={(e) => setP1(e.target.value)} />
            <input type="text" className='second-section-inputs pointers-input' placeholder='Point 2' value={p2} onChange={(e) => setP2(e.target.value)} />
            <input type="text" className='second-section-inputs pointers-input' placeholder='Point 3' value={p3} onChange={(e) => setP3(e.target.value)} />
            <input type="text" className='second-section-inputs pointers-input' placeholder='Point 4' value={p4} onChange={(e) => setP4(e.target.value)} /><br />
            <input type="text" className='second-section-inputs' placeholder='Avg Course Fee' value={avgCourseFee} onChange={(e) => setAvgCourseFee(e.target.value)} />
            <input type="text" className='second-section-inputs' placeholder='Part Time' value={partTime} onChange={(e) => setPartTime(e.target.value)} />
            <input type="text" className='second-section-inputs' placeholder='Avg Living Expense' value={avgLivingExpense} onChange={(e) => setAvgLivingExpense(e.target.value)} />
            <input type="text" className='second-section-inputs' placeholder='Dependents Allowed' value={dependentsAllowed} onChange={(e) => setDependentsAllowed(e.target.value)} />
            <input type="text" className='second-section-inputs' placeholder='Language Requirements' value={languageRequirements} onChange={(e) => setLanguageRequirements(e.target.value)} />
            <input type="text" className='second-section-inputs' placeholder='Post Study Works' value={postStudyWorks} onChange={(e) => setPostStudyWorks(e.target.value)} />
            <input type="text" className='second-section-inputs' placeholder='Financial requirements' value={financialRequirements} onChange={(e) => setFinancialRequirements(e.target.value)} />
            <input type="text" className='second-section-inputs' placeholder='English Language Waiver' value={englishLanguageWaiver} onChange={(e) => setEnglishLanguageWaiver(e.target.value)} />
          </div>

          <div className="importantLinks-section">
            <div className='importantLinks-section-headings'>
              <h4>Important Links For You!</h4>
            </div>
            <div className='importantLinks-section-links'>
              <div className='importantLinks-section-links-block'>
                <input type="text" placeholder='Link Tittle' value={lt1} onChange={(e) => setLt1(e.target.value)} />
                <input type="text" placeholder='Paste URL' value={pu1} onChange={(e) => setPu1(e.target.value)} />
              </div>
              <div className='importantLinks-section-links-block'>
                <input type="text" placeholder='Link Tittle' value={lt2} onChange={(e) => setLt2(e.target.value)} />
                <input type="text" placeholder='Paste URL' value={pu2} onChange={(e) => setPu2(e.target.value)} />
              </div>
              <div className='importantLinks-section-links-block'>
                <input type="text" placeholder='Link Tittle' value={lt3} onChange={(e) => setLt3(e.target.value)} />
                <input type="text" placeholder='Paste URL' value={pu3} onChange={(e) => setPu3(e.target.value)} />
              </div>
              <div className='importantLinks-section-links-block'>
                <input type="text" placeholder='Link Tittle' value={lt4} onChange={(e) => setLt4(e.target.value)} />
                <input type="text" placeholder='Paste URL' value={pu4} onChange={(e) => setPu4(e.target.value)} />
              </div>
            </div>
          </div>

          <div className='button-div'>
            <button type="submit">Publish</button>
          </div>
        </form>

        <h3 className='previously-added'>Previously added Countries</h3>
        {
          data.map((item) =>
            <PreviouslyAddedcountries
            country={item.country}
            description={item.description}
            subHeading={item.subHeading}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            p4={item.p4}
            avgCourseFee={item.avgCourseFee}
            partTime={item.partTime}
            avgLivingExpense={item.avgLivingExpense}
            dependentsAllowed={item.dependentsAllowed}
            languageRequirements={item.languageRequirements}
            postStudyWorks={item.postStudyWorks}
            financialRequirements={item.financialRequirements}
            englishLanguageWaiver={item.englishLanguageWaiver}
            lt1={item.lt1}
            lt2={item.lt2}
            lt3={item.lt3}
            lt4={item.lt4}
            pu1={item.pu1}
            pu2={item.pu2}
            pu3={item.pu3}
            pu4={item.pu4} 
            />
          )
        }

        <DashboardFAQS heading='CountryInfo' for='CountryInfo' />
        <h3 className='previously-added'>Previously added FAQ questions</h3>
        {
          data2.map((item) =>
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

export default DashboardCountryInfo;
