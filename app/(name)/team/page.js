import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div className='p-8 md:py-10 min-h-screen md:px-20'>
                    
        <Link className='flex' href="/">
                    
          
                    <Image
            src="/logo.png"
             width={30}
            height={20}
            alt="Picture of the author"/>
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-2">BitSniper.io</span>
                   
                    </Link>
                              <div className='text-5xl mt-32 inline-block font-bold'>
                              <div className='text-xs text-lightgreen pb-4 font-semibold'> Technology</div>
                            
                              Team
                                  <div className='text-lg pt-4 text-gray-400 font-light'>Empowering Users: A Play-to-Earn Approach with<br/> Polygon-Based Project Bitsniper</div>
                              </div>
                              <div className='pt-8'>
                              Project BitSniper is created by a team of gaming industry veterans with a proven track record. The Bitsniper team consists of 14 highly skilled full-stack, blockchain and game developers, as well as UI, VR, AR, content and 3D designers. Members of the team have worked for world-renowned companies like Tencent and Ubisoft the creators of Assassins Creed, Far Cry, Watch Dogs. They bring a wealth of expertise and innovation to the table, raising the bar for blockchain gaming to new heights.
<br/><br/>Project Bitsniper is very proud to be a multinational and multicultural organisation, bringing together peoples skills, knowledge and expertise, regardless of international borders, to make this fantastic game and community for you to enjoy. We have team members based in United Kingdom, Hungary, France, Brazil, United States, Japan, Korea, Sri Lanka and India.

Project BitSniper helps give in-game users an unrivalled degree of control and autonomy. The BitSniper team works relentlessly to offer users the ultimate decentralized gaming experience.

CHIEF CREATOR OFFICER

Colin
Twitter
CHIEF MARKETING OFFICER

Terry
Linkedin
CHIEF EXECUTOR OFFICER

Jari Bruns
Linkedin
CHIEF OPERATIONS OFFICER

Michiel
Telegram
CHIEF REGULATORY OFFICER

Mike
Linkedin
CHIEF COMMUNICATIONS OFFICER
Gabriel
Twitter
CHIEF STRATEGY OFFICER

N. de Krijger
Linkedin
CHIEF FINANCIAL OFFICER

Michael
Telegram
CHIEF TECHNOLOGY OFFICER

Ray
Telegram
                              </div>
                           
                              </div>
   
  )
}

export default page
