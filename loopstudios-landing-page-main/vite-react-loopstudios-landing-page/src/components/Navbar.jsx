import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth < 1000);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth < 1000);
  };

  const handleClick = () => {
    // Toggle the mobileNavOpen state to show/hide mobile navigation
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleScroll = () => {
    if (mobileNavOpen) {
      // Close the mobile navigation when scrolling
      setMobileNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav>
      <a><img src={logo} alt="loopstudios" /></a>
      {windowWidth ? (
        <img onClick={handleClick} className="hamburger" src={hamburger} alt="nav menu" />
      ) : (
        <ul className="desktopNav">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      )}

      {windowWidth && mobileNavOpen && (
        <div className="mobileNav">
          <div>
            <img src={logo} alt="loopstudios" />            
            <img onClick={handleClick} src={close} alt="close" />
          </div>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
