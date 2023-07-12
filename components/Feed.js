'use client'

import {SparklesIcon} from '@heroicons/react/20/solid'
import InputSection from '@/components/InputSection'
import Post from '@/components/Post'
import { AnimatePresence, motion } from 'framer-motion';

export default function Feed() {
  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
    <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b-gray-200'>
    <h2 className='text-lg cursor-pointer font-bold sm:text-xl'>Home</h2>
    <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
    <SparklesIcon className='h-5'/>
    </div>
    </div>
    <InputSection />
    <AnimatePresence> 
        <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>
          <Post />
        </motion.div>
    </AnimatePresence>
    </div>
  )
}
