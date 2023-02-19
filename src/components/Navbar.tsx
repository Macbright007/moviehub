import React from 'react'
import { BiCameraMovie, BiMenuAltLeft } from "react-icons/bi"

// type Props = {}

const Navbar = () => {
  const NavStyle = "flex items-center justify-around bg-gradient-to-r from-red-800 to-black"
  return (
    <nav className={`${NavStyle} fixed top-0 z-30 w-full py-4`}>
      <div className='flex'>
        <BiCameraMovie className='text-white animate-bounce text-3xl mr-1' />
        <h1 className='text-sm font-mono'>movie<span className='uppercase text-slate-300 font-bold text-2xl'>.hUb</span></h1>
      </div>

      <div className='mt-1'>
        <a className='mr-24 uppercase font-bold text-neutral-200 hover:text-black hover:cursor-pointer active:text-blue-900 tracking-wide animate-pulse'>Home</a>
        <a className='mr-24 uppercase font-bold text-neutral-200 hover:text-black hover:cursor-pointer active:text-blue-900 tracking-wide animate-pulse'>Category</a>
        <a className='uppercase font-bold text-neutral-200 hover:text-black hover:cursor-pointer active:text-blue-900 tracking-wide animate-pulse'>Trending</a>
      </div>
      <BiMenuAltLeft className='text-white text-4xl cursor-pointer'/>

    </nav>
  )
}

export default Navbar