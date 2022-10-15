import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./style/global.css";
import Header from './container/Header/Header';
import Footer from './container/Footer/Footer';
import Homepage from './container/Homepage/Homepage';

function App() {
    useEffect(() => {
        document.title = 'Elevated';
    });
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
