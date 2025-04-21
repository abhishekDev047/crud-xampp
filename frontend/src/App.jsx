import React from 'react';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/create';
import Read from './components/Read';
import Edit from './components/Edit';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/create' element = {<Create/>} />
      <Route path='/read' element = {<Read/>} />
      <Route path='/edit' element = {<Edit/>} />
      <Route path='/delete' element = {<Create/>} />

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App