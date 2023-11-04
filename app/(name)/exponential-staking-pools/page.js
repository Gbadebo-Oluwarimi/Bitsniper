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
                              <div className='text-xs text-lightgreen pb-4 font-semibold'>Staking Pools</div>
                            
                                 Exponential Staking Pools
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Seamless Redemption: Unlocking the Power of<br/> AMMO in the Bitsniper Ecosystem</div>
                              </div>
                              <div className='pt-8'>
                              This unique feature enables users to redeem their AMMO directly from the Bitsniper staking pools at a 1:1 ratio. This means you can stake your AMMO and get WMATIC, a liquid staking derivative that earns rewards and can be used in DeFi, and then unstake it whenever you want.
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
