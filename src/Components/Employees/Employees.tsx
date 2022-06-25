import React from 'react'
import { Descktop } from './Descktop'


const EmployeesObject = {
    Shelda:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”",
        cargo: "Presidente"
    },
    Shelda1:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”",
        cargo: "Vice-Presidente"

    },
    Shelda2:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”",
        cargo: "Diretor"

    },
    Shelda3:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”",
        cargo: "Marketing"

    },

}


export default function Employees() {
  return (
    <div className='mt-16 text-center px-[5%]  '>
        <h4 className='mb-5'>Nossos Contribuidores</h4>
        <h2 className='mb-20'>Todos os Nossos Contribuidores</h2>

        <div className='flex justify-center flex-col items-center'>        
            <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[60rem] '>
                {
                    Object.entries(EmployeesObject).map(([key, value])=>{
                        return( 
                            <Descktop cargo={value.cargo} description={value.description} name={value.name}/>
                        )
                    })
                }   
            </div>
        </div>{/* Flex */}
    </div>
  )
}
