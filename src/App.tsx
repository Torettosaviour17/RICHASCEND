// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import Insights from "./pages/Insights";
// import Contact from "./pages/Contact";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
        <Navbar />
        <div className="pt-24 px-4 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/insights" element={<Insights />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
