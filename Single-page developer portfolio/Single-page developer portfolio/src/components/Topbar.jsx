import FrontendMentorIcon from '../assets/images/icon-frontend-mentor.svg';
import GitHub from '../assets/images/icon-github.svg';
import LinkedIn from '../assets/images/icon-linkedin.svg';
import Twitter from '../assets/images/icon-twitter.svg';
function Topbar() {
    return (
        <div className='topbar'>
            <a href="">adamkeyes</a>
            <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={FrontendMentorIcon} alt="Frontend Mentor" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="Twitter" />
                </a>
            </div>
        </div>
    )
}

export default Topbar