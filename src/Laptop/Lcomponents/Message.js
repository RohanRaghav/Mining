import React, { useState } from 'react';

const Message = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const alertOptions = [
    "Please fill out the required fields.",
    "Your submission was successful!",
    "An error occurred while processing your request.",
    "Please check your internet connection.",
    "Your changes have been saved.",
    "Are you sure you want to proceed?",
  ];

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleSelectChange = (e) => {
    setSelectedAlert(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAlert) {
      alert('Please select an alert message.');
    } else {
      setAlertMessage(selectedAlert);
      setSelectedAlert('');
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setAlertMessage('');
  };

  return (
    <div className="container">
      <button className="button-1" onClick={handleClick}>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z"
              fill="#faf9f9"
            />
          </g>
        </svg>
        &nbsp; New report
      </button>

      {isVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h2 className='titles'>Select an Alert Message</h2>
            <form onSubmit={handleSubmit}>
              <select value={selectedAlert} onChange={handleSelectChange} required>
                <option value="" disabled>Select an alert message</option>
                {alertOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
              <div className="button-container">
                <button type="submit" className="submit-button">Submit</button>
                <button onClick={handleClose} className="close-button">Close</button>
              </div>
            </form>
            {alertMessage && <p className="alert-message">{alertMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
