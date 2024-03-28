import PropTypes from 'prop-types';
import ellipsis from '/images/icon-ellipsis.svg'
const cardColors = {
    Work: '#FF8C66',
    Study: '#FF5C7C',
    Play: '#56C2E6',
    Exercise: '#4ACF81',
    Social: '#7536D3',
    SelfCare: '#F1C65B',
};
const Card = (props) => {
    return (
        <div className='w-full md:w-60 rounded-xl'>
            <div
                // className={`bg-${props.title.split(" ").join("")} rounded-xl h-20`} 
                className='rounded-xl h-20'
                style={{ backgroundColor: cardColors[props.title.split(" ").join("")] }}
            >
                <img src={props.img} className='rounded-xl float-right' />
            </div>
            <div className='hover:bg-Desaturated-blue-2 hover:cursor-pointer bg-Dark-blue rounded-xl p-6 -mt-4 z-10 relative '>
                <div className='mb-4 flex items-center justify-between'>
                    <h2>{props.title}</h2>
                    <img src={ellipsis} />

                </div>
                <div className='flex justify-between items-center md:block'>
                    <h3 className='text-3xl md:text-5xl mb-1'>{props.current}hrs</h3>
                    <span className='text-Pale-Blue'> {props.type === 'weekly' ? 'Last week' : props.type === 'monthly' ? 'Last month' : 'Yesterday'} - {props.previous}hrs</span>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    previous: PropTypes.number.isRequired
}
Card.defaultProps = {
    title: 'Work',
    img: '/images/icon-play.svg',
    type: 'weekly',
    current: 32,
    previous: 36
}
export default Card