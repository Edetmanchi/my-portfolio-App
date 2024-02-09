import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Contacts() {
  return (
      <div id="contact" className="items-stretch bg-white self-stretch flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="justify-between mx-5 my-2.5 px-8 py-5 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col items-center justify-center max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <form>
              <div className="items-stretch flex mx-10 gap-7 flex-col max-md:max-w-full max-md:mt-5">
                  <div className=" rounded border-black justify-center border-[1.4px]">
                    <input
                      className="appearance-none w-full h-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
    
                  <div className="rounded border-black justify-center border-[1.4px]">
                    <input
                      className="appearance-none w-full h-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="rounded border-black justify-center border-[1.4px]">
                    <textarea
                      className="appearance-none rounded w-full h-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                    />
                  </div>
                <div className="items-stretch flex justify-between gap-5 mt-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <button
                      className="bg-black hover:bg-white hover:border-gray-800 hover:border hover:text-black text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline-blue"
                      type="submit"
                  
                    >
                      Submit
                  </button>                
                  <div className="items-stretch flex justify-between gap-10">
                    <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black hover:text-white hover:bg-black">
                      <a href="https://github.com/Edetmanchi">
                        <FaGithub className="text-4xl"/>
                      </a>
                    </div>
                    <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                    <a href="https://www.linkedin.com/in/edet-effiong/">
                      <FaLinkedin className="text-4xl"/>
                      </a>
                    </div>
                    <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                      <a href="https://twitter.com/edetmanchi">
                        <FaXTwitter className="text-4xl"/>
                      </a>
                    </div>
                    <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                      <a href="https://www.instagram.com/edet_manchi/">
                      <FaInstagramSquare className="text-4xl"/>
                      </a>
                    </div>
                    <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                      <a href="https://wa.link/bnktx6">
                      <FaWhatsapp className="text-4xl"/>
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
                  </form>
            </div>
            <div className="flex flex-col items-start w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch self-stretch flex grow flex-col py-12 max-md:max-w-full max-md:mt-5">
                <div className="items-stretch flex-col gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter whitespace-nowrap max-md:text-4xl">
                    Connect with Me
                  </div>
                 
                  <div className="text-zinc-900 text-base leading-6 tracking-wide mt-5 max-md:max-w-full">
                    I seek to push the limits of creativity to create
                    high-engaging, user-friendly, and memorable interactive
                    experiences.
                  </div>
                  <div className="text-black text-3xl font-semibold leading-8 tracking-tight mt-10 max-md:max-w-full">
                    edeteffiong321@gmail.com
                  </div>
                  <div className="text-black text-3xl font-semibold leading-8 tracking-tight my-4 max-md:max-w-full">
                    +234 8071284705
                  </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    
      
    </div>
  )
}
