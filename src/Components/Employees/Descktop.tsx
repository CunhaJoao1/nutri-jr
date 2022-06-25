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
    <div className='w-[min(18.25rem,100%)]  h-80 group perspective cursor-pointer'>
    <div className='absolute backface-hidden w-full h-full '>
       <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-500'>
                      <div className='absolute backface-hidden  w-full h-full'>
                    <span className='w-[min(18.25rem,100%)]  h-[22rem] bg-brand-300/25 absolute inset-0'/>
                    <img src={retrato} alt="" />
                    <p className='absolute bottom-10 left-2 font-bold text-white text-2xl'>{props.name}</p>
                    <p className='absolute bottom-2 left-2 font-normal text-white '>{props.cargo}</p>
                  </div>
                  <div className='absolute my-rotate-y-180 backface-hidden w-[min(18.25rem,100%)]  h-[22rem] bg-brand-300 overflow-hidden'>
                <div className=' my-10 text-gray-800 px-2 pb-24'>
                  <p >{props.description}</p>
               </div>
             </div>                                        
          </div>
        </div>
      <div className="invisible">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ratione labore harum et, doloremque doloribus fugit! Maiores odit distinctio adipisci! Voluptatum, dicta consequuntur. Dolorem, fuga corporis atque nam quasi sunt.  </div>
    </div>
  )
}
