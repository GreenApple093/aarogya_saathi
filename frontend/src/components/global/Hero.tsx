import React from 'react'
import { Button } from '../ui/button'
import HeroVideoDialog from '../magicui/hero-video-dialog'

const Hero = () => {
  return (
    <div className="relative pt-36 min-h-[85vh] w-full bg-white bg-grid-black/[0.2] flex flex-col items-center justify-center">
      {/* Radial gradient background */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
       
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#07A996] to-[#058275]">
          Empowering Slum<br/> Communities
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Join us in our mission to transform lives in slum communities. We provide education, healthcare support, and essential resources to create lasting positive change for underprivileged families across India.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-gradient-to-r from-[#07A996] to-[#058275] text-white hover:opacity-90 px-8 py-6 text-lg shadow-lg shadow-[#07A996]/25 transition-all duration-200"
          >
            Support Our Cause
          </Button>
          {/* <Button 
            variant="outline"
            className="bg-white/80 backdrop-blur-sm text-black border-2 border-gray-200 hover:bg-gray-50 px-8 py-6 text-lg"
          >
            Book a call
          </Button> */}
        </div>

        {/* Video Dialog Section */}
        <div className="mt-16 relative">
          <div className="absolute -z-10 size-96 bg-[#07A996]/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/your-video-id"
            thumbnailSrc="/dashboard.png"
            thumbnailAlt="Platform Demo"
            animationStyle="from-bottom"
            className="max-w- max-h- mx-auto border-8 border-gray-200 rounded-2xl"
          />
        </div>
      </div>

      
    </div>
  )
}

export default Hero
