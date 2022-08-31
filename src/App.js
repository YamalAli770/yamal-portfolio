import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Maintenance from "./Components/Maintenance";

function App() {
  const maintenance = true;
  return (
    <>
      {maintenance ? (<Maintenance />) :(
        <div className="App">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
