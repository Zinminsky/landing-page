import React from 'react';

const KeyOutcomes = () => {
  const outcomes = [
    'Teach your dog to listen to your commands',
    'Learn techniques to handle your dog\'s behavior',
    'Teach your dog to be calm around people and other dogs',
    'Have a stronger & happier bond between you and your dog'
  ];

  return (
    <section className="key-outcomes">
      <div className="container">
        <h2 className="section-title-center">Key Outcomes That You Can Look Forward To:</h2>
        <div className="outcomes-content">
          <div className="outcomes-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M32 0L40.8 20.41L64 20.41L44.8 33.18L53.6 53.59L32 40.82L10.4 53.59L19.2 33.18L0 20.41L23.2 20.41L32 0Z" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="outcomes-text">
            <h3 className="outcomes-subtitle">With Our Dog Training Programme</h3>
            <ul className="outcomes-list">
              {outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyOutcomes;

