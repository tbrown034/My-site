import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import {Home, Header, Footer} from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
