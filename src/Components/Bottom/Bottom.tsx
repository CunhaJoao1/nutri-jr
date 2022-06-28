import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {FiMapPin} from "react-icons/fi"
import {IoCall} from "react-icons/io5"
import {MdMail} from "react-icons/md"

export default function Bottom() {
  return (
    <footer className='w-full min-h-[30rem] bg-footer py-10'>
    <div className='grid lg:grid-cols-3 lg:grid-rows-2 items-center '>

        <div className='justify-self-center'>
            <h5>Sobre a NutriJR</h5>
            <p className='max-w-xs text-white mt-5'>Somo uma associação sem fins lucrativos, constituídas geridas por alunos de graduação da universidade federal do Piauí.</p>
            <div className='flex gap-2 text-brand-100'>
                <button type='button' className='w-16 h-16 rounded-full flex items-center justify-center bg-gray-600'  onClick={()=>{window.open("https://www.instagram.com/nutrijr.ufpi/?hl=pt-br", "_blank")}}><BsInstagram size={'1.5em'}/></button>
                <button type='button' className='w-16 h-16 rounded-full flex items-center justify-center bg-gray-600'><BsYoutube size={'1.5em'}/></button>
                <button type='button' className='w-16 h-16 rounded-full flex items-center justify-center bg-gray-600'><BsLinkedin size={'1.5em'}/></button>
            </div>
        </div>

        <div className='justify-self-center'>
            <h5>Nossos Serviços</h5>
                <ul className='max-w-xs'>
                    <li> <p>Coffee-Break</p> </li>
                    <li> <p>Ficha Técnica</p> </li>
                    <li> <p>Confecção de Ebooks</p> </li>
                    <li> <p>Aconselhamento Nutricional</p> </li>
                    <li> <p>Educação Nutricional</p> </li>
                    <li> <p>Boas Práticas e Treinamento</p> </li>
                </ul>             
        </div>

        <div className='text-white justify-self-center'>
            <h5> Tem alguma dúvida?</h5>
            <p className='flex items-center'><FiMapPin/> Rua dos bobos número 0 </p>
            <p className='flex items-center'> <IoCall/> +55 86 981636382</p>
            <p className='flex items-center'> <MdMail/> sheldaviolinosp@hotmail.com</p>
        </div>
    
    </div>

        <div className='text-center'> <p className='text-white  '>Site desenvolvido com 💙 por <span onClick={()=>window.open("https://www.victorcunha.com.br", "_blank")} className='cursor-pointer underline underline-offset-2'>Victor Cunha</span> </p> </div>
    </footer>
  )
}
