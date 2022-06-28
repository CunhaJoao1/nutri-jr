import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import { Link } from 'react-router-dom'

import useWindowDimensions from "../ScreenHook"



type NavigationProps= {
    links: string[]
}
export function Navigation(props: NavigationProps) {
    const { width, height } = useWindowDimensions();

  return (
    <nav>
        <ul className='flex justify-center mt-24 md:mt-0'>
            <li className='flex gap-8 flex-col items-center md:flex-row'>
                {props.links.map((link, key:number)=>{
                    const clearLink = link.toLowerCase().replace(" ", "-").replace("home", "").replace("ó","o").replace("ç","c")
                    return <Link to={'/'+clearLink}> <p className='font-sans cursor-pointer text-brand-400 transition-colors' key={key}>{link}</p></Link>
                })}
            </li>
        </ul>
        {
            width < 768&&

            <div className='flex text-white justify-center mt-16 gap-5'>
                <BsInstagram size={"2em"} className="cursor-pointer hover:text-brand-400 transition-colors"/>
                <BsYoutube size={"2em"} className="cursor-pointer hover:text-brand-400 transition-colors"/>
                <BsLinkedin size={"2em"} className="cursor-pointer hover:text-brand-400 transition-colors"/>
            </div>
        }
        
    </nav>
  )
}
