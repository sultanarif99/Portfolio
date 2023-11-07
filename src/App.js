import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
