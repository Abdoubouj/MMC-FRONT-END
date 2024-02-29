import React from 'react'

const OurPartners = () => {
  return (
    <div className="partners-container max-w-[1200px] px-5 mx-auto mt-14 mb-[300px]">
        <div className="heading text-center lg:text-left">
            <h1 className='text-primary text-[25px] uppercase font-bold'>Our Partners</h1>
        </div>
        <div className="partners-items flex flex-wrap lg:justify-start justify-center items-center gap-10 mt-5">
           <div className="w-[250px] h-[150px] border-[1px]  border-light duration-300 transition hover:border-primary flex items-center justify-center">
            <img className='w-[200px] h-[100px] grayscale transition duration-300 hover:grayscale-0 ' src="https://seeklogo.com/images/R/Royal_Air_Maroc-logo-629DB7CD4A-seeklogo.com.png" alt="" />
           </div>
           <div className="w-[250px] h-[150px] border-[1px]  border-light duration-300 transition hover:border-primary flex items-center justify-center">
            <img className='w-[200px] h-[100px] grayscale transition duration-300 hover:grayscale-0 ' src="https://seeklogo.com/images/M/maroc-telecom-2006-logo-0957768355-seeklogo.com.png" alt="" />
           </div>
           <div className="w-[250px] h-[150px] border-[1px]  border-light duration-300 transition hover:border-primary flex items-center justify-center">
            <img className='w-[200px] h-[100px] grayscale transition duration-300 hover:grayscale-0 ' src="https://seeklogo.com/images/B/banque-populaire-du-maroc-fr-logo-84F9029676-seeklogo.com.png" alt="" />
           </div>
           <div className="w-[250px] h-[150px] border-[1px]  border-light duration-300 transition hover:border-primary flex items-center justify-center">
            <img className='w-[200px] h-[100px] grayscale transition duration-300 hover:grayscale-0 ' src="https://seeklogo.com/images/M/ministere-de-la-jeunesse-et-sports-logo-96DFF5164B-seeklogo.com.png" alt="" />
           </div>
           <div className="w-[250px] h-[150px] border-[1px]  border-light duration-300 transition hover:border-primary flex items-center justify-center">
            <img className='w-[200px] h-[100px] grayscale transition duration-300 hover:grayscale-0 ' src="https://seeklogo.com/images/S/snrt-maroc-logo-416197313D-seeklogo.com.png" alt="" />
           </div>
           <div className="w-[250px] h-[150px] border-[1px]  border-light duration-300 transition hover:border-primary flex items-center justify-center">
            <img className='w-[200px] h-[100px] grayscale transition duration-300 hover:grayscale-0 ' src="https://seeklogo.com/images/C/cashplus-logo-09D6E69FD9-seeklogo.com.png" alt="" />
           </div>
        </div>
    </div>
  )
}

export default OurPartners