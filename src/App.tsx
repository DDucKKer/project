import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'




function App() {

  return (
    <div className='text-lightgray'>
      <div>
        
        <Header/>
        
      <main>
        <h1 className="text-5xl font-bold underline">Kino</h1> 
        <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-500 dark:md:hover:bg-fuchsia-600">...</button>
      </main>
        
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={viteLogo} alt="ChitChat Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

        <Footer/>
      </div>
    </div>
  )
}

export default App
