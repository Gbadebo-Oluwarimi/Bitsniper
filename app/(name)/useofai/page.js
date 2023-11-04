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
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Artificial intelligence</div>
                            
                                  Use of AI
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Unleashing Immersion: AIs Impact on Dynamic Gaming Realities</div>
                              </div>
                              <div className='pt-8 '>
                              Our company is a collective of amazing people striving to build delightful products
Artificial intelligence is programming that allows certain characters in a video game, such as non-playable characters NPCs, and enemies, to act in a way that feels as if they were controlled by a human, or were acting with a mind of their own. AI is used to make games feel more immersive. If youve ever played the classic game Pacman, then youve experienced one of the most famous examples of early AI. As Pacman tries to collect all the dots on the screen, he is ruthlessly pursued by four different colored ghosts. But they dont just follow him; when youre playing they seem to try and ambush the player.

The ghosts are programmed to know Pacmans location, but each one is set to act a little differently in response to it. One of the ghosts is set to wander, one is set to aggressively follow Pacman, one is set to go in the direction where Pacman is going, one is set to move randomly unless another ghost is close to catching Pacman, and the final ghost is set to follow Pacman when hes far away, but go to a specific location on the map when hes close.
These four behaviors make these ghosts, even in a game from 1980, appear to have a will of their own. They feel alive. And that is the purpose of AI in video games.
                              </div>
                              <div className='pt-7'>
                                  <div className='text-2xl text-white inline-block'>
                                  How did they accomplish this?
                                    <div className='p-1 bg-lightgreen w-32 mb-8 mt-3'></div></div>
                                  <br/>The ghosts are programmed to know Pacmans location, but each one is set to act a little differently in response to it. One of the ghosts is set to wander, one is set to aggressively follow Pacman, one is set to go in the direction where Pacman is going, one is set to move randomly unless another ghost is close to catching Pacman, and the final ghost is set to follow Pacman when hes far away, but go to a specific location on the map when hes close.
These four behaviors make these ghosts, even in a game from 1980, appear to have a will of their own. They feel alive. And that is the purpose of AI in video games.
                              
                              </div>
                           
                              </div>
    </div>
  )
}

export default page
