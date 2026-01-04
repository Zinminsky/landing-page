import React, { useState } from 'react';

const HumanFocused = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for your interest! We will contact you soon.');
      setEmail('');
    }
  };

  return (
    <section className="human-focused" id="contact">
      <div className="container">
        <div className="human-focused-content">
          <div className="human-focused-text">
            <h2 className="human-focused-title">A Human Focused Approach</h2>
            <p className="human-focused-description">
              Instead of focusing solely on your dog, we focus on you as well – the owner.
After all, you are the one who will be living with your dog day in and day out. Our training methods are designed to help you better understand your dog so that you can more effectively engage with them.
Dogs communicate primarily through body language. When you give verbal commands to your dog, they may not register it, and it isn't always because they intentionally want to go against you.
So rather than trying to pin your dog's failure to listen on one issue, start working with your dog from the ground up, trying everything you can until the command sticks. Remember to be an effective leader; give consistent commands with body language cues, and make sure that your dog understands what you are asking it to do before assuming that your dog simply doesn't want to listen to you.
            </p>
            <div className="contact-form">
              <h3 className="form-title">Get In Touch</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-send">Send</button>
              </form>
            </div>
          </div>
          <div className="human-focused-right">
            <div className="human-focused-image">
              <img src="/images/contact-image.png" alt="Contact" />
            </div>
            <div className="map-section">
              <div className="map-content">
                <div className="map-image">
                  <img src="/images/map-screenshot.png" alt="Singapore Location" />
                  <div className="map-overlay">
                    <p className="map-location">Singapore</p>
                    <a href="#" className="map-link">View Larger Map</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quote-section">
          <p className="quote-text">" Start Understanding Your Dog Today
With Our Training Methods "</p>
        </div>
      </div>
      <div className="human-focused-background"></div>
    </section>
  );
};

export default HumanFocused;

