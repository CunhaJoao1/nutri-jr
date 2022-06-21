import React, { FormEvent } from 'react'

export default function Newslatter() {

    function handleSubmit(event: FormEvent){
        event.preventDefault()
    }
  return (
    <div className='w-full h-40 bg-brand-100 flex md:flex-row flex-col items-center justify-evenly px-[5%]'>
        <h3 className='font-medium text-lg md:text-3xl '>Inscreva-se para na nossa NewsLatter</h3>
            <form onSubmit={handleSubmit} className="flex">
                <input type="email" className='rounded-r-md' placeholder='Seu Email...'/>
                <button type='submit' className='bg-brand-300 w-[10rem] rounded-r-md text-white'>Inscreva-se</button>
            </form>        
    </div>
  )
}
