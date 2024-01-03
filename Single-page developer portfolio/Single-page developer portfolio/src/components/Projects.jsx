import project1 from '../assets/images/thumbnail-project-1-small.webp'
import project2 from '../assets/images/thumbnail-project-2-small.webp'
import project3 from '../assets/images/thumbnail-project-3-small.webp'
import project4 from '../assets/images/thumbnail-project-4-small.webp'
import project5 from '../assets/images/thumbnail-project-5-small.webp'
import project6 from '../assets/images/thumbnail-project-6-small.webp'
import Project from './Project'
function Projects() {
  return (
    <div className="projects">
        <div className="heading">
            <h2>Projects</h2>
            <a href="" className="contactButton">Contact me</a>
        </div>
        <div className="showcase">
          <Project img={project1} name="DESIGN PORTFOLIO" technology="HTML CSS"/>
          <Project img={project2} name="E-LEARNING LANDING PAGE" technology="HTML CSS"/>
          <Project img={project3} name="TODO WEB APP" technology="HTML CSS JavaScript"/>
          <Project img={project4} name="ENTERTAINMENT WEB APP" technology="HTML CSS JavaScript"/>
          <Project img={project5} name="MEMORY GAME" technology="HTML CSS JavaScript"/>
          <Project img={project6} name="ART GALLERY SHOWCASE" technology="HTML CSS JavaScript"/>
        </div>        
    </div>
  )
}

export default Projects