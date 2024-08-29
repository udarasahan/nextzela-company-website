import './App.css'
import About from './Componants/About/About'
import { Hero } from './Componants/Hero/Hero'
import Navbar from './Componants/Navbar/Navbar'

function App() {

  return (
   <div className='app'>
      <Navbar />
      <Hero />
      <About />
   </div>
  )
}

export default App
