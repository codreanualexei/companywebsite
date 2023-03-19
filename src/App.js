import './App.css';
import { Footer, Navbar } from './components';
import {Routes, Route } from 'react-router-dom';
import { Contact, Home } from './pages'


function App() {
  return (
    <div className="app">
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
