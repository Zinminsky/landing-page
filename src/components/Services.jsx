import React, { useEffect, useRef } from 'react';

const Services = () => {
  const serviceCardsRef = useRef([]);

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

    serviceCardsRef.current.forEach(card => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      }
    });

    return () => {
      serviceCardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    { id: 1, image: '/images/service-1.png', title: 'Online class' },
    { id: 2, image: '/images/service-2.png', title: 'Private Training' },
    { id: 3, image: '/images/service-3.png', title: 'Group class' },
    { id: 4, image: '/images/service-4.png', title: 'Brain & Train' }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">What We Do<br />For Your Business</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              ref={el => serviceCardsRef.current[index] = el}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

