import Link from 'next/link'
import React from 'react'
import {BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <div className=" 	bg-teal-800 	">
        <footer className="text-gray-600 body-font ">
  <div className="container p-1 py-2 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     
      <span className="ml-3 text-xl text-white">Afia Asif</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 afia
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4
     justify-center sm:justify-start">
      
     
    <Link href ={'https://www.linkedin.com/in/afia-asif-87768824a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ3dwjfcsTK2dS9dJBxsz1Q%3D%3D'}
    className="ml-3 text-gray-500 bg-white" >
        <BsLinkedin className='text-3xl hover:text-[blue]' color='blue'/>
     </Link>
      <a className="ml-3 text-gray-500">
        
      </a>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer