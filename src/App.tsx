import { useState } from 'react'
import {About} from './Components/About/About'
import { Areas } from './Components/Areas/Areas'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import Employees from './Components/Employees/Employees'
import './Global.css'
import Contact from './Components/Contact/Contact'
import Bottom from './Components/Bottom/Bottom'
import Newslatter from './Components/Newslatter/Newslatter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Areas/>
      <Employees/>
      <Contact/>
      <Newslatter/>
      <Bottom/>
    </div>
  )
}

export default App
