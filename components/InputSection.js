import {FaceSmileIcon, PhotoIcon, XMarkIcon} from '@heroicons/react/20/solid'
import { useState, useRef } from 'react';

export default function () {
  const [input, setInput] = useState("");
  const imagePicker = useRef(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
        <div className='flex border-b-gray-200 p-3 space-x-3'>
           <img className='rounded-full h-11 w-11 cursor-pointer hover:brightness-95'
           src='https://cdn2.vectorstock.com/i/1000x1000/83/26/rounded-user-portrait-flat-icon-vector-18168326.jpg'></img>
           <div className='w-full divide-y divide-gray-200'>
              <div className=''>
              <input type='text' className='w-full p-3 border-b-2 focus-ring-0 text-lg placeholder-gray-700 tracking-wide h-10 text-gray-700'
                placeholder='Enter Title...'></input>
                  <textarea value={input} onChange={(e)=>setInput(e.target.value)} className='w-full p-2 mt-4 border-none focus-ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700'
                    rows="4" placeholder='Write Your Thought....'></textarea>
              </div>
              
              {!loading &&
            <div className='flex justify-between pt-2.5 items-center'>
            <div className='flex'>
            <div onClick={()=>imagePicker.current.click()}>
               <PhotoIcon className='h-10 w-10 hoverEffect p-1.5 mr-3 text-orange-500 bg-orange-100'/>
               <input type='file' ref={imagePicker} hidden onChange=''></input>
            </div>
               <FaceSmileIcon className='h-10 w-10 hoverEffect p-1.5 text-orange-500 bg-orange-100'/>
            </div>
            <button 
            className='bg-orange-400 rounded-full text-white px-4 py-1.5 w-40 h-10 font-bold shadow-md hover:brightness-95 disabled:opacity-50'
            disabled={!input.trim()}>Post</button>
            </div>
              }
        </div>
    </div>
    
    </>
  )
}
