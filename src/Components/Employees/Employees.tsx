import React from 'react'



const EmployeesObject = {
    Shelda:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”"
    },
    Shelda1:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”"
    },
    Shelda2:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”"
    },
    Shelda3:{
        name:"Shelda Oliveira",
        description:"“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text ”"
    },

}


export default function Employees() {
  return (
    <div className='mt-16 text-center px-[5%]  '>
        <h4 className='mb-5'>Nossos Contribuidores</h4>
        <h2 className='mb-20'>Todos os Nossos Contribuidores</h2>

        <div className='flex justify-center'>        
            <div className='grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[60rem] bg-red-800 '>
                {
                    Object.entries(EmployeesObject).map(([key, value])=>{
                        return( 
                            <div className='w-[min(18.25rem,100%)] bg-brand-300 h-80'>
                                <p>{value.description}</p>
                                <p>{value.name}</p>
                            </div>
                        )
                    })
                }   
            </div>
        </div>{/* Flex */}
    </div>
  )
}
