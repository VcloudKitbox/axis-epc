import React from 'react'
import Link from 'next/link'

const Hero3 = () => {
  return (
    <div className="relative w-full h-[35vh] bg-[url(/project1.jpg)] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold text-amber-300">Services</h1>
        <div className="text-white flex gap-2">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <p>Services</p>
        </div>
      </div>
    </div>
  )
}

export default Hero3