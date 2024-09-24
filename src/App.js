import React, { useState, useEffect } from 'react';
import './App.css';
import Landing from './Mobile/Landing';
import LandingL from './Laptop/LandingL';

// Mobile component
function MobileComponent() {
  return <div><Landing /></div>;
}

// Desktop component
function DesktopComponent() {
  return <div><LandingL /></div>;
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set screen size based on window width
      setIsMobile(window.innerWidth < 768); // Mobile screen width is typically less than 768px
    };

    handleResize(); // Run on component mount
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  return (
    <div>
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
}

export default App;
