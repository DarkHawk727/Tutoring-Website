import "./App.scss";
import "bulma/css/bulma.min.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/TutoringSignUpForm/Contact";
import Jobs from "./pages/JobApplication/Jobs";
// import Resources from './pages/Resources/Resources';
import FAQ from "./pages/FAQ";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className="App has-navbar-fixed-top">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resources" element={<ComingSoon />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
