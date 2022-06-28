import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo01.png"
import useWindowDimensions from "../ScreenHook"
import { MobileHeader } from './MobileHeader'
import { Navigation } from './Navigation'


export function Header() {
    const { width, height } = useWindowDimensions()
    const [isNavbarShowing, setIsNavbarShowing] = useState(0)
    const [typeOfPosition, setTypeOfPosition] = useState("")


    
  return (
    <header className={`bg-white w-full h-20 flex justify-between items-center px-[5%] fixed top-0 z-20 shadow-md`}>
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

