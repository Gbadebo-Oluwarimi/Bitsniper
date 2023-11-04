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
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Technology</div>
                            
                              Decentralization and Blockchain
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Empowering Users: A Play-to-Earn Approach with<br/> Polygon-Based Project Bitsniper</div>
                              </div>
                              <div className='pt-8'>
                              
Polygon is a well-established framework preferred by many decentralized applications and GameFi projects, bringing innovative gamification in-game to the rapidly growing Web3 economies. We have learned that while our users care about blockchain technology, they are focused on the benefits it can bring rather than the decentralization of too many features. The aim is to provide a tamper-evident distributed ledger that ensures scarcity and allows our players to own and trade their assets.
<br/><br/>
The mechanics of play-to-earn do not require a fully decentralized public blockchain. We believe that part of the ethos of Web3 is the idea of users being rewarded for the value they bring to applications, and this is what we choose to focus on with Project Bitsniper.
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
