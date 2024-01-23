import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Sidebar from './components/sidebar/Sidebar';
import Services from './components/services/Services';
import Portfolio from "./components/portfolio/Portfolio";


const App = () => {
  return (
   <>
   <Sidebar />
   <main className='main'>
    <Home />
    <About />
    <Services />
    <Resume />
    <Portfolio />
    <Contact />
    </main>
    </>
  
  )
}

export default App;
