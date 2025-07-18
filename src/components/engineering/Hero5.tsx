import React from 'react'
import Link from 'next/link'

const Hero5 = () => {
  return (
    <div className="relative w-full h-[35vh] bg-[url(/oilvessel.jpeg)] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold text-amber-300">Engineering Services</h1>
        <div className="text-white flex gap-2">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <p>Engineering Services</p>
        </div>
      </div>
    </div>
  )
}

export default Hero5