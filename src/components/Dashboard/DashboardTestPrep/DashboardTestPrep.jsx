import React, { useState, useRef, useEffect } from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import CountryInfoForCountryImg from '../DashboardImages/CountryInfoForCountryImg.png';
import './DashboardTestPrep.css';
import PreviousQueAndAns from '../DashboardPreviousQueAndAns/DashboardPreviousQueAndAns';
import axios from 'axios';
import DashboardFAQS from '../DashboardFAQS/DashboardFAQS';
import PreviouslyAddedEventsAndWebinar from '../PreviouslyAddedEventsAndWebinar/PreviouslyAddedEventsAndWebinar';
import PreviouslyAddedBatches from '../PrevoiuslyAddedBatches/PrevoiuslyAddedBatches';

const DashboardTestPrep = () => {

    useEffect(() => {
        fetchData();
        fetchData2();
    });
    const [P1, setP1] = useState('');
    const [P2, setP2] = useState('');
    const [P3, setP3] = useState('');
    const [P4, setP4] = useState('');
    const [batchName, setBatchName] = useState('');
    const [IELTS, setIELTS] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const [LtL1, setLtL1] = useState('');
    const [LtL2, setLtL2] = useState('');

    const [PUL1, setPUL1] = useState('');
    const [PUL2, setPUL2] = useState('');

    const [image, setImage] = useState('');
    
    const [data,setData]=useState([]);
    const [data2,setData2]=useState([]);
    const inputRef = useRef(null);

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('P1', P1);
        formData.append('P2', P2);
        formData.append('P3', P3);
        formData.append('P4', P4);
        formData.append('IELTS', IELTS);
        formData.append('batchName',batchName);
        formData.append('description', description);
        formData.append('date', date);
        formData.append('LtL1', LtL1);
        formData.append('LtL2', LtL2);
        formData.append('PUL1', PUL1);
        formData.append('PUL2', PUL2);
        formData.append('image', image);
        try {
            const res = await axios.post('http://localhost:4000/dashboardTestPrep', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/dashboardTestPrep');
        const result = await response.json();
        console.log("this is data "+result)
        setData(result);
    };
    
    const fetchData2 = async () => {
        const response2 = await fetch('http://localhost:4000/faqsdashboardTestPrep');
        const result2 = await response2.json();
        console.log("this is data2 "+result2)
        setData2(result2);
    };
    return (
        <div className='dashboard-event-section'>
            <div className='Dashboard-sidebar-section'>
                <DashboardSidebar />
            </div>
            <div className='dashboard-event-contain-section'>

                <div className="Dashboard-Events-heading">
                    <h2>Test Prep</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <form onSubmit={handleSubmit}>                    
                    <div className="all-events-and-webinars">
                        <h3>Batches for you</h3>
                        <p>+ Add New Events/Webinars</p>
                    </div>

                    <div className='all-events-webinar-first-div'>
                        <input className='event-heading'
                            type="text"
                            value={batchName}
                            onChange={(e) => setBatchName(e.target.value)}
                            placeholder="Batch Name"
                        />
                        <select value={IELTS} onChange={(e) => setIELTS(e.target.value)}>
                            <option value="IELTS">IELTS</option>
                        </select>
                        <input className='date-input'
                            type="date" value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="all-events-webinar-second-div">
                        <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
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

                    <div className='all-events-webinar-pointers-div'>
                        <div className='pointer-heading'><h3>Pointers:</h3></div>
                        <div className='pointers'>
                            <input type="text" placeholder='P1' value={P1} onChange={(e) => setP1(e.target.value)} />
                            <input type="text" placeholder='P2' value={P2} onChange={(e) => setP2(e.target.value)} />
                            <input type="text" placeholder='P3' value={P3} onChange={(e) => setP3(e.target.value)} />
                            <input type="text" placeholder='P4' value={P4} onChange={(e) => setP4(e.target.value)} />
                        </div>
                        <div className='lastLinks'>
                            <div className="new-annoucement-bar-input-section">
                                <input className='large-width' type="text" placeholder='Link Tittle' value={LtL1} onChange={(event) => setLtL1(event.target.value)} />
                                <input className='small-width' type="text" placeholder='Paste URL' value={PUL1} onChange={(e) => setPUL1(e.target.value)} />
                            </div>
                            <div className="new-annoucement-bar-input-section">
                                <input className='large-width' type="text" placeholder='Link Tittle' value={LtL2} onChange={(event) => setLtL2(event.target.value)} />
                                <input className='small-width' type="text" placeholder='Paste URL' value={PUL2} onChange={(e) => setPUL2(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='pushlish-btn'>
                        <button type='submit'>Publish</button>
                    </div>
                </form>

                <h1 className='previously-heading'>Previously Added Batches</h1>
                {
                    data.map((item, index) =>
                        <PreviouslyAddedBatches
                            P1={item.P1}
                            P2={item.P2}
                            P3={item.P3}
                            P4={item.P4}
                            IELTS={item.IELTS}
                            batchName={item.batchName}
                            description={item.description}
                            date={item.date}
                            LtL1={item.LtL1}
                            LtL2={item.LtL2}
                            PUL1={item.PUL1}
                            PUL2={item.PUL2}
                        />
                    )
                } 
                <DashboardFAQS heading='Events' for='TestPrep' />
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
};

export default DashboardTestPrep;
