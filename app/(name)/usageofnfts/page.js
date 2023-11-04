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
                              <div className='text-5xl mt-32 inline-block'>
                              <div className='text-xs text-lightgreen pb-4 font-semibold'>NFTs(Non-Fungible-Tokens)</div>
                                 The Usage of NFTs
                                 <div className='text-lg pt-4 text-gray-400 font-light'>Unleashing the NFT Ecosystem: A Paradigm <br/>Shift in Digital Ownership</div>
                              </div>
                              <div className='pt-14'>
                                  <div className='text-lg text-white inline-block'>
                                  BUYING NFTS ON THE PLATFORM
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>Players have the option to buy unique in-game items, such as weapons, weapons skins, attachments or character skins, as NFTs. These NFTs can be purchased from other players or directly from the game’s marketplace using the $AMMO token. The rarity and value of each NFT is determined by its attributes, such as its power, durability, or design. As players progress in the game and earn rewards, they can use their earnings to purchase NFTs, which can aid them with advantages in the games to come.
                              </div>
              
                              <div className='pt-7'>
                                  <div className='text-lg text-white inline-block'>
                                  EARNING NFTS ON THE PLATFORM
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>NFTs can be won through various gameplay achievements. Players can earn NFTs by completing in-game missions, winning matches, and reaching specific levels. These NFTs can represent unique in-game items such as weapons, weapons skins, attachments or character skins, and can be used to enhance their gameplay experience. Players can also participate in special events hosted by the BitSniper team, where they can compete against each other for a chance to win exclusive NFTs. Top finishers of the leaderboards will also have a chance to win exclusive NFTs.
                              </div>
                              
                              <div className='pt-7'>
                                  <div className='text-lg text-white inline-block'>
                                  UPGRADING AND MINTING NFTS
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>Players can use their in-game winnings to upgrade their NFTs or combine multiple NFTs to create more powerful and rare versions. This process is known as minting, and it allows players to create unique, one-of-a-kind NFTs that can be used to enhance their gameplay experience.
                              </div>
                              <div className='pt-7'>
                                  <div className='text-lg text-white inline-block'>
                                  TRADING NFTS
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>Players can use their in-game winnings to upgrade their NFTs or combine multiple NFTs to create more powerful and rare versions. This process is known as minting, and it allows players to create unique, one-of-a-kind NFTs that can be used to enhance their gameplay experience.
                              </div>
                              <div className='pt-7'>
                                  <div className='text-lg text-white inline-block'>
                                  Perks of NFTs
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>  Unique abilities.
Some NFTs can grant players unique abilities, such as the ability to move faster, jump higher, or have better aim. These abilities will not be game changing, but can give the player some advantage over their opponent.

Customization.
NFTs allow players to customize their characters or equipment, providing a unique look or style that sets them apart from other players. NFTs allow players to customize their characters or equipment, providing a unique look or style that sets them apart from other players.

Passive income.
Some NFTs can generate passive income for players, such as by providing a percentage of in-game earnings or by offering exclusive rewards for holding the NFT for a certain amount of time. The NFTs can also be traded for a profit.
                              </div>
                             
                             </div>
    </div>
  )
}

export default page
