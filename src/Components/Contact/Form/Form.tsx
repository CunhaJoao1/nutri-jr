import React, { FormEvent } from 'react'

export default function Form() {
    function handleSubmitForm(event: FormEvent){
        event.preventDefault()
    }
  return (
    <form className='flex flex-col gap-4 w-[min(90%,30rem)] ' onSubmit={handleSubmitForm}>
        <input type="text" placeholder='Seu Nome' />
        <input type="text" placeholder='Seu Email' />
        <input type="text" placeholder='Assunto' />
        <textarea  placeholder='Menssagem' />
        <button type='submit' className='bg-brand-300 text-white w-48 rounded-md py-3 px-4'>Enviar Menssagem</button>
    </form>
  )
}
