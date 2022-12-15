import { Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home, Header, Footer, Journalism, DataViz, WebDevelopment, Contact, About, Resume} from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/journalism" element={<Journalism/>}></Route>
        <Route path="/webdevelopment" element={<WebDevelopment/>}></Route>
        <Route path="/dataviz" element={<DataViz/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>




      </Routes>
      <Footer />
    </>
  );
}

export default App;
