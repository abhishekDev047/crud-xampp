import React from 'react';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create';
import Read from './components/Read';
import Edit from './components/Edit';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/create' element = {<Create/>} />
      <Route path='/read/:id' element = {<Read/>} />
      <Route path='/edit/:id' element = {<Edit/>} />

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App