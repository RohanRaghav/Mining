import React, {useState} from 'react'

const Insights = () => {
  const [meanLoad, setMeanLoad] = useState('');
  const [averageSpeed, setAverageSpeed] = useState('');
  const [tkph, setTkph] = useState(0);

  // Function to handle TKPH calculation
  const calculateTkph = () => {
    // Parse the inputs as numbers
    const load = parseFloat(meanLoad);
    const speed = parseFloat(averageSpeed);

    // Check if inputs are valid numbers before calculating
    if (!isNaN(load) && !isNaN(speed)) {
      const result = (load * speed) / 1000;
      setTkph(result.toFixed(2)); // Update TKPH and format to 2 decimal places
    } else {
      alert('Please enter valid numbers for both fields.');
    }
  };
  return (
    <div>
            <div className="containers">
        <div className="layout-content-containers">
          <div className="headers">
            <div className="title-containers">
              <p className="titles">TKPH Calculator</p>
              <p className="descriptions">
                Calculate the TKPH for your tire based on the mean load and average speed
              </p>
            </div>
          </div>

          <div className="input-containers">
            <label className="labels">
              <p className="label-texts">Mean Load (kg)</p>
              <div className="input-wrappers">
                <input
                  className="form-inputs"
                  value={meanLoad}
                  onChange={(e) => setMeanLoad(e.target.value)} // Update mean load state
                  placeholder="Enter mean load"
                />
                <div className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H40V64H187.72l42.66,64Z"></path>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <div className="input-containers">
            <label className="labels">
              <p className="label-texts">Average Speed (kph)</p>
              <div className="input-wrappers">
                <input
                  className="form-inputs"
                  value={averageSpeed}
                  onChange={(e) => setAverageSpeed(e.target.value)} // Update average speed state
                  placeholder="Enter average speed"
                />
                <div className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"></path>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          <h3 className="tkph-titles">TKPH</h3>
          <p className="tkph-values">{tkph}</p> {/* Display calculated TKPH */}

          <div className="button-containers">
            <button className="calculate-buttons" onClick={calculateTkph}>
              <span>Calculate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
