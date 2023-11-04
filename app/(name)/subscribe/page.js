import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className=' py-10 min-h-screen px-20'>
                    
                    <div className='flex items-center align-middle text-center justify-between'>
                    
                    <Link className='flex' href="/">
                    
          
                    <Image
            src="/logo.png"
             width={30}
            height={20}
            alt="Picture of the author"/>
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2">BitSniper.io</span>
                   
                    </Link>
                            <div className='items-center align-middle text-center'>xf</div>
                              </div>
                              <div className='text-5xl mt-32 inline-block font-bold'>
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Connect with us</div>
                            
                                  Subscribe
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Level Up Your Game: Join the Cryptocurrency Battle<br/> with Bitsniper - Subscribe Now</div>
                              </div>
                              <div className='pt-8 text-sm font-semibold'>
                              Compete. Win. Ascend, and earn cold hard cryptocurrency in the process. It’s anyone’s game now. Follow https://www.bitsniper.io to gear up for day one with exclusive, early access to weapons and gear and receive a unique Bitsniper player emblem. Keep up with all of the latest information by following us on:
<br/><br/>Telegram https://t.me/bitsnipergame<br/>
Discord https://discord.com/invite/bitsniper<br/>
Twitter https://twitter.com/bitsniper_io
                              </div>
                           <div>  </div>
                              </div>
    </div>
  )
}

export default page
