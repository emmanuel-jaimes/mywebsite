import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import Switch from './Switch'
import { Analytics } from '@vercel/analytics/react'

function App() {

  return (
    <div>
      <Hero/>
      <Switch/>
      <Analytics mode='production'/>
    </div>
  )
}

export default App
