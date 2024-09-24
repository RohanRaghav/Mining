import React from 'react';
const Overview = () => {
  return (
    <div className="overview-container">
      <h2 className="overview-title">Website Overview</h2>
      <div className="overview-section">
        <h3 className="section-title">User Management</h3>
        <p>
          Manage users by registering new accounts, editing passwords, and removing users as needed. 
          This feature allows you to efficiently oversee all users on the platform.
        </p>
      </div>
      <div className="overview-section">
        <h3 className="section-title">Feedback Collection</h3>
        <p>
          Gather valuable feedback from users to improve the website. Users can submit their opinions and suggestions easily.
        </p>
      </div>
      <div className="overview-section">
        <h3 className="section-title">Team Collaboration</h3>
        <p>
          Collaborate with your team members by managing tasks and sharing information effectively. 
          This section provides tools to streamline teamwork.
        </p>
      </div>
    </div>
  );
};

export default Overview;
