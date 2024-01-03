import PropTypes from 'prop-types';
function Project(props) {
  const { img, name, technology } = props;
  return (
    <div className="project">
      <div className="image">
        <img className="img" alt={`Project: ${name}`} src={img} />
        <div className='projectHovered'>
          <a href="">VIEW PROJECT</a><br />
          <a href="">VIEW CODE</a>
        </div>
      </div>

      <h3 className="name">{name}</h3>
      <p className="technology">{technology}</p>

    </div>
  )
}
Project.propTypes = {
  img: PropTypes.string.isRequired,      // Assumes 'img' is a string (URL or path) and is required
  name: PropTypes.string.isRequired,     // Assumes 'name' is a string and is required
  technology: PropTypes.string.isRequired // Assumes 'technology' is a string and is required
};
export default Project