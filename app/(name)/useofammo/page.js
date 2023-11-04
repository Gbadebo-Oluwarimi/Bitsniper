import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className='p-10 md:py-10 min-h-screen md:px-20'>
                    
        <Link className='flex' href="/">
                    
          
                    <Image
            src="/logo.png"
             width={30}
            height={20}
            alt="Picture of the author"/>
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2">BitSniper.io</span>
                   
                    </Link>
                              <div className='text-5xl mt-32 inline-block font-bold'>
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Crypto wallets</div>
                            
                                  Use of Ammo
                                  <div className='text-lg pt-4 text-gray-400 font-light'> Use of Ammo in Bitsniper Modern Warfare</div>
                              </div>
                              <div className='pt-5 text-sm'>
                            
<br/><br/>
<div className='pt-1'>
                                  <div className='text-2xl text-white inline-block'>
                                  Medium of exchange
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>
                                    $AMMO is the medium of exchange in the Bitsniper ecosystem. It will be necessary for making purchases from the Bitsniper marketplace. It will be required to purchase:
                                    <ul className='list-disc mx-5'>
                                    <li className='py-2'>SKINS</li>
<li className='py-2'>ASSETS</li>
<li className='py-2'>ADVANCED AVATAR CUSTOMIZATION</li></ul>
                                  <br/>
                              </div>


<br/>
<div className='pt-4'>
                                  <div className='text-2xl text-white inline-block'>
                                   Governance
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>
                                    $AMMO holders will be able to participate in the governance of the Bitsniper platform
                              </div>
                              <div className='pt-7'>
                                  <div className='text-2xl text-white inline-block'>
                                   Staking
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>Here are the benefits of AMMO staking:
                                  <ul className='list-disc mx-5'>
                                    <li className='py-2'>Its an easy way to earn interest on your AMMO holdings.</li>
<li className='py-2'>You dont need any equipment for AMMO staking like you would for mining</li></ul>
The primary benefit of staking AMMO tokens is that you earn more AMMO tokens, and interest rates are very generous. With project Bitsniper, you can earn more than 45% per year. Its potentially a very profitable way to invest, and the only thing you need is AMMO tokens.
                              </div>

<br/><br/>
Play2Earn
Players can earn $AMMO by playing games. Simple as that.
<br/><br/>

<div className='pt-7'>
                                  <div className='text-2xl text-white inline-block'>
                                  Foundation Fund & Staking Pool
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>The Foundation Fund supports the ecosystem and allows us to offer incentive grants to artists and designers to produce high quality level design and ASSETS. The Staking Pool contains the rewards for token holders who choose to stake.
                              </div>
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
