import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create particles every time the pickaxe hits the rock (in sync with the animation duration)
    const interval = setInterval(() => {
      createParticles();
    }, 1200); // Match the duration of the mining animation

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const createParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 10; i++) { // Create 10 particles per hit
      newParticles.push({
        id: Math.random(),
        left: 120 + Math.random() * 30, // Randomize the position near the rock
        top: 160 + Math.random() * 20, // Randomize the position near the rock
        animationDuration: Math.random() * 1 + 0.5, // Vary the speed of each particle
      });
    }
    setParticles(newParticles);

    // Remove particles after a short delay
    setTimeout(() => {
      setParticles([]);
    }, 800); // Match the duration of the scatter animation
  };

  return (
    <div className="loader-container">
      <div className="pickaxe">
        <div className="pickaxe-handle"></div>
        <div className="pickaxe-blade"></div>
      </div>
      <div className="rock"></div>

      {/* Render the particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDuration: `${particle.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Loader;
