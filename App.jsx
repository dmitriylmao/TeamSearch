import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';



function App() {
  return (
    <div >
      
          <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/Menu' element = {<Menu/>}></Route>
              <Route path='/About' element = {<About/>}></Route>

          </Routes>
      
    </div>
  );
}

export default App;
