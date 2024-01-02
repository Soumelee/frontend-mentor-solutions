import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <header>
        <a href="" className="w">W.</a>
        <Navbar />
      </header>

      <main>
        <TopNews />
        <Trending />
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Soumili Mondal</a>.
      </footer>
    </>
  );
}

export default App;
