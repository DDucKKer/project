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
        <h1>Kino</h1>
      </main>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
