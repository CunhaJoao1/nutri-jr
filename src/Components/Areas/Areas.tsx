import React from 'react'
import { AreasObject } from './AreasObject'




export function Areas() {
  return (
    <div className='text-center mt-20 flex flex-col items-center px-[5%] mb-10'>
        <div className='mb-20'>
            <h3>Áreas de atuação</h3>
            <h2>Nossos Serviços</h2>
        </div>

    <div className='bg-gray-200'>        
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] max-w-[20rem] md:max-w-6xl'>
            {Object.entries(AreasObject).map(([key, item])=>{
            return (
                <div className='pt-4 pb-12 px-3 bg-white flex flex-col items-center '>
                    <img src={item.logo} alt="" className='w-12'/>
                    <h4 className='text-xl font-normal text-black'>{item.title}</h4>
                    <p className='text-base text-para '>{item.description}</p>
                </div>  
            )
            })}
        </div>
    </div>{/* divider */}
       
    </div>
  )
}
