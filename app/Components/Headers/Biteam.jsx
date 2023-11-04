"use client"

import React, { useRef } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const Biteam = () => {
    const ref = useRef(null)
    const { scrollYprogress } = useScroll({
        target:'ref',
        offset:["0 1", "1.33 1"]
    })
  return (
    <AnimatePresence>
    <div className='relative bg-black  min-h-screen  p-3'>
       
    <div className='px-10 py-10 text-center min-h-screen  '>
     <div data-aos="fade-up" className='text-5xl'>Welcome To Strike-Team <br/><span className='text-lightgreen'>Project-X</span></div>
             <div data-aos="fade-up" className='text-xs mt-5'>NEW GAMEPLAY INNOVATIONS. ALL-NEW GUN HANDLING. ADVANCED AI.<br/> MODERN WARFARE® II BRINGS YOU A GLOBAL CAMPAIGN,</div>
   <div className='mt-8 flex w-full gap-2'>
     <div data-aos="fade-left" className=' w-1/4'>
     <img src="/price.jpg"
                
                 className='opacity-50 transition ease-in-out delay-200 hover:opacity-100 h-full object-cover'
                 />
                <div className='relative mt-4'>
                Ju<span className='text-lightgreen'>Ne</span>
                </div>
     </div>
     <div data-aos="fade-down" className=' w-1/4'>
     <img src="/master.jpg"
                
                className=' opacity-50 transition ease-in-out delay-200 hover:opacity-100 h-full object-cover'
                />
                  <div className='relative mt-4'>
                  Pr<span className='text-lightgreen'>ice</span>

                </div>
     </div>
     <div data-aos="fade-up" className='bg-gray-700-400 w-1/4'>
     <img src="/ghost.png"
                
                className='opacity-50 transition ease-in-out delay-200 hover:opacity-100 h-full object-cover'
                />
                  <div className='relative mt-4'>
 the <span className='text-lightgreen'>zen</span>

                </div>
     </div>
     <div data-aos="fade-down" className=' w-1/4'>
     <img src="/img4.jpg"
                
                className='opacity-50 transition ease-in-out delay-200 hover:opacity-100 h-full object-cover'
                />
                  <div className='relative mt-4'>
Comr<span className='text-lightgreen'>ade</span>
                </div>
     </div>
     <div data-aos="fade-right" className=' w-1/4'>
     <img src="special.jpg"                 
                className='opacity-50 transition ease-in-out delay-200 hover:opacity-100 h-full object-cover'
                />
                  <div className='relative mt-4'>
Gh<span className='text-lightgreen'>ost</span>
                </div>
                      </div>
    
   </div>
    </div>
   </div>
   </AnimatePresence>
  )
}

export default Biteam
