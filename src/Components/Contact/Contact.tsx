import React from 'react'
import Form from './Form/Form'





export default function Contact() {
  return (
    <div className='mt-24 bg-contact-nutri w-full h-screen bg-cover bg-[position:50%,50%] relative'>
        <span className='absolute z-10 bg-gray-700/40 w-full lg:w-[50%] h-full right-0 flex items-center '>
            <div className='absolute z-[11]  m-auto flex flex-col items-center gap-6 w-full'>
                <h4>Marcar um horário</h4>
                <h2>Consulta grátis</h2>
                <Form/>
            </div>
        </span>            
    </div>
  )
}
