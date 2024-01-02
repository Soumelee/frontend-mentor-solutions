import { useEffect, useState } from 'react';
import desktopImage from '../assets/images/image-web-3-desktop.jpg';
import mobileImage from '../assets/images/image-web-3-mobile.jpg';

const TopNews = () => {
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

    const backgroundImage = windowWidth > 800 ? desktopImage : mobileImage;

    return (
        <div className="topNews">
            <div className="left">
                <div className="img" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div className='below'>
                    <h1>The Bright Future of Web 3.0?</h1>
                    <div>
                        <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
                        <br />
                        <button>Read more</button>
                    </div>
                </div>
                
            </div>
            <div className="right">
                <h2>New</h2>
                <ul>
                    <li>
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </li>
                    <li>
                        <h3>The Downsides of AI Artistry</h3>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </li>
                    <li>
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default TopNews