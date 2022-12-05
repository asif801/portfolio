import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HireMe from './components/HireMe';
import MessageIcon from './components/MessageIcon';
import Myprojects from './components/Myprojects';
import Navber from './components/Navber';
import Skills from './components/Skills';

function App() {
  return (
    <div className="">
      <MessageIcon></MessageIcon>
      <Navber></Navber>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <HireMe></HireMe>
      <Myprojects></Myprojects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
