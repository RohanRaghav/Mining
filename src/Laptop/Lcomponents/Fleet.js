import React, { useState } from 'react';

const Fleet = () => {
  // State to store user inputs and data
  const [dumper, setDumper] = useState('');
  const [tireType, setTireType] = useState('');
  const [tubeInstallationDate, setTubeInstallationDate] = useState('');
  const [tireInstallationDate, setTireInstallationDate] = useState('');
  const [tireId, setTireId] = useState('');
  const [savedData, setSavedData] = useState([]); // To save data to 'database'

  // Simulated data for dumpers
  const dumperOptions = {
    'CAT 797F': {
      image: 'https://example.com/cat797f.jpg', // Replace with real image URL
    },
    'Komatsu 980E': {
      image: 'https://example.com/komatsu980e.jpg', // Replace with real image URL
    },
  };

  // Simulated data for tire types
  const tireOptions = {
    'Michelin XDR': {
      image: 'https://example.com/michelin-xdr.jpg', // Replace with real image URL
    },
    'Bridgestone VRPS': {
      image: 'https://example.com/bridgestone-vrps.jpg', // Replace with real image URL
    },
  };

  // Handle dumper selection
  const handleDumperChange = (e) => {
    setDumper(e.target.value);
  };

  // Handle tire type selection
  const handleTireTypeChange = (e) => {
    setTireType(e.target.value);
  };

  // Handle saving the data
  const handleSave = () => {
    const newEntry = {
      dumper,
      tireType,
      tubeInstallationDate,
      tireInstallationDate,
      tireId,
    };
    setSavedData([...savedData, newEntry]); // Simulate saving to database
    alert('Data saved successfully!');
    // Reset fields after saving
    setDumper('');
    setTireType('');
    setTubeInstallationDate('');
    setTireInstallationDate('');
    setTireId('');
  };

  return (
    <div className="fleet-container">
      <h1 className="titles">Fleet Management</h1>
      
      <div className="form-image-container">
        {/* Form Section */}
        <div className="form-container">
          {/* Dumper Selection */}
          <div className='direction'>
            <label className="label-texts">Select Dumper:</label>
            <select value={dumper} onChange={handleDumperChange} className="form-input">
              
              <option value="">-- Select Dumper --</option>
              {Object.keys(dumperOptions).map((dumperOption) => (
                <option key={dumperOption} value={dumperOption}>{dumperOption}</option>
              ))}
            </select>
          </div>

          {/* Tire Type Selection */}
          <div className='direction'>
            <label className="label-texts">Select Tire Type:</label>
            <select value={tireType} onChange={handleTireTypeChange} className="form-input">
              <option value="">-- Select Tire Type --</option>
              {Object.keys(tireOptions).map((tireOption) => (
                <option key={tireOption} value={tireOption}>{tireOption}</option>
              ))}
            </select>
          </div>

          {/* User input for tire details */}
          {dumper && tireType && (
            <div>
              <div className='direction'>
                <label className="label-texts">Tube Installation Date:</label>
                <input className="form-input"
                  type="date" 
                  value={tubeInstallationDate} 
                  onChange={(e) => setTubeInstallationDate(e.target.value)} 
                  required
                />
              </div>
              <div className='direction'>
                <label className="label-texts">Tire Installation Date:</label>
                <input className="form-input"
                  type="date" 
                  value={tireInstallationDate} 
                  onChange={(e) => setTireInstallationDate(e.target.value)} 
                  required
                />
              </div>
              <div className='direction'>
                <label className="label-texts">Tire ID:</label>
                <input className="form-input"
                  type="text" 
                  value={tireId} 
                  onChange={(e) => setTireId(e.target.value)} 
                  required
                />
              </div>

              <button onClick={handleSave}>Save Data</button>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="image-container">
          {/* Display selected dumper image */}
          {dumper && (
            <div>
              <h2 style={{color:'white'}}>Dumper Image</h2>
              <img src={dumperOptions[dumper].image} alt={`${dumper} image`} />
            </div>
          )}

          {/* Display selected tire type image */}
          {tireType && (
            <div>
              <h2 style={{color:'white'}}>Tire Image</h2>
              <img src={tireOptions[tireType].image} alt={`${tireType} image`} />
            </div>
          )}
        </div>
      </div>

      {/* Show saved data */}
      {savedData.length > 0 && (
        <div className="saved-data">
          <h3>Saved Fleet Data</h3>
          {savedData.map((entry, index) => (
            <div key={index}>
              <p><strong>Dumper:</strong> {entry.dumper}</p>
              <p><strong>Tire Type:</strong> {entry.tireType}</p>
              <p><strong>Tube Installation Date:</strong> {entry.tubeInstallationDate}</p>
              <p><strong>Tire Installation Date:</strong> {entry.tireInstallationDate}</p>
              <p><strong>Tire ID:</strong> {entry.tireId}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fleet;
