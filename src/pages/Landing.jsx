import React from 'react'
import "../assets/styles/Global.css";
import { Frase } from '../components/Frase';
import { Navbar } from '../components/Navbar';
import { Home } from '../container/Home';
import { Productos } from '../container/Productos';

export const Landing = () => {
  return (
    <div className='landing'>
        <Navbar />
        <Home />
        <Frase />
        <Productos />
    </div>
  )
}
