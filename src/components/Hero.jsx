import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Top Dog Training Classes In Singapore</h1>
            <p className="hero-description">
              At Active K9 Academy, we firmly believe that every dog has the potential to be great. Our dog training classes in Singapore focus on helping dogs and their owners achieve success together. Our human-centered approach acknowledges the fact that the success of dog training is in fact dependent on the human.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="/images/hero-image.svg" alt="Dog Training" />
          </div>
        </div>
      </div>
      <div className="hero-background-decoration"></div>
    </section>
  );
};

export default Hero;


