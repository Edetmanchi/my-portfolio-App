import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



export default function Intro() {
    const myImage = "https://cdn.hashnode.com/res/hashnode/image/upload/v1704302659496/676ebe7f-81de-43fa-ac8b-4dee416fe7b1.png?auto=compress,format&format=webp"   
  return (
    
    <div className="items-stretch self-stretch flex w-full flex-col justify-center mt-6 px-16 py-12 max-md:max-w-full max-md:px-5"> 
        <div className="md:flex sm:flex-col-reverse items-center justify-between">
          <div>
            <img src={myImage} alt=""/>
          </div>
          <div className="justify-center flex flex-col pl-8 items-center max-md:px-5">
            <div className="flex text-center gap-4 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-black text-5xl leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Hello I’am
              </div>
              <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Edet Effiong.
              </div>
            </div>
            <div className="text-center flex gap-4 font-bold mt-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                A Frontend/mobile
              </div>
              <div className="text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Developer
              </div>
            </div>
            <div className="text-zinc-900  w-[600px] max-w-full mt-8 mb-14 max-md:mb-10 sm:text-center">
              As a dynamic professional, I bring a versatile background encompassing Software Engineering, Data Analysis, IT Support, Project Management, Virtual Assistance, and Technical Writing.
              With a proven ability to manage multiple tasks and projects concurrently, I uphold a keen eye for detail and quality. 
              My effective communication and organizational skills empower seamless collaboration with cross-functional teams to achieve project objectives.
               Eager to leverage technical expertise and problem-solving abilities, I aim to optimize processes and drive success in dynamic work environments.
            </div>
            <div className="items-stretch flex justify-between gap-10 flex-wrap">
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
                 <IoLogoWhatsapp className="text-4xl"/>
                </a>
              </div>
            </div>
          </div>
         
        </div>
    </div>

  )
}
