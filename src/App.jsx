// import { useState } from 'react'
import './App.css'
import { Cloudinary } from './components/Cloudinary/Cloudinary'
import View from './components/Wiew/Wiew'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>SUBIENDO IMAGENES CON CLOUDINARY</h1>
      <Cloudinary />
      <View />
    </>
  )
}

export default App
