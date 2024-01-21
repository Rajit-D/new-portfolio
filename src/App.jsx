import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Navbar/>
      <Hero />
    </div>
  )
}

export default App
