import React, { useState } from 'react';
import Overview from './Overview';
import Dispatch from './Dispatch';
import Hauling from './Hauling';
import Production from './Production';

const Dash = () => {
  const [activeTab, setActiveTab] = useState('Overview'); // Default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set the active tab
  };

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'Dispatch':
        return <Dispatch />;
      case 'Hauling':
        return <Hauling />;
      case 'Production':
        return <Production />;
      default:
        return <Overview />; // Default to Overview
    }
  };

  return (
    <div>
      <div className="pb-3">
        <div className="tabs-container">
          <a
            className={`tab-link ${activeTab === 'Overview' ? 'active' : ''}`}
            href="#"
            onClick={() => handleTabClick('Overview')}
          >
            <p >Overview</p>
          </a>
          <a
            className={`tab-link ${activeTab === 'Dispatch' ? 'active' : ''}`}
            href="#"
            onClick={() => handleTabClick('Dispatch')}
          >
            <p>Dispatch</p>
          </a>
          <a
            className={`tab-link ${activeTab === 'Hauling' ? 'active' : ''}`}
            href="#"
            onClick={() => handleTabClick('Hauling')}
          >
            <p>Hauling</p>
          </a>
          <a
            className={`tab-link ${activeTab === 'Production' ? 'active' : ''}`}
            href="#"
            onClick={() => handleTabClick('Production')}
          >
            <p>Production</p>
          </a>
        </div>
      </div>

      {/* Render the content based on the selected tab */}
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dash;
