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
                            
                                  Wallets
                                  <div className='text-2xl pt-4 text-white font-light'>Why register my cryptocurrency<br/> wallet?</div>
                              </div>
                              <div className='text-md'>
                              <div className='pt-8'>
                              Using Polygon, users can interact with any decentralized application (DApp) without ever having to worry about network congestion.<br/><br/>
          
          Bitsniper utilises blockchain technology and therefore a wallet is required in order for you to be able to interact with this blockchain technology. Your wallet will securely authorise your access to the website and help you to keep track of any transactions that you perform. <br/><br/>
          It will act as storage for Polygon Network tokens that you hold, as well as any virtual goods that you own, such as weapons or property. For example, when you earn some $AMMO via Bitsniper Play2Earn, you will need a place to store it.<br/><br/>
          A cryptocurrency wallet provides you with true ownership of everything that you purchase, earn or win. You will always have control and access to these virtual goods as long as you remain in control of your wallet.<br/><br/>
                              </div>
                              <div className='pt-7'>
                                  <div className='text-2xl text-white inline-block'>
                                    Where are my funds?
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>Your funds and NFTs are in whichever wallet that you connected to your account when you registered. It is your sole responsibility to remember and keep safe your cryptocurrency wallet credentials and the tokens inside that wallet.<br/><br/>
          
          If you registered through the Web3 option, you likely have a MetaMask wallet (https://metamask.io/), or a Brave wallet if you use the Brave browser).<br/><br/>
          Use the link above to access your wallet. When you have accessed your wallet, there are tools within it to withdraw your tokens.s
                              </div>
                              <div className='pt-7'>
                                  <div className='text-2xl inline-block'>Can I change wallets?
                                  <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div>
                                  </div>
                                  <br/>It is not possible to change the wallet that is connected to your Bitsniper account. This is mainly due to technical reasons within the Polygon blockchain that are beyond our control.<br/><br/>
          
          You can however, register a new account and connect the wallet that you wish to use for the new account.<br/><br/>
          
          Change your username and email address on your existing account to something else. This will allow you to re-use them on the new account.<br/><br/>
          
          You can transfer $AMMO tokens to your preferred wallet. There is a send option within the wallet.<br/><br/>
          
          You can transfer NFTs, such as weapons and NFT-skins to another of your wallets using the “Gifting” features on NFT exchanges like OpenSea and Rarible.<br/><br/>
          
          Triple check that any wallet addresses you are sending your $AMMO and NFTs to is correct before initiating the transfer. There is no way to recover currency or NFTs that were sent to an incorrect address.<br/><br/>
                              </div>
                              </div>
                              </div>
    </div>
  )
}

export default page
