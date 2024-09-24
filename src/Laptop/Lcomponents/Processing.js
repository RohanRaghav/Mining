import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const Processing = () => {
  // Sample data for tire performance
  const tirePerformanceData = {
    labels: ['Tire 1', 'Tire 2', 'Tire 3', 'Tire 4'],
    datasets: [
      {
        label: 'Performance Rating',
        data: [85, 90, 75, 80], // Example ratings
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Sample data for air pressure and temperature
  const airPressureData = {
    labels: ['Under Pressure', 'Normal Pressure', 'Over Pressure'],
    datasets: [
      {
        label: 'Air Pressure Distribution',
        data: [10, 70, 20], // Example distribution
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  // Sample data for tire temperature
  const temperatureData = {
    labels: ['Cold', 'Warm', 'Hot'],
    datasets: [
      {
        label: 'Temperature Distribution',
        data: [20, 50, 30], // Example distribution
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="titles">Processing Statistics</h1>
      <div style={{ width: '100%', height: '400px' }}>
        <h2 className="titles">Tire Performance Ratings</h2>
        <Bar
          data={tirePerformanceData}
          options={{ maintainAspectRatio: false }}
          height={400}
          width={600}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <h2 className="titles">Air Pressure Distribution</h2>
        <Pie
          data={airPressureData}
          options={{ maintainAspectRatio: false }}
          height={400}
          width={600}
        />
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <h2 className="titles">Tire Temperature Distribution</h2>
        <Pie
          data={temperatureData}
          options={{ maintainAspectRatio: false }}
          height={400}
          width={600}
        />
      </div>
    </div>
  );
};

export default Processing;
