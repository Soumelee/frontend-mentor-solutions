// import React from 'react'
import { useState, useEffect } from "react";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='about'>
      {windowWidth <= 425 ? (
        <img src="../src/assets/images/mobile/image-interactive.jpg" alt="" />
      ) : (
        <img src="../src/assets/images/desktop/image-interactive.jpg" alt="" />
      )}
      <div>
        <h2>The leader in interactive VR</h2>
        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
          projects for some of the best companies around the globe. Our award-winning
          creations have transformed businesses through digital experiences that bind
          to their brand.</p>
      </div>
    </div>
  )
}
