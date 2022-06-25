import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Bottom from './Components/Bottom/Bottom';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';

  
export default function RoutesWay() {
  return (
    <>
        <BrowserRouter>
            <Header/>
              <Routes>
                <Route path='/' element={<Home/>} />
              </Routes>
        </BrowserRouter>
    </>
  )
}
