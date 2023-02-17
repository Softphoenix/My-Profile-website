import './App.css';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import  Home  from './Pages/Home';
import { About } from './Pages/About';
import { Portfolio } from './Pages/Portfolio';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
