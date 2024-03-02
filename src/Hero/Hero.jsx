import React from 'react'
import HeroVideo from "../assets/Hero-video.mp4"
const Hero = () => {
  return (
    <section className='h-screen w-full relative top-0 left-0'>
        <div className="w-1/2 mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className='text-[60px] text-white uppercase font-bold'>welcome to morroco microsoft community</h1>
        <p className='mt-5 font-medium text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid quam est doloremque inventore ab labore, voluptas, minus eligendi ipsa qui neque, quisquam expedita ex enim! Alias eos eaque dolore quo vitae corrupti nulla autem placeat culpa corporis itaque perspiciatis voluptate nobis in ducimus cum iusto architecto, error similique soluta.</p>
        </div>
        <video loop muted autoPlay className='w-full h-full object-cover'>
            <source src={HeroVideo} type = 'video/mp4' />
        </video>
    </section>
  )
}

export default Hero