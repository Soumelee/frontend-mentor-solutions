// import React from 'react'
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Creations() {
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
    <div className='creations'>
      <div className="heading">
        <h2>Our creations</h2>
        <button className="desktopButton">See all</button>
      </div>
      
      {windowWidth <= 425 ? (
        <div className="cards">
        <Card img="../src/assets/images/mobile/image-deep-earth.jpg" heading="deep earth" />
        <Card img="../src/assets/images/mobile/image-night-arcade.jpg" heading="night arcade" />
        <Card img="../src/assets/images/mobile/image-soccer-team.jpg" heading="soccer team vr" />
        <Card img="../src/assets/images/mobile/image-grid.jpg" heading="the grid" />
        <Card img="../src/assets/images/mobile/image-from-above.jpg" heading="from up above vr" />
        <Card img="../src/assets/images/mobile/image-pocket-borealis.jpg" heading="pocket borealis" />
        <Card img="../src/assets/images/mobile/image-curiosity.jpg" heading="The curiosity" />
        <Card img="../src/assets/images/mobile/image-fisheye.jpg" heading="Make it fisheye" />
      </div>
      ) : (
        <div className="cards">
        <Card img="../src/assets/images/desktop/image-deep-earth.jpg" heading="deep earth" />
        <Card img="../src/assets/images/desktop/image-night-arcade.jpg" heading="night arcade" />
        <Card img="../src/assets/images/desktop/image-soccer-team.jpg" heading="soccer team vr" />
        <Card img="../src/assets/images/desktop/image-grid.jpg" heading="the grid" />
        <Card img="../src/assets/images/desktop/image-from-above.jpg" heading="from up above vr" />
        <Card img="../src/assets/images/desktop/image-pocket-borealis.jpg" heading="pocket borealis" />
        <Card img="../src/assets/images/desktop/image-curiosity.jpg" heading="The curiosity" />
        <Card img="../src/assets/images/desktop/image-fisheye.jpg" heading="Make it fisheye" />
      </div>
      )}
      
      <button className="mobileButton">See all</button>
    </div>
  )
}
