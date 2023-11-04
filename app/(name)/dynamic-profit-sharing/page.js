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
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Profit Sharing</div>
                            
                                 Dynamic Profit Sharing
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Driving Growth with Dynamic Profit Sharing: Revolutionizing Early-Stage <br/>Expansion Capital in Bitsniper</div>
                              </div>
                              <div className='pt-8'>
                              In our view, dynamic profit sharing should be the go to source of funding for any project looking to raise early stage expansion capital. In particular, it provides a clear relationship between Bitsniper commercial success and the value of AMMO. Moreover, it returns an estimable pre-defined income stream to token holders while allowing the Bitsniper Team total control of their ecosystem and avoidance of any dilution. Put simply, disruption of the dividend model is a win:win for both sides.
<br/><br/>
Valuation of a revenue share token is very straightforward. It is the present value of future pay-outs depending on assumptions of revenue growth. Revenue is very definable and the token holders earn a fixed share of it each year.
These four behaviors make these ghosts, even in a game from 1980, appear to have a will of their own. They feel alive. And that is the purpose of AI in video games.
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
