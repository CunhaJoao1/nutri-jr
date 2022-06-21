import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import { Navigation } from './Navigation'

export function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

        <>
        <div className='fixed right-[5%] z-40'>
            <Hamburger color='gray' toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
            {isMenuOpen&& 
                <div className='fixed z-30 bg-[#121619] right-0 top-0 h-screen w-56 ring-gray-700 ring-1'>
                    <Navigation links={["Home", "Sobre Nós", "Serviços", "Contato"]}/>
                </div>
            }
        </>
    
  )
}
