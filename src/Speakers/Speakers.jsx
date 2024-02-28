import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import { FaLinkedin , FaInstagram , FaFacebook} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Speakers = () => {
  return (
    <div className='speakers-container'>
        <div className="heading h-[220px] flex flex-col gap-5 items-center justify-center">
            <h1 className='text-white text-[40px] uppercase font-bold'>Our Speakers</h1>
            <p className='flex gap-5 items-center text-[20px]'>
                <span><Link to="/" className='hover:text-primary hover:border-b-[1px] hover:border-primary'>Home</Link></span>
                <span><FaAnglesRight/></span>
                <span>Speakers</span>
            </p>
        </div>
        <div className="speakers-items flex flex-wrap gap-14 items-start justify-center py-5 mt-5 max-w-[1200px] mx-auto">
                <div className='event-item mb-5 w-[260px]'>
                    <img src="https://moroccomicrosoftcommunity.com/img/speakers/img/said_wahid.jpg" className='w-full inline-block border-[1px] border-primary h-[330px]' alt="" />
                    <h1 className='mt-1 text-[18px] text-primary font-semibold capitalize'>Said wahid</h1>
                    <h2 className='mt-1 text-[14px] font-semibold capitalize text-third'>CONSULTANT .NET MICROSOFT MCT</h2>
                    <div className="social-media-items flex gap-4 mt-2">
                        <div className="item bg-primary text-white p-2">
                            <FaFacebook/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaInstagram/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaLinkedin/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaSquareXTwitter/>
                        </div>
                    </div>
                </div>
                <div className='event-item mb-5 w-[260px]'>
                    <img src="https://moroccomicrosoftcommunity.com/img/speakers/img/hassan_fadili.jpg" className='w-full inline-block border-[1px] border-primary h-[330px]' alt="" />
                    <h1 className='mt-1 text-[18px] text-primary font-semibold capitalize'>hassan fadili</h1>
                    <h2 className='mt-1 text-[14px] font-semibold capitalize text-third'>AZURE CLOUD & DEVOPS CONSULTANT MICROSOFT MVP</h2>
                    <div className="social-media-items flex gap-4 mt-2">
                        <div className="item bg-primary text-white p-2">
                            <FaFacebook/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaInstagram/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaLinkedin/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaSquareXTwitter/>
                        </div>
                    </div>
                </div>
                <div className='event-item mb-5 w-[260px]'>
                    <img src="https://moroccomicrosoftcommunity.com/img/speakers/img/anas_belabbes.jpg" className='w-full inline-block border-[1px] border-primary h-[330px]' alt="" />
                    <h1 className='mt-1 text-[18px] text-primary font-semibold capitalize'>anas belabbes</h1>
                    <h2 className='mt-1 text-[14px] font-semibold capitalize text-third'>EXPERT DATA PLATFORM MICROSOFT MVP</h2>
                    <div className="social-media-items flex gap-4 mt-2">
                        <div className="item bg-primary text-white p-2">
                            <FaFacebook/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaInstagram/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaLinkedin/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaSquareXTwitter/>
                        </div>
                    </div>
                </div>
                <div className='event-item mb-5 w-[260px]'>
                    <img src="https://moroccomicrosoftcommunity.com/img/speakers/img/youssef_chigane.jpg" className='w-full inline-block border-[1px] border-primary h-[330px]' alt="" />
                    <h1 className='mt-1 text-[18px] text-primary font-semibold capitalize'>youssef chigane</h1>
                    <h2 className='mt-1 text-[14px] font-semibold capitalize text-third'>CONSULTANT INTELLIGENCE ARTIFICIELLE</h2>
                    <div className="social-media-items flex gap-4 mt-2">
                        <div className="item bg-primary text-white p-2">
                            <FaFacebook/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaInstagram/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaLinkedin/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaSquareXTwitter/>
                        </div>
                    </div>
                </div>
                <div className='event-item mb-5 w-[260px]'>
                    <img src="https://moroccomicrosoftcommunity.com/img/speakers/img/mohssine_masaaf.jpg" className='w-full inline-block border-[1px] border-primary h-[330px]' alt="" />
                    <h1 className='mt-1 text-[18px] text-primary font-semibold capitalize'>mohssine massaf</h1>
                    <h2 className='mt-1 text-[14px] font-semibold capitalize text-third'>CONSULTANT .NET TECH LEAD</h2>
                    <div className="social-media-items flex gap-4 mt-2">
                        <div className="item bg-primary text-white p-2">
                            <FaFacebook/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaInstagram/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaLinkedin/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaSquareXTwitter/>
                        </div>
                    </div>
                </div>
                <div className='event-item mb-5 w-[260px]'>
                    <img src="https://moroccomicrosoftcommunity.com/img/speakers/img/outman_bazzaz.jpg" className='w-full inline-block border-[1px] border-primary h-[330px]' alt="" />
                    <h1 className='mt-1 text-[18px] text-primary font-semibold capitalize'>outman bazzaz</h1>
                    <h2 className='mt-1 text-[14px] font-semibold capitalize text-third'>DATA ANALYTICS EXPERT</h2>
                    <div className="social-media-items flex gap-4 mt-2">
                        <div className="item bg-primary text-white p-2">
                            <FaFacebook/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaInstagram/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaLinkedin/>
                        </div>
                        <div className="item bg-primary text-white p-2">
                            <FaSquareXTwitter/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Speakers