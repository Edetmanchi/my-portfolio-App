// import React from 'react'
import MyResume from '../img/resume.pdf'

export default function Footer() {
  return (

        <div className="bg-black justify-between items-center flex gap-5  px-8 py-7 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className=" flex gap-3 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c88de65f1b5af8e5fc07c456808eee04ad636b8137f6c3c636905ed618bc2390?apiKey=6b10e59427914ab996bb6d24a4478661&"
              className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
              alt=""
            />
            <div className="text-white text-xl font-bold leading-6 tracking-tight capitalize self-center grow whitespace-nowrap my-auto">
              Personal
            </div>
          </div>
          <a href={MyResume} download="resume.pdf">
            <div 
              className="text-black bg-white text-xl py-4 px-7 rounded-xl hover:bg-grey-800 font-bold leading-6 tracking-wide whitespace-nowrap">
              Download Resume
            </div>
          </a>
          <div className="items-stretch self-stretch flex flex-col">
            <div className="text-white text-right text-base font-semibold leading-5 tracking-tight whitespace-nowrap">
              @ 2024
            </div>
            <div className="text-white text-right font-semibold leading-5 tracking-tight whitespace-nowrap mt-3 self-end">
              Made with love by Edet Effiong
            </div>
          </div>
        </div>
  )
}
