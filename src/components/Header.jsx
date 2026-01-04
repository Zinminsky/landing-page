import React from 'react';

const Header = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/images/logo.png" alt="Active K9 Academy Logo" />
          </div>
          <nav className="navigation">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Our Services</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Us</a>
          </nav>
          <div className="social-icons">
            <div className="social-icon">
              <img src="/images/facebook-icon.svg" alt="Facebook" className="social-icon-img" />
            </div>
            <div className="social-icon">
              <img src="/images/instagram-icon.svg" alt="Instagram" className="social-icon-img" />
            </div>
            <div className="social-icon">
              <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="social-icon-img" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

