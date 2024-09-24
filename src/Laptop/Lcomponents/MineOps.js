import React from 'react';

const MineOps = () => {
  // Static data to represent shift information
  const shiftData = [
    {
      person: 'John Doe',
      date: '2024-09-24',
      time: '08:00 AM - 04:00 PM',
      location: 'Site A',
      shiftGivenTo: 'Jane Smith',
      pdf: 'http://example.com/shift1.pdf' // Replace with your actual PDF link
    },
    {
      person: 'Alice Johnson',
      date: '2024-09-24',
      time: '04:00 PM - 12:00 AM',
      location: 'Site B',
      shiftGivenTo: 'Bob Brown',
      pdf: 'http://example.com/shift2.pdf' // Replace with your actual PDF link
    },
    {
      person: 'Mike Lee',
      date: '2024-09-25',
      time: '12:00 AM - 08:00 AM',
      location: 'Site C',
      shiftGivenTo: 'Sara White',
      pdf: '' // No PDF link available
    },
    // Add more shift data as needed
  ];

  return (
    <div className="container">
      <h1 className="titles">Mine Operations</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Person</th>
            <th>Shift Date</th>
            <th>Shift Time</th>
            <th>Location</th>
            <th>Shift Given To</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {shiftData.map((shift, index) => (
            <tr key={index}>
              <td style={{background:'grey'}}>{shift.person}</td>
              <td style={{color:'white'}}>{shift.date}</td>
              <td style={{background:'grey'}}>{shift.time}</td>
              <td style={{color:'white'}}>{shift.location}</td>
              <td style={{background:'grey'}}>{shift.shiftGivenTo}</td>
              <td style={{color:'white',textDecoration:"none"}}>
                {shift.pdf ? (
                  <a href={shift.pdf} target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:"none"}}>
                    View PDF
                  </a>
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MineOps;
