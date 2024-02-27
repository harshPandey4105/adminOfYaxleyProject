import React from 'react';
import { useState } from 'react';
import './DashboardFAQS.css';

const DashboardFAQS = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const [selectedState, setSelectedState] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const publishing = async() => {
        console.log(selectedState);
        console.log(inputValue);
        console.log(textAreaValue);
        
        let publish;
        if(props.for==='home'){
            publish = await fetch('http://localhost:4000/dashboardHome', {
                method: 'post',
                body: JSON.stringify({ selectedState, inputValue, textAreaValue }),
                headers: { 'Content-Type': 'application/json' },
            })
        }
        else if(props.for==='contactus'){
            publish = await fetch('http://localhost:4000/dashboardContactUs', {
                method: 'post',
                body: JSON.stringify({ selectedState, inputValue, textAreaValue }),
                headers: { 'Content-Type': 'application/json' },
            })
        }
        else if(props.for==='CountryInfo'){
            publish = await fetch('http://localhost:4000/dashboardCountryInfoFaqs', {
                method: 'post',
                body: JSON.stringify({ selectedState, inputValue, textAreaValue }),
                headers: { 'Content-Type': 'application/json' },
            })
        }
        else if(props.for==='Events'){
            publish = await fetch('http://localhost:4000/faqsdashboardEvents', {
                method: 'post',
                body: JSON.stringify({ selectedState, inputValue, textAreaValue }),
                headers: { 'Content-Type': 'application/json' },
            })
        }
        else if(props.for==='TestPrep'){
            publish = await fetch('http://localhost:4000/faqsdashboardTestPrep', {
                method: 'post',
                body: JSON.stringify({ selectedState, inputValue, textAreaValue }),
                headers: { 'Content-Type': 'application/json' },
            })
        }
        else{
            publish = await fetch('http://localhost:4000/dashboardServices', {
                method: 'post',
                body: JSON.stringify({ selectedState, inputValue, textAreaValue }),
                headers: { 'Content-Type': 'application/json' },
            })
        }

        publish = await publish.json();

        console.log("this is response from home "+publish);
    }
    return (
        <div className='Dashboard-Faqs'>
            <div className='Dashboard-home-faqs-addQuetion'>
                <h3>FAQS</h3>
                <span>+ Add Question</span>
            </div>
            <div className='Dashboard-home-faqs-section'>
                <div className="dropdown-container">
                    <select id="stateSelect" value={selectedState} onChange={handleStateChange}>
                        <option value="123">Select the category</option>
                        <option value="Services">Services</option>
                        <option value="Admission">Admission</option>
                        <option value="Event">Event</option>
                        <option value="Courses">Courses</option>
                    </select>
                </div>
                <input type="text"
                    placeholder='Write the question here'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <textarea cols="90" rows="13"
                    placeholder='Add the Answer'
                    value={textAreaValue}
                    onChange={handleTextAreaChange}>
                </textarea>
                <button className='dashboard-publish-btn' onClick={publishing}>Publish</button>
            </div>
        </div>
    );
}

export default DashboardFAQS;

