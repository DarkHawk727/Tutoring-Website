import "./App.scss";
import "bulma/css/bulma.min.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/TutoringSignUpForm/Contact";
import Jobs from "./pages/JobApplication/Jobs";
import TempPage from "./pages/TutoringSignUpForm/TempPage";
// import Resources from './pages/Resources/Resources';
import FAQ from "./pages/FAQ";
import ComingSoon from "./pages/ComingSoon";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDUclMzSAW3WlMNtGBaNNfnShCA9TN5WDI",
    authDomain: "matt-tutoring-website.firebaseapp.com",
    projectId: "matt-tutoring-website",
    storageBucket: "matt-tutoring-website.appspot.com",
    messagingSenderId: "54891148698",
    appId: "1:54891148698:web:3210c75c301af29beb3623",
    measurementId: "G-G91TY9E063"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <div className="App has-navbar-fixed-top">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<TempPage />} />
        <Route path="/jobs" element={<ComingSoon />} />
        <Route path="/resources" element={<ComingSoon />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
