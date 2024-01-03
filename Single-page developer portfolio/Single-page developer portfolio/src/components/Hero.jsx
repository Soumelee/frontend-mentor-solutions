import profilePic from '../assets/images/image-profile-desktop.webp';
import circle from '../assets/images/pattern-circle.svg';
import rings from '../assets/images/pattern-rings.svg';
function Hero() {
    return (
        <div className='hero'>            
            <img className='pp' src={profilePic} alt="profile picture" />
            <img className='circle' src={circle} alt="profile picture" />                      
            <img className='rings' src={rings} alt="profile picture" />
            <h1>
                Nice to meet you! 
                I&apos;m <span> Adam Keyes.</span>
            </h1>
            <p>Based in the UK, I&apos;m a front-end developer
                <br />
                passionate about building accessible web apps
                <br />that users love.</p>
            <a href='' className='contactButton'>Contact me</a>
        </div>
    )
}

export default Hero