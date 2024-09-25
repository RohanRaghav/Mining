import React, { useState } from 'react';
import Dash from '../Lcomponents/Dash';
import MineOps from '../Lcomponents/MineOps'; // Import your section components
import Fleet from '../Lcomponents/Fleet';
import Processing from '../Lcomponents/Processing';
import Insights from '../Lcomponents/Insights';
import Settings from '../Lcomponents/Settings';
import Team from '../Lcomponents/Team';
import Feedback from '../Lcomponents/Feedback';
const DashBoard = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Track selected item
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Predefined alert messages
  const alertOptions = [
    "Please fill out the required fields.",
    "Your submission was successful!",
    "An error occurred while processing your request.",
    "Please check your internet connection.",
    "Your changes have been saved.",
    "Are you sure you want to proceed?",
  ];

  // Function to handle button click
  const handleClick = () => {
    setIsVisible(true);
  };

  // Function to handle dropdown change
  const handleSelectChange = (e) => {
    setSelectedAlert(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAlert) {
      alert('Please select an alert message.');
    } else {
      setAlertMessage(selectedAlert);
      setSelectedAlert(''); // Clear the selection
    }
  };

  // Function to close the overlay message
  const handleClose = () => {
    setIsVisible(false);
    setAlertMessage(''); // Clear the alert message when closed
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the clicked item as selected
  };

  // Function to render the component based on the selected item
  const renderComponent = () => {
    switch (selectedItem) {
      case 'Mine Ops':
        return <MineOps />;
      case 'Fleet':
        return <Fleet />;
      case 'Processing':
        return <Processing />;
      case 'Insights':
        return <Insights />;
        case 'Settings':
          return <Settings />;
        case 'Team':
          return <Team />
          case 'Feedback':
            return <Feedback />
      default:
        return <Dash />; // Default is the Dash component
    }
  };

  return (
    <div className='dashboard'>
      <div className='div-1'>
        <div className='div-2'>
          <div className='div-3'>
            <div className='div-4'>
              <div className='div-5'>
                <div className='div-6'>
                  <div
                    className={`div-8 ${selectedItem === 'Dashboard' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('Dashboard')}
                  >
                                     <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f6f4f4">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#f5f4f4"/> </g>

</svg>
                    <p className='para-1'>
                   Dashboard</p>
                  </div>
                  <div
                    className={`div-8 ${selectedItem === 'Mine Ops' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('Mine Ops')}
                  >
                       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" fill="#ffffff">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M4,18v2h4v-2H4 M4,14v2h10v-2H4 M10,18v2h4v-2H10 M16,14v2h4v-2H16 M16,18v2h4v-2H16 M2,22V8l5,4V8l5,4V8l5,4l1-10h3l1,10 v10H2z"/> <rect fill="none" width="24" height="24"/> </g>

</svg>
                    <p className='para-1'>
                 
                     Mine Ops</p>
                  </div>
                  <div
                    className={`div-8 ${selectedItem === 'Fleet' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('Fleet')}
                  >
                    <svg fill="#ccc" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <path d="M119.467,298.667c-37.641,0-68.267,30.626-68.267,68.267c0,37.641,30.626,68.267,68.267,68.267 c37.641,0,68.267-30.626,68.267-68.267C187.733,329.293,157.107,298.667,119.467,298.667z M119.467,418.133 c-28.237,0-51.2-22.963-51.2-51.2c0-28.237,22.963-51.2,51.2-51.2s51.2,22.963,51.2,51.2 C170.667,395.17,147.703,418.133,119.467,418.133z"/> </g> </g> <g> <g> <path d="M392.533,298.667c-37.641,0-68.267,30.626-68.267,68.267c0,37.641,30.626,68.267,68.267,68.267 c37.641,0,68.267-30.626,68.267-68.267C460.8,329.293,430.174,298.667,392.533,298.667z M392.533,418.133 c-28.237,0-51.2-22.963-51.2-51.2c0-28.237,22.963-51.2,51.2-51.2c28.237,0,51.2,22.963,51.2,51.2 C443.733,395.17,420.77,418.133,392.533,418.133z"/> </g> </g> <g> <g> <path d="M503.467,128H262.153l-15.121-45.363c-1.169-3.49-4.42-5.837-8.098-5.837H76.8c-4.71,0-8.533,3.814-8.533,8.533v34.133 c0,4.719,3.823,8.533,8.533,8.533h130.381l49.254,147.763c1.186,3.55,4.497,5.837,8.098,5.837c0.657,0,1.331-0.077,1.997-0.23 l213.333-51.2c2.449-0.589,4.514-2.236,5.641-4.48l25.6-51.2c0.589-1.186,0.896-2.5,0.896-3.823v-34.133 C512,131.814,508.177,128,503.467,128z M494.933,168.653l-22.921,45.85l-201.856,48.444L221.431,116.77 c-1.169-3.49-4.42-5.837-8.098-5.837h-128V93.867h147.448l15.121,45.363c1.161,3.49,4.42,5.837,8.098,5.837h238.933V168.653z"/> </g> </g> <g> <g> <path d="M331.861,294.767c-1.741-3.388-5.521-5.239-9.267-4.463l-77.824,15.565l-48.896-154.837 c-1.126-3.55-4.412-5.965-8.141-5.965H102.4c-3.063,0-5.888,1.638-7.407,4.301l-32.41,56.713L6.187,222.191 C2.526,223.241,0,226.594,0,230.4v102.4c0,3.447,2.082,6.571,5.265,7.885l20.599,8.533c2.261,0.93,4.796,0.862,6.989-0.196 c2.193-1.067,3.823-3.021,4.489-5.359c10.334-36.548,44.109-62.063,82.125-62.063c44.467,0,81.007,33.348,84.983,77.568 c0.401,4.437,4.122,7.765,8.491,7.765c0.137,0,0.265,0,0.393,0h85.333c2.287,0,4.471-0.913,6.067-2.543 c1.604-1.613,2.492-3.814,2.466-6.101c-0.299-23.347,12.143-43.358,22.895-53.385 C332.877,302.302,333.602,298.163,331.861,294.767z M162.133,162.133h19.345l13.474,42.667h-32.819V162.133z M107.349,162.133 h37.717V204.8H82.97L107.349,162.133z M290.475,349.867h-70.016c-8.141-49.169-50.27-85.333-100.992-85.333 c-42.402,0-80.41,26.47-95.514,65.417l-6.886-2.85v-54.033H25.6c4.71,0,8.533-3.814,8.533-8.533S30.31,256,25.6,256h-8.533 v-19.166l52.412-14.967h130.867l30.455,96.435c1.314,4.156,5.555,6.699,9.813,5.803l62.566-12.518 C296.781,322.287,291.789,335.343,290.475,349.867z"/> </g> </g> </g>

</svg>
                    <p className='para-1'>Fleet</p>
                  </div>
                  <div
                    className={`div-8 ${selectedItem === 'Processing' ? 'selected' : ''}`}
                    onClick={() => handleItemClick('Processing')}
                  >
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M18.763 13.7944L20.029 16.0222C19.8786 16.3163 19.7105 16.6051 19.5244 16.8873C19.3383 17.1695 19.1391 17.4378 18.9281 17.6919L16.4377 17.4142C15.7715 17.9608 15.0027 18.3869 14.1645 18.6592L13.0002 20.945C12.6719 20.9813 12.3382 21 12.0002 21C11.6622 21 11.3285 20.9813 11.0002 20.945L9.83293 18.6582C8.99428 18.3854 8.22514 17.9585 7.5589 17.4111L5.05407 17.6915C4.84303 17.4374 4.64381 17.1691 4.45774 16.8869C4.27168 16.6047 4.10356 16.3159 3.95312 16.0218L5.22637 13.7814C5.07803 13.2142 5.00021 12.6139 5.00021 12.0002C5.00021 11.3749 5.08219 10.7688 5.23599 10.192L3.95351 7.936C4.10394 7.64191 4.27206 7.3531 4.45812 7.07091C4.64419 6.78873 4.84341 6.52043 5.05445 6.2663L7.60942 6.55327C8.26776 6.02075 9.01625 5.60683 9.84 5.33984M9.83614 5.33996L11 3.05493C11.3283 3.01863 11.662 3 12 3C12.338 3 12.6716 3.01863 13 3.05493L14.1638 5.33996C14.9882 5.60716 15.7389 6.01764 16.3976 6.55077L18.9275 6.26661C19.1385 6.52074 19.3377 6.78904 19.5238 7.07123C19.7098 7.35341 19.878 7.64223 20.0284 7.93632L18.7592 10.1697M18.7594 10.1732C18.9164 10.7556 19.0002 11.3681 19.0002 12.0002C19.0002 12.6215 18.9193 13.2239 18.7673 13.7974M15.0002 12.0002C15.0002 13.657 13.6571 15.0002 12.0002 15.0002C10.3433 15.0002 9.0002 13.657 9.0002 12.0002C9.0002 10.3433 10.3433 9.00015 12.0002 9.00015C13.6571 9.00015 15.0002 10.3433 15.0002 12.0002Z" stroke="#faf9f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>

</svg>
                    <p className='para-1'>Processing</p>
                  </div>
                </div>
                <div
                  className={`div-8 ${selectedItem === 'Insights' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('Insights')}
                >
                  <svg width="25px" height="25px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" className="si-glyph si-glyph-weight-down" fill="#000000">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>656</title> <defs> </defs> <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <path d="M12.905,5.01 C12.905,3.922 11.993,3.039 10.867,3.039 L9.944,3.039 C9.978,2.887 10,2.719 10,2.531 C10,1.135 8.877,-4.54747351e-13 7.495,-4.54747351e-13 C6.113,-4.54747351e-13 4.99,1.135 4.99,2.531 C4.99,2.719 5.016,2.886 5.058,3.039 L4.136,3.039 C3.011,3.039 2.099,3.922 2.099,5.01 L0.083,13.985 C0.083,15.075 0.995,15.957 2.122,15.957 L12.88,15.957 C14.006,15.957 14.917,15.075 14.917,13.985 L12.905,5.01 L12.905,5.01 Z M5.824,2.531 C5.824,1.582 6.573,0.808 7.495,0.808 C8.416,0.808 9.165,1.581 9.165,2.531 C9.165,2.709 9.131,2.877 9.082,3.039 L5.906,3.039 C5.857,2.877 5.824,2.709 5.824,2.531 L5.824,2.531 Z M6.963,9.947 L6.963,6.958 L8.037,6.958 L8.037,9.926 L10.107,9.947 L7.459,13.039 L4.969,9.947 L6.963,9.947 L6.963,9.947 Z" fill="#f5f5f5" className="si-glyph-fill"> </path> </g> </g>

</svg>
                  <p className='para-1'>Insights</p>
                </div>
                <div
                  className={`div-8 ${selectedItem === 'Settings' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('Settings')}
                >
                  <svg width="25px" height="25px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M54.95 17.541C54.8112 17.2516 54.605 16.9997 54.3488 16.8065C54.0925 16.6132 53.7937 16.4843 53.4773 16.4304C53.1609 16.3765 52.8362 16.3993 52.5304 16.4968C52.2247 16.5944 51.9468 16.7638 51.72 16.991L44.06 24.711C43.7005 25.0612 43.2189 25.258 42.717 25.2599C42.2151 25.2617 41.7321 25.0685 41.37 24.721L39.52 22.851C39.1595 22.4841 38.9576 21.9903 38.9576 21.476C38.9576 20.9616 39.1595 20.4679 39.52 20.101L47.18 12.371C47.4046 12.1464 47.5719 11.8711 47.6676 11.5682C47.7634 11.2653 47.7848 10.9439 47.73 10.631C47.6753 10.3167 47.5471 10.0197 47.356 9.76429C47.1648 9.50885 46.9161 9.30214 46.63 9.16097C43.3357 7.57356 39.6278 7.05468 36.0242 7.67678C32.4207 8.29888 29.1014 10.0309 26.53 12.631C24.1255 15.0688 22.4713 18.1457 21.764 21.496C21.0567 24.8463 21.3261 28.3292 22.54 31.531L9.62 44.551C8.5148 45.6674 7.89484 47.175 7.89484 48.746C7.89484 50.317 8.5148 51.8245 9.62 52.941L11.47 54.801C12.0169 55.3553 12.6685 55.7955 13.3869 56.0959C14.1053 56.3963 14.8763 56.551 15.655 56.551C16.4337 56.551 17.2047 56.3963 17.9231 56.0959C18.6415 55.7955 19.2931 55.3553 19.84 54.801L32.74 41.801C35.5304 42.864 38.5452 43.2005 41.5013 42.779C44.4574 42.3574 47.258 41.1916 49.64 39.391C52.8811 36.8982 55.1742 33.3736 56.1397 29.4003C57.1053 25.4271 56.6856 21.2432 54.95 17.541Z" fill="#fdf7f7"/> </g>

</svg>
                  <p className='para-1'>Settings</p>
                </div>
              </div>
              <div className='div-8'>
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

      {/* Overlay Message Box */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Select an Alert Message</h2>
            <form onSubmit={handleSubmit}>
              <select
                value={selectedAlert}
                onChange={handleSelectChange}
                className="border border-gray-300 p-2 mb-4 w-full"
                required
              >
                <option value="" disabled>Select an alert message</option>
                {alertOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Submit
              </button>
              <button onClick={handleClose} className="bg-red-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </form>
            {alertMessage && <p className="mt-4 text-green-600">{alertMessage}</p>}
          </div>
        </div>
      )}
              </div>
              <div
                  className='div-8'
                  onClick={() => handleItemClick('Team')}
                >
              <svg width="25px" height="25px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#f8f7f7"/> </g>

</svg>
                <p className='para-1'>Add team</p>
              </div>
              <div
                  className='div-8'
                  onClick={() => handleItemClick('Feedback')}
                >
              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M16 1C17.6569 1 19 2.34315 19 4C19 4.55228 18.5523 5 18 5C17.4477 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H16C16.5523 21 17 20.5523 17 20V19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19V20C19 21.6569 17.6569 23 16 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H16Z" fill="#ededed"/> <path fillRule="evenodd" clipRule="evenodd" d="M20.7991 8.20087C20.4993 7.90104 20.0132 7.90104 19.7133 8.20087L11.9166 15.9977C11.7692 16.145 11.6715 16.3348 11.6373 16.5404L11.4728 17.5272L12.4596 17.3627C12.6652 17.3285 12.855 17.2308 13.0023 17.0835L20.7991 9.28666C21.099 8.98682 21.099 8.5007 20.7991 8.20087ZM18.2991 6.78666C19.38 5.70578 21.1325 5.70577 22.2134 6.78665C23.2942 7.86754 23.2942 9.61999 22.2134 10.7009L14.4166 18.4977C13.9744 18.9398 13.4052 19.2327 12.7884 19.3355L11.8016 19.5C10.448 19.7256 9.2744 18.5521 9.50001 17.1984L9.66448 16.2116C9.76728 15.5948 10.0602 15.0256 10.5023 14.5834L18.2991 6.78666Z" fill="#ededed"/> <path d="M5 7C5 6.44772 5.44772 6 6 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H6C5.44772 8 5 7.55228 5 7Z" fill="#ededed"/> <path d="M5 11C5 10.4477 5.44772 10 6 10H10C10.5523 10 11 10.4477 11 11C11 11.5523 10.5523 12 10 12H6C5.44772 12 5 11.5523 5 11Z" fill="#ededed"/> <path d="M5 15C5 14.4477 5.44772 14 6 14H7C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6C5.44772 16 5 15.5523 5 15Z" fill="#ededed"/> </g>

</svg>
                <p className='para-1'>Feedback</p>
              </div>
              <div className='div-8'>
              <svg fill="#fafafa" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 236 256" enableBackground="new 0 0 236 256">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M2,118v27h23v109h185V145h24v-27H2z M118.42,233.59c-6.07,0-10.98-4.92-10.98-10.99c0-6.06,4.91-10.98,10.98-10.98 c6.07,0,10.99,4.92,10.99,10.98C129.41,228.67,124.49,233.59,118.42,233.59z M143.96,181.67c-1.49,2.09-4.33,4.81-8.54,8.1 l-4.17,3.25c-2.29,1.76-3.77,3.81-4.53,6.17c-0.48,1.49-0.72,3.81-0.76,6.94h-15.92c0.24-6.62,0.88-11.19,1.89-13.71 c1-2.53,3.64-5.45,7.85-8.74l4.29-3.37c1.41-1.08,2.57-2.24,3.41-3.49c1.56-2.12,2.33-4.49,2.33-7.09c0-2.97-0.89-5.7-2.61-8.14 c-1.76-2.45-4.93-3.69-9.54-3.69c-4.53,0-7.78,1.52-9.66,4.53c-1.69,2.69-2.61,5.45-2.81,8.34v0.16c0,0.28,0,0.6-0.04,0.88 c-0.22,2.15-1.23,4.05-2.74,5.42s-3.51,2.2-5.72,2.2c-4.41,0-8.02-3.33-8.46-7.62c0,0,0.08-2.12,0.16-2.72 c0.93-9.75,4.77-16.76,11.47-21.05c4.61-2.97,10.3-4.45,17.04-4.45c8.86,0,16.23,2.08,22.09,6.33c5.85,4.21,8.78,10.51,8.78,18.88 C147.77,173.9,146.48,178.19,143.96,181.67z M146,52H89c-15.59,0-28,13.41-28,29v32h20V86c0-1.71,1.29-3,3-3s3,1.29,3,3v27h61V86 c0-1.71,1.29-3,3-3s3,1.29,3,3v27h20V81C174,65.51,161.49,52,146,52z M117.5,2c-12.47,0-22.63,10.16-22.63,22.63 c0,12.46,10.06,22.62,22.63,22.62c12.37,0,22.62-10.16,22.62-22.62C140.12,12.16,129.97,2,117.5,2z"/> </g>

</svg>
                <p className='para-1'>Help desk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='div-9'>
        <div className='container'>
          <div className='content'>
            <p className='title'>Hello, Soren</p>
            <p className='subtitle'>Here's what's happening with your mine ops right now</p>
          </div>
          <button className='button' onClick={handleClick}>
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

      {/* Overlay Message Box */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="titles" >Select an Alert Message</h2>
            <form onSubmit={handleSubmit}>
              <select
                value={selectedAlert}
                onChange={handleSelectChange}
                className="border border-gray-300 p-2 mb-4 w-full"
                required
              >
                <option value="" disabled>Select an alert message</option>
                {alertOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Submit
              </button>
              <button onClick={handleClose} className="bg-red-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </form>
            {alertMessage && <p className="mt-4 text-green-600">{alertMessage}</p>}
          </div>
        </div>
      )}
        </div>

        {/* Render the selected component here */}
        {renderComponent()}
      </div>
    </div>
  );
};

export default DashBoard;
