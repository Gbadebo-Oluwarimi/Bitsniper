import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import Footer from '../Components/Footer'
import Link from 'next/link'


const myfont = localFont({src:"../../fonts/League.ttf"})
const myfont2 = localFont({src:"../../fonts/League-ThinInline.ttf"})
const myfont3 = localFont({src:"../../fonts/League-Inline.ttf"})


const page = () => {
  return (
    <div className='overflow-hidden text-white' style={myfont.style} >
          <div className='relative bg-black min-h-screen  overflow-hidden'>
      
     
       <div className='relative max-w-7xl m-auto p-7  flex justify-between align-middle '>
            <div className='font-bold tracking-wide'>
           <Link href="/"> <Image
            src="/logo.png"
             width={40}
            height={40}
            alt="Picture of the author"/></Link>
            </div>
            <div>
              <ul className='md:flex justify-between align-middle items-center text-sm hidden'>
                <Link href="/"><li className=' px-6 hover:text-yellow-400 ease-in-out transition delay-100 cursor-pointer '>Home</li></Link>
                <li className='px-6 hover:text-yellow-400 ease-in-out transition delay-100 cursor-pointer '>About Us</li>
                <li className='px-6 hover:text-yellow-400 ease-in-out transition delay-100 cursor-pointer '>Blockchain</li>
                <li className='px-6 hover:text-yellow-400 ease-in-out transition delay-100 cursor-pointer text-lightgreen'>Docs</li>
                <li className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke={2} class="w-4 h-4 font-bold ml-20 hover:text-yellow-400 ease-in-out transition delay-100 cursor-pointer stroke-2">
  <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
</svg>
</li>
              </ul>
            </div>
       </div>
      
          <div className='grid grid-cols-8 min-h-screen'>
              <div className='col-span-5 pl-16 mt-32'>
              <div className='text-sm md:text-md text-lightgreen'>BITSNIPER.IO</div>
              <span className='text-6xl md:text-8xl pt-10 '>Whitepaper </span>
              <br/>
             <div className='text-xl md:text-3xl'>
            Battle <span className='text-lightgreen'>in</span> Style
              </div>
              </div>
              <div className='col-span-3 bgw'>

              </div>
          </div>
       </div>
     <div>

     </div>
     <div className='bg-bg p-4 w-full text-center  align-middle text-white'>
<div className='relative text-4xl'>
<span className='text-lightgreen'>WELCOME TO BITSNIPER</span>
</div>
     </div>
       <div className='bg-black px-20 pb-4 text-left text-sm'>
       
                             
A REVOLUTIONARY NEW CRYPTO GAMING PROJECT THAT ALLOWS PEOPLE TO EARN CRYPTO TOKENS AND NON-FUNGIBLE TOKENS (NFTS) BY PLAYING AND WINNING GAMES.
<br></br><br/>
<div className='text-2xl text-gray-400 inline-block'>
                                  INTRODUCTION
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>
Bitsniper is a groundbreaking polyfunctional cross-domain crypto gaming platform. Developed by former experts from Tencent and Ubisoft, BitSniper aims to redefine the gaming landscape through its innovative features and limitless earning opportunities.

Powered by AI, BitSniper offers an unparalleled gaming experience that pushes the boundaries of what’s possible in gaming. With AI-driven Buyback and Burn functions, the platform ensures continuous demand for tokens fueled and driven by each transaction, while the Dynamic Profit Sharing function rewards holders with passive income. Loyalty-Based Airdrops grant exclusive benefits for active contributors to the platform, and the Exchange Aggregator seamlessly connects users to limitless opportunities across multiple chains and decentralized applications (dApps).

BitSniper’s Triple-A, action-packed P2E (Play-to-Earn) games, staking Pools, and liquidity mining pools exponentially multiply profits, allowing investors to maximize their earnings. The platform’s cutting-edge NFT marketplace revolutionizes the concept of digital ownership.

We are committed to foster a vibrant community where individuals can join and participate. By eliminating team tokens, we emphasize a shared vision of collective success and invite investors to embrace the WAGMI mindset. To ensure the utmost transparency and integrity, the platform undergoes a rigorous CertiK audit.

Prepare to be captivated by the limitless possibilities of BitSniper’s polyfunctional cross-domain crypto gaming platform, where thrilling 3-D experiences meet the potential for significant earnings. Join Bitsniper’s transformative journey and shape the future of gaming. Together, let’s redefine the gaming industry and unlock new horizons of opportunity.

Sincerely, 

Jari Bruns, 

BSc CEO

 <br/><br/>
 <div className='text-2xl text-gray-400 inline-block'>
 THE PROBLEM OF CURRENT PLAY TO EARN GAMES
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

-COMPLEXITY OF THE ECOSYSTEM
For most people, play-to-earn games can be difficult to join due to the complexity of the ecosystem. This complexity can make it challenging to understand the necessary steps to join and participate in the games. Fortunately, the demand for more accessible play-to-earn games is growing. This leaves a lot of opportunity for developers to create platforms that make it easier for people to join and participate in play-to-earn gaming.
<br></br><br/>
-CENTRALIZATION
Suspicious manipulation of the game economy, lack of transparency in decisions, suspension of players without clear reason, and data privacy breaches cause players to feel betrayed by, and distrustful towards, play to earn platforms.
<br></br>
-NOT ENOUGH WAYS TO EARN MONEY
Most of the time, gamers, content creators, organizations, and artists are not rewarded with sufficient financial benefits, despite the abundance of potential.
<br></br>
-LIMITED FOR USE OF USER FEEDBACK
The gaming experience and ecosystem are rarely improved based on user feedback.
<br></br>
-SUSTAINABILITY
Most crypto play-to-earn projects suffer from a lack of sustainability and often go bankrupt because they fail to attract a large and consistent player base. This results in a lack of revenue to cover the cost of development and operation, which causes players to become bored with the same old gameplay and lack of new content, causing them to lose interest and stop playing, leading to the downfall of the project.
<br></br>
-CONCLUSION
In conclusion, the failure of crypto gaming projects is often a result of a combination of factors, including a small player base, lack of innovation and differentiation, and the volatility of cryptocurrencies. To succeed in the crypto gaming industry, projects must focus on creating engaging and unique gameplay, as well as fostering a strong and stable community.

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
MARKET ANALYSIS
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

GLOBAL GAMING INDUSTRY MARKET ANALYSIS
On average, the size of the global video game market has climbed 12.9% per annum, growing from $196B in 2021 to an estimated $405B in 2027. The blockchain gaming market in 2021 draws a stark contrast, standing at around $3B. Given that P2E games are in the pipeline of many game developers, the P2E gaming sector is projected to grow exponentially by 26-fold by 2027, if it manages to take up 20% of the entire gaming market by the time.
<br></br>
MARKET SIZE AND USER BASE OF GLOBAL VIDEO GAME INDUSTRY
<br></br>
MARKET GROW RATE : 12.9 % ON AVERAGE, PER ANNUM BY 2027 HITTING $405B

<br></br>

USER GROW RATE : 5.6% ON AVERAGE, PER ANNUM BY 2024 GAINNING 3.32B USERS

<br></br>

Backed by the broader theme of metaverse, P2E started to gain popularity in 2H 2021, and its popularity peaked later at the end of 2021. Global IBs, such as Goldman Sachs and Morgan Stanley, forecast that the size of the metaverse market would hit as high as $8T, much of which, they predicted, would be accounted for by the P2E market.

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
GLOBAL NFT MARKET ANALYSIS
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

The non-fungible token (NFT) market has seen explosive growth in recent years, with the value of NFT sales increasing dramatically. NFTs are unique digital assets that use blockchain technology to certify their ownership and authenticity, allowing them to be bought, sold and traded like physical assets.
<br></br>
NON-FUNGIBLE TOKENS MARKET SIZE, BY REGION, 2018-2030 (USD BILLION)



GLOBAL AI MARKET ANALYSIS
Artificial intelligence (AI) has become a prominent technology in various industries due to its potential to improve efficiency and accuracy in decisionmaking. AI-powered solutions can analyze large volumes of data in a short amount of time and provide valuable insights to support decision-making processes.

<br></br><br></br>

 
<div className='text-2xl text-gray-400 inline-block'>
BITSNIPER
SUSTAINABILITY OOF THE PROJECT
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

BitSniper intends to achieve self-sufficiency by generating revenue through in-game (NFT) transactions, small fees, and advertisements. This sustainable revenue model will fuel the game’s development as players continue to participate.
<br></br>
COLLECTING FEES
Transaction fees for people trading will primarily be used for game development, however a smaller percentage will be used to increase the reward pools for the players. As games are played, players will win and earn tokens. A small percentage of these earnings will go to the staking pool and an even smaller percentage will be dedicated to game development. Transaction fees for people trading will primarily be used for game development, however a smaller percentage will be used to increase the reward pools for the players. As games are played, players will win and earn tokens. A small percentage of these earnings will go to the staking pool and an even smaller percentage will be dedicated to game development. In-game transactions (marketplace), advertising and merchandise revenue will primarily benefit the game development. However, a decent amount will be used to increase the reward pools for the players. A small percentage will benefit the investors, by filling up the staking pool In-game transactions (marketplace), advertising and merchandise revenue will primarily benefit the game development. However, a decent amount will be used to increase the reward pools for the players. A small percentage will benefit the investors, by filling up the staking pool Token burning will be used as a balancing mechanism, to naturally grow token demand.
<br></br>
TRADING FEES
Bitsniper will not collect trading fees for every transaction. The fees will be 0% for sell transactions and 0% for buy transactions. 
<br></br>
PLATFORM FEES
Bitsniper will collect platform fees for every transaction of tokens. These fees will be utilized for game development and marketing, which will help to improve the gaming experience for players and attract more users to the platform. Another share of these collected fees will be used to reward users of the staking pool. The staking pool will allow players to earn additional tokens by holding their tokens in the pool for a set period of time. This incentivizes long-term investment and helps to build a stronger and more active community. The rewards from the trading fees will be distributed to staking pool users, creating a positive feedback loop for the project’s growth and success.
<br></br>
ADVERTISING 
Through advertisements, there will be funds for development and random rewards to players. The advertisements will be kept to a minimum and by purchasing a season pass, adverts will no longer be displayed.
<br></br>
IN-GAME PURCHASE
There will be an item shop with possibilities for players to purchase items. These purchases will generate revenue for development and increase the prize pool for random rewards. The cosmetic items will be NFTs, which can later be sold and traded on the marketplace with others. The item shop will feature a standard range of cosmetic items (NFTs) that will change over time. This will create demand for certain, rarer items. The cosmetics will initially include weapon and player customization. More will be added at later stages.
<br></br>
PLAYER ENGAGEMENT AND COMMUNITY
BitSniper will provide a rewarding and immersive experience for players, with a focus on gameplay, narrative, social interaction, player skill development, and updates. We will encourage collaboration through chat rooms, message boards, and guilds, and will offer in-game rewards for virtual assets and cryptocurrency to ensure players feel their time is well spent. We will provide a variety of challenges to keep players engaged and will regularly update the game with new features and content. Our gameplay will be fair and transparent to ensure a fun and trustworthy gaming experience. We will hold community events, incentivize referrals, and offer opportunities for feedback and contributions to the game’s development to foster an engaged, enjoyable, and loyal community.
<br></br>
SCALABILITY
BitSniper will achieve scalability by using the power of AI and blockchain technology. AI will enhance the gameplay experience by creating more immersive environments, introducing new game modes, features and content to keep players engaged. Blockchain technology will provide the usage of NFTs to represent unique in-game assets and will enable transparent trading between players without intermediaries or centralized servers. Blockchain will also enable DeFi features, such as staking, that provide players with additional ways to earn rewards and participate in the game’s ecosystem. A strong and active community will help build a loyal player base and contribute to the game’s growth and expansion. By using AI and blockchain, BitSniper will create a more engaging and scalable play-to-earn gaming experience.
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
THE USAGE OF CRYPTO CURRENCIES ON BOARD SWAP FUNCTION ($TOKEN TO $AMMO)
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

BitSniper’s swap function provides an easy and convenient way for users to trade their crypto tokens for in-game tokens. The process is simple and user friendly, making it accessible to both new and experienced users.
<br></br>
Here’s how the swap function works:
<br></br>
Sign in to your BitSniper account. 
Select the “Swap” option from the main menu. 
Choose the crypto token you would like to trade for in-game tokens. BitSniper supports almost all popular crypto tokens, including Bitcoin, Ethereum, and others. almost all popular crypto tokens, including Bitcoin, Ethereum, and others. 
Enter the amount of the crypto token you would like to trade. 
Review the conversion rate and the estimated amount of in-game tokens you will receive. 
Confirm the transaction by clicking on the “Swap” button. 
The crypto tokens will be exchanged for in-game tokens and added to your account
The BitSniper swap function is fast, secure and transparent. The exchange rate is updated in real-time and all transactions are processed through a secure and encrypted platform to ensure the safety of players’ assets
<br></br>
PLAY TO EARN
The play-to-earn aspect of BitSniper allows players to compete in various leagues, each with its own set of rules and stakes. Players can choose which league they want to play in based on their skill level and risk tolerance.
<br></br>
In BitSniper, players start by putting in a certain number of tokens, which they can either earn or purchase. The more tokens a player puts in, the higher the stakes and the potential rewards. If a player wins, they will earn more tokens than they initially put in. These tokens can then be used to purchase in-game NFTs, be held as an investment, or sold on the open market for “cash”.
<br></br>
The play-to-earn aspect of BitSniper provides players with the opportunity to earn rewards while they play. The game’s dynamic and competitive environment makes it an exciting and entertaining experience, and the potential to earn tokens adds a financial incentive to play. Additionally, the option to purchase or hold tokens adds an element of investment to the game, allowing players to potentially grow their wealth over time.
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
STAKING FUNCTION
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

BitSniper offers its players the opportunity to earn passive income through its staking function. By staking their tokens, players gain a share of the total trading fees collected on the platform, giving them a direct stake in the success of the project.

The staking function in BitSniper works by allowing players to lock up a certain amount of their tokens for a specific period of time. The longer the tokens are staked, the higher the share of the trading fees the player will receive. This not only benefits the players by providing them with a steady stream of passive income, but it also benefits the project as a whole because it reduces the sell pressure on the token. The staking function helps to stabilize the price and increase the overall value of the token. This in turn attracts more users to the platform and creates a virtuous cycle of growth and development.

One of the biggest advantages of staking in BitSniper is the convenience offered. Unlike other forms of passive income that require time and effort, staking in BitSniper is simple and effortless. All players need to do is stake their tokens on the platform and they will automatically start earning passive income.

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
IN GAME ECONOMY
USAGE OF DUAL TOKEN
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

BitSniper uses two tokens, the $AMMO token and the $AMMO-P token on the Polygon network. The $AMMO-P token is used as an in-game economy token. Players can use it to purchase NFTs that can be weapons or equipment, and use it to compete against other players for rewards. The token is designed to maintain value within the game and incentivize players to continue to play and engage in the game’s economy. The $AMMO token, on the other hand, represents a piece of ownership in the BitSniper game and provides its holders with governance rights, the ability to participate in community voting, and access to exclusive features within the platform such as a staking pool to generate passive income. The advantage of the dual token economy is that it allows the project to have a stable in-game economy while also providing an opportunity for investors to participate in the growth and success of the project. Additionally, the project can benefit from the unique features and capabilities of Polygon network, such as lower transaction fees and faster transaction times.

<br></br>
THE USAGE OF NFT
BUYING NFT ON THE PLATFORM 
Players have the option to buy unique in-game items, such as weapons, weapons skins, attachments or character skins, as NFTs. These NFTs can be purchased from other players or directly from the game’s marketplace using the $AMMO token. The rarity and value of each NFT is determined by its attributes, such as its power, durability, or design. As players progress in the game and earn rewards, they can use their earnings to purchase NFTs, which can aid them with advantages in the games to come.
<br></br>
EARNING NFTS ON THE PLATFORM
NFTs can be won through various gameplay achievements. Players can earn NFTs by completing in-game missions, winning matches, and reaching specific levels. These NFTs can represent unique in-game items such as weapons, weapons skins, attachments or character skins, and can be used to enhance their gameplay experience. Players can also participate in special events hosted by the BitSniper team, where they can compete against each other for a chance to win exclusive NFTs. Top finishers of the leaderboards will also have a chance to win exclusive NFTs.
<br></br>
UPGRADING AND MINTING NFTS
NFTs can be won through various gameplay achievements. Players can earn NFTs by completing in-game missions, winning matches, and reaching specific levels. These NFTs can represent unique in-game items such as weapons, weapons skins, attachments or character skins, and can be used to enhance their gameplay experience. Players can also participate in special events hosted by the BitSniper team, where they can compete against each other for a chance to win exclusive NFTs. Top finishers of the leaderboards will also have a chance to win exclusive NFTs.
<br></br>
TRADING NFTS
Players can use their in-game winnings to upgrade their NFTs or combine multiple NFTs to create more powerful and rare versions. This process is known as minting, and it allows players to create unique, one-of-a-kind NFTs that can be used to enhance their gameplay experience.
<br></br>
THE PERKS OF NFTS
The BitSniper NFTs can grant players perks in-game as well as off game. Some examples of these perks are :
<br></br>
– Unique abilities
Some NFTs can grant players unique abilities, such as the ability to move faster, jump higher, or have better aim. These abilities will not be game changing, but can give the player some advantage over their opponent.
<br></br>
– Customization
NFTs allow players to customize their characters or equipment, providing a unique look or style that sets them apart from other players.
<br></br>
– Passive income
Some NFTs can generate passive income for players, such as by providing a percentage of in-game earnings or by offering exclusive rewards for holding the NFT for a certain amount of time. The NFTs can also be traded for a profit.

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
THE USAGE OF THE POWER OF AI
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

BitSniper is revolutionizing the gaming world by harnessing the power of AI algorithms. With AI at the core of its design, the game promises to deliver an unrivalled level of replay ability and customization, allowing players to personalize their gaming experience like never before. The AI algorithms will learn from the player’s behaviour, preferences, and skills, and use that information to dynamically adjust the gameplay, challenges and rewards. This will ensure the game remains fresh, exciting and engaging every time you play.
<br></br>
CUSTOMIZATION
Character customization, and loadout customization are key features that will be integrated in BitSniper. By allowing players to use AI for certain customization options, a new and unique design is guaranteed.
<br></br>
MAP DESIGN
Use of AI will greatly enhance the gaming experience by generating unique, dynamic and challenging maps that offer a variety of ways to compete. Certain elements will change shape, be repositioned or removed completely. To keep a stable and balanced playing field, AI will not affect all elements. Player behaviour, be it loadouts or use of map elements, will affect the outcome of the next competition.
<br></br>
USER FEEDBACK
BitSniper combines AI and player feedback to elevate gaming. Advanced AI algorithms analyse player data and feedback to improve the game design. This approach makes players’ voices heard and keeps the game relevant, enjoyable and engaging. AI processes BitSniper combines AI and player feedback to elevate gaming. Advanced AI algorithms analyse player data and feedback to improve the game design. This approach makes players’ voices heard and keeps the game relevant, enjoyable and engaging. AI processes vast amounts of player data and feedback to identify areas for improvement, such as adjusting maps or adding new features. BitSniper is dedicated to offering players a constantly evolving and fun gaming experience.
<br></br>
DYNAMIC BALANCING 
AI algorithms will slightly modify certain parameters in order to establish a fairer playing environment within the game. This optimization is achieved through the use of advanced machine learning techniques and real-time analysis of player performance data, resulting in a balanced and enjoyable gaming experience for all participants. By utilizing AI algorithms, the game can dynamically adapt to the changing skills and strategies of players, ensuring that each match remains fair and challenging.
<br></br>
SUMMARY
BitSniper is revolutionizing the world of gaming with its innovative AI powered, NFT-based, player vs player, play-to-earn platform. With unmatched gameplay powered by Unreal Engine, players are guaranteed a personalized gaming experience where they can compete against each other and earn rewards based on their in-game performance. The more you play, the more you earn. BitSniper is revolutionizing the world of gaming with its innovative AI powered, NFT-based, player vs player, play-to-earn platform. With unmatched gameplay powered by Unreal Engine, players are guaranteed a personalized gaming experience where they can compete against each other and earn rewards based on their in-game performance. The more you play, the more you earn. 
<br></br>
Not only does BitSniper offer in-game rewards, but it also rewards players for their achievements with rare and valuable NFTs. These NFTs can be traded or sold, adding an extra layer of excitement and value to the game. BitSniper is also incorporating blockchain technology into the game, taking advantage of the growing popularity of crypto gaming. Players can earn and trade cryptocurrency as rewards, making their gaming experience even more valuable. Not only does BitSniper offer in-game rewards, but it also rewards players for their achievements with rare and valuable NFTs. These NFTs can be traded or sold, adding an extra layer of excitement and value to the game. 
<br></br>
BitSniper is also incorporating blockchain technology into the game, taking advantage of the growing popularity of crypto gaming. Players can earn and trade cryptocurrency as rewards, making their gaming experience even more valuable. But what sets BitSniper apart from other play-to-earn games is its commitment to solving the problems of complexity, centralization, limited earning opportunities, and limited player feedback that plague the current play-to-earn gaming landscape. With its seamless and user-friendly platform, BitSniper offers a fully decentralized environment where players have complete control over their earnings and gaming experience. The project continually evolves with player feedback, providing a constantly improving and enjoyable gaming experience.

<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
HOW TO EARN
INTRODUCTION
PLAYING, INVESTING, STAKING
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

The number one goal of Project BitSniper is to create a game that is rewarding and engaging for the players. In order to keep the game fresh, the BitSniper team will not only stay in touch with the community, but be a part of it! By taking small fees in appropriate places, the game development will grow at a pace that is in line with player engagement.
<br></br>
– BitSniper aims to be self-sustaining
With the help of investors, the game development will reach significantly higher levels of progress. We highly value our investors and believe they are the key to rapid success. Our investors will be handsomely rewarded as the game grows, and players will engage in the action-packed game we know as BitSniper. With the help of investors, the game development will reach significantly higher levels of progress. We highly value our investors and believe they are the key to rapid success. Our investors will be handsomely rewarded as the game grows, and players will engage in the action-packed game we know as BitSniper. For the players – various ways will allow players to earn $AMMO, the token and currency used in-game. Throughout the game, players may be randomly rewarded after completing challenges. There will be free-to-play (F2P) game modes that allow players to hone their skills or play against their best friends in a fully customizable PvP gaming experience. Quickplay and custom games are the two options for the F2P gamers. Quickplay matches can reward random players, while custom matches do not provide random rewards. Custom matches are a great way to host small competitive games!
<br></br>
The core of BitSniper will be a heart-pounding PvP game featuring several modes. These PvP matches start with a challenger and a challenge taker. The game starts when both players (or teams) agree to the challenge. Both players pay a predetermined amount of $AMMO, which is added to a pool. The winner will take the prize pool. These high-stake PvP games will have increased chances for random rewards at the end of the game. Both the winner and loser will have the chance to get random rewards; however, a win will increase the odds. The higher the stakes, the greater the chance for random rewards.

As of right now, the core game modes will be PvP operation and 1v1 arenas.

The PvP operations will give each player an equal challenge. The goal is to complete the challenge quickly and efficiently. Points are earned for headshots, while points are reduced for killing hostages and missing shots. Once someone clears the operation, the game stops. Being the one to complete the operation first earns points, but will not be the only factor to determine the winner.

The 1v1 arena will be a best of nine game, where two players face off against one another in a sweat-dripping challenge. There will be several standard loadout options, but all players will be able to create their own challenge. The 1v1 arena will be a best of nine game, where two players face off against one another in a sweat-dripping challenge. There will be several standard loadout options, but all players will be able to create their own challenge. There will be an ELO system, to allow players to decide whether or not to challenge someone. Losing against a lower ELO player will drop your own ELO significantly. On the other hand, winning against a higher ELO player will significantly increase your ELO. Having a higher ELO increases the chances of random rewards.

Leaderboards are another way for players to compete. Finishing on the top of the leaderboard will give the players rewards.

– All game modes are focused on providing an action-packed experience. This means games will be fast, engaging and fun to play. Games will take approximately 3-8 minutes each.

Season passes, battle passes, quests and missions are all part of the BitSniper game experience and are designed to keep players engaged and excited to play with their unique character. Season passes, battle passes, quests and missions are all part of the BitSniper game experience and are designed to keep players engaged and excited to play with their unique character. Reward pools will be filled based on the games that are played, in-game transactions and the trading of $AMMO.
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
INVESTING AND EARNING
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

Investors in BitSniper will receive returns as they stake their tokens. A staking pool will be filled by the players. Long-term investors who engage in the game will also benefit from additional in-game rewards in various tiers.
<br></br>
– Staking and token burn mechanics
To increase the demand for the tokens, a burn mechanic will be added. 

The staking pool will be filled, based on the games that are played and in game transactions.

LOYALTY-BASED AIRDROPS
<br></br>
– Confer Value
Airdrops will play an important role to build community and ensure active participation among holders in the Bitsniper Ecosystem. Airdropping gifts will help keep DAO members excited and engaged with voting and community building events. We also plan on giveaways of merchandise.

Although airdrops within Bitsniper web3 are a new vehicle, as a concept they are no different than loyalty programs or price discounts offered by traditional non-web3 companies: Bitsniper aim is to confer value to those who engage with the Bitsniper Ecosystem while encouraging future involvement.
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
AUTOMATED BUYBACK AND BURN FUNCTION
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>
With the instability in price dynamics and the enigma of numerous sorts of tokens circulating on the market, project Bitsniper have begun to employ two techniques to limit emissions and drive the $AMMO price. The two most prevalent tools Team Bitsniper found are buybacks and tokenburns. While both approaches essentially accomplish the same goal, their mechanisms and end goals in terms of pricing effect are distinct. So, what are $AMMO buybacks and token burns? The price volatility in digital markets is typically higher than in traditional markets, particularly in the current environment. Investors have less trust in digital assets because DeFi and cryptocurrencies are still unexplored. As a result, Bitsniper has developed a clear, functional, rational and profitable value proposition that will work effectively within the ecosystem to attract investors and demonstrate demonstrable benefits. On the contrary, Bitsniper quarterly burns 0,5% of tokens from circulation permanently and sends them to a zero address, thereby erasing them from existence. To adjust demand and supply dynamics and effect price, the tokens are repurchased from the community.
<br></br>
DYNAMIC PROFIT SHARING
In our view, dynamic profit sharing should be the “go to” source of funding for any project looking to raise early stage expansion capital. In particular, it provides a clear relationship between Bitsniper commercial success and the value of $AMMO. Moreover, it returns an estimable pre-defined income stream to token holders while allowing the Bitsniper Team total control of their ecosystem and avoidance of any dilution. Put simply, disruption of the dividend model is a “win:win” for both sides.

Valuation of a revenue share token is very straightforward. It is the present value of future pay-outs depending on assumptions of revenue growth. Revenue is very definable and the token holders earn a fixed share of it each year.
<br></br>
EXPONENTIAL STAKING POOLS
This unique feature enables users to redeem their Bullet directly from the Bitsniper staking pools at a 1:1 ratio. This means you can stake your $AMMO and get WMATIC, a liquid staking derivative that earns rewards and can be used in DeFi, and then unstake it whenever you want.
<br></br>
AUTOMATED EXCHANGE AGGREGATOR
Forget the hassle of checking multiple exchanges on a quest for the best possible rate. Bitsniper Aggregator does all the heavy lifting by gathering multiple offers and providing you with all the necessary tools for private, secure and swift $AMMO and ERC20 swaps at the best rate
<br></br>
CROSS-CHAIN DAPPS
– Interaction between different blockchains

Employing smart contracts on multiple blockchains can be expensive, as each deployment requires gas fees and other costs. Additionally, managing multiple smart contracts on different blockchains can be complex and timeconsuming. 

Furthermore, since each smart contract is managing its own internal state, there is a risk that data can become inconsistent between different blockchain environments. This can result in errors, lost data, and other issues that can make the development of multi-chain dApps very risky. Bitsniper cross-chain dApps, are designed to facilitate communication and interaction between different blockchains. Bitsniper tech team uses specialized protocols to enable communication between different blockchains. It allows users to transfer assets and access Bitsniper applications across different blockchains.

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
TOKENOMICS
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

PINKSALE PRESALE 20%

TIER 1 AND TIER 2 CEX LIQUIDITY 15%

UE5 MINIGAMES AND PLATFORM DEVELOPMENT 15%

STAKING AND LIQUIDITY MINING POOLS 15%

INITIAL DEX LIQUIDITY 10%

IN-GAME ECONOMY 25%

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
VESTING
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

Pinksale Fair Launch: unlocked at TGE. 

In-game Economy: 0% unlocked at TGE, linear vesting over 12 months. 

Staking and Liquidity Mining Pools: 0% unlocked at TGE, 3 months cliff, linear vesting over 2 years. 

UE5 Game and Platform Development: 0% unlocked at TGE, linear vesting over 12 months.

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
ROADMAP
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

                                    <span className=' text-lightgreen'>PHASE 1 : 2022 Q3/Q4 </span>
-Conceptualization, idea and beta-test completed project BitSniper 
-Team building 
-Art style definition/ Game visual style 
-Game mechanics description 
-Sarah upgrade
<br/>
<span className=' text-lightgreen'>PHASE 2 : 2023 Q1 </span>
-Requirement analyses/ Software design/ Software development and unit testing 
-Pre-alpha testing and milestone release 
-User flow UX charts 
-Customization design/ Metagame design/ Technology stack definition 
-3D models/ 3D animations/ VFX concepts/ Prototypes 
-UI (in-game) design 
-BitSniper.io Website Launch 
-BitSniper Gameplay Teaser Whitepaper v2 released 
-LP locked & ownership renounced 
-Comply with KYC and AML regulationS
<br></br>
<span className=' text-lightgreen'>Phase 3: 2023 Q2</span>
-Private Sale 
-BitSniper Website Launch v2 
-Unreal Engine game development and level design 
-Presale 
-NFT BitSniper series auction drop 
-Pre-alpha teaser release BitSniper 
-CertiK security audit 
-Comply with KYC and AML regulations 
-Listing on Sushiswap 
-Coinmarketcap and Coingecko listing

 
<br></br><br></br>
<span className=' text-lightgreen'>Phase 4: 2023 Q3 </span>
-Requirement analyses/ Software design/ Software development and unit testing 
-Pre-alpha testing and milestone release 
-User flow UX charts 
-Customization design/ Metagame design/ Technology stack definition 
-3D models/ 3D animations/ VFX concepts/ Prototypes 
-UI (in-game) design 
-BitSniper.io Website Launch 
-BitSniper Gameplay Teaser 
-Whitepaper v2 released 
-LP locked & ownership renounced 
-Comply with KYC and AML regulation
<br></br><br></br>
<span className=' text-lightgreen'>Phase 5: 2023 Q4</span>
-Perpetual beta launch of BitSniper PvP v4 
-Release of the Shootout Death Match v1 
-NFT marketplace launch 
-Brand new minigames launched 
-DeFi features (Staking & Farming) 
-Branded merchandise/ Extending BitSniper ecosystem 
-Implement Burn Tax on transactions 
-Stable release of BitSniper 1.1
<br></br><br></br>
<span className=' text-lightgreen'>Phase 6: 2024 Q1/Q2 </span>
-New arena maps for Shootout 2 (Die Hard series) 
-NFT upgrades/ Accessories drop 
-Esport tournaments worldwide (Bitsniper Die Hard series) 
-Listing on all major CEX and DEX exchanges 
-AI training platform for BitSniper Series 
-Land sale Bitsniper districts 4, 5 and 6
<br></br><br></br>
<span className=' text-lightgreen'>Phase 7: 2024 Q3/Q4</span> 
-New products and services included in app 
-UI optimalization 
-Open access to districts 7 and 8 
-Public Beta test for Bitsniper 2.0 
-BitSniper wallet/app release 
-Integration with payment services for eCommerce 
-Corporate endorsement and sponsorship

 
<br></br><br></br>
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
CORETEAM
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

– Terry – Chief Marketing Officer
– Mike – Chief Regulatory Officer
– Gabriel – Chief Communications Officer
– Jari – Chief Executive Officer
– Niels – Chief Strategy Officer
– Michael- Chief Financial Officer
– Ray- Chief Technology Officer
– Michiel – Chief Operations Officer
<br></br>
DEVELOPMENT TEAM
A team of gaming industry veterans with a proven track record of success has created BitSniper. The BitSniper team consists of highly skilled full-stack, blockchain and game developers, as well as UI, VR, AR, content and 3D designers. Members of the team have worked for world-renowned companies such Tencent and Ubisoft (the creators of Assassin’s Creed, Far Cry, Watch Dogs). They bring a wealth of expertise and innovation to the table, raising the bar for blockchain gaming to new heights.

BitSniper helps give in-game users an unrivalled degree of control and autonomy. The BitSniper team works relentlessly to offer users the ultimate decentralized gaming experience.

 
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
DISCLAIMER
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

BITSNIPER is a new crypto project created and maintained by a professional team. Despite the team’s commitment to providing a safe and secure environment, using any cryptocurrency comes with certain risks. Users of this project must accept full responsibility for any potential losses or damages that may arise as a result of their use. Additionally, any trading or investment decisions made by the user are done solely at the user’s own risk and BITSNIPER shall not be held responsible for any losses incurred. The White Paper and all other materials or explanations provided by BITSNIPER and its officers and employees are not to be interpreted as an invitation to make any form of investment, nor is it intended to include any information or advice that can be used to make any investment decisions. Neither BITSNIPER nor its team or employees are to be considered as advisors for any legal, tax, or financial matters.

This White Paper has been issued by BitSniper Kft on 21-11-2022. This White Paper describes the Company’s business objectives and the generation by the Company of BitSniper tokens, and may not be complete or final.

The purpose of this White Paper is to provide prospective purchasers with information on the Company’s project to allow prospective purchasers to make their own decision as to whether or not they wish to proceed with the purchase of BitSniper tokens. This White Paper is not intended to be an offer to sell, or a solicitation of an offer to buy, any security or other financial instruments. The offering of BitSniper tokens has not been registered, qualified, or approved under any securities, futures, financial instruments, capital markets, or exchange control legislation, regulation, or ordinance of any jurisdiction.

The Company has taken beyond reasonable care to ensure that, as at the date of this White Paper, the information contained herein is accurate to the best of its knowledge. The information contained in this White Paper may be subject to modification, supplementation, and amendment at any time and from time to time. The Company does not make any representation or warranty as to the accuracy or completeness of the information contained in this White Paper and the Company has no obligation to update or keep current any information or projections contained herein.

The publication of this White Paper and the offering of BitSniper Tokens may be restricted in certain jurisdictions. It is the responsibility of any person in possession of this White Paper and any persons wishing to make an application for BitSniper tokens to inform themselves of, and to observe, any and all laws and regulations that may be applicable to them.

This White Paper does not contain all material information regarding the risks associated with the purchase of digital tokens. The buying of digital tokens, like the BitSniper tokens, is speculative and involves risks, which you should understand prior to making your decision to buy.

Prospective purchasers should only purchase BitSniper tokens if they can afford a complete loss. Unless prospective purchasers fully understand and accept the nature of and the potential risks inherent in the purchase of BitSniper tokens they should not purchase BitSniper tokens. Prospective purchasers should conduct independent investigations and analysis regarding the Company, the BitSniper tokens and all other market and economic factors as they deem appropriate to fully evaluate the merits and risks of their purchase.

Prospective purchasers should consult with their own legal, regulatory, tax, business, financial and accounting professional advisors to the extent that they deem it necessary. Prospective purchasers must determine based on their own independent review and such professional advice as they deem necessary, if the purchase of the BitSniper tokens is appropriate and suitable for them, notwithstanding the clear and substantial risks inherent with the purchase of BitSniper tokens.

The purchase of BitSniper tokens is only possible after the prospective purchaser has read, understood and accepted the terms for the BitSniper token sale (available upon request to the Company). Each prospective purchaser will be required to acknowledge that it made an independent decision to purchase the BitSniper tokens and that it is not relying, in any manner whatsoever, on the Company, its board of directors or any other person or entity (other than such purchaser’s own advisers).

The Company and its board of directors do not accept any responsibility or liability for any use of this White Paper by any person which is in breach of any local regulatory requirements with regard to the distribution of this White Paper or any applicable rules pertaining to the offer of BitSniper tokens.

<br></br><br></br>
PRIVACY POLICY

This policy (“Policy”, together with our Terms of Use ) explains and sets out the basis for why and when we collect personal information about the people who visit our website(s), how we use it, the conditions under which we may disclose it to others and the measures we take to keep it secure. By visiting this website you are accepting and consenting to the practices described in this Policy. Please note that this includes consenting to the collection and processing of any personal information you provide, as described below. We may amend this Policy from time to time so please check it occasionally to ensure that you agree with any changes. Your continued use of our website(s) will constitute your acceptance of, and agreement to, any changes.

Who we are?
Bitsniper Kft is a not for profit organisation based in Budapest, Hungary that is dedicated to act as an objective, supervisory and educational body for the Game-Fi protocol and its associated ecosystem. The registered address is:  Northside Business Centre, váci út 91, 1139, Buda Hungary. We work in close cooperation with our partners

How we collect information about you:
We obtain information about you when you use our website, when you contact us via email or a web form or if you register to receive one of our regular newsletters. We may collect and process the following types of information about you:

Information you provide us
You may provide us with personal information by filling in forms on our website(s) or by corresponding with us by e-mail or live-chat. The personal information you provide may include your name, email, address, phone number, IP address, language preference and information regarding the pages you access. By providing us with this information, you expressly consent to our use of your personal information in accordance with this Policy.

Information we collect about you
When you visit our website(s) we may collect information about your IP address, information about your visit, your browsing activity, and how you use our website. This information may be combined with other information you provide.

Information we receive from other sources
We may receive information about you if you use any other websites we, or our partners, operate. We also work with third parties (including, contractors, project partners, service providers, analytics providers) and may receive information about you from them. This may be combined with other information you provide to us.

How your information is used
We may use personal information about you for the following purposes: • to provide you with relevant information and news. • to send you personalised communications which you have requested and that may be of interest to you, which may be based on your activity on our website(s) or the website of our partners. These may include information about campaigns, activities and events. • to understand and measure the effectiveness of how we serve you and others. to make suggestions and recommendations to you about services that may interest you, which may be based on your activity on our website(s) or the website of our partners. • for analytics and profiling to create aggregate trend reports, find out how visitors arrive at our website; which sites and pages are viewed, the responses to marketing campaigns and to determine the most effective marketing channels and messages. • seek your views or comments on the service we provide. • notify you of changes to our service, policies and terms of use. We review our retention periods for personal information on a regular basis. We will hold your personal information on our systems for as long as is necessary for the relevant activity.

Who has access to your information
We will not sell or rent your information to third parties. We will not share your information with third parties for marketing purposes. We may pass your information to third party service providers, agents, subcontractors and other associated organisations for the purposes of completing tasks and providing services to you on our behalf (for example to process and store information and to send you mails). However, if we use third party service providers, we disclose only the personal information that is necessary to deliver the service and we have a contract in place that requires them to keep your information secure and not to use it for their own direct marketing purposes.
We will take the necessary steps to ensure that your privacy rights continue to be protected.

Your choices and your rights
You have the right to inform us not to process your personal information for marketing purposes. You can exercise your right and prevent us from processing such information by checking or unchecking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by contacting us by email at admin@bitsniper.io We will not contact you for marketing purposes unless you have given your prior consent. You can change your marketing preferences at any time by contacting us by email at marketing@bitsniper.io


How you can update your information
The accuracy of your information is important to us. If you change your email address, or any of the other information we hold is inaccurate or out of date, please email us at marketing@bitsniper.io. You have the right to ask for a copy of the information Bitsniper Kft holds about you.
<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
Security measures to protect your information
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

When you give us personal information, we take steps to ensure that it’s treated securely. Non-sensitive details such as your email address may be transmitted unencrypted over the Internet, and so may not be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk. When we receive your information, we make our best effort to ensure its security on our systems.
<br></br>
Profiling
We may analyse your personal information to create a profile of your preferences and interests so that we can contact you with information relevant to you. We may make use of additional information about you when it is available from external sources to help us do this effectively.

<br></br>
Newsletter
The provisions of this Policy also apply to the request for and sending of our newsletter. The newsletter will only be sent after prior request by the user in the so-called “double opt-in procedure” (request on our website and confirmation of a corresponding request e-mail). Users of the newsletter are also assigned a UserID, which allows Bitsniper Kft to determine when the relevant newsletter was opened and which links or functions from the relevant newsletter were activated. This tracking is done for internal optimization of the newsletter. This data will not be passed on to third parties. The legal basis for processing is Art. 6 where by Bitsniper Kft’s authorization arises from the fact that, on the one hand, Bitsniper Kft has an interest in evaluating such data for purposes of newsletter optimization and, on the other hand, a concerned person can reasonably foresee at the time when the personal data is collected and in view of the circumstances under which it is carried out (in particular the above-mentioned measures) that it will possibly be processed for this purpose. The user has the right to withdraw his or her consent at any time. If the user of the newsletter does not wish to receive this tracking, he/she can unsubscribe from the newsletter. To do so, simply unsubscribe via the link in the newsletter or send an e-mail to marketing@bitsniper.io. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal.

<br></br>
Use of Cookies

Our site(s) use cookies to distinguish you from other visitors of our site. Cookies are small text files that may be stored on your computer (or other internet enabled devices, such as a smartphone or tablet. They are sent by a server to your computer and stored on your hard drive to allow a website to recognize you when you visit. Cookies can be used by website to make the user’s experience more efficient. Our site(s) use different types of cookies. Some cookies are placed by third party services that appear on our pages. We use cookies to personalize content, to provide social media features and to analyse our traffic. This improves your experience when you browse our site(s) and allows us to improve the service we provide. By continuing to browse our site(s), you are agreeing to our use of cookies. We also share information about your use of our site with our social media and analytics partners who may combine it with other information that you have provided to them or that they have collected from your use of their services. You can at any time change or withdraw your consent from the cookie declaration on our website.

We use the following cookies:

• Strictly Necessary Cookies: These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. These cookies enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies. • Targeting Cookies: These cookies may be set through our site by our advertising partners. Marketing cookies are used to track visitors across websites. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.

• Performance Cookies: These cookies are usually referred to as statistical cookies and allow us to count visits, traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.

<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
Links to other websites

                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>

Our website may contain links to other websites run by other organisations. This Policy applies only to our website‚ so we encourage you to read the privacy statements on the other websites you visit. We cannot be responsible for the privacy policies and practices of other sites even if you access them using links from our website. If you linked to our website from a third party site, we cannot be responsible for the privacy policies and practices of the owners and operators of that third party site and recommend that you check the policy of that site.


16 or Under

We are concerned to protect the privacy of children aged 16 or under. If you are aged 16 or under‚ please get your parent/guardian’s permission beforehand whenever you provide us with personal information. Where we store your personal information The data that we collect from you may be transferred to, and stored in, a country outside the European Economic Area (EEA). It may also be processed by staff operating outside the EEA who work for us. The laws in some countries may not provide the same legal protection for your information as in the EEA. By submitting your personal information, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy. The transmission of information via the internet is not completely secure. Although we will always do our best to protect your personal information, we cannot guarantee the security of your information; any transmission is at your own risk. Once we have received your information, we will use good procedures and strong security features to try to prevent unauthorised access.

Data Protection Officer

The Bitsniper Kft has appointed an internal data protection officer for you to contact if you have any questions regarding this Policy and our privacy practices. The data protection officer can be contacted as follows: Northside Business Centre, váci út 91, 1139, Budapest Hungary. Email: info@bitsniper.io Review of this Policy We keep this Policy under regular review. This Policy was last updated in April 2023


<br></br><br></br>
<div className='text-2xl text-gray-400 inline-block'>
TERMS OF USE

                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>


By accessing the website at www.bitsniper.io, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.

Use License

These Terms of Use permit you to use the Website for your personal, non-commercial use only. You may not: • modify or copy the materials; • use the materials for any commercial purpose, or for any public display (commercial or non- commercial); • remove any copyright or other proprietary notations from the materials; This license shall automatically terminate if you violate any of these restrictions and may be terminated by Bitsniper Kft at any time. Upon termination of this license, you must destroy any materials in your possession whether in electronic or printed format.

Disclaimer

The materials on www.bitsniper.io website are provided on an ‘as is’ basis. Bitsniper Kft makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or noninfringement of intellectual property or other violation of rights. Further, Bitsniper Kft does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.

Limitations

In no event shall Bitsniper Kft or its subcontractors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Bitsniper Kft or a Bitsniper Kft authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.

Accuracy of materials

The materials appearing on www.bitsniper.io website could include technical, typographical, or photographic errors. Bitsniper Kft does not warrant that any of the materials on its website are accurate, complete or current. Bitsniper Kft may make changes to the materials contained on its website at any time without notice. However Bitsniper Kft does not make any commitment to update the materials.

Links

Bitsniper Kft has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Bitsniper Kft of the site. Use of any such linked website is at the user’s own risk

Modifications

Bitsniper Kft may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
<br/><br/><div className='text-2xl text-gray-400 inline-block'>
Governing Law

                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div><br/>


These terms and conditions are governed by and construed in accordance with the law and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location. This policy is effective as of 01 March 2022.

<br></br><br></br>
USE
WALLETS

BUYING AND SELLING

ABOUT STAKING

THE USAGE OF NFT



<br></br>
LEARN
WHAT IS BITSNIPER

WHY BITSNIPER

USE OF AMMO

TECHNOLOGY

USE OF AI

HOW TO EARN
SELF-SUSTAINING

LOYALTY-BASED AIRDROPS

AUTOMATED BUYBACK AND BURN

DYNAMIC PROFIT SHARING

EXPONENTIAL STAKING POOL
         </div>
         <Footer/>
         </div>
  )
}

export default page
