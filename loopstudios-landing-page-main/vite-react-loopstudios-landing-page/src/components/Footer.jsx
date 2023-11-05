// import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a><img src="../src/assets/images/logo.svg" alt="loopstudios" /></a>
        <ul>                   
          <li><img src="../src/assets/images/icon-facebook.svg" alt="facebook" /></li>
          <li><img src="../src/assets/images/icon-twitter.svg" alt="twiter" /></li>
          <li><img src="../src/assets/images/icon-pinterest.svg" alt="pinterest" /></li>
          <li><img src="../src/assets/images/icon-instagram.svg" alt="instagram" /></li>
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
          <li><img src="../src/assets/images/icon-facebook.svg" alt="facebook" /></li>
          <li><img src="../src/assets/images/icon-twitter.svg" alt="twiter" /></li>
          <li><img src="../src/assets/images/icon-pinterest.svg" alt="pinterest" /></li>
          <li><img src="../src/assets/images/icon-instagram.svg" alt="instagram" /></li>
        </ul>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="#">Soumili Mondal</a>.
      </div>
    </footer>
  )
}
