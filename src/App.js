import Navbar from './layout/navbar';
import Home from './pages/home.js'
import Footer from './layout/footer';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>

      </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App;
