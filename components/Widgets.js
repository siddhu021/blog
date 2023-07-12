'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { IoLogoWhatsapp } from 'react-icons/io';
import { FiInstagram  } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

export default function Widgets() {
  
  return (
    <div className="xl:w-[600px] ml-8 space-y-5">
    <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <MagnifyingGlassIcon className="h-5 w-5 z-50 text-gray-500"/>
          <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
           type="text" placeholder="Search Post"></input>
        </div> 
    </div> 
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
      <h4 className="font-bold text-xl px-4">About Me</h4>
      <AnimatePresence>
      <div className='hoverEffect text-gray-700 flex text-xl items-center justify-center xl:justify-start mt-auto'>
        <img className='rounded-full h-10 w-10 xl:mr-2' src='https://cdn2.vectorstock.com/i/1000x1000/83/26/rounded-user-portrait-flat-icon-vector-18168326.jpg'></img>
        <div className='leading-5 hidden xl:inline space-y-2'>
        <h1 className="flex font-bold">Name: <h4>Siddhesh Nikam</h4></h1>
        <h1 className="flex font-bold">Username: <p>siddheshnikam021</p></h1>
        <h1 className="flex font-bold">Gender: <h4>Male</h4></h1>
        <h1 className="flex font-bold">No of Posts: <h4>1</h4></h1>
        <h1 className="flex font-bold">Liked Post: <h4>1</h4></h1>
        
        </div>
        </div>
      </AnimatePresence>
    </div>
    
    <div className=" text-gray-700 bg-gray-100 rounded-xl w-[90%] xl:w-[75%] pt-2 space-y-3 sticky top-16">
    <h4 className="font-bold text-xl px-4">Also Follow Me On</h4>
    <AnimatePresence>
    <div className="p-3 text-2xl flex space-x-4">
      <IoLogoWhatsapp className="text-green-500"/>
      <FiInstagram className="text-2xl text-pink-500"/>
      <FaLinkedin className="text-2xl text-blue-500"/>
      <BsGithub className="text-2xl"/>
      <BsYoutube className="text-2xl text-red-600"/>
    </div>
    </AnimatePresence>

    </div>
    </div> 
  )
}
 