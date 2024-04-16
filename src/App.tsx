import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

// function  Header() {
//   return(
//     <header>
//       <img src={viteLogo} alt="" />
//       <h3>Kino</h3>
//       <span>jopa</span>
//     </header>
//   )
// }


function App() {

  return (
    <>
      <div>
        
        <Header/>
        
      <main>
        <h1 className="text-5xl font-bold underline">Kino</h1> 
        <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">...</button>
      </main>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
