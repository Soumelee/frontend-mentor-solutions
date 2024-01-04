import { useState } from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='card'
            style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat',          
                backgroundImage: isHovered
                    ? 
                        `linear-gradient(
                            rgba(255, 255, 255, 0.6), 
                            rgba(255, 255, 255, 0.6)
                        ),
                        url(${props.img})`
                    : 
                        `linear-gradient(
                            rgba(0, 0, 0, 0), 
                            rgba(0, 0, 0, 0.5)
                        ),
                        url(${props.img})`                        
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <h3 style={{
                color: isHovered ? 'var(--Black)': 'var(--White)'
            }}>{props.heading}</h3>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string,
    heading: PropTypes.string,
};

export default Card;

