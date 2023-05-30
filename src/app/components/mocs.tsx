import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
const Mocs = () => {
  return (
    <div>
 
        <section id='mocs'  className="text-gray-600 body-font bg-current	 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
     MASSIVE ONLINE COURSES
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
       if you want to check furthure more than plz check my linkedin profile
      </p>
      
         <center> <Link href ={'https://www.linkedin.com/in/afia-asif-87768824a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ3dwjfcsTK2dS9dJBxsz1Q%3D%3D'}className="ml-3 text-gray-500"  >
        <BsLinkedin className='text-3xl hover:text-[bg-teal-700]' color='white' />
     </Link></center>
        

    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/pictures/statistics.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Introduction to statistics stanford university
            </h1>
            <p className="leading-relaxed">
                the best course to understand data science concept 



            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/pictures/what is data science.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              IBM
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Introduction to data science from IBM
            </h1>
            <p className="leading-relaxed">
              it is an intorductory level very informative data science course for beginner 
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/pictures/certficates.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              IBM
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              TOOLS FOR DATa SCIENCE
            </h1>
            <p className="leading-relaxed">
             in this course i have learned the libararies of python for data
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/pictures/certificates2.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              AL-NAFI
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              PYTHON-PROGRAMMING
            </h1>
            <p className="leading-relaxed">
             this cousre is good for basics of python programming
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/pictures/data-analysis.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              great-learning
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              data-analysis
            </h1>
            <p className="leading-relaxed">
            i have learned many libraries durring this project 
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/pictures/pftp certifcate.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              PFTP
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              artificial-intelligence
            </h1>
            <p className="leading-relaxed">
             the certificate of achievemnet of ai
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Mocs