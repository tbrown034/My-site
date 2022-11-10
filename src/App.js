import { Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home, Header, Footer, HomeCarousel} from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <HomeCarousel></HomeCarousel>
      <Footer />
    </>
  );
}

export default App;
