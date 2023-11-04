import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className=' py-10 min-h-screen px-20'>
                    
        <Link className='flex' href="/">
                    
          
                    <Image
            src="/logo.png"
             width={30}
            height={20}
            alt="Picture of the author"/>
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2">BitSniper.io</span>
                   
                    </Link>
                              <div className='text-5xl mt-32 inline-block font-bold'>
                              <div className='text-xs text-lightgreen pb-4 font-semibold'>Staking</div>
                            
                                 About Staking
                                  <div className='text-lg pt-4 text-gray-400 font-light'>What is Staking and why is it important?</div>
                              </div>
                              <div className='pt-8 '>
                              AMMO is the utility and governance token used throughout the Bitsniper ecosystem. In order to maintain a robust ecosystem, we want to encourage our community to think about the long-term vision and benefits of Project Bitsniper.<br/><br/> Locking tokens within staking programs supports that vision and creates a layer of trust between all members of the community.
<br/><br/>
More opportunities will become available in the future, to further increase your potential as AMMO owner – giving you a chance to prove your trust, and to earn even more rewards.
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
