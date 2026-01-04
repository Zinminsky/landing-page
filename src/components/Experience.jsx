import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="about">
      <div className="container">
        <div className="experience-content">
          <div className="experience-image">
            <img src="/images/section-image-1.svg" alt="Dog Training Experience" />
          </div>
          <div className="experience-text">
            <h2 className="section-title-left">We've Experienced It All</h2>
            <p className="experience-description">
              Dogs that...
Have toilet training problems
Doesn't listen to your commands|
Pulls on a leash
Gets overly excited or reactive with other dogs

Coupled with stress and lack of time, it can be really be frustrating for dog owners.
            </p>
            <button className="btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

