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
                            <div className='items-center align-middle text-center'>Contact</div>
                              </div>
                              <div className='text-6xl mt-32 font-bold mb-14 text-lightgreen'>
                                  Contact Us
                                 
                              </div>
                              <div className='pt-8 text-sm font-semibold'>
                              Get in touch
Get in touch with the team through our Official socials Community
 
Send us an email :

For support related to BitSniper, please send your mail to :
support@bitsniper.io

For marketing related inquiries, please send your mail to :
marketing@bitsniper.io

For any other inquiries, please send your mail to :
 info@bitsniper.io
                              </div>
                           <div>  <button className='border-2 border-yellow-400 p-2 mr-3 text-xs w-44 my-7'>Buy Now</button></div>
                              </div>
    </div>
  )
}

export default page
