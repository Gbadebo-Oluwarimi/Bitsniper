"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className=' py-10 min-h-screen px-20'>
                    
        <Link href="/"><div className='flex'>
                    
          
                             <Image
                      src="/logo.png"
                       width={30}
                      height={20}
                      alt="Picture of the author"/>
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2">BitSniper.io</span>
                              
                              </div>
                              </Link>
                              <div className='text-5xl mt-32 font-semibold inline-block'>
                              <div className='text-xs text-lightgreen pb-4 font-semibold'>Decentralized Gaming Revolution</div>
                                 Why BitSniper
                                  <div className='text-xl pt-4 font-medium text-gray-400'> Revolutionizing Crypto Gaming with <br/>Decentralized Rewards</div>
                              </div>
                              <div className='pt-8 text-sm'>
                            
                              </div>
                              <div className='pt-7'>
                                  <div className='text-2xl text-gray-400 inline-block'>
                                   Empowering Players
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>BitSniper offers an innovative AI powered gaming experience that allows players and investors to earn through gameplay, NFTs, and cryptocurrency. <br/><br/> The platform is fully decentralized and provides complete control over earnings and gaming experience, solving common problems in crypto and play-to-earn gaming. With a commitment to constantly improve and develop the project based on user feedback BitSniper will be one of the market leaders in the crypto gaming scene in the years to come.
                              </div>
                              </div>
    </div>
  )
}

export default page
