import React from 'react'
import { Areas } from '../Areas/Areas'
import Bottom from '../Bottom/Bottom'
import Banner from '../Home/Banner'
import { About } from './About'

export default function AboutSection() {
  return (
    <div>
        <Banner title={"Sobre Nós"} section={"Sobre"}/>
          <About/>
          <Areas/>
        <Bottom/>
    </div>
  )
}
