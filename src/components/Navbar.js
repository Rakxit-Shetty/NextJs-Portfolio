import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >NavBar
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link> 
        <Link href="/articles">Article</Link> 
        </nav>
        <h2>LOGO</h2>
        <nav>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>
        <Link href="/" target={"_blank"}>T</Link>
        </nav>
       
    </header>
    
  )
}

export default Navbar