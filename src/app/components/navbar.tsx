import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='z-index-30 sticky top-0 bg-teal-800	'>
      <header className="text-gray-600 body-font z index-30 sticky top-0">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <Image src={require("../../../public/projects/pictures/logo1.png")} alt="" 
   className='w-20 h-12 p-1 ml-800'
   />
   
    </a>
    <nav className="md:ml-500 md:mr-auto p-1 flex flex-wrap  text-base justify-center">
      <a href={"#home"} className="mr-9  hover:text-gray-900 text-white">Home</a>
      <a  href={"#mocs"} className="mr-5 hover:text-gray-900 text-white">Mocs</a>
    
    </nav>
    <button className="inline-flex items-center bg-gray-100
     border-0 py-1 flex flex-wrap px-3
      focus:outline-none hover:bg-gray-200 rounded text-base
       mt-4 md:mt-0
       ">
        <Link href={"#contact"} 
        
        > contact 
        </Link>
      
    
    </button>
    
  </div>
</header>

    </div>
  )
}

export default Navbar