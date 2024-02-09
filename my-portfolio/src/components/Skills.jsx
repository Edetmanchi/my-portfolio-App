import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


export default function Skills() {
  return (
   <div className="items-stretch self-center flex w-full max-w-screen-xl flex-col mt-16 pb-5 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
       <div className="justify-center items-center flex flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
           <div className="flex gap-4 justify-center items-center">
               <div className="text-black text-5xl leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
               My
               </div>
               <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
               Skills
               </div>
           </div>
       </div>
       <div className="justify-between items-stretch flex gap-5 mt-10 py-5 max-md:max-w-full max-md:flex-wrap sm:flex-row">
           <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
               < FaGitAlt className="text-4xl"/>
               <div className="self-stretch  text-black text-center text-xl font-bold leading-6 capitalize whitespace-nowrap mt-8">
               Git
           </div>
       </div>
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <FaGithub className="text-4xl"/>
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           github
           </div>
       </div>
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <IoLogoJavascript className="text-4xl"/>
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           Javascript
           </div>
       </div>
       
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <FaReact className="text-4xl"/>
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           React.Js
           </div>
       </div>
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <RiReactjsLine className="text-4xl"/>
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           React-Native.Js
           </div>
       </div>
       </div>
       <div className="flex hover:scale-75 transition delay-100 ease-in-out justify-between items-stretch gap-5 py-5 max-md:max-w-full max-md:flex-wrap">
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <SiTailwindcss className="text-4xl"/>
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           Tailwindcss
           </div>
       </div>
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <FaBootstrap className="text-4xl"/>
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           Bootstrap
           </div>
       </div>
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <FaFigma className="text-4xl"/>
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           Figma
           </div>
       </div>
       <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
           <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b369a1cac6b463685c84812c1f161fdb41ba88d2ab562ccb56b203e20063427?apiKey=6b10e59427914ab996bb6d24a4478661&"
           className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full"
           alt=""
           />
           <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
           Sass/scss
           </div>
       </div>
       
       </div>
 </div>
  )
}





