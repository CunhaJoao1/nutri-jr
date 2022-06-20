import React, { useState } from 'react'
import logo from "../../../assets/logo01.png"
import Hamburger from 'hamburger-react'
import {Navigation} from './Navigation'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='bg-[#121619] w-full h-16 flex justify-between items-center px-[5%] relative'>
        <img src={logo} alt="" className='w-16' />

        <div className='fixed right-[5%] z-40'>
            <Hamburger color='gray' toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>

        {isMenuOpen&& 
            <div className='fixed z-30 bg-[#121619] right-0 top-0 h-screen w-56 ring-gray-700 ring-1'>
                <Navigation links={["Home", "Sobre Nós", "Serviços", "Contato"]}/>
            </div>
        }
    </header>
  )
}
