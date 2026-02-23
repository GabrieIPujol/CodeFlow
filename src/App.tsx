import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {  

  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Features/>
      <Price/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
