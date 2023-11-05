// import React from 'react'
import Card from "./Card";
import { useState, useEffect } from "react";

import mobileDeepEarth from '../assets/images/mobile/image-deep-earth.jpg';
import mobileSoccer from '../assets/images/mobile/image-soccer-team.jpg';
import mobileNight from '../assets/images/mobile/image-night-arcade.jpg';
import mobileGrid from '../assets/images/mobile/image-grid.jpg';
import mobileAbove from '../assets/images/mobile/image-from-above.jpg';
import mobilePocket from '../assets/images/mobile/image-pocket-borealis.jpg';
import mobileCuriosity from '../assets/images/mobile/image-curiosity.jpg';
import mobileFish from '../assets/images/mobile/image-fisheye.jpg';

import desktopDeepEarth from '../assets/images/desktop/image-deep-earth.jpg';
import desktopSoccer from '../assets/images/desktop/image-soccer-team.jpg';
import desktopNight from '../assets/images/desktop/image-night-arcade.jpg';
import desktopGrid from '../assets/images/desktop/image-grid.jpg';
import desktopAbove from '../assets/images/desktop/image-from-above.jpg';
import desktopPocket from '../assets/images/desktop/image-pocket-borealis.jpg';
import desktopCuriosity from '../assets/images/desktop/image-curiosity.jpg';
import desktopFish from '../assets/images/desktop/image-fisheye.jpg';


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
          <Card img={mobileDeepEarth} heading="deep earth" />
          <Card img={mobileNight} heading="night arcade" />
          <Card img={mobileSoccer} heading="soccer team vr" />
          <Card img={mobileGrid} heading="the grid" />
          <Card img={mobileAbove} heading="from up above vr" />
          <Card img={mobilePocket} heading="pocket borealis" />
          <Card img={mobileCuriosity} heading="The curiosity" />
          <Card img={mobileFish} heading="Make it fisheye" />
        </div>
      ) : (
        <div className="cards">
          <Card img={desktopDeepEarth} heading="deep earth" />
          <Card img={desktopNight} heading="night arcade" />
          <Card img={desktopSoccer} heading="soccer team vr" />
          <Card img={desktopGrid} heading="the grid" />
          <Card img={desktopAbove} heading="from up above vr" />
          <Card img={desktopPocket} heading="pocket borealis" />
          <Card img={desktopCuriosity} heading="The curiosity" />
          <Card img={desktopFish} heading="Make it fisheye" />
        </div>
      )}

      <button className="mobileButton">See all</button>
    </div>
  )
}
