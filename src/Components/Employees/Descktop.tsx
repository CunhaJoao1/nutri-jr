import React from 'react'
import retrato from "../../assets/retrato.jpg"

type DescktopProps = {
    description: string,
    name: string,
    cargo: string,

}
/* Descktop version from employees' cards */
export function Descktop(props: DescktopProps) {
  return (
    <div className='bg-brand-400 w-full h-96 relative '>
      <span className='bg-brand-300/20 absolute inset-0'/>
       <img src={retrato} alt="" className='h-full w-full object-cover' />
       <h3 className='text-white text-2xl bottom-20 relative text-shadow-lg'>{props.name}</h3>
       <p className='relative font-normal text-white bottom-16 text-shadow-lg'>{props.cargo}</p>
    </div>
  )
}
