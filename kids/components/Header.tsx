"use client"
import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <>
    


   <div className="relative w-full">
  <Image
    src='/assets/back.png'
    width={1400}
    height={200}
    alt='back'
    className='w-full h-auto'
  />
   <div className="absolute top-0 left-0 w-full flex justify-between px-1 space-x-1">
    
  </div>
    <div className="absolute left-1/4  transform -translate-x-1/2 -translate-y-1/2">
    <Image
      src='/assets/profile.jpg'
      width={120}
      height={120}
      alt='profile'
      className='w-19 h-19 rounded-full object-cover shadow-lg'
    />
  </div>
</div>


    </>
  )
}

export default Header
