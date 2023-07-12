
import {ChartBarIcon, ChatBubbleBottomCenterIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon} from '@heroicons/react/20/solid'
import Moment from 'react-moment'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

function Post() {
  return (
    <div className='border-b border-gray-200 p-3'>
      <div className='flex cursor-pointer items-center'>
        <img className='rounded-full h-11 w-11 mr-4 cursor-pointer hover:brightness-95'
         src='https://cdn2.vectorstock.com/i/1000x1000/83/26/rounded-user-portrait-flat-icon-vector-18168326.jpg' alt='img'></img>
      <div className='flex space-x-1 whitespace-nowrap items-center'>
          <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>siddhesh</h4>   
          <span className='text-sm sm:text-[15px]'>siddhesh021</span>  
          <span className='text-sm sm:text-[15px] hover:underline'><Moment fromNow></Moment></span> 
      </div>

          <EllipsisHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 ml-[150px]'/>
      </div>

      <div>
        <p className='text-gray-800 font-bold  text-[15px] sm:text-[26px] pt-2 underline mb-2'>Title Of the Post</p>
      </div>
      <div>
        <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'><LoremIpsum p={1} /></p>
      </div>

      <div>
        <img className='rounded-2xl mr-2' src='https://st2.depositphotos.com/1000423/10383/i/950/depositphotos_103833810-stock-photo-ask-any-questions.jpg'></img>
      </div>

      <div className='flex justify-between text-gray-500'>
        <div className='flex items-center'>
        <ChatBubbleBottomCenterIcon 
        className='h-9 hoverEffect p-2 hover:text-orange-500 hover:bg-orange-100'/>
        </div>

       
          <TrashIcon  className='h-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100'/>
       
        <div className='flex items-center'>
       
          <HeartIcon className='h-9 hoverEffect p-2 hover:text-red-600 text-red-600 hover:bg-red-100'/>
   
        </div>

        <ShareIcon className='h-9 hoverEffect p-2 hover:text-orange-500 hover:bg-orange-100'/>

        <ChartBarIcon className='h-9 hoverEffect p-2 hover:text-orange-500 hover:bg-orange-100'/>
      </div>
    </div>
  )
}

export default Post
