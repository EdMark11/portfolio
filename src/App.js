import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="spacer layer1"></div>
      <About/>
      <Skills />
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
