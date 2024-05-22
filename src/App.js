import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import Contact from './Contact';
import Waitlist from './Waitlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
       <Route path='/contact-us' element={<Contact />} />
       <Route path="/waitlist-form" element={<Waitlist />} />
       <Route path="/pricing" element={<Pricing />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
