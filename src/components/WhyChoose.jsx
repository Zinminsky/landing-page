import React, { useEffect, useRef } from 'react';

const WhyChoose = () => {
  const featureCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    featureCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      }
    });

    return () => {
      featureCardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const features = [
    {
      id: 1,
      title: 'We Shape Their Behavior Quickly',
      description: 'Our certified dog trainers have been known to shape your dog\'s behavior within a short period of time. See improvements after each session!',
      wide: true
    },
    {
      id: 2,
      title: 'Positive & Fun Environment',
      description: 'We believe that both owner and dog should enjoy learning together. Developing a stronger bond between the two leads to happier & healthier life'
    },
    {
      id: 3,
      title: 'We Are Expert In Our Field',
      description: 'We develop dog training techniques and programs based on deep understanding of canine and human psychology'
    },
    {
      id: 4,
      title: 'We Are With You\nAll The Way',
      description: 'We understand that there may be challenges and we are here to support you'
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="why-choose-content">
          <div className="why-choose-header">
            <h2 className="section-title-left">Why Choose<br />ACTIVEK9_ACADEMY?</h2>
          </div>
          <div className="why-choose-grid">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`feature-card ${feature.wide ? 'feature-card-wide' : ''}`}
                ref={el => featureCardsRef.current[index] = el}
              >
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                {!feature.wide && <button className="btn-outline">View More</button>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="why-choose-background"></div>
    </section>
  );
};

export default WhyChoose;

