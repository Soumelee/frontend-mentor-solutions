import { useState,useEffect} from 'react';
import hamburger from '../assets/images/icon-menu.svg';
import close from '../assets/images/icon-menu-close.svg';
import NavItems from './NavItems';
const Navbar = () => { 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth < 800);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleResize = () => {
    setWindowWidth(window.innerWidth < 800);
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

    <nav className='navbar'>      
      {windowWidth ? (        
          <img onClick={handleClick} className="hamburger"
          src={mobileNavOpen ? close : hamburger}
          alt={mobileNavOpen ? 'close menu' : 'open menu'}
          /> 
      ) : (
        <div className='desktopNav'>
          <NavItems/>
        </div>        
      )}

      {windowWidth && mobileNavOpen && (
        <div className="mobileNav">           
          <NavItems/>        
        </div>
      )}      
    </nav>    
  )
}

export default Navbar