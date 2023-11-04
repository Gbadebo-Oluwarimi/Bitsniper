"use client"

import { useEffect } from 'react';
import Image from 'next/image'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import Footer from './Components/Footer'
import Link from 'next/link'
import Biteam from './Components/Headers/Biteam';
import AOS from 'aos';
import 'aos/dist/aos.css';

const poppins = Poppins({ subsets: ['latin','devanagari'], weight:"400" })
const myfont = localFont({src:"../fonts/League.ttf"})
const myfont2 = localFont({src:"../fonts/League-ThinInline.ttf"})
const myfont3 = localFont({src:"../fonts/League-Inline.ttf"})
export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 900,
         once: false,
       })
 }, [])
  return (
    
    <div className="overflow-hidden" style={myfont.style}>


    <main style={myfont.style} className='relative text-white overflow-hidden'>
      <div className='relative  min-h-screen  overflow-hidden'>
      
      <video autoPlay loop muted className='video  relative'>
        <source src="/bgbg.mp4" />
      </video>
     
        {/* <div className='absolute w-2/4 min-h-screen bg-black skew-x-12 -left-72 opacity-40 '>
        </div>
        <div className='absolute w-2/4 min-h-screen bg-black skew-x-12 -right-72  opacity-40 '>
        </div> */}
       <div className='relative max-w-7xl m-auto p-7 flex justify-between align-middle '>
            <div className='font-bold tracking-wide'>
            <Image data-aos="fade-down"
            src="/logo.png"
             width={40}
            height={40}
            alt="Picture of the author"/>
            </div>
            <div data-aos="fade-right">
              <ul className='md:flex justify-between align-middle items-center text-sm hidden'>
                <li className='text-lightgreen px-6 hover:text-lightgreen ease-in-out transition delay-100 cursor-pointer '>Home</li>
                <li className='px-6 hover:text-lightgreen ease-in-out transition delay-100 cursor-pointer '>About Us</li>
                <li className='px-6 hover:text-lightgreen ease-in-out transition delay-100 cursor-pointer '>Blockchain</li>
                <Link href="whitepaper"><li className='px-6 hover:text-lightgreen ease-in-out transition delay-100 cursor-pointer '>Docs</li></Link>
                <li className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke={2} class="w-4 h-4 font-bold ml-20 hover:text-yellow-400 ease-in-out transition delay-100 cursor-pointer stroke-2">
  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
</svg>
</li>
              </ul>
            </div>
       </div>
       <div  className='relative text-center md:text-left'>
       <div className=' justify-between max-w-9xl m-auto p-4'>
     
          <div className='absolute -right-10 -top-3 md:top-10 md:right-1 transform rotate-90 text-sm font-bold ' >
///////////<span className='text-green-400'>////////</span>////////////
          </div>
         
            <div className='justify-between max-w-6xl m-auto pt-4 mt-16 text-white' style={myfont2.style}>
            <div data-aos="fade-up"
      >
       <div className='text-sm md:text-md'>
       BITSNIPER.IO
       </div>
       </div>
              <div data-aos="fade-up">
              <span className='text-6xl md:text-8xl pt-10 '>A New Phase <br/><span className='text-lightgreen'>Begins</span></span>
              <br/>
             <div className='text-xl md:text-3xl'>
            Battle <span className='text-lightgreen'>in</span> Style
             </div>
          
          
            <div className='mt-10'>
              <Link href="https://bitsniper-migration.netlify.app/"><button className='border-2 border-lightgreen p-2 text-sm' >Polygon Migrations</button></Link>
            </div>
            </div>
            </div>
           
             
       </div>
       </div>
       </div>
       <div className='bg-bg p-2 w-full inline-flex flex-nowrap align-middle'>
           
       <div class="  m-auto w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
    <li>
        <Image src="/bg7.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg6.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg5.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg8.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg3.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg11.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg10.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
        <Image src="/bg7.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg6.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg1.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg4.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg3.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg2.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
        <li>
        <Image src="/bg10.png"
                  width={120}
                  height={120}
                  className='grayscale hover:grayscale-0 transition ease-in-out delay-150'
                  />
        </li>
       
    </ul>
</div>

       </div>
       <div className='relative warning w-full p-4 min-h-3xl bg-black'>
            {/* <div className='max-w-2xl m-auto mt-12'>
            <div className=' text-center flex justify-between'>
                  <div className='text-3xl'>
                      December <span className='text-yellow-400'>2018</span>
                      <div className='text-sm mt-2'>Play First On</div>
                      <div className='text-4xl text-yellow-400 mt-3'>
                        XBOX
                      </div>
                  </div>
                  <div className='text-3xl mx-2'>|</div>
                  <div className='text-3xl'>
                      December <span className='text-yellow-400'>2018</span>
                      <div className='text-sm mt-2'>Come to all platforms</div>
                      <div className='text-3xl text-yellow-400 mt-3'>
                        Ps4-pc
                      </div>
                  </div>
              </div>
            </div>

              <div className='max-w-6xl m-auto p-4 flex justify-between flex-wrap mt-20'>
                      <div className=' h-96 w-96 bg-gray-600 p-4 text-black'>
                            <div className='text-md mt-8 ml-4'>Customize Your Soilders</div>
                            <div></div>
                      </div>
                      <div>

                      </div>
                      <div className=' h-96 w-96 bg-gray-600 p-4 text-black'>
                            <div className='text-md'>Customize Your Soilders</div>
                            <div></div>
                      </div>
              </div> */}
 <Biteam/>
      <div className='bg-bg2 '>
   <div className='min-h-screen grid grid-cols-6 [mask-image:_linear-gradient(to_bottom,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
          <div className='col-span-6  p-10 min-h-screen '>
          <div className='absolute right-10 -top-10 md:top-10 md:right-1 transform rotate-90 text-sm font-bold '>
///////////<span className='text-green-400'>////////</span>////////////
          </div>
          <div className='pt-20 pl-10 text-lightgreen'>Bitsniper web3.0</div>
           <div data-aos="fade-right" className='text-6xl pt-4 pl-10'>
            A Journey Into Web-3.0 <br/>Gaming Solutions
           </div>
           <div data-aos="fade-right" className='text-sm font-light pt-4 pl-10 w-1/2'>BitSniper will provide a rewarding and immersive play to earn experience for players, with a focus on gameplay, narrative, social interaction, player skill development, and updates. We will encourage collaboration through chat rooms, message boards, and guilds, and will offer in-game rewards for virtual assets and cryptocurrency to ensure players feel their time is well spent.</div>
          <div className=' pl-10 text-md mt-20'>
          <Link href="https://www.sushi.com/swap?chainId=137&token0=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&token1=0xAd4A28aDA69823fd62f1d7C24b51FB7a382F10D5"><button className='border-2 border-lightgreen p-2 text-xs w-44'>Buy Bitsniper</button></Link>
          </div>
          <div className='absolute top-20 right-32'>
<div data-aos="fade-left" className='w-96  min-h-screen side'>

</div>
          </div>
          </div>
       
   </div></div>
   <div data-aos="fade-down" className='bg-black p-3 w-full text-center font-semibold'>
   ////////////////////////////////<span className='text-lightgreen'>///////////////////////////</span>
   ////////////////////////////////
   </div>
<div>
  <div className='max-w-6xl m-auto '>
    <div className='flex justify-between'>
        <div data-aos="fade-right" className='mt-20 mb-20'>
          <div className='text-4xl'>A Multi-Chain <br/><span className='text-lightgreen '>war stories</span></div>
              <div className='text-xs w-96 mt-10' style={myfont.style}>
              Our gameplay will be fair and transparent to ensure a fun and trustworthy gaming experience. We will hold community events, grant incentives and referrals, and offer opportunities for feedback and contributions to the game’s development to foster an engaged, enjoyable, and loyal community.
              </div>
              <div className='text-xs text-lightgreen mt-3'  style={poppins.style}>
                More items
              </div>
            
              <div className='flex mt-8' style={poppins.style}>
              <Link href="https://www.sushi.com/swap?chainId=137&token0=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&token1=0xAd4A28aDA69823fd62f1d7C24b51FB7a382F10D5"><button className='border-2 border-lightgreen p-2 text-xs w-44'>Buy Bitsniper</button></Link>
                <button className='border-2 border-lightgreen p-2 text-xs w-44 mx-2'>Download Open Beta</button>
              </div>
              
        </div>
       
        <div className= 'hidden w-1/2 md:flex justify-between gap-4 mb-10 h-full p-5'>
        <div class="inline-block w-1/2 h-full ">
          <div data-aos="fade-down" className='bg-red-400 h-40 mb-4'>
           <img src="/bg10.jpg" className='w-full h-full object-cover'/>
          </div>
          <div data-aos="fade-down" className='bg-red-400 h-96 '>
          <img src="/b-5.jpg" className='w-full h-full object-cover'/>
          </div>
        </div>
        <div data-aos="fade-left" className='b-1 w-1/2'>
        </div>
  </div>
    </div>
</div>
</div>

    </div>
  

  
    <div className=' relative  m-auto grid grid-cols-8'>
        <div className='col-span-1'/>
        <div className='relative  col-span-8 '>
          <div className='bg-black'>
<div data-aos="fade-up" className='max-w-10xl m-auto  flex'>  <iframe width="1436" height="641.747" src="https://player.vimeo.com/video/823140434?autoplay=1&color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=">
</iframe></div>
          </div>
        </div>
        
      </div>
      <div>
     
    <div className='min-h-screen bg-bg  py-28 '>
            <div className='relative'>
              <div data-aos="fade-up" className=' text-xs text-center text-lightgreen'>Bitsniper.io</div>
              <div  data-aos="fade-up" className='text-5xl text-center'>Product <span className='text-lightgreen'>Development</span> Roadmap</div> <div  data-aos="fade-up" className='text-center'>A Journey to Enhanced User Experience</div>
           
           <div className='w-full px-14 max-w-7xl m-auto  inline-block md:flex  overflow-hidden min-h-screen mt-10 md:gap-6'>
            <div  data-aos="fade-up" className='md:m-0 my-5 w-full md:min-h-2/4 md:w-2/6 bg-dark rounded-sm border p-5 border-lightgreen opacity-60'>
                                  <div className='text-8xl relative'>01</div>   
                                  <div>
                                  <span className='text-lightgreen'>PHASE 1 : 2022 Q3/Q4</span>
                                  <div className='text-xs py-5'>
                                  -Conceptualization, idea and beta-test completed project BitSniper -Team building -Art style definition/ Game visual style -Game mechanics description -Sarah upgrade
                                  </div>

                                  <span className='text-lightgreen'>PHASE 2 : 2023 Q1</span>
                                  <div className='text-xs py-5'>
                                  Requirement analyses/ Software design/ Software development and unit testing -Pre-alpha testing and milestone release -User flow UX charts -Customization design/ Metagame design/ Technology stack definition -3D models/ 3D animations/ VFX concepts/ Prototypes -UI (in-game) design -BitSniper.io Website Launch -BitSniper Gameplay Teaser Whitepaper v2 released -LP locked & ownership renounced -Comply with KYC and AML regulationS
                                  </div>

                                  <span className='text-lightgreen'>Phase 3: 2023 Q2</span>
                                  <div className='text-xs py-5'>
                                  Private Sale -BitSniper Website Launch v2 -Unreal Engine game development and level design -Presale -NFT BitSniper series auction drop -Pre-alpha teaser release BitSniper -CertiK security audit -Comply with KYC and AML regulations -Listing on Sushiswap -Coinmarketcap and Coingecko listing
                                  </div>
                                  </div>    

            </div>
            <div  data-aos="fade-down" className='w-full md:min-h-2/3 md:w-2/6 bg-dark rounded-sm border p-5 border-lightgreen opacity-60'>
                               <div className='text-8xl relative'>02</div>   
                               <div>
                                  <span className='text-lightgreen'>Phase 4: 2023 Q3</span>
                                  <div className='text-xs py-5'>
                                  Requirement analyses/ Software design/ Software development and unit testing -Pre-alpha testing and milestone release -User flow UX charts -Customization design/ Metagame design/ Technology stack definition -3D models/ 3D animations/ VFX concepts/ Prototypes -UI (in-game) design -BitSniper.io Website Launch -BitSniper Gameplay Teaser -Whitepaper v2 released -LP locked & ownership renounced -Comply with KYC and AML regulation
                                  </div>

                                  <span className='text-lightgreen'>Phase 5: 2023 Q4</span>
                                  <div className='text-xs py-5'>
                                  Perpetual beta launch of BitSniper PvP v4 -Release of the Shootout Death Match v1 -NFT marketplace launch -Brand new minigames launched -DeFi features (Staking & Farming) -Branded merchandise/ Extending BitSniper ecosystem -Implement Burn Tax on transactions -Stable release of BitSniper 1.1
                                  </div>

                                 
                                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            </div>
            <div  data-aos="fade-up" className=' md:m-0 my-5 w-full md:min-h-2/3 md:w-2/6 bg-dark rounded-sm border p-5 border-lightgreen opacity-60'>
                               <div className='text-8xl relative'>03</div>  
                               <span className='text-lightgreen'>Phase 7: 2024 Q3/Q4</span>
                                  <div className='text-xs py-5'>
                                  New products and services included in app -UI optimalization -Open access to districts 7 and 8 -Public Beta test for Bitsniper 2.0 -BitSniper wallet/app release -Integration with payment services for eCommerce -Corporate endorsement and sponsorship
                                
                                  </div> 
                                  <span className='text-lightgreen'>PHASE 2 : 2023 Q1</span>
                                  <div className='text-xs py-5'>
                                  Requirement analyses/ Software design/ Software development and unit testing -Pre-alpha testing and milestone release -User flow UX charts -Customization design/ Metagame design/ Technology stack definition -3D models/ 3D animations/ VFX concepts/ Prototypes -UI (in-game) design -BitSniper.io Website Launch -BitSniper Gameplay Teaser Whitepaper v2 released -LP locked & ownership renounced -Comply with KYC and AML regulationS
                                  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            </div>
           </div>
           </div>
           
           </div>
           
           
           
           
           
           
           
           
           
           
           
            
    </div>
    <div className='bg-black p-7'>
      <div className='max-w-5xl m-auto'>
          <div className='text-2xl'>
            <span  data-aos="fade-down" className='text-lightgreen'>Join</span> the thriving Community
          </div>
          <div  data-aos="fade-down" className='w-full md:mb-5 mb-0 inline-block md:flex max-w-8xl m-auto justify-between mt-10 md:mx-0 px-10 gap-4'>
                <iframe width="353.328" height="198.747" className='w-full   md:h-64 md:w-80 mb-2' src="https://www.youtube.com/embed/NuLVXurQrCM?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fbitsniper.io&widgetid=1">
</iframe>

                            <iframe width="353.328" height="198.747" className='w-full   md:h-64 md:w-80 mb-2' src="https://www.youtube.com/embed/0yaFDmoyavY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fbitsniper.io&widgetid=3">
</iframe>
                            <iframe width="353.328" height="198.747" className='w-full   md:h-64 md:w-80 mb-2' src="https://www.youtube.com/embed/nEDo9WiBuEI?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fbitsniper.io&widgetid=5">
</iframe>

          </div>
         
          <div className='text-center m-5' style={poppins.style}>
<div className='text-sm'>
  We've crossed over 10k on Twitter
</div>
<div className='text-xs'>
  Thank to you guys and the <span className='text-lightgreen'>BitSniper</span> Team
</div>
</div>
 <div  data-aos="fade-up" className='text-center m-5'>
              <button className='border-2 border-lightgreen p-2 mr-3 text-xs w-44'>View More</button>
          </div>
      </div>
    </div>
    
    
    <Footer />


    </main>


    
    </div>
    
  )
}
