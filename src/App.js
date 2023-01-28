import './App.css';
import Banner from './component/Banner';
import Contact from './component/Contact';
import Footer from './component/Footer';
import MailChimpForm from './component/MailChimpForm';
import NavBar from './component/NavBar';
import Projects from './component/Projects';
import Skills from './component/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init({
    offset: 300,
    duration: 2000,
  });
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
