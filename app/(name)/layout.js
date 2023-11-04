
import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Footer from '../Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const img1 = './b-1.jpg'

const poppins = Poppins({ subsets: ['latin','devanagari'], weight:"400" })
// const myfont = localFont({src:"../fonts/League.ttf"})
import { Inter } from 'next/font/google'
// import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
const inter = Inter({ subsets: ['latin'] })
const pop = localFont({src:"../../fonts/Poppins-Medium.ttf"})

export const metadata = {
  title: 'Bitsniper',
  description: 'A crypto based gaming Platform',
}



export default function Layout({ children }) {
  
  return (
    <html lang="en"  style={pop.style}>
    <main style={pop.style} className='min-h-screen'>
        <div className='grid grid-cols-6 '>
            <div className='bg-black text-white col-span-6 flex justify-between md:col-span-4'>
           
                   {children}
                    <div>
                    </div>
            </div>
            <div className='self-start sticky top-0 col-span-2 hidden md:inline-block'>
            <div className=' '>
          <img src={img1} className='w-full h-full object-cover'/>
          </div>
            </div>
        </div>
        <Footer/>
    </main>
 

    </html>
  )
}
