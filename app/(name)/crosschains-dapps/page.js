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
                              <div className='text-xs text-lightgreen pb-4 font-semibold'>DAAPs</div>
                            
                                Crosschain-daaps
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Streamlining Cross-Chain Interactions: Simplifying <br/>Smart Contract Deployment and Management with Bitsnipe</div>
                              </div>
                              <div className='pt-8 '>
                              Employing smart contracts on multiple blockchains can be expensive, as each deployment requires gas fees and other costs. Additionally, managing multiple smart contracts on different blockchains can be complex and time-consuming.
<br/><br/>
Furthermore, since each smart contract is managing its own internal state, there is a risk that data can become inconsistent between different blockchain environments. This can result in errors, lost data, and other issues that can make the development of multi-chain dApps very risky.
<br/><br/>
Bitsniper cross-chain dApps, are designed to facilitate communication and interaction between different blockchains. Bitsniper tech team uses specialized protocols to enable communication between different blockchains. It allows users to transfer assets and access Bitsniper applications across different blockchains.
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
