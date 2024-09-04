import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/InTro/Intro";
import Skills from "./components/SkiLLs/Skills";
import Works from "./components/WOrks/Works";
import Experience from "./components/EXperience/Experience";
import Lang from "./components/LAngs/Lang";
import Contact from "./components/COntacts/Contact";
import Footer from "./components/FOoter/Footer";





function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Experience/>
     <Lang/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
