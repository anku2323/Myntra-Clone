import React from 'react'
import Navbar from './component/Header/Navbar'
import Banner from './component/Banner'
import Hero from './component/Hero/Hero'
import { Footer } from './component/Footer/Footer'
 const App = () => {
  return (
    
    <div>
      {/* this send to real dom */}
    <Navbar/>
    <Banner/>
    <Hero/>
    <Footer/>
    </div>
  )
}
export default App;
