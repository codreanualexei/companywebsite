import './App.css';
import { Footer, Navbar } from './components';
import {Routes, Route } from 'react-router-dom';
import { About, Contact, Home } from './pages';
import { IoIosArrowDropupCircle } from 'react-icons/io'


function App() {
  return (
    <div className="app" id='top'>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/about-us' element={<About/>}/>
  </Routes>
  <Footer/>
<a href="#top">
  <IoIosArrowDropupCircle className="app__chatIcon" />
  </a>
    </div>
  );
}

export default App;
