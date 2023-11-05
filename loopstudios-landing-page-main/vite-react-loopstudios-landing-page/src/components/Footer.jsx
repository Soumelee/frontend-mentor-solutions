// import React from 'react'
import facebook from '../assets/images/icon-facebook.svg';
import twiter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

import logo from '../assets/images/logo.svg';

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a><img src={logo} alt="loopstudios" /></a>
        <ul>
          <li><img src={facebook} alt="facebook" /></li>
          <li><img src={twiter} alt="twiter" /></li>
          <li><img src={pinterest} alt="pinterest" /></li>
          <li><img src={instagram} alt="instagram" /></li>
        </ul>
      </div>
      <div className="pages">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        <span>© 2021 Loopstudios. All rights reserved.</span>
      </div>

      <div className="socialsMobile">
        <ul>
          <li><img src={facebook} alt="facebook" /></li>
          <li><img src={twiter} alt="twiter" /></li>
          <li><img src={pinterest} alt="pinterest" /></li>
          <li><img src={instagram} alt="instagram" /></li>
        </ul>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="#">Soumili Mondal</a>.
      </div>
    </footer>
  )
}
