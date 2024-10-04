import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './Components/Regular Compos/Home';
import AboutUs from './Components/Regular Compos/AboutUs';
import Chatbot from './Components/Regular Compos/Chatbot';
import Explore from './Components/Regular Compos/Explore';
import ExoplanetOrbit from './Components/Reusable Compos/ExoplanetOrbit';
import { Canvas } from '@react-three/fiber';
import ExampleExo from './Components/Reusable Compos/ExampleExo';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<AboutUs/>} path='/about'/>
        <Route element={<Chatbot/>} path='/star'/>
        <Route element={<Explore/>} path='/explore'/>
        <Route element={<ExoplanetOrbit/>} path='/orbitExo'/>
        <Route element={<ExampleExo/>} path='/example'/>
        
      </Routes>
    </Router>
    
  );
}

export default App;


  
