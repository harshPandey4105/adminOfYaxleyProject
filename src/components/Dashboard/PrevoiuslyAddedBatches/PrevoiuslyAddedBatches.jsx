import React from 'react';
import './PrevoiuslyAddedBatches.css';

const PreviouslyAddedBatches = ({ P1, P2, P3, P4,IELTS,batchName, description, date, LtL1, LtL2, PUL1, PUL2 }) => {
  return (
    <div className="details-container">
      <div className='event-web-heading'>
        <h2>{IELTS}</h2>
        <h2>{batchName}</h2>
      </div>
      <h2>Description :</h2><p>{description}</p>
      <h2>Pointer 1 :</h2><p>{P1}</p>
      <p>{P2}</p>
      <p>{P3}</p>
      <p>{P4}</p>
      <h2>Date :</h2><p>{date}</p>
      <h2>Link tag :</h2><p>{LtL1}</p>
      <p>{LtL2}</p>
      <h2>Paste Url</h2><p>{PUL1}</p>
      <p>{PUL2}</p>
    </div>
  );
}

export default PreviouslyAddedBatches;
