import React from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  // const [img, setimg] = useState('image1.jpg'); // Initial image state
  // const [showCards, setShowCards] = useState(false); // To control when to show the cards
  // const overlayRefs = useRef([]); // For overlay references

  // // Move overlayEffect outside of useEffect
  // const overlayEffect = () => {
  //   const tl = gsap.timeline({
  //     onComplete: () => setShowCards(true), // Show cards after animation
  //   });

  //   // Animate the overlay in circular form
  //   tl.to(overlayRefs.current, {
  //     scale: 50, // Expand in circle form
  //     duration: 1.5,
  //     ease: "power2.inOut",
  //     onComplete: () => {
  //       setimg((prev) => (prev === 'image1.jpg' ? 'image2.jpg' : 'image1.jpg'));
  //     },
  //   });

  // };

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Trigger overlay effect on scroll
  //   ScrollTrigger.create({
  //     trigger: '.main-container',
  //     start: 'top top',
  //     onEnter: () => overlayEffect(),
  //   });
  // }, []);

  // // Function to handle 'Get Started' button click
  // const handleGetStarted = () => {
  //   overlayEffect();
  // };

  return (
    <div className="container">
      {/* Overlay Element */}
      {/* <div
        className="overlay"
        ref={(el) => (overlayRefs.current[0] = el)}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          transform: 'translate(0%, 0%) scale(0)',
        }}
      />
      {!showCards && (
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      )}

      {showCards && ( */}
        <div className="cards-container">
          {/* Worker Panel Card */}
          <div className="card worker-panel">
            <img className="card-image" src="Miner.png" alt="Miner" />
            <h2 className="card-title">Worker Panel</h2>
            <p className="card-description">
              Access the worker tools and resources here. Manage tasks, view notifications, and more.
            </p>
            <button className="card-button">
            <a href="/Worker">Go to Worker Panel</a></button>
          </div>

          {/* Admin Panel Card */}
          <div className="card admin-panel">
            <img className="card-image" src="efgh.jpg" alt="Admin" />
            <h2 className="card-title">Admin Panel</h2>
            <p className="card-description">
              Manage the application, view reports, and control settings from the admin panel.
            </p>
            <button className="card-button">
              <a href="/Dashboard">Go to Admin Panel</a>
            </button>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Main;
