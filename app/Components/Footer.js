import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'


const poppins = Poppins({ subsets: ['latin','devanagari'], weight:"400" })
export default function Footer() {
  return (
    <footer class=" bg-black text-white" style={poppins.style}>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 ">
              <a href="/" class="flex items-center">
              <Image
            src="/logo.png"
             width={40}
            height={40}
            alt="Picture of the author"/>
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white px-2">BitSniper.io</span>
             
              </a>
              <div className='mt-8 '>
                <div className='text-xs font-semibold'>Subscribe to the Bitsniper Insider</div>
                <div className='text-xs py-2 w-72'>Discover tips, technical guides, and best practices in our monthly newsletter for developers.</div>
                <button className='border-2 border-lightgreen p-2 mr-3 text-xs w-44 my-7'>Subscribe</button>
              </div>
          </div>
          <div class=" text-xs lg:text-sm grid grid-cols-2  sm:gap-6 sm:grid-cols-5">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Use</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/wallets" class="hover:underline">Wallets</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/buyingandselling" class="hover:underline">Buying and Selling</a>
                      </li>
                      <li class="mb-4">
                          <a href="staking" class="hover:underline">About Staking</a>
                      </li>
                      <li class="mb-4">
                          <a href="/usageofnfts" class="hover:underline">The Usage of NFTs</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Learn</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/bitsniper" class="hover:underline">What is Bitsniper</a>
                      </li>
                      <li className='mb-4'>
                          <a href="whybitsniper" class="hover:underline">Why Bitsniper</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/useofammo" class="hover:underline">Use of Ammo</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/technology" class="hover:underline">Technology</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/useofai" class="hover:underline">Use of AI</a>
                      </li>
                  </ul>
              </div>
              
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">How To Earn</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                          <a href="/self-sustaining" class="hover:underline">Self-Sustaining</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/loyaltybasedairdrops" class="hover:underline">Loyalty-Based Airdrops</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/automated-buyback-and-burn-function" class="hover:underline">Automated BuyBack and Burn</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/dynamic-profit-sharing" class="hover:underline">Dynamic Profit-Sharing</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/exponential-staking-pools" class="hover:underline">Exponential Staking Pools</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/automated-aggregator" class="hover:underline">Automated-Aggregator</a>
                      </li>
                      <li className='mb-4'>
                          <a href="/crosschains-dapps" class="hover:underline">Cross-Chains DAPPS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal/Docs</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">GitBook</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Roadmap</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Videos</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Subscribe</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">WhitePaper</a>
                      </li>
                  </ul>
              </div>

              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">About</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="/Team" class="hover:underline">Team</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">FAQ</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">KYC</a>
                      </li>
                      <li class="mb-4">
                          <a href="/contact" class="hover:underline">Contact</a>
                      </li>
                      <li>
                          <a href="/disclaimer" class="hover:underline">Disclaimer</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Bitsniper</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="https://t.co/0YSEyJXNSR" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

                  <span class="sr-only">Telegram</span>
              </a>
              <a href="https://discord.com/invite/bitsniper" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="https://twitter.com/Bitsniper_io" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
          
          </div>
      </div>
    </div>
</footer>
  )
}
