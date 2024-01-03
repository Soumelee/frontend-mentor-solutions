import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Topbar from "./components/Topbar"

function App() {
  return (
    <>
      <Topbar/>
      <main>
        <Hero/>
        <Experience/>
        <Projects/>
      </main>
      <footer>
        <Contact/>
      </footer>
    </>
  )
}

export default App
