import React from 'react'

import Image from 'next/image';

function SideBar() {
  return (
    <div className='sm:flex flex-col p-2 xl:items-start fixed h-full'>
        {/* Logo */}
        <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
            <Image height='50' width='50'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJUr3qfTAwo7U0pWZYUovHmPX-bnsmAuBXw&usqp=CAU'>
            </Image>
        </div>

        {/* Menu */}
        <div className='mt-4 mb-2 xl:items-start'>
        <div className='hoverEffect menuEffect active'>
            <Image height='30' width='30' src='https://www.shutterstock.com/image-vector/transparent-home-icon-png-vector-260nw-1946628094.jpg'></Image>
            <p className="hidden xl:inline">Home</p>
        </div>

        <div className='hoverEffect menuEffect'>
        <Image height='30' width='30' src='https://cdn.icon-icons.com/icons2/2550/PNG/512/hashtag_icon_152602.png'></Image>
        <p className="hidden xl:inline">Explore</p>
        </div>

        <div className='hoverEffect menuEffect'>
        <Image height='30' width='30' src='https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg'></Image>
        <p className="hidden xl:inline">Notifications</p>
        </div>

        <div className='hoverEffect menuEffect'>
        <Image height='30' width='30' src='https://static.vecteezy.com/system/resources/thumbnails/003/701/476/small/envelope-mail-icon-free-vector.jpg'></Image>
        <p className="hidden xl:inline">Messages</p>
        </div>

        <div className='hoverEffect menuEffect'>
        <Image height='30' width='30' src='https://www.shutterstock.com/image-vector/bookmark-icon-vector-sign-symbol-260nw-1668609910.jpg'></Image>
        <p className="hidden xl:inline">Bookmarks</p>
        </div>

        <div className='hoverEffect menuEffect'>
        <Image height='30' width='30' src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'></Image>
        <p className="hidden xl:inline">Profile</p>
        </div>

        <div className='hoverEffect menuEffect'>
        <Image height='30' width='30' src='https://cdn-icons-png.flaticon.com/512/152/152529.png'></Image>
        <p className="hidden xl:inline">More</p>
        </div>
        </div>

        {/* Mini-Profile */}
        <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
        <img className='rounded-full h-10 w-10 xl:mr-2' src='https://cdn2.vectorstock.com/i/1000x1000/83/26/rounded-user-portrait-flat-icon-vector-18168326.jpg'></img>
        <div className='leading-5 hidden xl:inline'>
        <h4 className='font-bold'>Siddhesh Nikam</h4>
        <p>siddheshnikam021</p>
        </div>
        </div>
    </div>
  )
}

export default SideBar;
