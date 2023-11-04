import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className='p-8 md:py-10 min-h-screen md:px-20'>
                    
        <Link className='flex' href="/">
                    
          
                    <Image
            src="/logo.png"
             width={30}
            height={20}
            alt="Picture of the author"/>
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2">BitSniper.io</span>
                   
                    </Link>
                              <div className='text-5xl mt-32 inline-block font-bold'>
                              <div className='text-xs text-lightgreen pb-4 font-semibold'>Effortless ERC20 Swaps with Bitsniper Aggregator</div>
                            
                                 Autoomated Aggregator
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Simplified Swaps: Bitsniper Aggregator's <br/>Hassle-Free ERC20 Exchange Services</div>
                              </div>
                              <div className='pt-8 '>
                              Forget the hassle of checking multiple exchanges on a quest for the best possible rate. Bitsniper Aggregator does all the heavy lifting by gathering multiple offers and providing you with all the necessary tools for private, secure and swift AMMO and ERC20 swaps at the best rate.
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
