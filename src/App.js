import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ScrollToTop from "./components/utilities/scrollToTop";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
      
      <Router >
        <ScrollToTop />
          <Navbar /> 

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>

          <Footer />
      </Router>
    </div>
  );
}

export default App;
