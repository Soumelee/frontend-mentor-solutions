import rings from '../assets/images/pattern-rings.svg';
function Experience() {
    const skills = [
        { name: 'HTML', experience: '4 Years Experience' },
        { name: 'CSS', experience: '4 Years Experience' },
        { name: 'JavaScript', experience: '4 Years Experience' },
        { name: 'Accessibility', experience: '4 Years Experience' },
        { name: 'React', experience: '3 Years Experience' },
        { name: 'Sass', experience: '3 Years Experience' },
      ];
  return (
    <div className="experience">
        <img className='rings' src={rings} alt="profile picture" />
        <ul>
            {skills.map((skill)=>(
                <li key={skill}>
                    <h2>{skill.name}</h2>
                    <p>{skill.experience}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Experience