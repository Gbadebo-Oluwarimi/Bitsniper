"use client";

import React from 'react'
import HeroSlider, {Slide} from 'hero-slider'
import Image from 'next/image'
//Images
const img1 = '/b-1.jpg'
const img2 = '/b-2.jpg'
const img3 = '/b-3.jpg'
const img4 = '/price.jpg'

const Slider = () => {
  return (
    <HeroSlider
    slidingAnimation="left_to_right"
    orientation="horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
    onChange={nextSlide => console.log("onChange", nextSlide)}
    onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
    style={{
        backgroundColor:"rgba(0,0,0,0.33)"
    }}
    settings={{
        slidingDuration:250,
        slidingDelay:100,
        shouldAutoplay:false,
        shouldDisplayButtons:false,
        autoplayDuration:4000,
        height:"100vh"
    }}
    >
        <Slide
        background={{
          backgroundImage: `url(${img1})`,
          backgroundAttachment:"fixed"
        }}
      />
      
       
    </HeroSlider>
  )
}

export default Slider
