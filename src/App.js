import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Maintenance from "./Components/Maintenance";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const maintenance = false;
  const [theme, setTheme] = useState(() => {
    if(localStorage.getItem("theme") === null) {
      return "dark-theme";
    }
    else {
      return localStorage.getItem("theme");
    }
  });
  const toggleTheme = () => {
    setTheme((curr) => curr === 'dark-theme' ? "light-theme" : "dark-theme")
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {maintenance ? (<Maintenance />) : (
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
    </ThemeContext.Provider>
  );
}

export default App;
