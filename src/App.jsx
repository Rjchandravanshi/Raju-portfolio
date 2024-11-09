
import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Experiance from './component/Experiance'
import Footer from './component/Footer'
import Contect from './component/Contect'
import { Toaster } from'react-hot-toast';

export default function App() {
  return (
    <>
    <div>
    <Header/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contect/>
    <Footer/>
    </div>
    <Toaster />
    </>
  )
}
