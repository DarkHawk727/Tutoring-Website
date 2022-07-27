import './App.css';
import 'bulma/css/bulma.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import './pages/bulmaswatch.min.css';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import ComingSoon from './pages/ComingSoon';


function App() {
  return (
    <div className="App">
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
// https://dribbble.com/shots/17212527-EduGuide-Educational-Website/attachments/12315031?mode=media