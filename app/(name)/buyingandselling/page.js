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
                              <div className='text-6xl mt-32 font-bold mb-14 text-lightgreen'>
                                  Buying and Selling
                                  <div className='text-lg  pt-4 text-gray-400'>Effortless Token Swapping: How to Easily Trade Crypto <br/>for In-Game Tokens on BitSniper</div>
                              </div>
                              <div className=' font-semibold'>
                              <button className='border-2 border-lightgreen p-2 mr-3 text-xs w-full my-7'>Buy Now</button>
                              BitSniper’s swap function provides an easy and convenient way for users to trade their crypto tokens for in-game tokens. The process is simple and user-friendly, making it accessible to both new and experienced users. Here’s how the swap function works:
          <br/><br/>
          
          1. Sign in to your BitSniper account.<br/><br/>
          2. Select the “Swap” option from the main menu.<br/><br/>
          3. Choose the crypto token you would like to trade for in-game tokens. BitSniper supports almost all popular crypto tokens, including Bitcoin, Ethereum, and others.<br/><br/>
          4. Enter the amount of the crypto token you would like to trade.<br/><br/>
          Review the conversion rate and the estimated amount of in-game tokens you will receive.<br/><br/>
          5. Confirm the transaction by clicking on the “Swap” button.<br/><br/>
          6. The crypto tokens will be exchanged for in-game tokens and added to your account balance. The swap function on BitSniper is fast, secure, and transparent. The exchange rate is updated in real-time and all transactions are processed through a secure and encrypted platform to ensure the safety of your assets.<br/>
                              </div>
                          
                              </div>
    </div>
  )
}

export default page
