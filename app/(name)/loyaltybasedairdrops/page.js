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
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Airdrops</div>
                            
                                 Loyalty Based Airdrops
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Fostering Community Engagement: Airdrops and <br/>Giveaways in the Bitsniper Ecosystem</div>
                              </div>
                              <div className='pt-7'>
                                  <div className='text-2xl text-white inline-block'>
                                  Confer Value
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>
Airdrops will play an important role to build community and ensure active participation among holders in the Bitsniper Ecosystem. Airdropping gifts will help keep DAO members excited and engaged with voting and community building events. We also plan on giveaways of  merchandise. 

Although airdrops within Bitsniper web3 are a new vehicle, as a concept they are no different than loyalty programs or price discounts offered by traditional non-web3 companies: Bitsniper aim is to confer value to those who engage with the Bitsniper Ecosystem while encouraging future involvement.
                              
                              </div>
                            

                           
                              </div>
    </div>
  )
}

export default page
