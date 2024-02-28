import React from 'react'

const UpcomingEvent = () => {
  return (
    <div className='upcoming_event_container'>
    <section className='upcoming_event_section bg-third py-5'>
        <div className="upcoming_event_content max-w-[1200px] mx-auto py-10">
            <div className="text-center mb-10">
               <h1 className='text-white bg-primary inline font-bold uppercase text-[20px] px-5 py-2'>Upcoming Event</h1>
            </div>
        <div className="flex gap-3">
         <div className="upcoming-left flex-1 h-[550px] text-center">
            <img className='h-full w-3/4 inline-block mx-auto' src="https://moroccomicrosoftcommunity.com/img/microsoft/Microsoft-tech-day-2024-1/big.jpg" alt="#" />
         </div>
         <div className="upcoming-right flex-1 flex flex-col justify-between text-white text-center">
            <h1 className='text-[30px] capitalize font-bold'>Transformation Cloud Azure & Azure DEVOPS</h1>
            <h3 className='text-[20px] capitalize font-normal mt-7 bg-secondary inline-block px-4 py-2 text-white'>Ensa beni mellal</h3>
            <p className='mt-7 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur totam, saepe ipsa nulla dolore amet iure eum quam voluptate, minus voluptas illo alias nesciunt temporibus dolor laudantium recusandae, ad autem ullam asperiores ab! Excepturi dolores eligendi similique perferendis odit. Illo ullam error numquam, animi dolorem aperiam aut laudantium voluptatum neque quo, exercitationem dolor sequi. Deserunt optio odio consectetur ipsam ipsum obcaecati dolorem iusto. Architecto ex hic incidunt est error?</p>
            <div className="count-down w-full px-5 py-3 bg-third mt-7 flex justify-between items-center">
                 <div className="days flex flex-col gap-2 p-3 bg-secondary w-[100px] text-[20px] font-bold">
                    <span>15</span>
                    <span>Day</span>
                  </div>
                 <div className="hours flex flex-col gap-2 p-3 bg-secondary w-[100px] text-[20px] font-bold">
                    <span>08</span>
                    <span>Hours</span>
                  </div>
                 <div className="minutes flex flex-col gap-2 p-3 bg-secondary w-[100px] text-[20px] font-bold">
                    <span>58</span>
                    <span>Minutes</span>
                  </div>
                 <div className="seconds flex flex-col gap-2 p-3 bg-secondary w-[100px] text-[20px] font-bold">
                    <span>19</span>
                    <span>Seconds</span>
                  </div>
            </div>
         </div>
        </div>

        </div>
    </section>
    </div>
  )
}

export default UpcomingEvent