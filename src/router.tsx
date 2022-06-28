import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AboutSection from './Components/About/AboutSection';
import ServicesSection from './Components/Areas/ServicesSection';
import Bottom from './Components/Bottom/Bottom';
import ContatoSection from './Components/Contact/ContatoSection';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';

  
export default function RoutesWay() {
  return (
    <>
        <BrowserRouter>
            <Header/>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre-nos' element={<AboutSection/>} />
                <Route path='/servicos' element={<ServicesSection/>} />
                <Route path='/contato' element={<ContatoSection/>} />

              </Routes>
        </BrowserRouter>
    </>
  )
}
