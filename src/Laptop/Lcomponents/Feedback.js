import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmitted(true);
    } else {
      alert('Please enter your feedback before submitting.');
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="title">We Value Your Feedback!</h2>
      {submitted ? (
        <div className="thank-you">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please provide your feedback here..."
            className="textarea"
            required
          />
          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
