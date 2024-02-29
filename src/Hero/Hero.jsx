import React from 'react'
import HeroVideo from "../assets/Hero-video.mp4"
const Hero = () => {
  return (
    <section className='h-screen w-full relative -top-[100px] left-0'>
        {/* <div className="w-3/4 mx-auto text-center">
        <h1 className='text-[55px] text-primary uppercase font-bold'>welcome to morroco microsoft community</h1>
        <p className='mt-5 font-medium text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid quam est doloremque inventore ab labore, voluptas, minus eligendi ipsa qui neque, quisquam expedita ex enim! Alias eos eaque dolore quo vitae corrupti nulla autem placeat culpa corporis itaque perspiciatis voluptate nobis in ducimus cum iusto architecto, error similique soluta.</p>
        </div> */}
        <video loop muted autoPlay className='w-full h-full object-cover'>
            <source src={HeroVideo} type = 'video/mp4' />
        </video>
    </section>
  )
}

export default Hero