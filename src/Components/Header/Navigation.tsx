import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
type NavigationProps= {
    links: string[]
}
export function Navigation(props: NavigationProps) {
  return (
    <nav>
        <ul className='flex justify-center mt-24 '>
            <li className='flex gap-8 flex-col items-center '>
                {props.links.map((link, key:number)=>{
                    return <p className='font-sans text-white cursor-pointer hover:text-brand-400 transition-colors' key={key}>{link}</p>
                })}
            </li>
        </ul>
        <div className='flex text-white justify-center mt-16 gap-5'>
            <BsInstagram size={"2em"} className="cursor-pointer hover:text-brand-400 transition-colors"/>
            <BsYoutube size={"2em"} className="cursor-pointer hover:text-brand-400 transition-colors"/>
            <BsLinkedin size={"2em"} className="cursor-pointer hover:text-brand-400 transition-colors"/>
        </div>
    </nav>
  )
}
