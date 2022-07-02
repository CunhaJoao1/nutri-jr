import React from 'react'

export default function Youtube() {
  return (
    <div className='flex flex-col items-center my-20'>
        <h4>Conheça um pouco mais de nós</h4>
        <h2>Nosso canal no Youtube</h2>       
        
         <iframe className='h-[40rem] mt-8 w-[min(90%,80rem)]' width="1280" height="720" src="https://www.youtube.com/embed/Q_DL9ZPEl4k" title="Pato ganso cantando o zonibo vai derrapar (Legendado certo)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}
