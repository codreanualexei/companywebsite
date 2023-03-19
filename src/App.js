import './App.css';
import { Footer, Navbar } from './components';
import {Routes, Route } from 'react-router-dom';
import { Home } from './pages'


function App() {
  return (
    <div className="app">
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
