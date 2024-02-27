import React from 'react';
import './PreviouslyAddedEventsAndWebinar.css';

const PreviouslyAddedEventsAndWebinar = ({ LT1, PU1, PU2, PU3, PU4, P1, P2, P3, P4, eventHeading, webAndEvent, description, date, LtL1, LtL2, PUL1, PUL2 }) => {
  const WebOrEvent=webAndEvent.toUpperCase();
  return (
    <div className="details-container">
      <div className='event-web-heading'>
        <h2>{WebOrEvent} : </h2>
        <h2>{eventHeading}</h2>
        <h2>{date}</h2>
      </div>
      <h2>Description :</h2><p>{description}</p>
      <h2>Link tag :</h2><p>{LT1}</p>
      <h2>Paste Url :</h2><p>{PU1}</p>
      <p>{PU2}</p>
      <p>{PU3}</p>
      <p>{PU4}</p>
      <h2>Pointer :</h2><p>{P1}</p>
      <p>{P2}</p>
      <p>{P3}</p>
      <p>{P4}</p>
      <h2>Link tag :</h2><p>{LtL1}</p>
      <p>{LtL2}</p>
      <h2>Paste Url :</h2><p>{PUL1}</p>
      <p>{PUL2}</p>
    </div>
  );
}

export default PreviouslyAddedEventsAndWebinar;
