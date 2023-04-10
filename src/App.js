import './App.css';
import Home from './components/home';
import Calculator from './components/calculator';
import Navbar from './components/nav';
import Data from './components/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
  <div className='App'>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/calculator' element={<Calculator />}/>
      <Route path='/data' element={<Data />}/>
      </Routes>
      </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
