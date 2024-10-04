"use client"
import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <>
    


   <div className="relative w-full mb-10">
  <Image
    src='/images/back.png'
    width={1400}
    height={200}
    alt='back'
    className='w-full h-auto'
  />
   <div className="absolute top-0 left-0 w-full flex justify-between px-1 space-x-1">
    <div className="w-1/4 h-1 mt-1 bg-gray-300 rounded-full">
      <div className="h-full bg-white rounded-full" style={{ width: '100%' }}></div>
    </div>
    <div className="w-1/4 h-1 mt-1 bg-gray-300 rounded-full">
      <div className="h-full bg-white rounded-full" style={{ width: '0%' }}></div>
    </div>
    <div className="w-1/4 h-1 mt-1 bg-gray-300 rounded-full">
      <div className="h-full bg-white rounded-full" style={{ width: '0%' }}></div>
    </div>
    <div className="w-1/4 h-1 mt-1 bg-gray-300 rounded-full">
      <div className="h-full bg-white rounded-full" style={{ width: '0%' }}></div>
    </div>
  </div>
    <div className="absolute left-1/4  transform -translate-x-1/2 -translate-y-1/2">
    <Image
      src='/images/profile.jpg'
      width={60}
      height={60}
      alt='profile'
      className='w-19 h-19 rounded-full object-cover shadow-lg'
    />
  </div>
</div>


    </>
  )
}

export default Header
