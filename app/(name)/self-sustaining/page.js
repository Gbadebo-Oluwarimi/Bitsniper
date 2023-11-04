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
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Artificial intelligence</div>
                            
                                Self sustaining
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Community-Driven Innovation: Nurturing Engagement <br/>and Growth in Project BitSniper</div>
                              </div>
                              <div className='pt-8 '>
                              The number one goal of Project BitSniper is to create a game that is rewarding and engaging for the players. In order to keep the game fresh, the BitSniper team will not only stay in touch with the community, but be a part of it! By taking small fees in appropriate places, the game development will grow at a pace that is in line with player engagement.
                              <div className='pt-7'>
                                  <div className='text-2xl text-white inline-block'>
                                  BitSniper aims to be self-sustaining
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>With the help of investors, the game development will reach significantly higher levels of progress. We highly value our investors and believe they are the key to rapid success. Our investors will be handsomely rewarded as the game grows, and players will engage in the action-packed game we know as BitSniper.<br/><br/>

For the players – various ways will allow players to earn $AMMO, the token and currency used in-game. Throughout the game, players may be randomly rewarded after completing challenges. There will be free-to-play (F2P) game modes that allow players to hone their skills or play against their best friends in a fully customizable PvP gaming experience. Quickplay and custom games are the two options for the F2P gamers. Quickplay matches can reward random players, while custom matches do not provide random rewards. Custom matches are a great way to host small competitive games!<br/><br/>

The core of BitSniper will be a heart-pounding PvP game featuring several modes. These PvP matches start with a challenger and a challenge taker. The game starts when both players (or teams) agree to the challenge. Both players pay a predetermined amount of $AMMO, which is added to a pool. The winner will take the prize pool. These high-stake PvP games will have increased chances for random rewards at the end of the game. Both the winner and loser will have the chance to get random rewards; however, a win will increase the odds. The higher the stakes, the greater the chance for random rewards.<br/><br/>

As of right now, the core game modes will be PvP operation and 1v1 arenas.<br/><br/>

The PvP operations will give each player an equal challenge. The goal is to complete the challenge quickly and efficiently. Points are earned for headshots, while points are reduced for killing hostages and missing shots. Once someone clears the operation, the game stops. Being the one to complete the operation first earns points, but will not be the only factor to determine the winner.<br/><br/>

The 1v1 arena will be a best of nine game, where two players face off against one another in a sweat-dripping challenge. There will be several standard loadout options, but all players will be able to create their own challenge.

There will be an ELO system, to allow players to decide whether or not to challenge someone. Losing against a lower ELO player will drop your own ELO significantly. On the other hand, winning against a higher ELO player will significantly increase your ELO. Having a higher ELO increases the chances of random rewards.<br/><br/>

Leaderboards are another way for players to compete. Finishing on the top of the leaderboard will give the players rewards.<br/><br/>

All game modes are focused on providing an action-packed experience. This means games will be fast, engaging and fun to play. Games will take approximately 3-8 minutes each.<br/><br/>

Season passes, battle passes, quests and missions are all part of the BitSniper game experience and are designed to keep players engaged and excited to play with their unique character.<br/><br/>

Reward pools will be filled based on the games that are played, in-game transactions and the trading of $AMMO.<br/><br/>

Investors in BitSniper will receive returns as they stake their tokens. A staking pool will be filled by the players. Long-term investors who engage in the game will also benefit from additional in-game rewards in various tiers.
                              </div>


                              <div className='pt-7'>
                                  <div className='text-2xl text-white inline-block'>
                                  Staking and token burn mechanics
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>To increase the demand for the tokens, a burn mechanic will be added. The staking pool will be filled, based on the games that are played and in-game transactions.
                              </div>

                              </div>
                           
                              </div>
    </div>
  )
}

export default page
