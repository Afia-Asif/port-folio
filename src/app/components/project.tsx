import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='my-project'  className='	 bg-teal-700	 '>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <Image
          alt="gallery"
          className="w-full object-cover h-full object-center block opacity-100 absolute inset-0"
          src={require("../../../public/projects/pictures/logo.png")}
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
          </h2>
          <p className="leading-relaxed">
          </p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
       
      </div>
      <button className="flex mx-auto text-white
               bg-black
                border-0
                 py-3 px-8
                  focus:outline-none 
                  hover:bg-indigo-600 
                  rounded text-lg">
            <Link href={" https://afia-asif.github.io/web-dev/index.html "}> go to link</Link>
          </button>
      <div className="flex flex-wrap -mx-2 p-10">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-100 absolute inset-0"
              src={require('../../../public/projects/javascript/olxprojectnew.png')}
                     />
            <div className="text-center relative z-10 w-full">
              <h1 className="text-xl text-gray-900 font-medium title-font mb-2">
            
                
              </h1>
              <p className="leading-relaxed">
                
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
            
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              
            </div>
          </div>
          <button className="flex mx-auto text-white
               bg-black
                border-0
                 py-3 px-8
                  focus:outline-none 
                  hover:bg-indigo-600 
                  rounded text-lg">
            <Link href={"https://olxproject-f67f0.web.app/ "}> go to link</Link>
          </button>
        </div>

        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block 
              opacity-100 absolute inset-0"
              src={require("../../../public/projects/javascript/project2.png")}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                
              </h2>
              <p className="leading-relaxed">
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto text-white
               bg-black
                border-0
                 py-3 px-8
                  focus:outline-none 
                  hover:bg-indigo-600 
                  rounded text-lg">
            <Link href={" https://fashion-21d70.firebaseapp.com/ "}> go to link</Link>
          </button>

        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project