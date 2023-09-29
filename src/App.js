import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './Menu/menu';
import Hero from './Hero/hero';
import HomePage from './HomePage/homePage';
import AboutPage from './AboutPage/aboutPage';
import LoginPage from './LoginPage/loginPage';
import Footer from './Footer/footer';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
