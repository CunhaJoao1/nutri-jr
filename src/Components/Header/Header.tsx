import React, { useState } from 'react'
import logo from "../../assets/logo01.png"
import useWindowDimensions from "../ScreenHook"
import { MobileHeader } from './MobileHeader'
import { Navigation } from './Navigation'


export function Header() {
    const { width, height } = useWindowDimensions()
    
  return (
    <header className=' bg-[#121619] w-full h-16 flex justify-between items-center px-[5%] fixed top-0 z-20'>
        <img src={logo} alt="" className='w-16' />
        {
            width < 768? 
            <MobileHeader/>
       :
            <div>
                <Navigation links={["Home", "Sobre Nós", "Serviços", "Contato"]}/>
            </div>
       }
    </header>
  )
}
function useWindowSize(): { width: any; height: any } {
    throw new Error('Function not implemented.')
}

