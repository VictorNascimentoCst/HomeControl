import Navbar from './layout/navbar';
import Home from './pages/home.js'
import Footer from './layout/footer';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import GastosFixos from './pages/gastosFixos';
import ListaMercado from './pages/listaMercado';
import Economias from './pages/economias';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/gastosfixos' element={<GastosFixos/>}/>
        <Route path='/listamercado' element={<ListaMercado/>}/>
        <Route path='/economias' element={<Economias/>}/>
      </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App;
