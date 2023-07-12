import { Inter } from 'next/font/google'
import SideBar from '@/components/SideBar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className='flex min-h-screen max w-7xl mx-auto bg-white-100'>
        {/* SideBar */}
        <div className=''>
          <SideBar></SideBar>
        </div>

        {/* Home */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>
  )
}
