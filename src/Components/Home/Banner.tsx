import React from 'react'
import { Link } from 'react-router-dom'




type BannerProps={
    title: string,
    section: string,
}
export default function Banner(props: BannerProps) {
  return (
    <div className='relative bg-home-nutri w-full h-[70vh] bg-cover bg-center object-[70%,50%] bg-fixed text-white '>
        <span className={`absolute w-full h-full bg-gray-700/40 z-10`}/>
        <div className='relative z-[15] h-full w-full px-[5%] flex justify-center text-center'>
          <h1 className='absolute bottom-20 mx-auto font-bold text-4xl'>
          {props.title}
          </h1>
          <p className='text-[#292B25] font-medium text-base absolute bottom-10'> <Link className='hover:text-brand-100 transition-all' to={'/'}>Home{'>'}</Link> {props.section} {">"} </p>
      </div>
    </div>
  )
}
