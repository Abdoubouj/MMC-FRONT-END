import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import {useDispatch , useSelector} from "react-redux"
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { getEvents } from "../features/EventSlice";
const NextEvents = () => {
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
    const dispatch = useDispatch();
    const events = useSelector(state=>state.event.events);
    const status = useSelector(state=>state.event.eventStatus);
    const error = useSelector(state=>state.event.eventError);
      let sliderRef = useRef(null);
      const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };

      useEffect(()=>{
            dispatch(getEvents());
      },[])
  return (
    <div className="slider-container overflow-hidden max-w-[1200px] mx-auto mt-14">
        <div className="flex gap-3 mb-5 mx-5 justify-between">
        <h1 className="text-primary text-[25px] uppercase font-bold">the next events</h1>
        <div className="slider_arrows flex gap-3">
        <button className='bg-primary px-3 py-2 text-white' onClick={previous}>
          <FaChevronLeft/>
        </button>
        <button className='bg-primary px-3 py-2 text-white' onClick={next}>
          <FaChevronRight/>
        </button>
        </div>
        </div>
        {status === "failed" &&<div className="text-red-500 p-2">{error}</div>}
        {status === "loading" ? <Loader/> :
        <Slider {...settings}  ref={slider => {sliderRef = slider;}}>
            {events?.map((event)=>(
              <Link to={`/Events/${event.eventID}`} className="h-[350px]" key={event?.eventID}>
                <img src={event.picture} className="w-full border-[1px] border-primary" alt="" />
              </Link>
           ))}
       </Slider>
        }
       </div>
  )
}

export default NextEvents