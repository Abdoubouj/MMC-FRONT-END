import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Test = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      let sliderRef = useRef(null);
      const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };
  return (
    <div className="slider-container max-w-[1200px] mx-auto mt-14">
        <div className="flex gap-3 mb-5 mx-5 justify-between">
        <h1 className="text-primary text-[25px] uppercase font-bold">the next events</h1>
        <div className="slider_arrows flex gap-3">
        <button className='bg-primary px-3 py-2 text-white rounded-md' onClick={previous}>
          <FaChevronLeft/>
        </button>
        <button className='bg-primary px-3 py-2 text-white rounded-md' onClick={next}>
          <FaChevronRight/>
        </button>
        </div>
        </div>
        <Slider {...settings}  ref={slider => {sliderRef = slider;}}>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       <div className="h-[350px]">
        <img src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" className="w-full rounded-lg shadow-md border-[1px] border-light" alt="" />
       </div>
       </Slider>
       </div>
  )
}

export default Test