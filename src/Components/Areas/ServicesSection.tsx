import React from 'react'
import Bottom from '../Bottom/Bottom'
import Banner from '../Home/Banner'
import { Areas } from './Areas'

export default function ServicesSection() {
  return (
    <div>
        <Banner title='Nossos Serviços' section='Serviços'/>
        <div className='mb-10'>
          <Areas/>
        </div>
        <Bottom/>
    </div>
  )
}
