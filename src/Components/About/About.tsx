import React from 'react'
import {BsFillPlayFill} from "react-icons/bs"

export function About() {
  return (

        <div className='px-[5%] mt-20 flex flex-col items-center md:flex-row md:justify-center max-w-[100rem] m-auto'>

            <div className='relative w-[min(100%,40rem)] md:w-[min(50%,30rem)] md:h-[60rem] lg:h-[40rem] bg-about-food h-[32rem] bg-cover bg-center flex items-center justify-center'>
                <span className='absolute w-20 h-20 bg-brand-300 rounded-full flex items-center justify-center cursor-pointer md:-right-10 animate-ping-slow'/>
                <button className='absolute w-20 h-20 bg-brand-300 rounded-full flex items-center justify-center cursor-pointer md:-right-10 '><BsFillPlayFill color='white' size={'2em'}/></button>
            </div>

            <div className='px-[10%] md:w-[50%] gap-8 grid mt-12 text-para'>
                <h4 className='font-bold text-brand-300'>Bem vindo a NutriJR</h4>
                <h2>Nós buscamos o melhor para a sua saúde alimentar</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium distinctio quisquam eius, assumenda vel</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aut iure ad ex voluptates accusantium, porro id deserunt iste laboriosam neque ipsum perferendis, eveniet officiis, harum quidem illo maiores sunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quisquam ipsa est rem unde sapiente eligendi ullam minima tempora possimus quod, harum odit. Neque nemo quibusdam tenetur natus, hic alias!</p>
            </div>
            
    
        </div>
  )
}
