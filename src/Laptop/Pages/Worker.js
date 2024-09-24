import React, { useState } from 'react';
import Message from '../Lcomponents/Message';
const Worker = () => {
  const [shift, setShift] = useState('');
  const [givenShift, setGivenShift] = useState('');
  const [crucialInfo, setCrucialInfo] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending data to a server
    alert(`Shift: ${shift}\nGiven to: ${givenShift}\nCrucial Info: ${crucialInfo}`);
    // Clear the form after submission
    setShift('');
    setGivenShift('');
    setCrucialInfo('');
  };

  return (
    <div className="worker-container">
      <h2 className="worker-title">Shift Information</h2>
      <form onSubmit={handleSubmit} className="worker-form">
        <div className="form-group">
          <label htmlFor="shift">Which shift did you cover?</label>
          <input
            type="text"
            id="shift"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            placeholder="Enter the shift you covered"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="givenShift">Who did you give your shift to?</label>
          <input
            type="text"
            id="givenShift"
            value={givenShift}
            onChange={(e) => setGivenShift(e.target.value)}
            placeholder="Enter the person you gave the shift to"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="crucialInfo">Was there any crucial information related to the shift?</label>
          <textarea
            id="crucialInfo"
            value={crucialInfo}
            onChange={(e) => setCrucialInfo(e.target.value)}
            placeholder="Enter crucial information"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <div className='message-container'>
      <Message /></div>
    </div>
  );
};

export default Worker;
