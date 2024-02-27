import React from 'react';
import './PreviouslyAddedcountries.css'; 

const PreviouslyAddedcountries = ({country, description, subHeading, p1, p2, p3, p4, avgCourseFee, partTime, avgLivingExpense, dependentsAllowed, languageRequirements, postStudyWorks, financialRequirements, englishLanguageWaiver, lt1, lt2, lt3, lt4, pu1, pu2, pu3, pu4 }) => {
    return (
        <div className="data-block">
            <div className="content">
                <h3 className='country-heading'>Country : <span>{country}</span></h3>
                <h4>Description: </h4><span>{description}</span>
                <h4>Sub Heading: </h4><span>{subHeading}</span>
                <ul>
                    <li><span>{p1}</span></li>
                    <li><span>{p2}</span></li>
                    <li><span>{p3}</span></li>
                    <li><span>{p4}</span></li>
                </ul>
                <h4>Average Course Fee :</h4><span>{avgCourseFee}</span>
                <h4>Part-time :</h4><span> {partTime}</span>
                <h4>Average Living Expense: </h4><span>{avgLivingExpense}</span>
                <h4>Dependents Allowed:</h4> <span>{dependentsAllowed}</span>
                <h4>Language Requirements:</h4> <span>{languageRequirements}</span>
                <h4>Post Study Works: </h4><span>{postStudyWorks}</span>
                <h4>Financial Requirements: </h4><span>{financialRequirements}</span>
                <h4>English Language Waiver: </h4><span>{englishLanguageWaiver}</span>
                <h4>Link Tittle</h4>
                    <p>{lt1}</p>
                    <p>{lt2}</p>
                    <p>{lt3}</p>
                    <p>{lt4}</p>
                <h4>Paste Url</h4>
                    <p>{pu1}</p>
                    <p>{pu2}</p>
                    <p>{pu3}</p>
                    <p>{pu4}</p>
            </div>
        </div>
    );
};

export default PreviouslyAddedcountries;
