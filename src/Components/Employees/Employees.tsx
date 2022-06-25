import React from 'react'
import retrato from "../../assets/retrato.jpg"


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

        <div className='flex justify-center'>        
            <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[60rem] '>
                {
                    Object.entries(EmployeesObject).map(([key, value])=>{
                        return( 
                            <div className='w-[min(18.25rem,100%)]  h-80 group perspective cursor-pointer'>

                                <div className='absolute backface-hidden w-full h-full b'>
                                    <div className='relative'>
                                        <span className='w-full h-full bg-brand-300/25 absolute inset-0'/>
                                        <img src={retrato} alt="" />
                                        <p className='absolute bottom-10 left-2 font-bold text-white text-2xl'>{value.name}</p>
                                        <p className='absolute bottom-2 left-2 font-normal text-white '>{value.cargo}</p>
                                    </div>
                                </div>
                                <p>{value.description}</p>

                            </div>
                        )
                    })
                }   
            </div>
        </div>{/* Flex */}
    </div>
  )
}
