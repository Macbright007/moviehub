import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

type Props = {}

const Main = (props: Props) => {
  return (
    <main>
        <Navbar />
        <Hero />
    </main>
  )
}

export default Main