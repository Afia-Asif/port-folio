"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id='home' className=' 	bg-white		 '>
        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center
        custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto" 
        alt="hero"
        src={require("../../../public/projects/pictures/profile-image2.jpg")}
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4
        font-medium  text-black	">
      This is AFIA ASIF
        <br className="hidden lg:inline-block" />
    
        <Typewriter   options={{
    strings: ['MICROBIOLOGIST','FRONT END DEVELOPER', 'DATA SCIENTIST'],
    autoStart: true,
    loop: true,
    
    
  }}
/>
      </h1>

    
      
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-teal-700	
         border-0 py-2 px-6 focus:outline-none
          hover:bg-black rounded text-lg">
          <Link href ={"#my-project"}> watch my projects</Link>
        </button>

       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero