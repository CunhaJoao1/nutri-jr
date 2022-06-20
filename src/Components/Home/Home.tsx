import React from 'react'
import nutri from "../../../assets/nutri.jpg"

export function Home() {
  return (
    <div className='relative bg-home-nutri w-full h-screen bg-cover bg-center object-[70%,50%] bg-fixed text-white  '>
        <span className='absolute w-full h-screen bg-gray-700/40 z-10'/>
      <div className='relative z-20 h-full w-full px-[5%]'>
          <h1 className='absolute top-[20rem] inset-0 m-auto font-bold text-4xl pl-[5%]'>
          Empresa Júnior de Nutrição-UFPI/CMPP <br />
          Nutrição, Justiça e Resiliência
          </h1>
      </div>
    </div>
  )
}
